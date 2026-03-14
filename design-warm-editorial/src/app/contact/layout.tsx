import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us — Free Lawn Consultation",
  description:
    `Book your free lawn consultation with ${SITE_CONFIG.name}. Call ${SITE_CONFIG.phoneDisplay}, WhatsApp, or fill in our online form. Serving Bude, Wadebridge, Padstow & North Cornwall.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: "Contact Green Stripe Lawn Care — Free Consultation",
    description:
      "Get in touch for a free, no-obligation lawn assessment. Phone, WhatsApp or online form. Serving North Cornwall & North Devon.",
    url: "https://www.greenstripelawns.co.uk/contact",
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
