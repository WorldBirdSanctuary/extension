import { join } from "path";
import vm from "vm";

import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ZipWebpackPlugin from "zip-webpack-plugin";
import dotenv from "dotenv";

import webpack from "webpack";
import "webpack-dev-server";

const isDev = process.env.NODE_ENV === "development";

const env = {
  ...dotenv.config({ path: "./.env" }).parsed,
  ...(isDev && dotenv.config({ path: "./.env.development" }).parsed),
};

class UnusedAssetsPlugin {
  apply(compiler: webpack.Compiler) {
    if (compiler.options.mode && compiler.options.mode !== "production") return;

    compiler.hooks.compilation.tap(
      "UnusedAssetsPlugin",
      (compilation: webpack.Compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: "UnusedAssetsPlugin",
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER,
            before: ZipWebpackPlugin.name,
          },
          () => {
            if (compilation.compiler.isChild()) return;

            // Get all JS source code
            const jsSource = Object.entries(compilation.assets)
              .filter(
                ([name]) => name.endsWith(".js") && !name.endsWith(".map"),
              )
              .map(([, source]) => source.source().toString())
              .join("\n");

            // Find all asset modules and check if they're referenced in the final JS
            const unusedAssets = Array.from(compilation.modules)
              .filter((module) => /^asset(\/.+)?$/.test(module.type))
              .map((module) => module.buildInfo?.filename)
              .filter(
                (filename): filename is string =>
                  !!filename && !jsSource.includes(filename),
              );
            if (unusedAssets.length === 0) return;

            // Remove unused assets from the compilation
            unusedAssets.forEach((asset) => {
              compilation.deleteAsset(asset);
            });
            console.warn(
              [
                "",
                `UnusedAssetsPlugin: Removed ${unusedAssets.length} unused assets:`,
                ...unusedAssets.slice(0, 10).map((asset) => ` - ${asset}`),
                ...(unusedAssets.length > 10
                  ? [` ...and ${unusedAssets.length - 10} more`]
                  : []),
                "",
              ].join("\n"),
            );
          },
        );
      },
    );
  }
}

class JsonOutputPlugin {
  private entry: string;
  private name: string;
  private output: string;
  private options: Pick<webpack.EntryOptions, "publicPath">;

  constructor(options: {
    entry: string;
    output: string;
    options?: Pick<webpack.EntryOptions, "publicPath">;
  }) {
    this.entry = options.entry;
    this.name = `__json_output_plugin__${options.entry
      .replace(/[^a-zA-Z0-9]/g, "_")
      .replace(/^_+|_+$/g, "")
      .replace(/_+/g, "_")}`;
    this.output = options.output;
    this.options = options.options || {};
  }

  apply(compiler: webpack.Compiler) {
    compiler.hooks.make.tapAsync(
      "JsonOutputPlugin",
      (compilation, callback) => {
        // Create a child compiler for the JSON entry
        const childCompiler = compilation.createChildCompiler(
          "JsonOutputPlugin",
          {
            filename: this.name,
          },
          [
            new webpack.library.EnableLibraryPlugin("commonjs2"),
            new webpack.EntryPlugin(compiler.context, this.entry, {
              ...this.options,
              name: this.name,
              library: {
                type: "commonjs2",
              },
            }),
          ],
        );

        const error = (message: string) => {
          compilation.errors.push(new Error(message));
          callback();
        };

        // Run the child compiler
        childCompiler.runAsChild((err, _entries, childCompilation) => {
          if (err) {
            return error(
              `Error compiling JsonOutputPlugin entry: ${this.entry}\n${err}`,
            );
          }

          if (!childCompilation) {
            return error(
              `No compilation found for JsonOutputPlugin entry: ${this.entry}`,
            );
          }

          // Ensure the temporary asset doesn't propagate
          compilation.deleteAsset(this.name);

          // Get the source code for the temporary asset
          const source = childCompilation.assets[this.name]
            ?.source()
            .toString();
          if (!source) {
            return error(
              `No source found for JsonOutputPlugin entry: ${this.entry}`,
            );
          }

          // Execute the source in a VM to get the exported data
          const sandbox = { module: { exports: {} as Record<string, any> } };
          const context = vm.createContext(sandbox);
          try {
            vm.runInContext(source, context);
          } catch (vmErr) {
            return error(
              `Error executing JsonOutputPlugin entry: ${this.entry}\n${vmErr}`,
            );
          }

          // Get the default export
          const data = sandbox.module.exports.default;
          if (!data) {
            return error(
              `No default export found for JsonOutputPlugin entry: ${this.entry}`,
            );
          }

          // Emit the JSON file
          const json = JSON.stringify(data, null, 2);
          compilation.emitAsset(
            this.output,
            new webpack.sources.RawSource(json),
          );

          callback();
        });
      },
    );
  }
}

const getTypeScriptLoader = () => ({
  loader: "ts-loader",
  options: {
    getCustomTransformers: () => ({
      before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    }),
    transpileOnly: true,
  },
});

const getStyleLoader = () => [
  isDev
    ? "style-loader"
    : {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: "../../",
        },
      },
  {
    loader: "css-loader",
    options: {
      modules: false,
      sourceMap: true,
    },
  },
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [["@tailwindcss/postcss", { optimize: true }]],
      },
      sourceMap: true,
    },
  },
];

const config: webpack.Configuration = {
  // Set the mode based on the environment
  mode: isDev ? "development" : "production",
  devtool: isDev ? "cheap-module-source-map" : "source-map",
  // Create a development server (using https to allow chat connection)
  devServer: {
    open: true,
    hot: true,
    server: {
      type: "https",
    },
    client: {
      overlay: {
        errors: true,
        warnings: true,
        // No overlay for runtime errors, like chat connections being killed
        runtimeErrors: false,
      },
    },
  },
  // Don't watch node_modules in development (too many files)
  // FIXME: https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/859
  watchOptions: {
    ignored: /node_modules/,
  },
  // We need three entry points, and three outputs w/ html
  entry: {
    panel: "./src/pages/panel/index.tsx",
    mobile: "./src/pages/panel/index.tsx",
    overlay: "./src/pages/overlay/index.tsx",
  },
  plugins: [
    new JsonOutputPlugin({
      entry: "./src/data/json.ts",
      output: "static/birds.json",
      options: {
        publicPath: env.REACT_APP_API_BASE_URL?.replace(/\/*$/, "/"),
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/template.html",
      filename: "panel.html",
      chunks: ["panel"],
      templateParameters: {
        process: {
          env,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/template.html",
      filename: "mobile.html",
      chunks: ["mobile"],
      templateParameters: {
        process: {
          env,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/template.html",
      filename: "video_overlay.html",
      chunks: ["overlay"],
      templateParameters: {
        process: {
          env,
        },
      },
    }),
    // Include the public directory
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
    // Load environment variables as a single object
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
    // Enforce type checking on a separate process
    new ForkTsCheckerWebpackPlugin(),
    // Remove any unused assets after code optimization
    new UnusedAssetsPlugin(),
    // Enable react hot reloading in development
    isDev &&
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    // Dedicated CSS files in production
    !isDev &&
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      }),
    // Zip the build for easy distribution
    !isDev &&
      new ZipWebpackPlugin({
        filename: "build.zip",
      }),
  ].filter(Boolean),
  output: {
    path: join(process.cwd(), "build"),
    filename: isDev
      ? "static/js/[name].js"
      : "static/js/[name].[contenthash:8].js",
    chunkFilename: isDev
      ? "static/js/[name].chunk.js"
      : "static/js/[name].[contenthash:8].chunk.js",
    assetModuleFilename: "static/media/[name].[hash][ext]",
    publicPath: isDev ? "auto" : "./",
    clean: !isDev,
  },
  // Ensure compatibility based on browserslist
  target: "browserslist",
  // Setup loaders for all our file types
  module: {
    rules: [
      // Load typescript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: getTypeScriptLoader(),
      },
      // Load tailwind
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: getStyleLoader(),
      },
      // Load images
      {
        test: /\.(png|jpe?g)$/i,
        include: [
          new RegExp(join("src", "assets", "birds").replace(/\\/g, "\\\\")),
        ],
        type: "asset",
        generator: {
          filename: "static/media/birds/[name].[contenthash][ext]",
        },
        use: [
          {
            loader: "webpack-image-resize-loader",
            options: {
              width: 550,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  optimization: {
    minimize: !isDev,
  },
};

export default config;
