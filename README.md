# Megha Rampal — Portfolio Website

A responsive, single-page portfolio built with HTML, CSS and vanilla JavaScript for GitHub Pages. The layout follows the left/right placement notes and latest content supplied for `Portfolio1.docx`.

## Add your professional photo
1. Prepare a professional head-and-shoulders portrait with a plain or uncluttered background.
2. Recommended image dimensions: **600 × 800 pixels (3:4 portrait ratio)**. The site crops the image to a portrait frame, so keep your face centred and leave a little space above your head.
3. Recommended format: **JPG/JPEG** (`.jpg`). WebP also works if you update the filename in `index.html`. PNG is supported but usually creates a larger file for a photograph.
4. Name the file exactly **`profile-photo.jpg`**.
5. Paste/copy it into this location in the project:

   `assets/profile-photo.jpg`

   Create the `assets` folder in the same folder as `index.html` if it does not exist. The project already points to this path in the first-page photo frame. Do not paste the image into the HTML or CSS files.
6. Commit/upload `assets/profile-photo.jpg` to the GitHub repository along with the other project files. Refresh the published page. If the image is not present yet, a photo-placement reminder appears in its frame.

The photo frame is on the right side of the first page beside the introduction. The image is displayed with `object-fit: cover`, so the browser fills the portrait frame without stretching the photo.

## Files
- `index.html` — content, image location and project links
- `style.css` — navy/white theme, responsive layout, portrait frame, placeholder artwork and motion
- `script.js` — mobile menu, scroll progress, reveal-on-scroll and project filters
- `assets/profile-photo.jpg` — **you add your portrait here**

## Layout
- **Section 1 — Introduction / About Me:** merged with the landing page so the introduction appears once, on the first page.
- **Section 2 — Impact:** six metrics/highlights.
- **Section 3 — What I Do:** “How I Work” on the left and core skills on the right on desktop.
- **Tools & Platforms:** explanatory content on the left and tool names on the right on desktop.
- **Section 4 — Selected Work:** grouped examples with the supplied links retained.
- **Section 5 — Education & Credentials:** credentials on the left and section statement on the right on desktop.
- **Section 6 — Contact:** email, phone, LinkedIn and Gurugram.

## Typography
All CSS `font-size` declarations have a minimum of **16px** for legibility. Headings and display text are larger. The site uses Manrope and DM Sans with local Tenorite as an optional first-choice font if installed; Tenorite is not bundled. Before hosting a font file, confirm that its licence permits web embedding and redistribution. If permitted, place the licensed WOFF2 file in `assets/fonts/` and add an appropriate `@font-face` rule to `style.css`.

## Preview locally
1. Download and unzip the project.
2. Open `index.html` in a browser. For a more realistic local server, open the folder in VS Code and use the Live Server extension.
3. Add your portrait as described above.

## Publish to GitHub Pages
1. Sign in at https://github.com/.
2. Create a repository. For a user-site URL, name it exactly `YOUR-GITHUB-USERNAME.github.io` (replace the placeholder with your GitHub username).
3. Upload the **contents** of this folder to the repository root. The root should contain `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder — do not upload only the enclosing folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then click **Save**.
7. Wait for deployment to finish. Your URL will be `https://YOUR-GITHUB-USERNAME.github.io/`.
8. Each future commit to `main` updates the published site. Check **Actions** or **Settings → Pages** if deployment fails.

Official guide: https://docs.github.com/en/pages/quickstart

## Before sharing publicly
- Project visuals are designed placeholders, not original client artwork. Replace them with approved screenshots or images of your work.
- Confirm you have permission to showcase employer/client work and use their marks.
- Review outbound links; LinkedIn short links may require login or may have changed.
- The contact phone number and other contact details are displayed as supplied in the latest instructions.
- GitHub Pages sites in public repositories are publicly accessible. Do not upload confidential materials.
