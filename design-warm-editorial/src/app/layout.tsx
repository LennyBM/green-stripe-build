import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import CookieBanner from "@/components/cookie-banner";
import JessChatbot from "@/components/jess-chatbot";
import StickyCta from "@/components/sticky-cta";
import { MotionConfig } from "framer-motion";

import { SITE_CONFIG } from "@/lib/config";
import { localBusinessJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { safeJsonLd } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Premium Lawn Specialists in North Cornwall & Devon`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    `${SITE_CONFIG.tagline} Serving Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford & Holsworthy.`,
  keywords: [
    "lawn care", "Cornwall", "Devon", "scarifying", "overseeding",
    "lawn renovation", "Bude", "Wadebridge", "Padstow", "turf management",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Premium Lawn Specialists in North Cornwall & Devon`,
    description: `${SITE_CONFIG.tagline} Serving Bude, Wadebridge, Padstow & beyond.`,
    images: [
      {
        url: SITE_CONFIG.images.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} branded van serving North Cornwall and Devon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Premium Lawn Specialists`,
    description: "Championship-grade lawn care serving North Cornwall & Devon.",
    images: [SITE_CONFIG.images.ogImage],
  },
  icons: {
    icon: SITE_CONFIG.images.logo,
    apple: SITE_CONFIG.images.logo,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceJsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-bg text-fg grain-overlay">
        <MotionConfig reducedMotion="user">
          {/* Skip to content — accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-fg focus:text-cream focus:rounded-full focus:text-sm focus:font-medium focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>

          <JessChatbot />
          <StickyCta />
          <CookieBanner />
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
