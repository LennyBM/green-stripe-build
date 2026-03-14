import { SITE_CONFIG } from "./config";

/* ═══════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — generated from config
   ═══════════════════════════════════════════════ */

const areaServedSchema = SITE_CONFIG.areasServed.map((a) => ({
  "@type": "City" as const,
  name: a.name,
  containedInPlace: { "@type": "AdministrativeArea" as const, name: a.region },
}));

/* ── LocalBusiness Schema ── */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.name,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.images.heroImage}`,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  description: `${SITE_CONFIG.tagline} Serving Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford & Holsworthy.`,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_CONFIG.address.locality,
    addressRegion: SITE_CONFIG.address.region,
    addressCountry: SITE_CONFIG.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_CONFIG.geo.latitude,
    longitude: SITE_CONFIG.geo.longitude,
  },
  areaServed: areaServedSchema,
  sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram],
  founder: {
    "@type": "Person",
    name: SITE_CONFIG.founders.primary,
    jobTitle: SITE_CONFIG.founders.primaryTitle,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "BSc (Hons) Turfgrass Science",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "City & Guilds PA1 & PA6 — Safe Use of Pesticides",
      },
    ],
    alumniOf: [
      { "@type": "Organization", name: "The London Club" },
      { "@type": "Organization", name: "Pinehurst Resort" },
    ],
    knowsAbout: ["Turfgrass Science", "Greenkeeping", "Lawn Renovation", "Scarification"],
  },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "City & Guilds PA1 & PA6" },
    { "@type": "EducationalOccupationalCredential", name: "Environment Agency Waste Carrier Registration" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE_CONFIG.ratingValue,
    reviewCount: SITE_CONFIG.reviewCount,
  },
  priceRange: SITE_CONFIG.priceRange,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lawn Care Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Complete Lawn Renovations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "4-Pass Scarifying" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Overseeding & Top Dressing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Moss & Weed Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Care Programmes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Re-Turfing" } },
    ],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: SITE_CONFIG.hours.days,
    opens: SITE_CONFIG.hours.opens,
    closes: SITE_CONFIG.hours.closes,
  },
};

/* ── Service Schema ── */
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Lawn Care",
  name: "Professional Lawn Care Services",
  description:
    "Championship-grade lawn care including scarifying, overseeding, renovations, moss & weed control, and year-round lawn care programmes.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  areaServed: areaServedSchema,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lawn Care Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Complete Lawn Renovations", url: `${SITE_CONFIG.url}/services/lawn-renovation` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "4-Pass Scarifying", url: `${SITE_CONFIG.url}/services/scarifying` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Overseeding & Top Dressing", url: `${SITE_CONFIG.url}/services/overseeding` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Moss & Weed Control", url: `${SITE_CONFIG.url}/services/moss-weed-control` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Care Programmes", url: `${SITE_CONFIG.url}/services/lawn-care-programme` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Re-Turfing", url: `${SITE_CONFIG.url}/services/re-turfing` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Pest Control", url: `${SITE_CONFIG.url}/services/pest-control` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Disease Management", url: `${SITE_CONFIG.url}/services/disease-management` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wetting Agent Treatments", url: `${SITE_CONFIG.url}/services/wetting-agents` } },
    ],
  },
};
