# Rhine Media

Performance media buying agency website, built with Vite + React 18 + TypeScript + React Router.

**Live:** https://rhine-media-ua-demo.surge.sh

## Pages

| Route             | Description                                                              |
| ----------------- | ----------------------------------------------------------------------- |
| `/`               | Hero, stats, verticals, traffic sources, partners, why-us, CTA          |
| `/contact`        | Contact form, contact info, FAQ                                          |
| `/terms`          | Terms of Service                                                         |
| `/privacy-policy` | Privacy Policy                                                           |

In-page anchors (`/#verticals`, `/#traffic`, `/#partners`, `/#why-us`) scroll to the
matching section.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run deploy   # build + SPA fallback + publish to surge.sh
```

`predeploy` builds and copies `dist/index.html` → `dist/200.html`; Surge serves
`200.html` for any unmatched path, so client-side routes (`/contact`, `/terms`, …)
resolve correctly on refresh and direct links.

## Structure

Each component lives in its own folder with its `.tsx`, its co-located CSS Module
and an `index.ts` barrel, so imports stay short (`import Navbar from '../Navbar'`).

```
src/
  main.tsx                entry + BrowserRouter
  App.tsx                 routes
  data/site.ts            page content
  hooks/                  useScrollReveal, useNavbarScroll, usePageTitle
  styles/global.css       design tokens, reset, shared utilities
  components/
    Layout/  Navbar/  Footer/  Logo/  ScrollManager/  LegalArticle/
    sections/
      Hero/  StatsBand/  Verticals/  TrafficSources/
      Partners/  WhyUs/  CallToAction/
    contact/
      ContactInfo/  ContactForm/  Faq/
  pages/
    Home/  Contact/  Terms/  Privacy/
```

Each component folder, e.g. `Navbar/`:

```
Navbar/
  Navbar.tsx
  Navbar.module.css
  index.ts            export { default } from './Navbar'
```

### Styling

- `styles/global.css` holds design tokens (CSS variables), the reset, base
  typography and shared design-system utilities (`.container`, `.btn`, `.eyebrow`,
  `.text-gold`, scroll-reveal animations).
- Every component owns its styles via a co-located **CSS Module**
  (`Component.module.css`), so class names are locally scoped and there are no
  global collisions.
