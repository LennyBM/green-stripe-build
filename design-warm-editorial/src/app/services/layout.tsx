import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Championship-Grade Lawn Care",
  description:
    "Professional lawn care services including 4-pass scarifying, overseeding, moss & weed control, lawn renovations, re-turfing, pest control & disease management. North Cornwall & Devon.",
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk/services",
  },
  openGraph: {
    title: "Lawn Care Services — Green Stripe",
    description:
      "9 specialist lawn care services from scarifying to complete renovations. Championship-grade expertise serving North Cornwall & Devon.",
    url: "https://www.greenstripelawns.co.uk/services",
    images: [
      {
        url: "/images/real/striped-lawn.jpg",
        width: 1200,
        height: 630,
        alt: "A perfectly striped lawn by Green Stripe Lawn Care",
      },
    ],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
