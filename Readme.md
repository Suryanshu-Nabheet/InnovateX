<div align="center">
  <img src="./public/Gyan_Niketan.png" alt="InnovateX Logo" width="200"/>
  <h3>Transforming Computer Science Education at Gyan Niketan</h3>
  <p>A modern, responsive website for InnovateX, the CS innovation group at Gyan Niketan School.</p>
</div>

[![React](https://img.shields.io/badge/React-18%2B-blue?logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-Fast%20Builds-orange?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwind)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com)

# InnovateX - Gyan Niketan CS Community Website

A responsive, dark-themed website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features Home (hero/features), About (timeline), Contact (form/map), Leadership (profiles), and Lab (student projects grid/details).

Live Demo: [innovatex.vercel.app](https://innovatex.vercel.app) <!-- Update with your Vercel URL after deploy -->

## 🚀 Features
- **Responsive Design**: Mobile-first with glassmorphism, dark mode, and smooth animations (Framer Motion).
- **Pages & Routes**:
  - `/`: Home (hero, connectivity, features, text effects, footer).
  - `/about`: Timeline of InnovateX history.
  - `/contact`: Contact details + interactive map.
  - `/leadership`: Team profiles.
  - `/lab`: Projects list (grid cards). `/lab/projects/:slug`: Project details (self-contained per project).
- **Lab Module**: Modular student projects—no central JSON. Each project in `src/components/Lab/Projects/*.tsx` (data for cards + full details with custom sections like "How It Works").
- **Tech Stack**: React 18+, TypeScript, Vite (dev/build), Tailwind CSS (styling), Lucide React (icons), Framer Motion (animations), React Router (SPA navigation).
- **Performance**: Optimized builds (~1-2MB), lazy-loading ready, Vercel CDN.
- **Accessibility**: Semantic HTML, alt texts, keyboard nav (Navbar).

## 📋 Prerequisites
- Node.js v18+ (LTS): [nodejs.org](https://nodejs.org)
- npm/yarn: Included with Node.
- Git: [git-scm.com](https://git-scm.com)
- GitHub/Vercel accounts: For hosting (free).

## 🛠️ Installation & Local Setup
1. **Clone Repo**:
   ```bash
   git clone https://github.com/Suryanshu-Nabheet/InnovateX.git
   cd InnovateX
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   - Opens [http://localhost:5173](http://localhost:5173).
   - Hot reload enabled. Test: Navigate `/lab` → Click project → Details.

4. **Optional Tools**:
   - Linting/Formatting: `npm install --save-dev eslint prettier` → Add scripts below.
   - Testing: `npm install --save-dev vitest @testing-library/react` → Run `npm test`.

## 🔧 Development Workflow
- **Code Location**: `/src/` (App.tsx for routes, `/components/` for pages/UI).
- **Styling**: Tailwind classes (e.g., `bg-black text-white`). Edit `tailwind.config.js` for custom themes.
- **TypeScript**: Strict mode—VS Code auto-detects errors.
- **Scripts** (Add to `package.json` if missing):
  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "format": "prettier --write .",
      "type-check": "tsc --noEmit",
      "test": "vitest"
    }
  }
  ```
- **Common Tasks**:
  - Lint: `npm run lint`
  - Format: `npm run format`
  - Build: `npm run build` (outputs `/dist/`)
  - Preview: `npm run preview`

## 📂 Project Structure
```
InnovateX-main/
├── public/          # Static assets (images, favicon)
├── src/
│   ├── App.tsx      # Main router + routes
│   ├── components/  # Reusable UI/pages
│   │   ├── Lab/     # Projects module
│   │   │   ├── main.tsx     # Lab home (projects list)
│   │   │   ├── ProjectsList/main.tsx  # Reusable card component
│   │   │   └── Projects/     # Self-contained projects
│   │   │       ├── AiStudyBuddy.tsx  # Data export + details component
│   │   │       └── SchoolPortal.tsx
│   │   ├── ui/      # Shared UI (Navbar, etc.)
│   │   └── ...      # Other pages (About, Contact, etc.)
│   ├── index.css    # Global styles
│   └── main.tsx     # Entry point
├── tailwind.config.js  # Tailwind setup
├── vite.config.ts      # Vite config
├── vercel.json         # Vercel routing
└── ...                 # Configs (tsconfig, eslint)
```

### Lab Module Details
- **List View** (`/lab`): Grid of project cards (title, shortDesc, tech badges, date, image) from self-contained data in `Projects/*.tsx`.
- **Details View** (`/lab/projects/:slug`): Full info (desc, team, resources links, custom sections like features/how-it-works). Navbar + back button.
- **Adding Projects**: 
  1. Create new TSX in `Projects/` (copy AiStudyBuddy.tsx, update `projectData` + custom JSX).
  2. Import data in Lab/main.tsx: `import { projectData as newData } from "./Projects/NewProject";` + add to `allProjectsData`.
  3. Add route in App.tsx: `import NewProject from './components/Lab/Projects/NewProject';` + switch case.
- **Customization**: Edit per-project TSX (e.g., add videos). Images in `public/lab/`.

## 📦 Building & Deployment
1. **Build**:
   ```bash
   npm run build
   ```
   - Outputs `/dist/` (minified, hashed assets).

2. **Preview**:
   ```bash
   npm run preview
   ```

3. **Deploy to Vercel** (Auto from GitHub):
   - Connect repo in Vercel dashboard.
   - Framework: Vite. Build: `npm run build`. Output: `dist`.
   - Push to `main` → Auto-deploys. Preview branches for PRs.

See full guide in original Readme (or Vercel docs).

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Welcome: Bug fixes, new projects, docs, tests.

- Fork → Branch (e.g., `feat/new-project`) → Commit (semantic: "feat: add cyber game project") → PR.
- Run `npm run lint && npm run format` before push.
- Issues: Use GitHub templates (bug/feature).

## 📄 License
MIT License - See [LICENSE](LICENSE) for details. Free for educational/non-commercial use.

## 🙏 Acknowledgments
- Built by Suryanshu Nabheet (InnovateX Leader).
- Icons: [Lucide React](https://lucide.dev).
- Hosting: [Vercel](https://vercel.com).
- School: Gyan Niketan, Patna.
- Contributors: [Add your name!](https://github.com/Suryanshu-Nabheet/InnovateX/graphs/contributors)

<div align="center">
  <img src="./public/Projects_lab.jpg" alt="Lab Projects Grid" width="600"/>
</div>

Questions? Open an issue or email suryanshunabheet@gmail.com.
