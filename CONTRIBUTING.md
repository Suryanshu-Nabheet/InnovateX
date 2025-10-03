# Contributing to InnovateX

Thanks for your interest! We welcome contributions to make this CS community site better.

## How to Contribute
1. **Fork & Clone**: Fork on GitHub, clone your fork.
2. **Branch**: Create feature branch (`git checkout -b feat/your-feature`).
3. **Develop**: Make changes, test locally (`npm run dev`).
4. **Commit**: Semantic messages (e.g., "fix: resolve Lab import error", "feat: add new project").
5. **Lint/Format**: Run `npm run lint && npm run format`.
6. **Push & PR**: `git push origin feat/your-feature` → Open PR to `main`.
   - Describe changes, reference issues.
   - Include screenshots if UI-related.

## Guidelines
- **Code Style**: Follow existing (Tailwind classes, TS types). Use Prettier/ESLint.
- **Lab Additions**: New projects? Add TSX in `src/components/Lab/Projects/`, update Lab/main.tsx & App.tsx.
- **Tests**: Add Vitest if possible (e.g., for components).
- **Docs**: Update Readme.md for features.
- **No Breaking Changes**: Without discussion (open issue first).

## Issues
- Bugs: Label "bug", include steps/repro.
- Features: Label "enhancement", discuss first.
- Questions: Use Discussions.

We review PRs weekly. Code of Conduct: Be respectful.