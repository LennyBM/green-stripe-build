import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawn Treatment Cost Cornwall & Pricing",
  description:
    "Transparent lawn care pricing from Green Stripe. Standard, Premium & Ultimate programmes from £45/visit. One-off treatments available. Free consultation included.",
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk/pricing",
  },
  openGraph: {
    title: "Lawn Care Pricing — Green Stripe Lawn Care",
    description:
      "Simple, transparent pricing for championship-grade lawn care. Programmes from £45/visit with direct debit discounts. North Cornwall & Devon.",
    url: "https://www.greenstripelawns.co.uk/pricing",
    images: [
      {
        url: "/images/real/branded-van.webp",
        width: 1200,
        height: 630,
        alt: "Green Stripe Lawn Care branded van serving North Cornwall and Devon",
      },
    ],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
