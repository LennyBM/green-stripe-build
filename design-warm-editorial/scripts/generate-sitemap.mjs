/**
 * SITEMAP GENERATOR — auto-generates sitemap.xml at build time
 *
 * Reads all routes from site-data.ts slugs and static pages.
 * Run: node scripts/generate-sitemap.mjs
 */

import { writeFileSync } from "fs";

const SITE_URL = "https://www.greenstripelawns.co.uk";
const TODAY = new Date().toISOString().split("T")[0];

// ─── Route definitions ───
const routes = [
  // Static pages
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.8", changefreq: "monthly" },
  { path: "/pricing", priority: "0.8", changefreq: "monthly" },
  { path: "/results", priority: "0.7", changefreq: "monthly" },
  { path: "/reviews", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },

  // Service pages
  ...["lawn-renovation", "scarifying", "overseeding", "moss-weed-control",
    "lawn-care-programme", "re-turfing", "pest-control", "disease-management",
    "wetting-agents"
  ].map((s) => ({ path: `/services/${s}`, priority: "0.8", changefreq: "monthly" })),

  // Area pages
  ...["bude", "wadebridge", "padstow", "launceston", "okehampton", "bideford", "holsworthy"
  ].map((a) => ({ path: `/areas/${a}`, priority: "0.6", changefreq: "monthly" })),

  // Blog posts
  ...["when-to-scarify-lawn-cornwall", "why-lawn-has-moss-how-to-fix",
    "spring-lawn-care-checklist-cornwall-devon"
  ].map((b) => ({ path: `/blog/${b}`, priority: "0.6", changefreq: "monthly" })),
];

// ─── Generate XML ───
const urls = routes
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${TODAY}</lastmod><priority>${r.priority}</priority><changefreq>${r.changefreq}</changefreq></url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`✓ Sitemap generated: ${routes.length} URLs → public/sitemap.xml`);
