# Releasing a new version on Twitch

First and foremost, we need to establish the new version number. Compare `main` to the most recent tagged version in the repository and decide if the release is a minor (new features) or patch (bug fixes) release. The commit being submitted to Twitch should be tagged via git with `git tag v<version>` if you're currently at the commit being used, or `git tag v<version> <commit>` if not. Once the tag is created, push it with `git push origin v<version>`.

## Local test

All new versions start in local test where the base URI is `https://localhost:8080/`, allowing a locally run version to be tested.

The "panel viewer path" should be `panel.html`, the "mobile viewer path" as `mobile.html`, and "video - fullscreen viewer path" as `video_overlay.html`.

Ensure that the allowlist for image domains is set to allow `https://worldbirdsanctuary.github.io` for bird images, the allowlist for media domains is set to allow `https://fonts.googleapis.com/` for fonts, and that allowlist for URL fetching domains is set to include `wss://irc-ws.chat.twitch.tv:443`, `ws://irc-ws.chat.twitch.tv:80`, `irc://irc.chat.twitch.tv:6667`, `irc://irc.chat.twitch.tv:6697` to allow connecting to chat as well as `https://worldbirdsanctuary.github.io` to allow fetching bird data.

## Hosted test

Once local testing is complete, a build can be created with `pnpm build`. The resulting [`build/build.zip`](build/build.zip) (an archive of all files within the `build` directory) can be uploaded to Twitch for hosted testing.

With the assets hosted on Twitch, install the extension version on a test channel and verify that everything is working as expected when running from Twitch.

## Submit for review

With the extension installed on a test channel, submit the extension for review, providing the URL for the channel to use for testing.

Include the walkthrough guide for the extension, with an updated changelog of what changed for users of the extension since the last version submitted and a link to the compare the versions on GitHub:

<details>
<summary>Walkthrough guide and changelog template</summary>

```text
This extension displays information about birds at World Bird Sanctuary (WBS) within the Panel and Overlay view.
It allows viewers to explore more information about the birds seen on the stream, at any time.
It allows the broadcaster/moderators to run chat commands to display information about specific birds to everyone, as they are shown on stream.

This extension is made with React, and is bundled with Webpack.

Changelog:

    - <insert changes here>

Source code diff:

    https://github.com/worldbirdsanctuary/extension/compare/v<previous version here>..v<new version here>

External links:

    All links are related to World Bird Sanctuary, and can be found in the bird cards as well as the overlay welcome card.

    - World Bird Sanctuary website (homepage + bird pages)
    - WBS Amazon Wishlist
    - WBS Instagram
    - WBS TikTok
    - WBS Facebook
    - Extension GitHub (Open-source code for the extension, encouraging users to contribute to and improve the extension)

Allowlist explanations:

    - `https://fonts.googleapis.com/` Google Fonts, for loading fonts in the extension
    - `wss://irc-ws.chat.twitch.tv:443`, `ws://irc-ws.chat.twitch.tv:80`, `irc://irc.chat.twitch.tv:6667`, `irc://irc.chat.twitch.tv:6697` Twitch chat URLs, for the chatbot to connect to
    - `https://worldbirdsanctuary.github.io` WBS extension deployment, for fetching bird data and images

Testing the Extension:

    - For overlay, mobile + panel: Click the buttons to explore the extension
    - For overlay: As a moderator or broadcaster, type `!welcome` in chat to trigger the welcome card, type `!sayyida` to trigger a bird card
```

</details>

## Release

The review process usually takes 1-2 weeks, and once approved, the extension can be released in the extension manager.
