# 🎓 Personal Academic Homepage

A modern, responsive academic portfolio website — ready to deploy on **GitHub Pages** in minutes.

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 Dark / ☀️ Light Theme | Toggle with button or press `T` |
| 🌐 中/EN Bilingual | Instant language switch |
| 📱 Responsive | Works on mobile, tablet, desktop |
| ⚡ No Build Step | Pure HTML/CSS/JS — zero dependencies |
| 🖱️ Custom Cursor | Animated cursor with hover effects |
| ✨ Particle Canvas | Animated starfield background |
| 📰 Dynamic News Feed | Expandable news section |
| 📚 Publication Filter | Filter papers by venue/year |
| 📅 Interactive Calendar | Navigation between months |
| 📊 Animated Counters | Stats animate on scroll |
| 🔢 Visitor Counter | Persistent via localStorage |
| 📬 Contact Form | Animated form submission |
| 🎯 Reveal Animations | Elements animate in on scroll |

---

## 🚀 Deploy to GitHub Pages

### Method 1: Direct Upload
1. Create a new GitHub repo named `your-username.github.io`
2. Upload all three files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Go to **Settings → Pages → Source → main branch → Save**
4. Your site will be live at `https://your-username.github.io` within minutes!

### Method 2: Custom Domain Repo
1. Create a repo (e.g., `academic-homepage`)
2. Upload files
3. Settings → Pages → Source → main branch
4. Access at `https://your-username.github.io/academic-homepage`

---

## 📝 Customization Guide

### 1. Personal Information
Edit `index.html` — update:
- Name, subtitle in `.profile-block`
- Email, location in `.info-list`
- Education in `.edu-list`
- Social links in `.social-links`
- Stats numbers in `data-count` attributes

### 2. Profile Photo
Replace the DiceBear avatar URL in the `<img>` tag:
```html
<img class="avatar-img" src="YOUR_PHOTO_URL" alt="Your Name" />
```
Or add your photo to the repo and use a relative path: `src="avatar.jpg"`

### 3. Publications
Each paper is a `.pub-card` div with `data-tags` for filtering.
Copy and modify the existing structure.

### 4. Colors
Edit CSS variables at the top of `style.css`:
```css
:root {
  --accent: #4f9eff;     /* Primary blue */
  --accent-2: #f59e0b;   /* Gold/amber */
  --accent-3: #10b981;   /* Green */
}
```

### 5. Add CV Download
Place your PDF as `cv.pdf` in the repo root — the download button is already wired up.

### 6. Translation
Expand the `i18n` object in `script.js` to add more translatable strings.

---

## 📁 File Structure
```
.
├── index.html    # Main structure & content
├── style.css     # All styles & responsive layout
├── script.js     # Interactivity & animations
├── cv.pdf        # (add yourself) Downloadable CV
└── README.md     # This file
```

---

## ⌨️ Keyboard Shortcuts
- `T` — Toggle dark/light theme

---

## 📄 License
MIT — Free to use and modify for personal academic use.
