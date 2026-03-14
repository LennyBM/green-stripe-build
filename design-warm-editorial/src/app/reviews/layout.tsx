import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews — 5-Star Client Testimonials",
  description:
    "Read verified 5-star reviews from Green Stripe Lawn Care clients across Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford & Holsworthy.",
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk/reviews",
  },
  openGraph: {
    title: "Client Reviews — Green Stripe Lawn Care",
    description:
      "5.0 out of 5 stars. Read what homeowners across North Cornwall & Devon say about our championship-grade lawn care.",
    url: "https://www.greenstripelawns.co.uk/reviews",
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

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
