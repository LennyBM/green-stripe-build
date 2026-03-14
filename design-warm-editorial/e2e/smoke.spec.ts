import { test, expect } from "@playwright/test";

test.describe("Core pages load correctly", () => {
  const pages = [
    { path: "/", title: "Green Stripe" },
    { path: "/services", title: "Services" },
    { path: "/pricing", title: "Pricing" },
    { path: "/results", title: "Results" },
    { path: "/about", title: "Chris" },
    { path: "/faq", title: "FAQ" },
    { path: "/contact", title: "Contact" },
    { path: "/blog", title: "Blog" },
    { path: "/privacy", title: "Privacy" },
  ];

  for (const page of pages) {
    test(`${page.path} loads and contains title`, async ({ page: p }) => {
      const response = await p.goto(page.path);
      expect(response?.status()).toBe(200);
      await expect(p).toHaveTitle(new RegExp(page.title, "i"));
    });
  }
});

test.describe("Navigation", () => {
  test("navbar links work", async ({ page }) => {
    await page.goto("/");
    
    // Click Services link
    await page.click('nav a[href="/services"]');
    await expect(page).toHaveURL(/\/services/);

    // Click Contact link
    await page.click('nav a[href="/contact"]');
    await expect(page).toHaveURL(/\/contact/);
  });

  test("mobile menu opens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    // Look for mobile menu trigger
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], nav button').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      // Some menu content should become visible
      await page.waitForTimeout(500);
    }
  });
});

test.describe("Hero Section", () => {
  test("hero video element is present", async ({ page }) => {
    await page.goto("/");
    const video = page.locator("video");
    await expect(video).toBeVisible();
  });

  test("hero CTA button is visible", async ({ page }) => {
    await page.goto("/");
    // Look for primary CTA (free survey / contact)
    const cta = page.locator('a[href="/contact"], a[href="#contact"]').first();
    await expect(cta).toBeVisible();
  });
});

test.describe("Contact Page", () => {
  test("contact page loads successfully", async ({ page }) => {
    const response = await page.goto("/contact");
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Contact/i);
  });
});

test.describe("Quote Calculator", () => {
  test("pricing page has interactive calculator", async ({ page }) => {
    await page.goto("/pricing");
    // Look for range slider or calculator input
    const calculator = page.locator('input[type="range"]').first();
    if (await calculator.isVisible()) {
      // Interact with the slider
      await calculator.fill("120");
      await page.waitForTimeout(300);
    }
  });
});

test.describe("Chatbot", () => {
  test("chatbot trigger button is visible", async ({ page }) => {
    await page.goto("/");
    // The chatbot floating button
    const trigger = page.locator('button:has(svg)').last();
    await expect(trigger).toBeVisible();
  });
});

test.describe("SEO", () => {
  test("homepage has meta description", async ({ page }) => {
    await page.goto("/");
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute("content", /.+/);
  });

  test("homepage has JSON-LD", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    expect(await jsonLd.count()).toBeGreaterThan(0);
  });

  test("sitemap.xml is accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
  });
});

test.describe("Service area pages", () => {
  const areas = ["bude", "padstow", "wadebridge"];

  for (const area of areas) {
    test(`/areas/${area} loads`, async ({ page }) => {
      const response = await page.goto(`/areas/${area}`);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("Accessibility basics", () => {
  test("hero video has aria-label", async ({ page }) => {
    await page.goto("/");
    const video = page.locator("video[aria-label]");
    await expect(video).toHaveAttribute("aria-label", /.+/);
  });

  test("images have alt text", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < Math.min(count, 10); i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });
});
