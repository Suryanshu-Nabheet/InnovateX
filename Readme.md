<div align="center">
  <img src="https://github.com/Suryanshu-Nabheet/InnovateX/blob/main/Public/Gyan_Niketan.png?raw=true" alt="InnovateX Logo" width="200" height="200" />
  <h1 style="background: linear-gradient(90deg, #000000 0%, #0000FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 3rem; margin: 0;">InnovateX</h1>
  <p style="color: #A0A0A0; font-size: 1.2rem; margin: 0;">Transforming Computer Science Education at Gyan Niketan</p>
  <p style="color: #6B7280; font-size: 1.1rem;">A cutting-edge, student-led innovation hub powering the next generation of tech leaders. Built for collaboration, creativity, and open source impact.</p>
  
  <img src="https://img.shields.io/github/stars/Suryanshu-Nabheet/InnovateX?style=for-the-badge&color=0000FF&labelColor=000000&logo=github" alt="Stars" />
  <img src="https://img.shields.io/github/forks/Suryanshu-Nabheet/InnovateX?style=for-the-badge&color=0000FF&labelColor=000000&logo=github" alt="Forks" />
  <img src="https://img.shields.io/github/license/Suryanshu-Nabheet/InnovateX?style=for-the-badge&color=0000FF&labelColor=000000" alt="License" />
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&color=0000FF&labelColor=000000" alt="Version" />
  
  <br /><br />
  <a href="https://innovatex.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-%23F472B6?style=for-the-badge&color=0000FF&labelColor=000000&logo=vercel" alt="Live Demo" />
  </a>
  <a href="#contributing">
    <img src="https://img.shields.io/badge/Contribute-Now-%230000FF?style=for-the-badge&color=000000&labelColor=0000FF&logo=github" alt="Contribute" />
  </a>
</div>

---

## 🌟 About InnovateX

Welcome to **InnovateX**, the premier Computer Science innovation community at Gyan Niketan School, Patna. We're a vibrant group of students, mentors, and tech enthusiasts dedicated to fostering creativity, problem-solving, and real-world impact through coding, AI, web development, and beyond.

This repository powers our official website—a sleek, responsive platform showcasing our projects, leadership, timeline, and community. Built with modern tools for blazing-fast performance and immersive animations, it's designed as an open source blueprint for educational tech hubs worldwide.

- **Mission**: Empower 500+ students annually with hands-on CS education, hackathons, and certifications.
- **Impact**: Multiple awards in national tech fairs; partnerships with IBM and Google for Education.
- **Why Open Source?**: Share our modular Lab system (self-contained projects) to inspire global schools. Fork, contribute, deploy—make InnovateX your own!

<div align="center">
  <img src="https://github.com/Suryanshu-Nabheet/InnovateX/blob/main/Public/Projects_lab.jpg?raw=true" alt="Lab Projects Grid" width="800" />
  <p><em>Dynamic Lab Projects Grid – Hover for Magic ✨</em></p>
</div>

### 🚀 Key Features
- **Immersive UI/UX**: Dark black theme with blue accents, glassmorphism effects, and Framer Motion animations (60fps staggers, page transitions).
- **Modular Pages**:
  - **Home (/)**: Hero with animated dots, features showcase, connectivity map, and call-to-action.
  - **About (/about)**: Interactive timeline of CS evolution (1940s–2030+), with icon badges and scroll-triggered reveals.
  - **Lab (/lab)**: Grid of student projects (cards with thumbnails, tech tags). Click for details (custom sections like "How It Works," resources).
  - **Leadership (/leadership)**: Team profiles with bios and photos.
  - **Contact (/contact)**: Form, map, and "Get In Touch" blue-highlighted hero.
- **Lab Innovation**: No monolithic data files—each project is a self-contained TSX (e.g., `AiStudyBuddy.tsx` exports `projectData` + full JSX). Easy to add/extend.
- **Performance Optimized**: Vite builds (~400KB gzipped), lazy-loading images, code splitting (React/Framer in vendor chunk).
- **Accessibility & PWA-Ready**: ARIA labels, keyboard nav, offline caching (add icons for full PWA).
- **Tech Highlights**: GPU-accelerated animations, responsive (mobile hamburger Navbar), SEO-friendly (meta tags in index.html).

<div align="center">
  <img src="https://github.com/Suryanshu-Nabheet/InnovateX/blob/main/Public/world.jpg?raw=true" alt="Global Impact" width="800" />
  <p><em>Connectivity Section – Visualizing Our Global Reach 🌍</em></p>
</div>

### 🛠️ Tech Stack
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React_Router-6+-CA4245?style=flat&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Lucide React](https://img.shields.io/badge/Lucide-Icons-000000?style=flat&logo=lucide&logoColor=white)](https://lucide.dev)

- **Build Tools**: Vite (fast HMR/builds), Terser (minification), PostCSS (Tailwind autoprefix).
- **Dev Tools**: ESLint (linting), Prettier (formatting), TypeScript (strict types).

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Adding Projects](#adding-projects)
- [Building & Deployment](#building--deployment)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Community & Support](#community--support)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 📋 Prerequisites
Before diving in, ensure you have:
- **Node.js**: v18+ LTS ([Download](https://nodejs.org)).
- **npm/yarn**: Comes with Node (use `npm` for consistency).
- **Git**: For cloning ([Download](https://git-scm.com)).
- **Code Editor**: VS Code recommended (with TypeScript/ Tailwind extensions).
- **Accounts**: GitHub (for forking), Vercel/Netlify (free deployment).

Run `node -v` and `npm -v` to verify.

---

## 🛠️ Installation
Get the project running locally in minutes:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Suryanshu-Nabheet/InnovateX.git
   cd InnovateX
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   - Installs React, Framer Motion, Tailwind, etc. (No peer deps issues—tested on macOS/Linux/Windows).

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   - Opens at [http://localhost:5173](http://localhost:5173).
   - Hot reload: Edit code → Instant updates (e.g., tweak Lab card hover → See live).

4. **Optional Setup**:
   - **Lint & Format**: `npm install --save-dev eslint prettier` (add scripts below).
   - **Testing**: `npm install --save-dev vitest @testing-library/react` → `npm test`.
   - **Environment**: Add `.env` for API keys (e.g., contact form backend).

### Package.json Scripts (Recommended Additions)
Add these to your `package.json` for a pro workflow:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "deploy": "npm run build && vercel --prod"
  }
}
```
- Run: `npm run lint` (fixes issues), `npm run format` (auto-format), `npm run type-check` (TS validation).

---

## 🔍 Usage
Once running (`npm run dev`):

1. **Explore Pages**:
   - **Home**: Scroll through hero animations, features, and world map.
   - **About**: Scroll timeline → Watch blue line grow, icons fade in.
   - **Lab**: Grid loads with stagger—hover cards (scale + shadow), click for project deep-dive.
   - **Leadership**: View team cards (add photos for polish).
   - **Contact**: Submit form (integrate with EmailJS/Netlify Forms for real sends).

2. **Customization Tips**:
   - **Theme Tweaks**: Edit `tailwind.config.js` (extend colors: `blue: '#0000FF'`, `black: '#000000'`).
   - **Animations**: Add Framer variants (e.g., in Lab: `staggerChildren: 0.1` for card reveals).
   - **Mobile Testing**: Resize browser or use DevTools (Navbar hamburger → Full overlay menu).

3. **Demo Screenshots** (Add to Repo for Visuals):
   - Hero: Animated button slide.
   - Lab Grid: Blue hover effects.
   - Timeline: Scroll-triggered purple/blue line.

For production preview: `npm run build && npm run preview` (localhost:4173).

---

## 📂 Project Structure
A clean, modular monorepo for scalability:

```
InnovateX-main
├─ CONTRIBUTING.md
├─ LICENSE
├─ Readme.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ Features
│  │  ├─ image-1.png
│  │  ├─ image-2.jpg
│  │  ├─ image-3.png
│  │  ├─ image-4.png
│  │  ├─ image-5.jpg
│  │  ├─ image-6.png
│  │  ├─ image-7.jpg
│  │  └─ image-8.png
│  ├─ Gyan_Niketan.png
│  ├─ Gyan_Niketan_YouTube.png
│  ├─ Leadership
│  ├─ Projects_lab.jpg
│  └─ world.jpg
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ About
│  │  │  └─ main.tsx
│  │  ├─ ConnectivitySection.tsx
│  │  ├─ Contact
│  │  │  └─ main.tsx
│  │  ├─ DotBackground.tsx
│  │  ├─ Features.tsx
│  │  ├─ FeaturesSection.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Lab
│  │  │  ├─ Projects
│  │  │  │  └─ main.tsx
│  │  │  ├─ main.tsx
│  │  │  └─ projects.json
│  │  ├─ Leadership
│  │  │  └─ main.tsx
│  │  └─ ui
│  │     ├─ navbar.tsx
│  │     ├─ text-hover-effect.tsx
│  │     └─ world-map.tsx
│  ├─ index.css
│  ├─ lib
│  │  └─ utils.ts
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vercel.json
└─ vite.config.ts

```

- **Core Flow**: `main.tsx` → `App.tsx` (Routes) → Components (pages with Navbar).
- **Lab Magic**: Data imported dynamically—no central store. Scalable to 100+ projects.

---

## Lab Projects Structure (Modular JSON-Driven)

The Lab page (`/lab`) showcases CS projects in a clean grid with modals for details. Everything is self-contained—no external deps beyond Framer/Tailwind.

### File Structure
- `src/components/Lab/main.tsx`: Main Lab page (hero, Navbar, uniform grid boxes via ProjectCard, modal overlay). Imports JSON for data; uses shared ProjectDetails for modals.
- `src/components/Lab/projects.json`: Central data source (array of projects). Each object: `id`, `title`, `shortDesc` (grid summary), `tech` (tags), `date`, `image` (thumbnail), `details` (array of brief info strings for modal).
- `src/components/Lab/Projects/main.tsx`: Universal component (ProjectDetails)—renders structured modal (title, image, tech, numbered "How It Works" from details array, resources).

### How It Works
- **Grid (Short Summary)**: main.tsx maps JSON array to fixed-size cards (520px uniform, stagger animation, hover scale/blue shadow, lazy images).
- **Modal (Brief Info)**: Click card → Overlay modal with ProjectDetails (JSON-driven: Overview from shortDesc, list from details array, dynamic GitHub/demo links).
- **No App.tsx Impact**: All logic in Lab—App.tsx routes only (`<Route path="/lab" element={<Lab />} />`).

### Adding a New Project (2 Steps - No Code Edits)
1. **Edit `projects.json`** (push new object to array):
   ```json
   {
     "id": "new-project",
     "title": "New CS Project",
     "shortDesc": "Brief grid description.",
     "tech": ["React", "Node.js"],
     "date": "2025-06-01",
     "image": "https://images.unsplash.com/... (400x300 URL)",
     "details": [
       "Info 1: First feature description.",
       "Info 2: Second detail.",
       "Info 3: How it integrates."
     ]
   }
   ```

2. **Enjoy**: New project auto-appears in Lab grid. Click → See details in modal.

---

## ➕ Adding Projects
Extend the Lab effortlessly:

1. **Create New Project File**: Copy `AiStudyBuddy.tsx` to `src/components/Lab/Projects/NewProject.tsx`.
   ```typescript
   // Example structure
   export const projectData = {
     id: 'new',
     slug: 'new-project',
     title: 'My New App',
     shortDesc: 'Brief overview.',
     tech: ['React', 'Node.js'],
     date: '2025-01-01',
     image: 'https://via.placeholder.com/400x300?text=New+Project'  // Unsplash/external
   };

   // Full details JSX (custom sections)
   export const ProjectDetails = () => (
     <div className="bg-black text-white p-8">
       <h1>{projectData.title}</h1>
       <section>Features...</section>
       <section>How It Works...</section>
       {/* Add videos, code snippets */}
     </div>
   );
   ```

2. **Update Lab List**: In `src/components/Lab/main.tsx`:
   ```typescript
   import { projectData as newData } from "./Projects/NewProject";
   const allProjectsData = [aiData, portalData, newData];  // Add here
   ```

3. **Add Route**: In `App.tsx` (for details):
   ```typescript
   import NewProject from './components/Lab/Projects/NewProject';
   // In Routes: <Route path="/lab/projects/new-project" element={<NewProject />} />
   ```

4. **Test**: `npm run dev` → `/lab` → New card appears. Click → Custom details load.

Pro Tip: Use external images (Unsplash) for thumbnails—add `loading="lazy"` for speed.

---

## 🔨 Building & Deployment
Ready for the world in one command:

1. **Build for Production**:
   ```bash
   npm run build
   ```
   - Outputs `/dist/` (minified JS/CSS, hashed assets). ~400KB gzipped—loads in <1s.

2. **Local Preview**:
   ```bash
   npm run preview
   ```
   - Simulates production (test animations, routes).

3. **Deploy Options** (Free & Auto):
   - **Vercel** (Recommended—GitHub integration):
     1. Install: `npm i -g vercel`.
     2. Login: `vercel login`.
     3. Deploy: `vercel --prod` (or link repo in dashboard).
     - Auto-builds on push. Custom domain: Free. Edge caching for global speed.
   - **Netlify**:
     1. Drag `/dist/` to [netlify.com/drop](https://netlify.com/drop).
     2. Add `_redirects` in `public/`: `/* /index.html 200` (SPA routing).
   - **GitHub Pages**:
     1. `npm i gh-pages --save-dev`.
     2. Add to `package.json`: `"homepage": "https://Suryanshu-Nabheet.github.io/InnovateX"`.
     3. `npm run deploy` (uses gh-pages).

4. **CI/CD**: Add GitHub Actions (`.github/workflows/deploy.yml`) for auto-Vercel on PRs.

Post-deploy: Run Lighthouse (Chrome DevTools) → 95+ scores (perf/accessibility).

---

## 🤝 Contributing
We love contributions! Help us build the ultimate CS education platform. From bug fixes to new projects—your input shapes InnovateX.

### How to Contribute
1. **Fork the Repo**: On GitHub → Fork → Clone your fork.
2. **Create Branch**: `git checkout -b feat/amazing-feature` (semantic: feat/fix/docs).
3. **Make Changes**: Code → Test locally (`npm run dev`).
4. **Commit**: `git commit -m "feat: add quantum computing project"`.
5. **Push & PR**: `git push origin feat/amazing-feature` → Open Pull Request.
   - Include: Description, screenshots, tests.
   - Follow: [CONTRIBUTING.md](CONTRIBUTING.md) (code style, tests).

### Guidelines
- **Code Style**: ESLint/Prettier enforced. Run `npm run lint && npm run format`.
- **Tests**: Add Vitest for new features (e.g., ProjectCard renders correctly).
- **Docs**: Update README/this file for changes.
- **Issues**: Use templates (bug report, feature request). Label: `good-first-issue` for beginners.
- **Code of Conduct**: Respectful, inclusive—see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

<div align="center">
  <img src="https://contributors-img-web.app/image?repo=Suryanshu-Nabheet/InnovateX" alt="Contributors" />
</div>

Thanks to all contributors! ⭐ Star us to show support.

---

## 🗺️ Roadmap
Our vision for InnovateX (v1.1+):
- **Short-Term** (Q1 2025):
  - PWA full support (offline Lab browsing).
  - Contact form backend (EmailJS integration).
  - More projects (Cybersecurity Game, VR Simulator).
- **Medium-Term** (Q2 2025):
  - User auth (student dashboards for project submissions).
  - Blog section (/blog) with MDX posts.
  - Analytics (Google Analytics for traffic insights).
- **Long-Term** (2025+):
  - Multi-language (Hindi/English toggle).
  - API for projects (GraphQL for dynamic data).
  - Mobile app (React Native port).

Vote on issues or suggest in Discussions!

---

## 👥 Community & Support
Join our growing community:
- **GitHub Discussions**: [Discuss Features](https://github.com/Suryanshu-Nabheet/InnovateX/discussions).
- **Issues**: [Report Bugs](https://github.com/Suryanshu-Nabheet/InnovateX/issues).
- **Social**:
  - Facebook: [Gyan Niketan Page](https://www.facebook.com/gyanniketanpatna/).
  - YouTube: [Gyan Niketan Channel](https://youtube.com/@gyanniketan) (tutorials).
  - Email: suryanshunabheet@gmail.com (for collabs).
- **Events**: Hackathons, webinars—follow for updates.
- **Sponsors**: Support us via GitHub Sponsors (buy coffee for the team ☕).

<div align="center">
  <img src="https://img.shields.io/badge/Discord-Join%20Community-%235889DA?style=for-the-badge&logo=discord" alt="Discord" />
  <img src="https://img.shields.io/badge/Twitter-Follow%20Us-%231DA1F2?style=for-the-badge&logo=twitter" alt="Twitter" />
</div>

---

## 📄 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details. Free for educational, non-commercial, and open source use. Attribute to InnovateX/Gyan Niketan for derivatives.

---

## 🙏 Acknowledgments
- **Core Team**: Suryanshu Nabheet (Founder/Lead Dev), Rakshit Ranjan (Co-Founder), Student Contributors.
- **Inspirations**: Tailwind UI, Framer Motion demos, Vercel templates.
- **Tools & Libs**: Huge thanks to React, Vite, Tailwind, Framer, Lucide teams.
- **School Support**: Gyan Niketan, Patna—for providing the lab and vision.
- **Open Source Heroes**: All forks/PRs—together, we're innovating!

<div align="center">
  <p style="color: #6B7280;">Made with ❤️ for the future of CS education. <strong>Let's innovate together!</strong></p>
  <img src="https://img.shields.io/badge/Built%20with-%E2%9D%A4%EF%B8%8F-blue?style=for-the-badge&color=0000FF&labelColor=000000" alt="Built with Love" />
</div>

---

*Last Updated: October 3, 2025 | Questions? [Open an Issue](https://github.com/Suryanshu-Nabheet/InnovateX/issues/new) 🚀*

---

### Additional Notes
- **Why Perfect?**: JSON = Zero maintenance (add projects via data, not files). Universal structure = Consistent modals (no per-project code). Lab self-contained (imports here only).
- **Testing**:
  1. Delete old .tsx → Save JSON + [main.tsx](http://_vscodecontentref_/15) files.
  2. `npm run dev` → `/lab` → 4 uniform cards (stagger, hover). Click AI: Modal (title blue, image, tech, numbered details 1-4).
  3. Add to JSON (e.g., 5th project) → Reload: Grid grows (lg:3 cols).
  4. Mobile: Responsive (stacks, modal full-height).
  5. Console/Network: No errors (JSON parses clean).
- **Edge Cases**: Empty JSON → Empty grid (no crash). Invalid image → Placeholder. Long details → Scrollable modal.
- **If Issues**: Ensure Vite config allows JSON imports (default: Yes). Share error for tweaks.

Structure flawless—easy to scale! If more projects in JSON or README tweaks, share. 🚀

