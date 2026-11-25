# Rishi Raj - Professional Portfolio Website

A minimal, professional multi-page portfolio website built for **Rishi Raj**, a first-year Computer Science Engineering (CSE) student from Bengaluru, India. He is a web developer and problem solver focusing on backend data management and open source contributions.

Designed with a strictly monochrome aesthetic (pure white background `#FFFFFF`, black text `#000000`, light gray for thin borders and secondary text) with no UI libraries, no theme toggles, and bilingual support (English and Hindi).

---

## 🚀 How to View the Portfolio

### Method 1: Using VS Code "Go Live" (Live Server) — Recommended
1. Open the project in VS Code.
2. Open [`index.html`](file:///Users/risu1712/RESUME/index.html).
3. Click the **"Go Live"** button in the bottom status bar (or right-click anywhere in `index.html` and select **"Open with Live Server"**).
4. Your browser will automatically open:
   ```
   http://127.0.0.1:5500/index.html
   ```
   The portfolio will render immediately with full navigation, language switching, and project cards!

### Method 2: Using the Development Server
If you want to edit the React source code and use the development server:
```bash
# Install dependencies (first time only)
npm install

# Start Vite dev server
npm run dev
```

### Method 3: Rebuilding After Modifying Source Code
If you modify any files in `src/` (such as adding projects in `src/data/projects.js` or editing copy in `src/data/content.js`), run:
```bash
npm run build
```
This updates the bundled assets in `assets/` so that **"Go Live"** on `index.html` always reflects your latest changes!

---

## 📁 Project Structure

```
RESUME/
├── index.html                  # Direct entry point (works with "Go Live"!)
├── assets/                     # Production-ready compiled assets for Live Server
│   ├── index.css               # Monochrome styling
│   └── index.js                # Bundled React application
├── package.json                # Project configuration and build scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Documentation
└── src/
    ├── main.jsx                # Application root with HashRouter & LanguageProvider
    ├── App.jsx                 # Route definitions and layout shell
    ├── assets/
    │   └── profile.svg         # Black & white profile illustration (grayscale)
    ├── components/
    │   ├── Navbar.jsx          # Reusable sticky navigation bar with language toggle & mobile menu
    │   ├── Footer.jsx          # Reusable minimal footer with name
    │   ├── ProjectCard.jsx     # Reusable card with title, description, tech tags & external link
    │   ├── SkillCard.jsx       # Reusable minimal skill badge (no percentage bars)
    │   └── ScrollToTop.jsx     # Route change scroll-reset helper
    ├── context/
    │   └── LanguageContext.jsx # React Context for seamless English / Hindi switching
    ├── data/
    │   ├── content.js          # Bilingual copy for all pages, headers, and footer
    │   ├── projects.js         # Dedicated projects array (easy to edit links & details)
    │   └── skills.js           # 7 core skills (HTML, CSS, C, C++, Java, Backend Data, Open Source)
    ├── pages/
    │   ├── Home.jsx            # Grayscale photo, name, tagline & CTA buttons
    │   ├── About.jsx           # Background summary, focus, and profile details
    │   ├── Skills.jsx          # Clean grid of skills with zero level bars
    │   ├── Projects.jsx        # 3 project cards with external links
    │   ├── Resume.jsx          # Full CV/Resume document view with 1-click Print / PDF export
    │   └── Contact.jsx         # Direct contact channels (Email, GitHub, LinkedIn, Location)
    └── styles/
        └── index.css           # Plain CSS stylesheet (strictly white, black, and light gray)
```

---

## ✏️ How to Edit Projects and Links

All projects are stored in [`src/data/projects.js`](file:///Users/risu1712/RESUME/src/data/projects.js).

To update a project:
1. Open `src/data/projects.js`.
2. Edit the title, description, tech stack, and link:
   ```javascript
   {
     id: 1,
     title: {
       en: "Your Project Name",
       hi: "आपके प्रोजेक्ट का नाम"
     },
     description: {
       en: "One-line description of what this project does.",
       hi: "प्रोजेक्ट का एक पंक्ति का विवरण।"
     },
     tech: ["Java", "Backend Data Management"],
     link: "https://github.com/risu17/your-repo"
   }
   ```
3. Run `npm run build` so `index.html` updates for "Go Live".

---

## 🎨 Design Rules Followed

- **Strict Monochrome**: Pure White background (`#FFFFFF`), pure Black text (`#000000`), thin light gray borders (`#E5E5E5`), and secondary text (`#666666`).
- **No Dark Mode / No Color Accents**: Zero theme toggles, zero colorful accents.
- **Grayscale Profile Image**: Styled with `filter: grayscale(100%)`.
- **Subtle Interactions**: Buttons invert cleanly between white with black border and black with white text.
- **Robust Navigation**: Built with React Router's `HashRouter`, allowing refreshing any page on static servers (like Live Server) without 404 errors.
- **Bilingual**: One-click toggle between English and Hindi in the navbar.
