import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Lawn Care Questions Answered",
  description:
    "Frequently asked questions about Green Stripe Lawn Care services, pricing, the 4-pass scarifying process, and what to expect. Serving North Cornwall & Devon.",
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk/faq",
  },
  openGraph: {
    title: "Lawn Care FAQ — Green Stripe Lawn Care",
    description:
      "Got questions about scarifying, overseeding, or lawn care programmes? Find answers from our championship-grade lawn care experts.",
    url: "https://www.greenstripelawns.co.uk/faq",
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

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
