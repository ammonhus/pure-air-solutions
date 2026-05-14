# Pure Air Solutions — Marketing Website

Production-grade marketing website for Pure Air Solutions, a Mesa, Arizona-based authorized dealer of Air Scrubber by ActivePure® technology.

## Tech Stack

- **React 18** + **Vite 5** — fast dev server, optimized builds
- **Tailwind CSS 3** — custom design tokens (navy, green, cream palette)
- **Framer Motion 11** — scroll-triggered animations, page transitions, micro-interactions
- **React Router 6** — file-based client-side routing
- **React Helmet Async** — SEO meta tags + Open Graph on every page
- **React Hook Form** — validated multi-step forms
- **React Intersection Observer** — scroll reveal triggers

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Full landing page with all sections |
| `/how-it-works` | How It Works | 4-phase installation & technology explainer |
| `/science` | The Science | 3 peer-reviewed studies + stat counters |
| `/residential` | Residential | Arizona homeowner solutions |
| `/commercial` | Commercial | 8 commercial verticals + scalability info |
| `/assessment` | Free Assessment | Multi-step lead gen form (4 steps) |
| `/about` | About Us | Local story, values, service area map |
| `/contact` | Contact | Form, map placeholder, hours |

---

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky nav, mobile hamburger, transparent→solid on scroll
│   │   └── Footer.jsx          # Service areas, links, trust badges
│   ├── home/
│   │   ├── Hero.jsx            # Canvas particle field + breathing orb + CTA
│   │   ├── TrustBar.jsx        # Infinite marquee trust bar
│   │   ├── WhyIAQ.jsx          # EPA stats + 6 threat cards
│   │   ├── HowItWorks.jsx      # Animated 4-step process
│   │   ├── ScienceSection.jsx  # Study cards + animated stat counters
│   │   ├── ResidentialCommercial.jsx  # Split section with floating particles
│   │   ├── AssessmentCTA.jsx   # Bold full-width CTA
│   │   ├── Testimonials.jsx    # Auto-advancing carousel
│   │   └── FAQ.jsx             # Accordion with AnimatePresence
│   └── shared/
│       ├── ScrollReveal.jsx    # Scroll-triggered fade/slide variants
│       ├── AnimatedCounter.jsx # Counting number animation on scroll
│       └── SEOHead.jsx         # Helmet wrapper with OG tags
├── hooks/
│   ├── useScrollReveal.js      # IntersectionObserver hook
│   └── useAnimatedCounter.js   # RAF-based counter hook
├── pages/
│   ├── Home.jsx
│   ├── HowItWorksPage.jsx
│   ├── SciencePage.jsx
│   ├── ResidentialPage.jsx
│   ├── CommercialPage.jsx
│   ├── AssessmentPage.jsx      # 4-step form with react-hook-form validation
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── App.jsx                     # Router + AnimatePresence page transitions
├── main.jsx                    # Entry point with HelmetProvider
└── index.css                   # Tailwind directives + component classes
```

---

## Brand Tokens

Defined in `tailwind.config.js`:

| Token | Value | Usage |
|-------|-------|-------|
| `navy-700` | `#1B4F8A` | Primary brand color, headings, CTAs |
| `green-500` | `#4A7C59` | Accent, success states, nature feel |
| `cream-100` | `#F8F5F0` | Section backgrounds, warm neutrals |

---

## Key Design Decisions

- **Hero particle field**: Canvas-based animation with floating particles, connection lines, and burst "neutralization" effects — no heavy libraries.
- **Breathing orb**: Pure CSS + Framer Motion orbiting molecules — represents active air purification.
- **Transparent → solid navbar**: Detects scroll position and home page route to transition from transparent (dark hero) to solid white.
- **Glassmorphism cards**: Used on dark navy sections for depth and modern feel.
- **Scroll reveal system**: `ScrollReveal` component wraps any content with `fadeUp`, `fadeLeft`, `fadeRight`, `scaleUp`, or `fadeIn` variants — all triggered by IntersectionObserver.

---

## Connecting a Backend / Form Handler

The assessment and contact forms log to `console.log` by default. To connect a real backend:

1. **Formspree** (easiest): Replace `onSubmit` handlers with a `fetch` POST to your Formspree endpoint.
2. **Netlify Forms**: Add `netlify` attribute to `<form>` elements and deploy to Netlify.
3. **Custom API**: Replace `console.log` calls with `fetch`/`axios` POST requests.

---

## Deploying

```bash
# Build
npm run build

# The dist/ folder is ready for any static host:
# - Netlify: drag & drop dist/ or connect GitHub
# - Vercel: `vercel --prod`
# - AWS S3 + CloudFront
# - Azure Static Web Apps
```

For React Router to work on static hosts, configure all routes to redirect to `index.html`.

**Netlify** (`public/_redirects`):
```
/* /index.html 200
```

**Vercel** (`vercel.json`):
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

---

## To-Do Before Launch

- [ ] Replace `(480) 555-0100` with real phone number throughout
- [ ] Replace `hello@pureairsolutionsaz.com` with real email
- [ ] Swap team photo placeholder in About page
- [ ] Connect form submissions to real backend (Formspree / Netlify Forms)
- [ ] Add real Google Maps embed in Contact page
- [ ] Update `pureairsolutionsaz.com` with real domain in `SEOHead.jsx`
- [ ] Add Google Analytics or similar
- [ ] Generate real `og-image.jpg` for social sharing (1200×630)
- [ ] Configure `_redirects` or `vercel.json` for SPA routing
