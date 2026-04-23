# World Bird Sanctuary Twitch Extension

Twitch extension for [World Bird Sanctuary](https://www.worldbirdsanctuary.org), allowing stream viewers to learn more about the birds at the sanctuary.

This extension is directly based on the work of the Alveus.gg team and their [Alveus Sanctuary Twitch Extension](https://github.com/alveusgg/extension), with a set of changes applied to customize it for World Bird Sanctuary.

Refer to the [README.md](https://github.com/worldbirdsanctuary/extension/blob/patches/README.md) in the `patches` branch to understand how the changes are applied to this branch.

## Local Set Up

1. Install Node.js (see `engines` in `package.json` for the required versions), or use `fnm`/`nvm` to install the correct version of Node.js, and use `corepack enable` to use PNPM.
2. Authenticate with the GitHub Package Registry: `npm login --auth-type=legacy --registry=https://npm.pkg.github.com`
   1. Use your GitHub username (lowercase) as the username when prompted
   2. Create a [GitHub personal access token (classic)](https://github.com/settings/tokens/new) with the `read:packages` scope and use it as the password when prompted
3. Install dependencies for the project with `pnpm install --frozen-lockfile`
4. Head up to https://dev.twitch.tv/console/extensions/create and create a new extension.
   You will need to create a new version: Select `Panel`, `Mobile` and `Video - Fullscreen` for the extension type. Leave all other settings as they are.
5. Copy the `.env.sample` file to `.env` (which sets `REACT_APP_CHAT_COMMANDS_PRIVILEGED_USERS` and `REACT_APP_DEFAULT_CHANNEL_NAMES`)
6. Copy the `.env.development.sample` file to `.env.development`. You may add a channel and user to test chat commands here (e.g. `REACT_APP_CHAT_COMMANDS_TEST_CHANNEL=testuser` and `REACT_APP_CHAT_COMMANDS_PRIVILEGED_USERS=testuser`)
7. Start the development server with `pnpm dev`

If you're using VSCode, add `"typescript.tsdk": "node_modules/typescript/lib"` to `.vscode/settings.json` to ensure you're using the correct TypeScript version.

There are two ways to run the extension. You can either add it to a channel on Twitch, or access the web pages for the panel/overlay directly.

### Running via Twitch

If you're using Chrome, enable `allow invalid certificates for resources loaded from localhost`: [`chrome://flags/#allow-insecure-localhost`](chrome://flags/#allow-insecure-localhost).
If using Firefox, once you have started the development server, you will want to navigate to [`https://localhost:8080`](https://localhost:8080), click advanced and select accept the risk.

To test the overlay directly on Twitch, you will need to be live on Twitch with the extension installed.
The panel for the extension can be tested on Twitch while offline, as this is displayed on the channel page.

Under the `Status` tab of the extension version, scroll to the bottom and click on `View on Twitch and Install`. Install the extension on your channel and activate it.

If you are wanting to test the overlay, activate it for your overlay slot. Once activated, started broadcasting and the extension should be visible.
If you are testing the panel, make sure to activate the extension for a panel slot. You should then be able to see in on the channel about page.

If you want to use an alternate account, add the account to `Testing Account Allowlist` under the `Access` tab of the extension version and install the extension on that account.

Need a quick script to broadcast a test livestream? `curl` + `ffmpeg` have you covered:

```bash
#!/bin/bash

KEY="your_stream_key_here"

URL=$(curl -sS "https://ingest.twitch.tv/ingests" \
  | jq .ingests\[0].url_template -r \
  | sed "s/{stream_key}/$KEY/")

# Thanks to https://github.com/BarryCarlyon/twitch_misc/blob/main/extensions/test_stream/generic.sh
ffmpeg -re \
  -f lavfi -i testsrc2=size=960x540 \
  -f lavfi -i aevalsrc="sin(0*2*PI*t)" \
  -vcodec libx264 \
  -r 30 -g 30 \
  -preset fast -vb 1000k -pix_fmt rgb24 \
  -pix_fmt yuv420p \
  -f flv \
  $URL
```

### Running without Twitch

If you just want to test out the overlay, or the panel, locally without Twitch, you can do so by directly opening the pages in a browser. After all, Twitch overlays and panels are just embedded web apps.

The panel is available at [localhost:8080/panel.html](https://localhost:8080/panel.html) and the overlay is available at [localhost:8080/video_overlay.html](https://localhost:8080/video_overlay.html) while the development server is running.

## Chatbot Commands

`![bird]`: displays the card of the corresponding bird

- Note: `[bird]` is the first name of any bird (Ex: !sayyida = Sayyida)

`!welcome`: displays the WBS introduction section

`!refresh extension`: refreshes the extension with the latest bird data

- Note: Only `REACT_APP_CHAT_COMMANDS_PRIVILEGED_USERS` have permission to run this command

## Contribute

Refer to the [README.md](https://github.com/worldbirdsanctuary/extension/blob/patches/README.md) in the `patches` branch to understand how to contribute changes to this extension.

## User Data

When using the extension, the extension will create an anonymous connection to the current Twitch channel's chat. This is to allow the extension to listen for commands run by moderators to trigger popups in the overlay. The extension does not store any messages from chat.

When using the extension, it will create a local storage entry in your browser to store the last section of the overlay that you accessed, and any preferences you set (such as disabling the mod-triggered popups). This is to allow the extension to remember your preferences between sessions. The data stored in local storage is not shared with anyone and does not include any personal information.

As a moderator, you can grant the extension access to your identity. This gives the extension information about your Twitch account, including your role in the current Twitch channel chat. This is used to determine if you are a moderator or broadcaster, and if so, shows you the chat commands in the extension to trigger the popups. The extension does not store any information about your Twitch account.
