import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppCTA from "@/components/whatsapp-cta";

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
  metadataBase: new URL("https://www.greenstripelawns.co.uk"),
  title: {
    default: "Green Stripe Lawn Care | Premium Lawn Specialists in North Cornwall & Devon",
    template: "%s | Green Stripe Lawn Care",
  },
  description:
    "Championship-grade lawn care from Chris Maynard — 15 years on the UK's finest golf courses. Serving Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford & Holsworthy.",
  keywords: [
    "lawn care", "Cornwall", "Devon", "scarifying", "overseeding",
    "lawn renovation", "Bude", "Wadebridge", "Padstow", "turf management",
  ],
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Green Stripe Lawn Care",
    title: "Green Stripe Lawn Care | Premium Lawn Specialists in North Cornwall & Devon",
    description: "Championship-grade lawn care from Chris Maynard — 15 years on golf courses. Serving Bude, Wadebridge, Padstow & beyond.",
    images: [
      {
        url: "/images/real/striped-lawn.jpg",
        width: 1200,
        height: 630,
        alt: "Perfectly striped championship lawn by Green Stripe Lawn Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Stripe Lawn Care | Premium Lawn Specialists",
    description: "Championship-grade lawn care serving North Cornwall & Devon.",
    images: ["/images/real/striped-lawn.jpg"],
  },
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Green Stripe Lawn Care",
  image: "https://www.greenstripelawns.co.uk/wp-content/uploads/dynamik-gen/theme/images/logo_568x110_grey.jpg",
  url: "https://www.greenstripelawns.co.uk",
  telephone: "+441288371343",
  email: "office@greenstripelawns.co.uk",
  description: "Championship-grade lawn care from Chris Maynard — 15 years on the UK's finest golf courses. Serving North Cornwall & North Devon.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Widemouth Bay",
    addressRegion: "Cornwall",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7932,
    longitude: -4.5567,
  },
  areaServed: [
    "Bude", "Wadebridge", "Padstow", "Launceston", "Okehampton", "Bideford", "Holsworthy",
  ],
  founder: {
    "@type": "Person",
    name: "Chris Maynard",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
  },
  priceRange: "£45-£95",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-bg text-fg grain-overlay">
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-fg focus:text-cream focus:rounded-full focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <WhatsAppCTA />
        <Footer />
      </body>
    </html>
  );
}
