import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Stripe Lawn Care | Premium Lawn Specialists in North Cornwall & Devon",
  description: "Bespoke lawn care, 4-pass scarifying & complete renovations across Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford & Holsworthy. 15 years elite golf course turf expertise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
