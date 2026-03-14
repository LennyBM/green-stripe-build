"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/site-data";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

/* Map service slugs to real photos from Green Stripe jobs */
const serviceImages: Record<string, string> = {
  "lawn-renovation": "/images/real/scarifying-end-result.jpg",
  "scarifying": "/images/real/scarifying-during.jpg",
  "overseeding": "/images/real/scarifying-clearing.jpg",
  "moss-weed-control": "/images/real/winter-health-check.jpg",
  "lawn-care-programme": "/images/real/mowing-advice-lawn.jpg",
  "re-turfing": "/images/real/fb-cover-striped-lawn.jpg",
};

interface Props {
  limit?: number;
  showViewAll?: boolean;
}

export default function ServicesSection({ limit, showViewAll = false }: Props) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="relative py-20 sm:py-32 md:py-48 bg-cream overflow-hidden">
      <div className="blob-accent w-[400px] h-[400px] top-20 -left-40" />
      <div className="blob-accent w-[300px] h-[300px] bottom-40 -right-20 opacity-40" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal className="mb-16 sm:mb-24 md:mb-36">
          <div className="editorial-line mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Our Expertise</p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-heading font-bold leading-[1.05] text-fg max-w-3xl">
            The Kind of Lawn<br />
            People <em className="italic text-accent">Pause to Admire</em>
          </h2>
          <p className="mt-8 text-lg text-fg-light max-w-2xl leading-relaxed">
            Championship-grade treatments that transform tired lawns into the envy of the street.
            Serving homes across Bude, Wadebridge, Padstow, and beyond.
          </p>
        </ScrollReveal>

        <div className="space-y-16 sm:space-y-20 md:space-y-32">
          {displayed.map((s, i) => {
            const isEven = i % 2 === 0;
            const Icon = s.icon;
            const imgSrc = serviceImages[s.slug];
            return (
              <ScrollReveal key={s.num} delay={i * 0.05}>
                <div
                  className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-6 sm:gap-8 md:gap-16 group rounded-3xl p-6 md:p-10 -mx-6 md:-mx-10 hover:bg-cream/60 hover:shadow-[0_20px_60px_rgba(42,31,20,0.06)] hover:border-gold/10 border border-transparent transition-all duration-500`}
                >
                  <span className="absolute -top-2 sm:-top-4 md:-top-8 left-0 text-[80px] sm:text-[120px] md:text-[180px] font-heading font-bold text-gold/[0.08] leading-none select-none pointer-events-none z-0">
                    {s.num}
                  </span>

                  {/* Service Image */}
                  {imgSrc && (
                    <div className="w-full md:w-2/5 flex-shrink-0 relative z-10">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(42,31,20,0.1)] border-2 border-gold/10 group-hover:border-gold/25 transition-all duration-500 cursor-explore">
                        <Image
                          src={imgSrc}
                          alt={s.title}
                          fill
                          className="object-cover warm-photo transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  )}

                  {/* Service Content */}
                  <div className={`flex-1 max-w-xl relative z-10 ${!imgSrc ? "md:ml-16" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-gold/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium">{s.sub}</p>
                    </div>
                    <Link href={`/services/${s.slug}`}>
                      <h3 className="text-2xl md:text-4xl font-heading font-bold text-fg mb-5 leading-tight group-hover:text-accent transition-colors duration-500">
                        {s.title}
                      </h3>
                    </Link>
                    <p className="text-fg-light leading-relaxed text-base md:text-lg">{s.desc}</p>
                    <div className="flex items-center gap-6 mt-8">
                      <div className="editorial-line" />
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold/20 text-sm font-medium text-accent hover:bg-accent hover:text-cream hover:border-accent hover:shadow-[0_4px_20px_rgba(74,103,65,0.2)] transition-all duration-300"
                      >
                        Learn More <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {showViewAll && (
          <ScrollReveal className="text-center mt-16">
            <Link
              href="/services"
              className="btn-premium inline-block px-12 py-4 rounded-full text-sm font-semibold transition-all"
            >
              View All Services
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
