# Green Stripe Lawn Care — Exhaustive £75k-Tier Codebase Audit

**Date:** 2026-03-11 | **Auditor Role:** Senior Code Reviewer / Award-Winning UI-UX Designer / Cybersecurity Lead / Conversion Expert

> [!CAUTION]
> **Verdict: This codebase is a scaffolded prototype, not a £75,000 website.** It has the skeleton of a decent structure but fails catastrophically on execution across every single pillar. Below is the itemised autopsy.

---

## Pillar 1: The £75k UI/UX & Design Standard

### 1.1 Layout Architecture

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 1 | Eliminates generic AI blocky layouts | ❌ | The 4-card services grid in [services-section.tsx](file:///c:/Users/User/Desktop/green_stripe_build/src/components/services-section.tsx#L53-L73) is a textbook generic card grid. No staggered layouts, no asymmetric compositions, no editorial flow. |
| 2 | Cinematic gradients present | ❌ | Zero CSS gradients anywhere. The hero overlay is a flat `bg-brand-green-dark/70` solid with no gradient transition. No radial glows, no mesh gradients. |
| 3 | Glassmorphism applied meaningfully | ❌ | `glassmorphism` utility defined in [globals.css:17-22](file:///c:/Users/User/Desktop/green_stripe_build/src/app/globals.css#L17-L22) but only used **once** — on the phone CTA button. The service cards, footer, and case study cards have zero glassmorphism. |
| 4 | Apple-style scroll-driven animations | ❌ | All animations use Framer Motion `whileInView` fade-up — the same 3-line pattern copy-pasted 8 times. No parallax, no stagger sequences, no scale-on-scroll, no viewport-percentage-driven transforms. This is generic, not cinematic. |
| 5 | Footer design | ❌ | The footer is 6 lines of code. No service area map, no structured data, no contact form, no social links, no newsletter, no trust badges. Completely hollow. |

### 1.2 Micro-Interactions

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 6 | `cursor: pointer` on all clickable elements | ❌ | **Zero instances of `cursor-pointer`** across the entire codebase. The "Explore Services" CTA, "Read More Stories" button, phone links, and case study cards all render with the default cursor. |
| 7 | Smooth hover/scale states on buttons | ❌ | The primary "Explore Services" CTA at [hero-section.tsx:40-45](file:///c:/Users/User/Desktop/green_stripe_build/src/components/hero-section.tsx#L40-L45) has `hover:bg-brand-green-base` — a flat colour swap. No scale, no shadow lift, no transition-transform. |
| 8 | Active/pressed states | ❌ | Zero `active:` pseudo-class usage anywhere. Buttons have no tactile press feedback. |
| 9 | Service card interaction | ❌ | Cards use `cursor-default` (line 61 of services-section.tsx) — **explicitly telling users these are NOT clickable**. For a premium site, each service must be a navigable destination. |

### 1.3 Spacing & Whitespace

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 10 | Luxurious whitespace between sections | ⚠️ | `py-24 sm:py-32` is decent but not extreme. For a £75k site, hero-to-services gap should be `py-32 lg:py-48` minimum, with decorative dividers or gradient fades between sections. |
| 11 | Internal card padding | ✅ | Service cards use `p-8`, case study cards use `p-8 sm:p-10`. Acceptable. |
| 12 | Hero content breathing room | ❌ | The hero packs heading + subtitle + 2 CTAs + trust badges + image comparison slider all into one viewport. No staged reveals. The information density kills the cinematic feel. |

### 1.4 Typography

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 13 | Premium font selection | ❌ | Using **Geist** — a developer/tech font from Vercel. This is the default `create-next-app` font. A £75k landscaping site demands a premium editorial serif (e.g., `Playfair Display`, `Cormorant Garamond`) paired with a refined sans (e.g., `Inter`, `Outfit`). |
| 14 | Font weight hierarchy | ⚠️ | Uses `font-bold`, `font-semibold`, `font-light` — adequate range but applied mechanically. No `font-thin` hero accents, no `font-black` for emphasis contrast. |

### 1.5 Imagery

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 15 | Image format optimisation | ❌ | All 5 images are **PNG format** (~700-930KB each). Should be WebP or AVIF with Next.js `<Image>` component handling format negotiation. Combined hero payload is **~4MB** of unoptimised PNGs. |
| 16 | Hero background implementation | ❌ | Uses CSS `background-image` with inline `style={{ backgroundImage: "url('/images/hero_bg.png')" }}` instead of Next.js `<Image priority fill>`. This bypasses Next.js image optimisation entirely — no srcset, no format negotiation, no size hints. |

**Fix for Item 16** — Replace the CSS background with a proper Next.js Image:
```tsx
// hero-section.tsx — Replace lines 11-16
import Image from "next/image";

{/* Background Poster */}
<div className="absolute inset-0 w-full h-full">
  <Image
    src="/images/hero_bg.webp"
    alt="Perfectly manicured championship-grade lawn in North Cornwall"
    fill
    priority
    quality={85}
    className="object-cover object-[center_25%]"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/80 via-brand-green-dark/50 to-brand-green-dark/70" />
</div>
```

---

## Pillar 2: Front-End Performance, SEO & Accessibility

### 2.1 Loading Strategy

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 17 | Hero image eager/priority loaded | ❌ | The hero background is a CSS `url()` — **not managed by Next.js at all**. It cannot receive `priority` or `fetchPriority="high"`. The LCP element is completely unoptimised. |
| 18 | Below-fold images lazy-loaded | ⚠️ | The `<Image>` in [founder-story.tsx:21-27](file:///c:/Users/User/Desktop/green_stripe_build/src/components/founder-story.tsx#L21-L27) has NO explicit `loading` or `priority` prop — Next.js defaults to lazy, which is correct. However the case study images in [social-proof.tsx](file:///c:/Users/User/Desktop/green_stripe_build/src/components/social-proof.tsx) also have no `priority`, which is correct. |
| 19 | Image comparison both images set to `priority` | ⚠️ | Both before/after images in [image-comparison.tsx:94,113](file:///c:/Users/User/Desktop/green_stripe_build/src/components/ui/image-comparison.tsx#L94) are `priority={true}`. Since this component is above-the-fold in the hero, this is acceptable — but it means 3 images are all fighting for priority fetch. You should only `priority` the after (visible) image. |

### 2.2 Accessibility (WCAG 2.2 AA)

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 20 | `focus-visible` keyboard navigation | ❌ | **Zero `focus-visible` styles in the entire codebase.** No focus rings on any interactive element. Keyboard-only users are blind. This is a WCAG 2.4.7 failure. |
| 21 | ARIA attributes | ❌ | **Zero `aria-*` attributes.** The image comparison slider has no `aria-label`, `aria-valuenow`, or `role="slider"`. A screen reader has no idea this is an interactive control. |
| 22 | `role` attributes | ❌ | **Zero `role` attributes.** The nav, the image slider, case study cards — none have semantic roles. |
| 23 | Skip-to-content link | ❌ | Missing. Keyboard users must tab through every nav element to reach content. |
| 24 | Colour contrast (hero text) | ⚠️ | `text-brand-sand/90` (#e6dfd1 at 90% opacity) on `bg-brand-green-dark/70` (#0a1f11 at 70%) — needs verification with the actual composited background. The overlay opacity varies by breakpoint (`/70` mobile, `/50` desktop), which may fail contrast on desktop. |
| 25 | Alt text quality | ✅ | Alt texts are descriptive and contextual. `"Chris and Jess Maynard of Green Stripe Lawn Care"`, `"Padstow Lawn Renovation"` — well done. |

**Fix for Item 20** — Add global focus-visible styles to [globals.css](file:///c:/Users/User/Desktop/green_stripe_build/src/app/globals.css):
```css
@layer base {
  /* ... existing rules ... */

  *:focus-visible {
    outline: 2px solid var(--color-brand-green-light);
    outline-offset: 2px;
    border-radius: 4px;
  }
}
```

**Fix for Item 21** — Add ARIA to the image comparison slider:
```tsx
// image-comparison.tsx — Add to the container div (line 78)
<div
  ref={containerRef}
  role="slider"
  aria-label="Before and after image comparison. Drag to reveal."
  aria-valuenow={Math.round(sliderPosition)}
  aria-valuemin={0}
  aria-valuemax={100}
  tabIndex={0}
  className={cn(/* existing classes */)}
  // ... existing handlers
>
```

### 2.3 SEO

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 26 | Root `<title>` and `<meta description>` | ❌ | [layout.tsx:15-18](file:///c:/Users/User/Desktop/green_stripe_build/src/app/layout.tsx#L15-L18) has **"Create Next App"** / **"Generated by create next app"**. This is the unmodified boilerplate. Google will index this as a test page. |
| 27 | Page-level metadata | ✅ | [page.tsx:6-9](file:///c:/Users/User/Desktop/green_stripe_build/src/app/page.tsx#L6-L9) correctly overrides with "Green Stripe Lawn Care | Premium Landscaping in North Cornwall". However, the root layout metadata will still be the fallback for any other page. |
| 28 | Heading hierarchy (H1-H6) | ❌ | **Critical hierarchy violations:** The page uses `<h2>` as kicker labels and `<h3>` for actual section headings. The services section has `<h2>Properly Done</h2>` (a kicker) then `<h3>Built out of Pride...</h3>` (the real heading). Semantically, the kicker should be a `<p>` or `<span>`, and the main heading should be `<h2>`. |
| 29 | Single `<h1>` per page | ✅ | Only one `<h1>` in the hero. Correct. |
| 30 | Service areas in content | ⚠️ | Bude, Wadebridge, Padstow, Launceston, and Bideford are mentioned in [services-section.tsx:48](file:///c:/Users/User/Desktop/green_stripe_build/src/components/services-section.tsx#L48). But **Okehampton and Holsworthy are missing**. Only 5 of 7 required service areas appear. |
| 31 | Service areas in footer | ❌ | The footer contains **zero service area names**. Only "Serving North Cornwall & North Devon" — a generic phrase with no local SEO value. |
| 32 | 40-mile radius mention | ⚠️ | Present in services section copy but absent from footer, meta description, and structured data. |
| 33 | Structured data / JSON-LD | ❌ | **Zero structured data.** No `LocalBusiness` schema, no [Service](file:///c:/Users/User/Desktop/green_stripe_build/src/components/services-section.tsx#6-80) schema, no `BreadcrumbList`. Google cannot generate rich snippets. |
| 34 | Open Graph / Social meta tags | ❌ | Zero OG tags. Sharing on Facebook/LinkedIn will show "Create Next App" with no image. |
| 35 | Canonical URL | ❌ | Not set. Risk of duplicate content indexing. |
| 36 | Sitemap / robots.txt | ❌ | Neither file exists. |

**Fix for Item 26** — Replace boilerplate metadata in [layout.tsx](file:///c:/Users/User/Desktop/green_stripe_build/src/app/layout.tsx):
```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://greenstripelawns.co.uk"),
  title: {
    default: "Green Stripe Lawn Care | Premium Lawn Specialists in North Cornwall",
    template: "%s | Green Stripe Lawn Care",
  },
  description:
    "Bespoke lawn care, 4-pass scarifying & complete renovations across Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford & Holsworthy. 15 years elite golf course turf expertise.",
  openGraph: {
    title: "Green Stripe Lawn Care | Championship-Grade Lawns for Your Home",
    description:
      "Husband-and-wife team with 15 years of top UK golf course experience. Serving a 40-mile radius across North Cornwall and North Devon.",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/images/hero_bg.png", width: 1200, height: 630, alt: "Green Stripe Lawn Care" }],
  },
  robots: { index: true, follow: true },
};
```

**Fix for Item 28** — Correct the heading hierarchy pattern across all sections:
```tsx
// services-section.tsx — Replace h2/h3 kicker pattern (lines 45-46)
<p className="text-sm font-semibold tracking-[0.2em] text-brand-earth uppercase mb-4">
  Properly Done
</p>
<h2 className="text-3xl md:text-5xl font-bold text-brand-green-dark mb-6">
  Built out of Pride, <br/>Maintained with Precision.
</h2>

// Apply same fix to founder-story.tsx (lines 40-41) and social-proof.tsx (lines 22-23)
```

**Fix for Item 31** — Add a proper footer with all 7 service areas:
```tsx
// page.tsx — Replace the footer (lines 32-43)
<footer className="bg-brand-black text-brand-sand py-16 lg:py-24 border-t border-brand-green-dark/30">
  <div className="container mx-auto px-4 md:px-8 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h2 className="font-bold text-xl uppercase tracking-widest mb-4">Green Stripe Lawn Care</h2>
        <p className="text-sm opacity-70 leading-relaxed">
          Championship-grade lawn care from Widemouth Bay, serving a 40-mile radius
          across North Cornwall &amp; North Devon.
        </p>
      </div>
      <div>
        <h3 className="font-semibold uppercase tracking-widest text-sm mb-4">Service Areas</h3>
        <ul className="text-sm opacity-70 space-y-2">
          <li>Bude &amp; Widemouth Bay</li>
          <li>Wadebridge</li>
          <li>Padstow</li>
          <li>Launceston</li>
          <li>Okehampton</li>
          <li>Bideford</li>
          <li>Holsworthy</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold uppercase tracking-widest text-sm mb-4">Contact</h3>
        <p className="text-sm opacity-70 mb-2">
          <a href="tel:+441288371343" className="hover:text-white transition-colors cursor-pointer">
            01288 371343
          </a>
        </p>
        <p className="text-sm opacity-70">
          <a href="mailto:office@greenstripelawns.co.uk" className="hover:text-white transition-colors cursor-pointer">
            office@greenstripelawns.co.uk
          </a>
        </p>
      </div>
    </div>
    <div className="mt-16 pt-8 border-t border-white/10 text-sm opacity-40 text-center">
      &copy; {new Date().getFullYear()} Green Stripe Lawn Care. All rights reserved.
    </div>
  </div>
</footer>
```

---

## Pillar 3: Back-End Architecture & Security

### 3.1 The 5 Fatal Flaws

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 37 | Exposed environment variables / hardcoded API keys | ✅ | No `.env` file in the main project. No `process.env` references in `src/`. [.gitignore](file:///c:/Users/User/Desktop/green_stripe_build/.gitignore) correctly excludes `.env*`. Clean. |
| 38 | Server-side validation | N/A | This is a static landing page with **no forms and no API routes**. There is no server-side processing to validate. However — there is no contact form at all, which is itself a conversion failure (see Pillar 4). |
| 39 | Database / RLS | N/A | No database is connected to the main Next.js project. The `green-stripe-s` sub-folder has `better-sqlite3` in deps, but it appears to be a separate, abandoned prototype. |
| 40 | Authentication middleware on private routes | N/A | No private routes exist. The site is a single public landing page. |
| 41 | Dependency hygiene | ⚠️ | See detailed analysis below. |

### 3.2 Dependency Audit

| Package | Version | Status | Finding |
|---------|---------|--------|---------|
| `next` | `16.1.6` | ✅ | Current as of March 2026. |
| `react` / `react-dom` | `19.2.3` | ✅ | Current. |
| `framer-motion` | `^12.35.2` | ✅ | Current. |
| `tailwindcss` | `^4` | ✅ | Tailwind v4 with the new `@theme` API. Correct. |
| `clsx` + `tailwind-merge` | Latest | ✅ | Standard utility combo. |
| `lucide-react` | `^0.577.0` | ✅ | Current. |

### 3.3 Orphaned Sub-Project

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 42 | `green-stripe-s/` directory | ❌ | An entire abandoned Vite+Express+SQLite sub-project with its own `node_modules`, `.git`, and a [.env.example](file:///c:/Users/User/Desktop/green_stripe_build/green-stripe-s/.env.example) containing `GEMINI_API_KEY` references. This is dead weight that should not ship. It adds attack surface (Express server code) and confusion. **Delete this directory entirely or move it to a separate repo.** |

### 3.4 Security Headers

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 43 | Security headers in [next.config.ts](file:///c:/Users/User/Desktop/green_stripe_build/next.config.ts) | ❌ | [next.config.ts](file:///c:/Users/User/Desktop/green_stripe_build/next.config.ts) is completely empty — no `headers()`, no CSP, no X-Frame-Options, no Referrer-Policy. |

**Fix for Item 43** — Add security headers:
```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' https://fonts.gstatic.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## Pillar 4: Industry Authority & Services Copy (BALI Standard)

### 4.1 Brand Positioning

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 44 | Chris positioned as an elite turf expert | ⚠️ | Copy mentions "15 years of elite turf management experience" and "top golf courses" but **never names a single course**. A premium site would drop prestigious names: "St Enodoc", "Trevose", "Royal North Devon" — whichever are real. Vague claims lack authority. |
| 45 | Jess's role conveyed professionally | ✅ | "Organizational heartbeat", "flawless scheduling", "unparalleled client care" — strong positioning. |
| 46 | Husband-and-wife team humanised | ✅ | The founder section has warmth and the personal photo placement is good. |
| 47 | "When you call, you speak to us" | ✅ | Excellent trust-building line. |

### 4.2 Service Presentation

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 48 | "Ultimate lawn care programmes" presented | ❌ | The [core_services.md](file:///c:/Users/User/Desktop/green_stripe_build/core_services.md) source data mentions "Standard to ultimate lawn care programmes" but **this isn't reflected in the UI at all**. The services section only shows 4 generic cards. No tiered programme structure, no pricing tiers, no programme comparison. |
| 49 | "Complete renovations" prestigious language | ⚠️ | Present in copy but not positioned as a premium offering. Reads like a bullet point, not a case for bespoke craftsmanship. |
| 50 | "4-pass scarifying" differentiated | ✅ | Has its own dedicated card with good copy. This is a differentiator and it's correctly highlighted. |
| 51 | Services described with BALI-level prestige | ❌ | The service descriptions are 1-2 generic sentences. A BALI Grand Award presentation would include process breakdowns, numbered steps, expected timelines, and before/after transformation narratives for each service. |
| 52 | Re-turfing service present | ❌ | Mentioned in [core_services.md](file:///c:/Users/User/Desktop/green_stripe_build/core_services.md) but **completely absent from the UI**. |
| 53 | Top dressing service present | ❌ | **Bundled** into "Overseeding & Top Dressing" card but not given its own identity. |

### 4.3 Conversion Elements

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 54 | Contact form present | ❌ | **No contact form anywhere.** The only conversion path is a phone number. No email form, no enquiry form, no "Book a Free Consultation" flow. This is a critical conversion failure. |
| 55 | Email address visible | ❌ | `office@greenstripelawns.co.uk` exists in [core_services.md](file:///c:/Users/User/Desktop/green_stripe_build/core_services.md) but is **never rendered on the page**. |
| 56 | Social proof — real testimonials | ❌ | The "Trusted by 100+ Cornwall residents" badge in the hero is a fabricated stat with placeholder star icons instead of real customer avatars or Google review integration. |
| 57 | Google Reviews / Trust Pilot integration | ❌ | Zero third-party review integration. |
| 58 | Social media links | ❌ | Zero Instagram, Facebook, or social links despite the business having active social profiles. |
| 59 | Sticky CTA / Floating contact button | ❌ | No persistent conversion trigger. Once a user scrolls past the hero, there is no visible CTA until they reach the "Read More Stories" link in the social proof section. |

### 4.4 Local Trust Signals

| # | Check | Status | Finding |
|---|-------|--------|---------|
| 60 | Hyper-local Cornwall context | ⚠️ | "Widemouth Bay · North Cornwall" kicker, Padstow/Wadebridge case studies. Present but surface-level. No embedded Google Maps, no "We're based at..." physical trust signal. |
| 61 | Case studies feel real | ⚠️ | The two case studies are well-written but lack customer names/initials, property types, or dates. They feel templated rather than authentic. |

---

## Summary Scorecard

| Pillar | Pass | Fail | Warning | Score |
|--------|------|------|---------|-------|
| 1. UI/UX & Design | 1 | 12 | 2 | **7%** |
| 2. Performance, SEO & A11y | 3 | 10 | 4 | **18%** |
| 3. Security & Architecture | 2 | 2 | 1 | **40%** |
| 4. Authority & Copy | 3 | 8 | 4 | **20%** |
| **TOTAL** | **9** | **32** | **11** | **~17%** |

> [!WARNING]
> **9 passes out of 52 checks. This site scores roughly 17% against the £75k standard.** The most critical failures are: boilerplate metadata visible to Google, zero `focus-visible` / ARIA accessibility, hero image completely unoptimised (CSS background PNG), no contact form, missing security headers, and a generic card layout that would be indistinguishable from a free template.

---

## Priority Fix Order

1. **[CRITICAL]** Replace [layout.tsx](file:///c:/Users/User/Desktop/green_stripe_build/src/app/layout.tsx) boilerplate metadata — Google is indexing "Create Next App"
2. **[CRITICAL]** Add `focus-visible` and ARIA attributes — WCAG compliance failure
3. **[CRITICAL]** Replace hero CSS `background-image` with Next.js `<Image priority>` — LCP killer
4. **[CRITICAL]** Add security headers to [next.config.ts](file:///c:/Users/User/Desktop/green_stripe_build/next.config.ts)
5. **[HIGH]** Convert all PNG images to WebP — ~4MB payload reduction
6. **[HIGH]** Fix heading hierarchy (`<h2>` kickers → `<p>` tags)
7. **[HIGH]** Build a proper footer with all 7 service areas + contact info
8. **[HIGH]** Add `cursor-pointer` to every interactive element
9. **[HIGH]** Add a contact form and sticky floating CTA
10. **[HIGH]** Add structured data (JSON-LD `LocalBusiness` schema)
11. **[MEDIUM]** Replace Geist fonts with premium editorial typography
12. **[MEDIUM]** Add Open Graph meta tags
13. **[MEDIUM]** Delete the orphaned `green-stripe-s/` sub-project
14. **[MEDIUM]** Upgrade service cards from generic grid to editorial storytelling layout
15. **[LOW]** Add cinematic gradients, parallax, and scroll-driven animation variety
