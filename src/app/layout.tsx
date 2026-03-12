import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenstripelawns.co.uk"),
  title: {
    default:
      "Green Stripe Lawn Care | Premium Lawn Specialists in North Cornwall & Devon",
    template: "%s | Green Stripe Lawn Care",
  },
  description:
    "Bespoke lawn care, 4-pass scarifying & complete renovations across Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford & Holsworthy. 15 years elite golf course turf expertise.",
  keywords: [
    "lawn care Cornwall",
    "lawn renovation North Cornwall",
    "scarifying Bude",
    "moss control Wadebridge",
    "turf specialist Padstow",
    "lawn treatment Launceston",
    "lawn care Okehampton",
    "lawn care Bideford",
    "lawn care Holsworthy",
    "golf course quality lawn",
    "Green Stripe Lawn Care",
  ],
  authors: [{ name: "Green Stripe Lawn Care" }],
  openGraph: {
    title: "Green Stripe Lawn Care | Championship-Grade Lawns for Your Home",
    description:
      "Husband-and-wife team with 15 years of top UK golf course experience. Serving a 40-mile radius across North Cornwall and North Devon.",
    type: "website",
    locale: "en_GB",
    url: "https://greenstripelawns.co.uk",
    siteName: "Green Stripe Lawn Care",
    images: [
      {
        url: "/images/hero_bg.webp",
        width: 1200,
        height: 630,
        alt: "Green Stripe Lawn Care — Championship-grade lawn in North Cornwall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Stripe Lawn Care | Premium Lawn Specialists",
    description:
      "Bespoke lawn care across North Cornwall & North Devon. 15 years elite turf expertise.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://greenstripelawns.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://greenstripelawns.co.uk",
              name: "Green Stripe Lawn Care",
              description:
                "Premium bespoke lawn care, 4-pass scarifying, complete renovations, moss & weed control across North Cornwall and North Devon. Founded by Chris Maynard with 15 years of elite UK golf course turf management experience.",
              url: "https://greenstripelawns.co.uk",
              telephone: "+441288371343",
              email: "office@greenstripelawns.co.uk",
              image: "https://greenstripelawns.co.uk/images/hero_bg.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Widemouth Bay",
                addressRegion: "Cornwall",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.7942,
                longitude: -4.5553,
              },
              areaServed: [
                { "@type": "City", name: "Bude" },
                { "@type": "City", name: "Wadebridge" },
                { "@type": "City", name: "Padstow" },
                { "@type": "City", name: "Launceston" },
                { "@type": "City", name: "Okehampton" },
                { "@type": "City", name: "Bideford" },
                { "@type": "City", name: "Holsworthy" },
              ],
              founder: {
                "@type": "Person",
                name: "Chris Maynard",
                jobTitle: "Turf Specialist & Founder",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              priceRange: "££",
              sameAs: [
                "https://www.facebook.com/greenstripelawns",
                "https://www.instagram.com/greenstripelawns",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
