# Put Zyvraxo on GitHub Pages — Windows / Chrome or Edge

This is a **separate personal gaming website**. Do not upload its files to the Bolgsvenia Global business repository.

## 1. Create the repository

1. Sign into GitHub as `bolgsven`.
2. Open <https://github.com/new>.
3. Repository name: **`zyvraxo-website`**.
4. Choose **Public** (needed for the straightforward free GitHub Pages setup).
5. You can leave the README/.gitignore/license checkboxes unticked; this website package already has a README.
6. Click **Create repository**.

## 2. Upload the website

1. Extract `zyvraxo-website-v3.zip` onto your PC.
2. Open the **inner `zyvraxo-website` folder**, the one that contains `index.html`, `styles.css`, `script.js` and `assets/`.
3. In the newly created GitHub repository, choose **uploading an existing file** or **Add file → Upload files**.
4. Drag all the contents of that inner folder (including the `assets` folder) into the GitHub upload area. Your finished repository should have `index.html` **at its root**, not inside an extra `zyvraxo-website` folder. (If your browser cannot upload the entire folder, use GitHub Desktop to commit and push the extracted directory instead.)
5. Enter a commit message such as `Launch Zyvraxo website V3` and commit to `main`.

## 3. Publish on GitHub Pages

1. In the repository open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main** and folder **/ (root)**, then click **Save**.
4. Once GitHub Pages has deployed, visit:

   <https://bolgsven.github.io/zyvraxo-website/>

This is the **expected address**, not a confirmed live site. It will work only after you create and publish the repo. GitHub may take a short time to complete its deployment.

## 4. Connect the full 18:32 gameplay video

See the 'Connect the full-length gameplay video to YouTube' section in `README.md`. Until you add the real YouTube link, the website will display a deliberately labelled **Video coming soon** feature instead of a fake or broken player.

## 5. Improve the site later

- Paste the exact URL of each TikTok post into its card link; they currently link to your real profile.
- Update YouTube video in `script.js` whenever you publish a full-length match.
- Add your GitHub Pages website address to Zyvraxo social profiles if the platform allows website links.
- Keep large video files off GitHub Pages.

The GitHub repository is **not created or published by this ZIP**. It is an upload-ready package only.
