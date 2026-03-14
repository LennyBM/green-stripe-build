# Green Stripe Lawn Care — Website

Premium marketing website for Green Stripe Lawn Care, serving North Cornwall & Devon.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS 4, Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify (static hosting)
- **Forms:** Netlify Forms (contact form with honeypot spam protection)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
# Build static export
npm run build
```

Output goes to `out/`. Deploy this directory to Netlify.

### Netlify Setup

1. Connect repo to Netlify (or drag-drop the `out/` folder)
2. **Build command:** `npm run build`
3. **Publish directory:** `out`
4. Netlify Forms will auto-detect from `public/netlify-form.html`
5. Check **Forms** tab in Netlify dashboard for submissions

## Project Structure

```
src/
├── app/              # Pages (App Router)
│   ├── page.tsx      # Homepage
│   ├── about/        # About Chris & Jess
│   ├── pricing/      # Service tiers & calculator
│   ├── results/      # Before/after gallery
│   ├── reviews/      # Google reviews
│   ├── services/     # Individual service pages
│   ├── contact/      # Contact page
│   ├── faq/          # FAQ
│   ├── privacy/      # Privacy policy
│   └── terms/        # Terms & conditions
├── components/       # Reusable components
├── lib/              # Data & utilities (site-data.ts)
└── public/
    ├── images/real/   # All photography & assets
    └── netlify-form.html  # Hidden form for Netlify detection
```

## Key Components

| Component | Purpose |
|-----------|---------|
| `hero-section` | Cinematic video hero with stats |
| `quote-calculator` | Multi-step pricing estimator |
| `contact-form` | 3-step form → Netlify Forms |
| `image-comparison` | Before/after slider |
| `jess-chatbot` | AI chat assistant widget |
| `sticky-cta` | Persistent bottom CTA bar |

## Maintenance

- **Images:** Store in `public/images/real/`. Compress before adding.
- **Content:** Most copy is in component files or `src/lib/site-data.ts`.
- **Pricing:** Update in `src/lib/site-data.ts` and `pricing/page.tsx`.
- **Reviews:** Update in `src/lib/site-data.ts`.

## Contact

Built by Anti-Gravity Digital.
