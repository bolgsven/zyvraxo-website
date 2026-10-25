# Zyvraxo - 4-language website update

Full, GitHub Pages-ready static website with English, Spanish (Spain), Simplified Chinese, and Urdu. Retains the original Zyvraxo design, logo, real gameplay images and attribution to Bolgsvenia Global.

## Publish with GitHub website

1. Visit https://github.com/bolgsven/zyvraxo-website and make a backup (**Code -> Download ZIP**).
2. Extract this download. **Upload the contents of the extracted folder**, not an additional enclosing folder, to the repository root on branch `main` using **Add file -> Upload files**. Include the `es`, `zh`, `ur`, and `assets` directories. Uploading nested folders should preserve the paths; verify before committing. If GitHub does not accept folders, create language directories individually and upload their `index.html` files.
3. Commit message: `Add English, Spanish, Chinese and Urdu website translations`.
4. Confirm the GitHub Pages deployment succeeded, then test https://zyvraxo.com/, https://zyvraxo.com/es/, https://zyvraxo.com/zh/, and https://zyvraxo.com/ur/.
5. Keep the GoDaddy DNS entries and GitHub custom domain unchanged. `CNAME` must keep `zyvraxo.com`.

Do not replace the site with a single Google-Translate-style script: these are separate, indexable pages. URL, og:locale, canonical, hreflang, and sitemap metadata are included. Urdu content flows right-to-left, with adapted typography. Video/audio content remains unchanged; the on-site copy is translated.

**Important:** The exact Day 02 YouTube watch URL is still unknown; once available, set `DAY_02_YOUTUBE_URL` in root `script.js` and it will update the link in all four languages. Chinese and Urdu translations are original working drafts; a fluent speaker should proofread important final copy before promotion.
