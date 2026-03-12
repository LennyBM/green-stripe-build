import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StatsStrip } from "@/components/stats-strip";
import { FounderStory } from "@/components/founder-story";
import { SocialProof } from "@/components/social-proof";
import { ContactForm } from "@/components/contact-form";
import { StickyFloatingCTA } from "@/components/sticky-cta";
import { CustomCursor } from "@/components/custom-cursor";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";



/* R5: Organic SVG wave divider component */
function WaveDivider({ flip = false, from = "#faf9f6", to = "#0a1f11" }: { flip?: boolean; from?: string; to?: string }) {
  return (
    <div className={`wave-divider ${flip ? "wave-divider-flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill={to}
        />
        <path
          d="M0,50 C360,70 720,20 1080,50 C1260,60 1380,55 1440,50 L1440,80 L0,80 Z"
          fill={to}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white" id="main-content">
      {/* Skip to Content — Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* R8: Custom cursor ring */}
      <CustomCursor />

      {/* Glassmorphism Scroll-Aware Navbar */}
      <Navbar />

      <HeroSection />

      {/* R5: Organic wave divider: hero → services */}
      <WaveDivider from="#0a1f11" to="#faf9f6" />

      <ServicesSection />

      {/* R3: Animated stats strip */}
      <StatsStrip />

      <FounderStory />

      {/* R5: Wave divider into dark social proof */}
      <WaveDivider from="#e6dfd1" to="#0a1f11" />

      <SocialProof />

      {/* R5: Wave divider back to light */}
      <WaveDivider flip from="#0a1f11" to="#faf9f6" />

      <ContactForm />

      {/* Sticky Floating CTA */}
      <StickyFloatingCTA />

      {/* ─── Footer ─── */}
      <footer className="bg-brand-black text-brand-sand py-20 lg:py-28 border-t border-brand-green-dark/30 relative overflow-hidden">
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 mesh-gradient-dark opacity-50" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <p className="font-heading font-bold text-xl uppercase tracking-widest mb-6 text-white">
                Green Stripe<span className="text-brand-green-light">.</span>
              </p>
              <p className="text-sm opacity-70 leading-relaxed mb-6">
                Championship-grade lawn care from Widemouth Bay. Founded by
                Chris Maynard — 15 years managing turf on the UK&apos;s finest
                golf courses. Now bringing that precision to your garden.
              </p>
              <p className="text-sm opacity-40">
                Serving a 40-mile radius across North Cornwall &amp; North
                Devon.
              </p>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-white">
                Service Areas
              </h3>
              <ul
                className="text-sm opacity-70 space-y-3"
                aria-label="Service areas covered by Green Stripe"
              >
                {[
                  "Bude & Widemouth Bay",
                  "Wadebridge",
                  "Padstow",
                  "Launceston",
                  "Okehampton",
                  "Bideford",
                  "Holsworthy",
                ].map((area) => (
                  <li key={area} className="flex items-center gap-2.5">
                    <MapPin
                      className="w-3.5 h-3.5 text-brand-green-light shrink-0"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-white">
                Our Services
              </h3>
              <ul className="text-sm opacity-70 space-y-3">
                <li>Lawn Care Programmes</li>
                <li>Complete Renovations</li>
                <li>4-Pass Scarifying</li>
                <li>Overseeding &amp; Top Dressing</li>
                <li>Moss &amp; Weed Control</li>
                <li>Re-Turfing</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-white">
                Contact Us
              </h3>
              <ul className="text-sm opacity-70 space-y-5">
                <li>
                  <a
                    href="tel:+441288371343"
                    className="flex items-center gap-3 hover:text-white transition-colors group"
                    aria-label="Call us at 01288 371343"
                  >
                    <Phone
                      className="w-4 h-4 text-brand-green-light shrink-0 group-hover:rotate-12 transition-transform"
                      aria-hidden="true"
                    />
                    01288 371343
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:office@greenstripelawns.co.uk"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                    aria-label="Email us at office@greenstripelawns.co.uk"
                  >
                    <Mail
                      className="w-4 h-4 text-brand-green-light shrink-0"
                      aria-hidden="true"
                    />
                    office@greenstripelawns.co.uk
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="#contact"
                    className="btn-shimmer inline-block px-6 py-2.5 border border-brand-green-light/50 text-brand-green-light rounded-full text-sm font-medium hover:bg-brand-green-light hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
                  >
                    Book a Consultation
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://www.facebook.com/greenstripelawns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green-light hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Follow Green Stripe on Facebook"
                >
                  <Facebook className="w-4.5 h-4.5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/greenstripelawns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green-light hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Follow Green Stripe on Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/441288371343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Message Green Stripe on WhatsApp"
                >
                  <MessageCircle className="w-4.5 h-4.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-30">
            <p>
              &copy; {new Date().getFullYear()} Green Stripe Lawn Care. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p>Based in Widemouth Bay, North Cornwall</p>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.peakemanagement.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:opacity-100 transition-all"
              >
                Site by Peake Management
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
