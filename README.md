# ⚡ Premjeet — Cyber Portfolio

A dark, ultra-interactive developer portfolio for a BCA student. Single-page, zero build step — just HTML + CSS + JS with Tailwind (CDN).

## 🚀 Run it

Option 1 — just open `index.html` in a browser.

Option 2 — local server (recommended):

```bash
python -m http.server 8080
# then visit http://localhost:8080
```

## ✨ Features

| Section | What's inside |
|---|---|
| **Hero** | Interactive particle-network canvas, glitch name effect, typing animation, animated avatar placeholder with orbiting dot, scroll indicator |
| **About** | Terminal-style bio panel, quick facts, animated stat counters |
| **Skills** | 24 skills with real dev icons + comfort bars, filterable by **Languages / Frameworks / Tools** with staggered pop-in animation |
| **Projects** | 6 cards with 3D hover tilt, cursor-tracking glow, browser-style previews, tech badges, **View Code** opens a simulated terminal code viewer with syntax highlighting |
| **Contact** | Validated form → simulated transmission (rotating status phases) → success popup with animated checkmark + confetti + toast |
| Extras | Boot-sequence preloader, custom neon cursor (desktop), scroll progress bar, scroll-spy navbar, mobile menu, back-to-top, Konami-code party mode 🎉 |

## 🎨 Customize (all in ~10 minutes)

1. **Your photo** — in `index.html`, search for `your_photo.jpg` and replace the placeholder `<svg>` with `<img src="avatar.jpg" ...>` inside `.avatar-disc`.
2. **Social links** — search for `data-social` in `index.html`; replace each `href="#"` with your GitHub / LinkedIn / X profile URL (they currently show a friendly "add your link" toast).
3. **Email** — search for `hello@premjeet.dev` and replace with your real email.
4. **Skills** — edit the `SKILLS` array at the top of `js/main.js` (name, category, comfort level, devicon slug).
5. **Projects** — edit the `PROJECTS` array in `js/main.js`: title, emoji, description, colors, tech badges, and the fake code snippet shown in the viewer.
6. **Stats & bio** — edit the stat numbers (`data-count`) and the About paragraphs in `index.html`.

> **Note:** Tailwind loads from a CDN, so an internet connection is needed for styling and the dev icons.

## 📁 Structure

```
├── index.html      # all sections & modals
├── css/style.css   # cyber effects, animations, cursor, modals
└── js/main.js      # data + every interaction
```

## 🌐 Deploy

Drop these 3 files into any static host — **GitHub Pages**, Netlify (drag & drop the folder), or Vercel. No build step required.
