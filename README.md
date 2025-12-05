# World Bird Sanctuary Twitch Extension

Twitch extension for [World Bird Sanctuary](https://www.worldbirdsanctuary.org), allowing stream viewers to learn more about the birds at the sanctuary.

This extension is directly based on the work of the Alveus.gg team and their [Alveus Sanctuary Twitch Extension](https://github.com/alveusgg/extension), with a set of changes applied to customize it for World Bird Sanctuary.

## Local Patches Setup

1. Clone the extension patches:

    ```bash
    git clone git@github.com:WorldBirdSanctuary/extension.git extension-patches
    cd extension-patches
    ```

2. Create a separate work directory for the main extension code:

    ```bash
    git worktree add ../extension-main main
    ```

3. Apply the patches to the main extension code:

    ```bash
    cd ../extension-main
    ../extension-patches/run.sh
    ```

## Local Extension Setup

Refer to the [README.md](https://github.com/worldbirdsanctuary/extension/blob/main/README.md) in the `main` branch for instructions on setting up and running the Twitch extension locally.

## Contribute

While contributions are always welcome, we encourage you to assess whether your ideas should be contributed upstream to the [Alveus Sanctuary Twitch Extension](https://github.com/alveusgg/extension), or as a patch here that applies to the World Bird Sanctuary version. In either case, make sure to discuss what you plan to work on either as an issue or in the discussion page in the appropriate repository. You can contribute to the codebase by going through the following steps:

1. Fork this repo
2. Create a branch: `git checkout -b youruserame/your-feature`
3. Add or modify patch scripts
4. Test your changes with `run.sh`
5. Push your branch and open a Pull Request
