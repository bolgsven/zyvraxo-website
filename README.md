# Zyvraxo — website repaired (October 2026)

This is a **complete replacement** of the website source, not another snippet to append to the old HTML. It retains the approved original dark-purple gaming look and the original Zyvraxo logo.

## What was fixed

- Restored the original Zyvraxo logo, favicon, and missing gameplay screenshots.
- Added the linked footer credit: **Website designed and developed by Bolgsvenia Global**.
- Added genuine Day 02 Victory Royale image extracted from the recorded match.
- Removed the duplicate chapter viewer and previously injected 560-line patch.
- Put styles in `styles.css` and interactions in `script.js`.
- Reduced oversize headings and excess vertical spacing; made video sections uniform.
- Kept the correct YouTube Day 01 embed, loaded only after a click.
- Created a separate Day 02 card; no fabricated video URL.
- Organised short-form series into Best Battles, Beginner Tips and Beyond the Match.
- Fixed responsive layout, navigation accessibility, image aspect ratios, link labels and reduced-motion support.
- Retained FX control; stopped it from being merely decorative.

## Publishing with GitHub's website (no command line necessary)

1. **Keep a backup.** In GitHub, open the repository and choose **Code → Download ZIP** before making changes.
2. Extract `zyvraxo-website-fixed.zip` on your PC.
3. Open `https://github.com/bolgsven/zyvraxo-website` and switch to the `main` branch.
4. Select **Add file → Upload files**. Drag **the contents of the extracted `zyvraxo-website-fixed` folder** — including `index.html`, `styles.css`, `script.js`, and the `assets` directory — into the upload area. Do **not** drag the parent folder as an extra directory level. GitHub will detect the changed files. If your browser does not accept folders, upload the three root files first, then upload the image files separately inside `assets`.
5. Use commit message: `Repair Zyvraxo website layout, media and responsive design`.
6. Wait until the deployment in **Actions** or **Settings → Pages** has finished, then refresh `https://bolgsven.github.io/zyvraxo-website/` with Ctrl+Shift+R.

### Day 02 direct video link

YouTube's Day 02 direct watch URL was not provided. To set it later, open `script.js` and change this single line:

```js
const DAY_02_YOUTUBE_URL = '';
```

to the confirmed URL, e.g.:

```js
const DAY_02_YOUTUBE_URL = 'https://youtu.be/ACTUAL_ID_HERE';
```

(The example isn't a real URL; use the actual Day 02 YouTube video link.)

### TikTok short links

Series currently link to `@zyvraxo.gg`, not to invented individual TikTok posts. To link to a specific video, replace the corresponding anchor `href` in `index.html` after obtaining the exact video URL.

## Files

- `index.html` — complete clean semantic HTML (no inline patch)
- `styles.css` — all visual styles and mobile breakpoints
- `script.js` — navigation, FX control, Day 01 play button and optional Day 02 link
- `assets/` — original logo, favicon, Fortnite images and new video screenshot stills
- `.nojekyll` — GitHub Pages static hosting configuration

All images are Zyvraxo-branded or taken from gameplay recordings provided by the site owner. No new AI-generated fake Fortnite screenshots were used.
