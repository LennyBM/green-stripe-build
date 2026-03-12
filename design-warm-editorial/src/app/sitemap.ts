import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.greenstripelawns.co.uk";

  const staticPages = [
    "",
    "/services",
    "/pricing",
    "/results",
    "/reviews",
    "/about",
    "/faq",
    "/contact",
  ];

  const servicePages = [
    "/services/lawn-renovation",
    "/services/scarifying",
    "/services/overseeding",
    "/services/moss-weed-treatment",
    "/services/seasonal-feeds",
    "/services/re-turfing",
  ];

  const areaPages = [
    "/areas/bude",
    "/areas/wadebridge",
    "/areas/padstow",
    "/areas/launceston",
    "/areas/okehampton",
    "/areas/bideford",
    "/areas/holsworthy",
  ];

  const allPages = [...staticPages, ...servicePages, ...areaPages];

  return allPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.6,
  }));
}
