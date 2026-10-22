# Santosh Kumar — React Native Developer Portfolio

**Live site:** https://santoshpatelnita.github.io

Personal portfolio of **Santosh Kumar**, Senior React Native Engineer (Android & iOS) with 7+ years of experience and 9+ live apps on Google Play and the App Store.

## Tech stack
- React 18 + TypeScript
- Vite
- Plain CSS (no UI framework), `lucide-react` icons
- Phone mockups drawn in CSS (`src/Phones.tsx`)

## Sections
- Hero with contact links (phone, email, LinkedIn, GitHub)
- Selected work: Bruno's Barbers, InstaAstro, InstaAstro App for Astrologer, Edunext Teacher, Edunext Parent and white-label school apps, each with Play Store / App Store links
- Experience timeline
- Android & iOS release management
- Skills, HackerRank certificates (with Verify links) and education
- Contact: copy buttons, Gmail compose, mail app, CV download

## Project structure
```
index.html          Page shell, SEO meta tags, fonts
src/App.tsx         All content (projects, experience, skills, certs) and layout
src/Phones.tsx      CSS phone mockups for each app
src/styles.css      Theme and responsive styles
public/             Favicon and CV PDF
```

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the build locally
```

## Deployment
The live site is served by GitHub Pages from
[santoshpatelnita/santoshpatelnita.github.io](https://github.com/santoshpatelnita/santoshpatelnita.github.io).

To publish an update:
1. Build a flat bundle: `npx vite build --outDir github-pages-build --assetsDir .`
2. In the `santoshpatelnita.github.io` repo, delete the old `index-*.js` and `index-*.css` files.
3. Upload every file from `github-pages-build/` and commit. Pages redeploys in about a minute.

## Contact
- Email: santoshpatel.nita@gmail.com
- Phone: +91 63904 82917
- LinkedIn: https://www.linkedin.com/in/santoshpatelnita/
