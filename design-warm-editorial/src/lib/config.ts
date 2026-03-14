/* ═══════════════════════════════════════════════
   SITE CONFIGURATION — Single source of truth
   ═══════════════════════════════════════════════ */

export const SITE_CONFIG = {
  /* ── Business Identity ── */
  name: "Green Stripe Lawn Care",
  tagline: "Championship-grade lawn care from Chris Maynard — 15 years on the UK's finest golf courses.",

  /* ── Contact ── */
  phone: "+441288371343",
  phoneDisplay: "01288 371343",
  email: "office@greenstripelawns.co.uk",
  whatsapp: "441288371343",

  /* ── URLs ── */
  url: "https://www.greenstripelawns.co.uk",
  social: {
    facebook: "https://www.facebook.com/greenstripelawns",
    instagram: "https://www.instagram.com/greenstripelawns",
  },

  /* ── Location ── */
  address: {
    locality: "Widemouth Bay",
    region: "Cornwall",
    country: "GB",
  },
  geo: {
    latitude: 50.7932,
    longitude: -4.5567,
  },

  /* ── Founders ── */
  founders: {
    primary: "Chris Maynard",
    primaryTitle: "Head Greenkeeper & Founder",
    partner: "Jess Maynard",
    displayName: "Chris & Jess Maynard",
  },

  /* ── Operating Hours ── */
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as string[],
    opens: "08:00",
    closes: "18:00",
    displayHours: "Mon–Fri, 8am–6pm",
  },

  /* ── Business Metadata ── */
  priceRange: "£45-£95",
  ratingValue: "5.0",
  reviewCount: "8",

  /* ── Image Assets ── */
  images: {
    ogImage: "/images/real/branded-van.webp",
    logo: "/images/real/round-logo.jpg",
    heroImage: "/images/real/striped-lawn.jpg",
  },

  /* ── Areas Served (for JSON-LD) ── */
  areasServed: [
    { name: "Bude", region: "Cornwall" },
    { name: "Wadebridge", region: "Cornwall" },
    { name: "Padstow", region: "Cornwall" },
    { name: "Launceston", region: "Cornwall" },
    { name: "Holsworthy", region: "Devon" },
    { name: "Okehampton", region: "Devon" },
    { name: "Bideford", region: "Devon" },
  ],
} as const;

/* Helper to get WhatsApp URL */
export function getWhatsAppUrl() {
  return `https://wa.me/${SITE_CONFIG.whatsapp}`;
}

/* Helper to get tel: link */
export function getPhoneUrl() {
  return `tel:${SITE_CONFIG.phone}`;
}

/* Helper to get mailto: link */
export function getEmailUrl() {
  return `mailto:${SITE_CONFIG.email}`;
}

/* ── Shared Film Grain SVG ── */
export const GRAIN_BG_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/* ── Safe JSON-LD serialiser (prevents </script> injection) ── */
export function safeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/<\/script/gi, "<\\/script");
}
