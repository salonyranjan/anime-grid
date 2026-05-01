<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                        HERO BANNER                            -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:000000,30:ff4d4d,60:ff007f,100:000000&height=240&section=header&text=⚡%20ANIME%20GRID&fontSize=85&fontColor=ffffff&fontAlignY=52&animation=fadeIn&stroke=ff4d4d&strokeWidth=2&desc=Open%20Source%20Anime%20Discovery%20Grid%20|%20React%20%2B%20Tailwind&descSize=20&descAlignY=73&descColor=ff4d4d" />

<br/>

<a href="https://anime-grid-demo.vercel.app">
  <img src="./public/hero-banner.png" alt="Anime Grid Demo" width="100%" style="border-radius: 12px; box-shadow: 0 0 40px #ff4d4d;" />
</a>

<br/><br/>

<!-- Typing SVG -->
<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&weight=900&size=22&pause=1000&color=ff4d4d&center=true&vCenter=true&width=900&height=55&lines=⚡+Explore+Anime+Like+Never+Before;📺+Responsive+Masonry+Grid;🎨+Neon+Dark+Theme+%7C+Glassmorphism;🚀+Built+with+Next.js+15+%26+React+19" alt="Typing SVG" />

<br/><br/>

<!-- Badge Row 1 — Tech -->
<img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />

<br/>

<!-- Badge Row 2 — Status -->
<img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/Build-Passing-06b6d4?style=for-the-badge&logo=githubactions&logoColor=white" />
<img src="https://img.shields.io/badge/Maintained-Yes-7c3aed?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge" />
<img src="https://img.shields.io/badge/WebSocket-Live-FF00D4?style=for-the-badge&logo=socket.io&logoColor=white" />

<br/><br/>

<p><i>"A visually stunning, fast, and fully responsive anime discovery grid – built for binge‑watchers and collectors alike."</i></p>

<a href="https://anime-grid-demo.vercel.app">
  <img src="https://img.shields.io/badge/🚀_Live_Demo-ff4d4d?style=for-the-badge&logoColor=black" />
</a>
&nbsp;
<a href="#10--getting-started">
  <img src="https://img.shields.io/badge/📦_Quick_Setup-7c3aed?style=for-the-badge&logoColor=white" />
</a>
&nbsp;
<a href="#12--contributing">
  <img src="https://img.shields.io/badge/🤝_Contribute-10b981?style=for-the-badge&logoColor=white" />
</a>

</div>

---

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                    TABLE OF CONTENTS                          -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 📋 Table of Contents

1. [✨ Key Features](#1--key-features)  
2. [🏗️ Architecture Overview](#2--architecture-overview)  
3. [🛠️ Tech Stack](#3--tech-stack)  
4. [📸 Screenshots](#4--screenshots)  
5. [⚡ Performance](#5--performance)  
6. [🗺️ Roadmap](#6--roadmap)  
7. [🔐 Security Model](#7--security-model)  
8. [🧪 Testing](#8--testing)  
9. [📦 Getting Started](#9--getting-started)  
10. [🚀 Deployment](#10--deployment)  
11. [❓ FAQ](#11--faq)  
12. [🤝 Contributing](#12--contributing)  
13. [📄 Changelog](#13--changelog)  
14. [📜 License](#14--license)  
15. [👤 Author](#15--author)  
16. [⭐ Show Your Support](#16--show-your-support)

---

## 1️⃣ ✨ Key Features

| 🎯 | Feature | Description |
|:---|:---|:---|
| 🎨 | **Neon Dark Theme** | Glass‑morphism UI with cyan‑purple neon accents – easy on the eyes. |
| 📱 | **Responsive Masonry Grid** | Works from 320 px phones to 4K monitors, no horizontal scroll. |
| 🔍 | **Live Search + Filters** | Instant fuzzy search on title, genre, status, rating. |
| 📡 | **WebSocket Streaming** | Real‑time updates when new anime are added to the source API. |
| 🔄 | **Infinite Scroll + Pagination** | Lazy‑load thousands of entries without performance loss. |
| 📦 | **Server‑Side Data Fetching** | Next.js Server Actions keep API keys secret and cache results. |
| 🛡️ | **Secure API Proxy** | All external calls go through a server‑side proxy, never exposed to the client. |
| 🧩 | **Component‑Driven** | Built with shadcn/ui primitives – easy to extend. |

---

## 2️⃣ 🏗️ Architecture Overview

```mermaid
graph TD
    B[👤 Browser] -->|Requests| S[🌑 Next.js Server]
    S -->|Server Actions| API[🔌 Anime API Proxy]
    API -->|HTTPS| EXT[🔗 External Anime API]

    S -->|SSR Props| UI[🖥️ UI Components]
    UI -->|Hydration| HOOK[🪝 useAnimeWS]
    HOOK -->|WebSocket| WS[📡 Live Stream]

    classDef server fill:#1e1b4b,stroke:#ff4d4d,stroke-width:2px,color:#fff;
    classDef client fill:#064e3b,stroke:#ff4d4d,stroke-width:2px,color:#fff;
    class B,UI client;
    class S,API server;
    class WS,HOOK client;
```

* **Server Layer** – Next.js 15 with Turbopack, all API keys live in `.env.local` and are only accessed by Server Actions.  
* **Client Layer** – React 19 with Tailwind + shadcn/ui. The UI receives **pre‑rendered props** for SEO & fast First Contentful Paint.  
* **Live Layer** – `useAnimeWS` maintains a WebSocket connection to receive newly‑added anime without a page reload.  

---

## 3️⃣ 🛠️ Tech Stack

| Tool | Version | Why |
|:---|:---|:---|
| **Next.js** | 15 | Edge‑ready routing, Server Actions, Turbopack fast builds |
| **React** | 19 | Concurrent rendering, server components |
| **TypeScript** | 5.x | Strict typing, zero runtime type errors |
| **Tailwind CSS** | 3.4 | Utility‑first styling, dark‑mode & theme tokens |
| **shadcn/ui** | – | Accessible UI primitives |
| **Axios** | – | Server‑side HTTP client |
| **Socket.io** | – | WebSocket abstraction with reconnection logic |
| **Jest / Vitest** | – | Unit & snapshot testing |
| **ESLint + Prettier** | – | Code quality & formatting |

---

## 4️⃣ 📸 Screenshots

<div align="center">

| Home (Masonry Grid) | Anime Detail Card |
|:---:|:---:|
| <img src="./screens/home.png" alt="Home Grid" width="100%" /> | <img src=".screens/detail.png" alt="Detail Card" width="100%" /> |

| Mobile View | Dark Theme |
|:---:|:---:|
| <img src="./screens/mobile.png" alt="Mobile" width="100%" /> | <img src=".screens/dark.png" alt="Dark Theme" width="100%" /> |

</div>

---

## 5️⃣ ⚡ Performance

| Metric | Score | Note |
|:---|:---:|:---|
| **FCP** | `< 1 s` | Turbopack + SSR |
| **LCP** | `< 2 s` | Optimized images via `next/image` |
| **CLS** | `0.00` | No layout shifts |
| **Web Vitals** | `90+` | Lighthouse |
| **Build Time** | `≈ 2.8 s` | Turbopack production build |
| **WebSocket Latency** | `< 80 ms` | Auto‑reconnect handled on client |

Run `npm run build && npx serve .next` and check with PageSpeed Insights for live numbers.

---

## 6️⃣ 🗺️ Roadmap

| Status | Feature | Target |
|:---:|:---|:---|
| ✅ | **Masonry Grid + Infinite Scroll** | ✅ |
| ✅ | **Dark / Neon Theme** | ✅ |
| ✅ | **WebSocket Live Updates** | ✅ |
| 🔄 | **User Collections / Favorites** | Q4 2026 |
| 🔄 | **Anime Recommendation Engine (ML)** | Q2 2027 |
| 🔄 | **PWA + Offline Support** | Q3 2027 |
| 📅 | **Multi‑Language (i18n)** | Q4 2027 |

*Feel free to suggest new ideas by opening an issue!*

---

## 7️⃣ 🔐 Security Model

```
┌──────────────────────────────────────────────────────────────┐
│               ANIME‑GRID SECURITY LAYERS                   │
├──────────────────────────────────────────────────────────────┤
│  🔐 Layer 1 – API Key Isolation                               │
│    • Keys stored in .env.local (git‑ignored)                │
│    • Accessed ONLY via Next.js Server Actions                │
│    • Never bundled into client side code                     │
├──────────────────────────────────────────────────────────────┤
│  🛡️ Layer 2 – Server‑Side Proxy                               │
│    • All external fetches go through lib/animeApi.ts         │
│    • Responses are sanitized before sending to the client    │
│    • Rate‑limiting & error handling centrally managed       │
├──────────────────────────────────────────────────────────────┤
│  🔒 Layer 3 – Environment Segregation                         │
│    • .env.local for dev, Vercel Environment Variables for prod│
│    • No secret leakage between environments                  │
└──────────────────────────────────────────────────────────────┘
```

> **Never commit** `.env.local`. Add production keys only via the Vercel dashboard.

---

## 8️⃣ 🧪 Testing

```bash
# Run unit & integration tests
npm run test

# Watch mode (TDD)
npm run test:watch

# Type‑check only
npx tsc --noEmit

# Lint the codebase
npm run lint
```

Coverage goal: **≥ 90 %** for Server Actions, the WebSocket hook, and UI components.

---

## 9️⃣ 📦 Getting Started

### 9.1 Prerequisites

| Tool | Minimum Version |
|:---|:---:|
| **Node.js** | `≥ 18.x` |
| **npm / pnpm** | `≥ 8.x` |
| **Git** | any |
| **Anime API Key** (optional for custom source) | Free tier available |

### 9.2 Clone & Install

```bash
git clone https://github.com/your-username/anime-grid.git
cd anime-grid
npm install          # or `pnpm install`
```

### 9.3 Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Example – you can replace with any public anime JSON API
ANIME_API_BASE_URL=https://api.jikan.moe/v4
ANIME_API_KEY=YOUR_KEY_IF_NEEDED
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 9.4 Run Locally

```bash
npm run dev
```

Open **http://localhost:3000** – the app should hot‑reload as you edit files.

### 9.5 Production Build Check

```bash
npm run build && npm start
```

---

## 🔟 🚀 Deployment

### Vercel (recommended)

1. Push the repository to GitHub.  
2. Import the repo on **vercel.com**.  
3. Add the same environment variables (`ANIME_API_BASE_URL`, `ANIME_API_KEY`).  
4. Click **Deploy** – Vercel automatically runs `npm run build`.

### Docker

```dockerfile
# Dockerfile (included)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t anime-grid .
docker run -p 3000:3000 --env-file .env.local anime-grid
```

### Manual Server

```bash
npm run build
PORT=8080 npm start
```

---

## 11️⃣ ❓ FAQ

<details>
<summary><strong>Why is the API key never visible in the browser?</strong></summary>
All calls to the external anime API go through a Next.js Server Action (`lib/animeApi.ts`). The key lives only on the server; the client receives only the processed JSON payload.
</details>

<details>
<summary><strong>Can I use a different anime data source?</strong></summary>
Yes. Replace `ANIME_API_BASE_URL` in `.env.local` and adjust the request shape in `lib/animeApi.ts` to match the new provider.
</details>

<details>
<summary><strong>Is the site mobile‑friendly?</strong></summary>
The grid uses CSS Grid + Tailwind’s responsive utilities, guaranteeing a smooth layout from 320 px up to 4K displays.
</details>

<details>
<summary><strong>How do I enable the dark theme?</strong></summary>
The dark theme is the default. To add a light‑mode toggle, update `tailwind.config.ts` with a `light` color scheme and conditionally apply `className="dark"` on the `<html>` element.
</details>

---

## 12️⃣ 🤝 Contributing

Contributions are **highly welcome**! Follow these steps:

```bash
# 1️⃣ Fork the repo
# 2️⃣ Create a feature branch
git checkout -b feature/awesome-feature

# 3️⃣ Make your changes & commit
git commit -m "feat: add awesome feature"

# 4️⃣ Push & open a PR
git push origin feature/awesome-feature
```

### Areas that need help

| 🔥 Focus | Description |
|:---|:---|
| 🎨 UI Variants | New neon color palettes, alternative layouts |
| 📡 WebSocket Enhancements | Multiplexed subscriptions, back‑pressure handling |
| 🧪 Testing | More coverage for Server Actions & hooks |
| 📦 PWA Support | Offline caching, push notifications |
| 🤖 Recommendation Engine | Simple ML model for “You might also like” |

---

## 13️⃣ 📄 Changelog

| Version | Date | Highlights |
|:---|:---|:---|
| `v2.1.0` | 2026‑04‑28 | Added **WebSocket live updates**, dark theme refinements, Dockerfile |
| `v2.0.0` | 2026‑03‑15 | Migration to **Next.js 15** + **React 19**, Turbopack build, infinite scroll |
| `v1.5.0` | 2025‑10‑02 | Responsive masonry grid, search + filter UI |
| `v1.0.0` | 2025‑06‑10 | Initial release – static grid with server‑side data fetching |

---

## 14️⃣ 📜 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

```text
MIT License

Copyright (c) 2025 <Your Name>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

---

## 15️⃣ 👤 Author

<table style="border:none;">
  <tr>
    <td align="center" style="border:none;" width="150">
      <img src="https://github.com/your-username.png" width="140" style="border-radius:50%;border:3px solid #ff4d4d;box-shadow:0 0 20px #ff4d4d;" alt="Your Name" />
    </td>
    <td style="border:none; padding-left:20px;">
      <h3>✦ Your Name</h3>
      <p>🧑‍💻 Full‑Stack Engineer &amp; UI/UX enthusiast</p>
      <p><em>"Building beautiful, performant web experiences for the anime community."</em></p>
      <br/>
      <a href="https://www.linkedin.com/in/your-profile/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
      &nbsp;
      <a href="https://github.com/your-username">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
      </a>
      &nbsp;
      <a href="mailto:your@email.com">
        <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
      </a>
      &nbsp;
      <a href="https://your-portfolio.com">
        <img src="https://img.shields.io/badge/Portfolio-ff4d4d?style=for-the-badge&logo=react&logoColor=black" />
      </a>
    </td>
  </tr>
</table>

---

## 16️⃣ ⭐ Show Your Support

<div align="center">

If **anime‑grid** helped you discover your next binge, consider starring the repo or sharing it with friends!

<a href="https://github.com/your-username/anime-grid/stargazers">
  <img src="https://img.shields.io/badge/⭐_Star_This_Repo-ff4d4d?style=for-the-badge&logo=github&logoColor=black" />
</a>
&nbsp;
<a href="https://github.com/your-username/anime-grid/fork">
  <img src="https://img.shields.io/badge/🍴_Fork_&_Build-7c3aed?style=for-the-badge&logo=github&logoColor=white" />
</a>
&nbsp;
<a href="https://anime-grid-demo.vercel.app">
  <img src="https://img.shields.io/badge/🚀_Live_Demo-ff4d4d?style=for-the-badge&logoColor=white" />
</a>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ff4d4d,50:ff007f,100:000000&height=120&section=footer&animation=fadeIn" />

<br/>

*Made with* ⚡ *by* **Your Name** · © 2026 Anime‑Grid · MIT License  

<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&weight=600&size=13&duration=4000&pause=1000&color=ff4d4d&center=true&vCenter=true&width=500&lines=SYSTEM+STATUS%3A+FULLY+OPERATIONAL+⚡;CRAFTED+FOR+ANIME+Lovers+🌸;STAY+CURIOUS+·+WATCH+·+BUILD" />

</div>

