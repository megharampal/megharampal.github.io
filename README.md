# Megha Rampal — Portfolio Website

A responsive, single-page portfolio built with HTML, CSS and vanilla JavaScript for GitHub Pages. The layout follows the left/right placement notes in `Portfolio1.docx`.

## Files
- `index.html` — content and project links
- `style.css` — navy/white theme, responsive layout, decorative project placeholders and motion
- `script.js` — mobile menu, scroll progress, reveal-on-scroll and project filters
- `assets/projects/` — place approved project screenshots here

## Layout mapped from Portfolio1.docx
- **About Me:** full professional introduction and visual storytelling profile.
- **Impact:** six metrics/highlights.
- **What I Do:** “How I Work” content on the left and core skills on the right on desktop.
- **Tools & Platforms:** explanatory copy on the left and the nine tools/platforms on the right on desktop.
- **Selected Work:** grouped portfolio examples with the source links retained.
- **Education & Credentials:** credential list on the left and section statement on the right on desktop.
- **Contact:** email, LinkedIn and Gurugram location.

## Preview locally
1. Download and unzip the project.
2. Open `index.html` in a browser. For a more realistic local server, open the folder in VS Code and use the Live Server extension.
3. Edit content in `index.html`; adjust colors and layout in `style.css`.

## Publish to GitHub Pages
1. Sign in at https://github.com/.
2. Create a **public** repository named exactly `YOUR-GITHUB-USERNAME.github.io` (replace the placeholder with your GitHub username).
3. Upload the contents of this folder to the repository root. The root must contain `index.html`, `style.css`, `script.js`, and `README.md` — do not upload only the enclosing folder.
   - Browser option: repository → **Add file** → **Upload files**, drag in the files and `assets` folder, then commit.
   - Git option: from this folder, run:
     ```bash
     git init
     git add .
     git commit -m "Add portfolio website"
     git branch -M main
     git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git
     git push -u origin main
     ```
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then click **Save**.
7. Wait for the Pages deployment to finish. Your URL will be `https://YOUR-GITHUB-USERNAME.github.io/`.
8. Each future commit to `main` will update the published site. Check **Actions** or **Settings → Pages** if deployment fails.

Official guide: https://docs.github.com/en/pages/quickstart

## Tenorite font
The site lists `"Tenorite"` first in its CSS font stack, but does not bundle Tenorite. A visitor will see it only if it is installed on their device. Before hosting a font file, confirm the font licence permits web embedding/redistribution. If you have permission, add the licensed WOFF2 file to `assets/fonts/` and add this to the top of `style.css`:

```css
@font-face {
  font-family: "Tenorite";
  src: url("assets/fonts/Tenorite-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Repeat for the correct bold font file/weight if your licence provides it. Update the file names to match your actual files. Otherwise, the website uses the included Manrope and DM Sans Google Fonts as fallbacks.

## Before sharing publicly
- The project cards currently use custom CSS-made placeholder artwork, not screenshots of original work. Replace placeholders with approved images to make the portfolio stronger.
- Confirm you have permission to showcase employer/client work and use their marks.
- Review every outbound link; some source links use LinkedIn short links and may require login or may have changed.
- Your source document listed a phone number as `XXXXXXXXXX`, so no phone number is displayed.
- Review the education wording and all project descriptions before publishing.
- GitHub Pages sites in public repositories are publicly accessible. Do not upload confidential materials.

## Customising project images
To add a screenshot, put the image in `assets/projects/` and replace the inside of the relevant `.project-visual` anchor with an `<img>` element, for example:

```html
<img src="assets/projects/technology-microsite.jpg"
     alt="Screenshot of the technology microsite"
     loading="lazy">
```

Add this CSS:
```css
.project-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Use relative paths so the site works on GitHub Pages.
