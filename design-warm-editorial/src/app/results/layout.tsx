import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results — Before & After Lawn Transformations",
  description:
    "See real before-and-after lawn transformations from Green Stripe Lawn Care. Case studies from Padstow, Wadebridge, Bude & Launceston. Interactive comparison sliders.",
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk/results",
  },
  openGraph: {
    title: "Real Results — Green Stripe Lawn Transformations",
    description:
      "Before & after photos and case studies from real Green Stripe clients across North Cornwall & Devon.",
    url: "https://www.greenstripelawns.co.uk/results",
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

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
