# InnovateX - Gyan Niketan CS Community Website

A modern, responsive website for InnovateX, the Computer Science innovation group at Gyan Niketan School. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion for smooth animations. Features pages for Home, About, Contact, and Leadership.

 <div align="center">
  <img src="./Public/Gyan_Niketan.png" alt="InnovateX Logo" width="200"/>
  <h3>Transforming Computer Science Education</h3>
</div>-- Replace with real screenshot if available -->

## 🚀 Features
- **Responsive Design**: Mobile-first (works on phones, tablets, desktops) with glassmorphism effects and dark theme.
- **Pages**: Home (hero, features), About (timeline), Contact (details + map), Leadership (profiles).
- **Tech Stack**: React 18+, TypeScript, Vite (fast builds), Tailwind CSS (styling), Lucide React (icons), Framer Motion (animations), React Router (SPA navigation).
- **Deployment-Ready**: Optimized for Vercel (static hosting, auto-deploys from GitHub).

Live Demo: [https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app) <!-- Update after deployment -->

## 📋 Prerequisites
Before setup, ensure you have:
- **Node.js**: v18+ (LTS recommended). Download from [nodejs.org](https://nodejs.org).
- **npm** or **yarn**: Comes with Node.js (use `npm -v` to check).
- **Git**: For version control. Download from [git-scm.com](https://git-scm.com).
- **GitHub Account**: For repo hosting (free).
- **Vercel Account**: Free tier at [vercel.com](https://vercel.com) (sign up with GitHub).

No additional tools needed—Vite handles everything.

## 🛠️ Installation & Local Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Suryanshu-Nabheet/InnovateX.git  # Replace with your repo URL
   cd InnovateX
   ```

2. **Install Dependencies**:
   ```bash
   npm install  # Or yarn install
   ```
   This installs React, Vite, Tailwind, and other packages from `package.json`.

3. **Run Development Server**:
   ```bash
   npm run dev  # Starts at http://localhost:5173 (Vite default)
   ```
   - Open [http://localhost:5173](http://localhost:5173) in your browser.
   - Hot reload: Changes auto-update without refresh.
   - Test routes: Navigate to `/about`, `/contact`, `/leadership`.

4. **Environment Setup (Optional)**:
   - No `.env` needed (no API keys). If adding later (e.g., for email), create `.env` and add to `.gitignore`.

## 🔧 Development Workflow
- **Edit Code**: Files in `/src/` (e.g., `App.tsx`, components in `/src/components/`).
- **Styling**: Tailwind classes (e.g., `bg-black text-white`). No separate CSS files needed.
- **TypeScript**: Strict typing—errors show in VS Code/terminal.
- **Testing**: No unit tests yet. Add with `npm install --save-dev vitest @testing-library/react`.
- **Linting/Formatting**: Run `npm run lint` if ESLint added (optional: `npm install --save-dev eslint`).

Common Commands:
- **Dev Server**: `npm run dev`
- **Build for Production**: `npm run build` (outputs to `/dist/`)
- **Preview Build**: `npm run preview` (simulates production at http://localhost:4173)
- **Type Check**: `npm run type-check`

## 📦 Building for Production
1. Run:
   ```bash
   npm run build
   ```
   - Outputs optimized static files to `/dist/` (minified JS/CSS, hashed assets).
   - Size: ~1-2MB (gzip'd)—fast loading.

2. Preview:
   ```bash
   npm run preview
   ```
   - Serves `/dist/` locally. Test responsiveness and routes.

3. Verify: Open `/dist/index.html` in browser (or use preview server). Ensure no console errors.

## 🚀 Deployment to Vercel (End-to-End Guide)
Vercel is ideal for this static React app—free, auto-deploys on Git pushes, custom domains, and global CDN.

### Step 1: Prepare GitHub Repo
1. **Initialize Git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: InnovateX website"
   ```

2. **Create GitHub Repo**:
   - Go to [github.com/new](https://github.com/new).
   - Name: `InnovateX` (or similar).
   - Public (free). No README/.gitignore (we have them).

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/Suryanshu-Nabheet/InnovateX.git  # Your username/repo
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. **Sign Up/Login**: At [vercel.com](https://vercel.com), use GitHub (imports repos automatically).

2. **Import Project**:
   - Click "New Project" → Import Git Repository.
   - Select your `InnovateX` repo.
   - Framework Preset: "Vite" (auto-detected).
   - Root Directory: `./` (default).
   - Build Command: `npm run build` (default).
   - Output Directory: `dist` (as in vercel.json).
   - Install Command: `npm install` (default).
   - Environment Variables: None needed.

3. **Deploy**:
   - Click "Deploy". Vercel builds and deploys (~1-2 min).
   - Get URL: e.g., `innovatex-abc123.vercel.app`.
   - Custom Domain (Optional): In Vercel dashboard → Settings → Domains (free subdomain or add yourdomain.com).

### Step 3: Auto-Deploys & Updates
- **Git Workflow**: Edit code → `git add .` → `git commit -m "Update leadership bios"` → `git push`.
- Vercel auto-detects pushes to `main` → rebuilds/deploys (live in <1 min).
- Preview Branches: Push to `dev` branch → Vercel creates preview URL (e.g., innovatex-dev-xyz.vercel.app).

### Step 4: Post-Deployment Checks
- **Test Live Site**:
  - Home: Hero, sections load.
  - Routes: /about, /contact, /leadership (no 404s—thanks to vercel.json).
  - Mobile: Resize browser or use dev tools.
  - Favicon/Assets: Gyan_Niketan.png shows in tab; images load.
- **Analytics/Monitoring**: Vercel dashboard shows traffic, errors. Add Google Analytics via `<script>` in `index.html` if needed.
- **HTTPS**: Automatic on Vercel (secure by default).

### Troubleshooting
- **Build Fails**: Check Vercel logs (e.g., missing deps? Run `npm install` locally first).
- **Routing Issues**: Ensure vercel.json rewrites to `/index.html`.
- **Assets Missing**: Paths like `/Public/...` must be absolute (Vite handles).
- **Large Builds**: Optimize images (e.g., compress Gyan_Niketan.png).
- **Custom Domain**: Point DNS (A record to 76.76.21.21 for Vercel).
- **Support**: Vercel docs [vercel.com/docs](https://vercel.com/docs) or email support@vercel.com.

## 🤝 Contributing
- Fork the repo → Make changes → PR to `main`.
- Follow: Semantic commits (e.g., "feat: add contact map"), no breaking changes without tests.
- Issues: Report bugs/feature requests on GitHub.

## 🙏 Acknowledgments
- Built by Suryanshu Nabheet (Leader, InnovateX).
- Icons: Lucide React.
- Hosting: Vercel.
- School: Gyan Niketan, Patna.

Questions? Contact suryanshunab@gmail.com or open an issue.

<div align="center">
  <img src="./Public/Projects_lab.jpg" alt="Lab Projects" width="600"/>
</div>