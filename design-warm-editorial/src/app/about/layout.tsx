import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawn Care Specialist Cornwall — Meet Chris & Jess Maynard",
  description:
    "Green Stripe Lawn Care was founded by Chris Maynard — BSc Turfgrass Science, 23 years in professional turf management including Pinehurst USA & The London Club. Serving North Cornwall & Devon.",
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk/about",
  },
  openGraph: {
    title: "About Green Stripe Lawn Care — Championship Pedigree",
    description:
      "Meet Chris & Jess Maynard. 23 years of professional turf management expertise, now serving North Cornwall & North Devon homeowners.",
    url: "https://www.greenstripelawns.co.uk/about",
    images: [
      {
        url: "/images/real/chris-portrait.jpg",
        width: 800,
        height: 1000,
        alt: "Chris Maynard — founder and head greenkeeper at Green Stripe Lawn Care",
      },
    ],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
