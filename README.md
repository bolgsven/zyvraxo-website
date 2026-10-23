# ZYVRAXO — Website Version 3

A standalone, responsive one-page gaming website, built from the approved Zyvraxo V2 design. This edition adds a **Full Gameplay** section for the user's 18-minute 32-second Fortnite first-match recording.

## Quick start — no software installation required

1. Extract the ZIP file.
2. Open the nested `zyvraxo-website` folder.
3. Double-click `index.html` to see the website in Chrome or Edge.
4. When ready, follow **GITHUB-SETUP.md** to publish on GitHub Pages (free public hosting).

Everything is regular HTML, CSS and JavaScript. No npm, build tools, fonts, trackers or paid hosting is needed.

## Current state — accurate as of 23 October 2026

- First Victory Royale TikTok highlight: **published**, 19 October 2026.
- The Journey Part 01: **published**, 23 October 2026.
- The Journey Part 02: **published**, 23 October 2026.
- Additional chapter: **upcoming**.
- Full first-match YouTube video: **not yet uploaded or linked**. A branded poster is displayed instead of an invented video or broken player.
- TikTok posts link to the confirmed profile **https://www.tiktok.com/@zyvraxo.gg** until their direct URLs are provided.
- No live website has been deployed from this package yet.

## Connect the full-length gameplay video to YouTube

**Do not upload the 18-minute MP4 into the GitHub repository.** GitHub Pages should host the webpage, not large videos.

1. On YouTube, create or use the Zyvraxo channel. Verify your account to enable uploads longer than 15 minutes (YouTube may vary requirements).
2. Upload your 18:32 gameplay video. Choose **Public** or **Unlisted**. Make sure YouTube allows embedding for the upload. Review all audio rights; permission on TikTok does not necessarily extend to YouTube.
3. Copy the YouTube video URL, e.g. `https://www.youtube.com/watch?v=XXXXXXXXXXX` (example only; not a real video).
4. Open **`script.js`** in Notepad/VS Code and find the line near the bottom:

   `const FULL_MATCH_YOUTUBE_URL = '';`

5. Paste the real YouTube URL between the quotes:

   `const FULL_MATCH_YOUTUBE_URL = 'https://www.youtube.com/watch?v=YOUR_REAL_VIDEO_ID';`

6. Save `script.js` and refresh the website. The 'coming soon' poster becomes an active **Watch the full match** button. The video is embedded only after a visitor clicks, for faster loading and reduced third-party requests.
7. If GitHub Pages is already live, upload/commit the updated `script.js` to the repository as well. Your player will work as soon as the YouTube upload is viewable and permits embedding.

**Testing note:** YouTube requires a proper HTTP referrer for embedded playback. The local `file://` preview may show a YouTube playback error even with a valid video ID; test the player on your published HTTPS GitHub Pages site. The site already sets an appropriate iframe referrer policy.

Do not add a fake YouTube link. If the URL is blank or invalid, the site will continue showing the truthful coming-soon state.

## Website structure

- `index.html` — home, story, published TikToks, interactive chapters, new full-gameplay feature, loadout, about, follow and footer.
- `styles.css` — futuristic Zyvraxo purple/cyan responsive visual design.
- `script.js` — interactive chapter tabs, navigation, FX setting, YouTube player on click.
- `assets/` — channel logo, favicon and gameplay screenshot assets supplied for the project.
- `.nojekyll` — works around some GitHub Pages/Jekyll filename processing.
- `GITHUB-SETUP.md` — simple Windows-friendly publication instructions.

## Additional notes

- The full video file **is not** included; it has not been supplied to the website package. Your local OBS original remains on your computer.
- Video duration is rounded to 18:32 from the original 18:32.12 recording.
- No personal address, real name, or unrelated business information appears on the site.
- After publishing, update direct TikTok post URLs in `index.html` and optionally improve `chapters` in `script.js` to link each published entry individually.
- The site is independent of Bolgsvenia Global and is not affiliated with Epic Games, TikTok or YouTube.
