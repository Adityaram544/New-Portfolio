# 🧑‍💻 Portfolio — React + Tailwind CSS
**Future Interns | Full Stack Web Development**

---

## 📁 File Structure

```
portfolio/
├── index.html                  ← HTML entry point (SEO meta tags here)
├── package.json                ← Project dependencies
├── vite.config.js              ← Vite build config
├── tailwind.config.js          ← Tailwind setup
├── postcss.config.js           ← Required for Tailwind
│
└── src/
    ├── main.jsx                ← App entry (renders into #root)
    ├── App.jsx                 ← Root component, assembles all sections
    ├── index.css               ← Tailwind imports + custom @keyframes
    │
    ├── data/
    │   └── portfolioData.js    ← ⭐ EDIT THIS FILE with your info
    │
    ├── hooks/
    │   └── useScrollReveal.js  ← Custom hook for scroll animations
    │
    └── components/
        ├── Navbar.jsx          ← Fixed top nav with mobile menu
        ├── Hero.jsx            ← Full-screen hero section
        ├── Marquee.jsx         ← Scrolling tech ticker
        ├── About.jsx           ← About me + profile card
        ├── Skills.jsx          ← Tech stack grid
        ├── Projects.jsx        ← Portfolio projects (Tasks 1, 2, 3)
        ├── Resume.jsx          ← Experience timeline
        ├── Contact.jsx         ← Contact form + social links
        └── Footer.jsx          ← Footer
```

---

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173

# 4. Build for production
npm run build
```

---

## ✏️ How to Customize

**Step 1 — Edit your personal info:**
Open `src/data/portfolioData.js` and update:
- Your name, role, bio, email
- GitHub, LinkedIn, Twitter links
- Projects (title, description, stack, GitHub link)
- Experience/education entries

**Step 2 — Add your photo:**
In `About.jsx`, replace the emoji avatar with an `<img>` tag:
```jsx
<img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
```

**Step 3 — Connect the contact form:**
In `Contact.jsx`, replace the `setTimeout` in `handleSubmit` with a real fetch:
```js
await fetch("https://your-backend/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**Step 4 — Deploy to Vercel:**
```bash
npm run build
# Drag the /dist folder to vercel.com
# OR connect your GitHub repo for auto-deploy
```

---

## 🗂️ GitHub Naming (Future Interns Format)

- Task 1 repo: `FUTURE_FS_01`
- Task 2 repo: `FUTURE_FS_02`
- Task 3 repo: `FUTURE_FS_03`
