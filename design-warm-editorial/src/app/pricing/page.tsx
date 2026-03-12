"use client";

import Link from "next/link";
import { packages } from "@/lib/site-data";
import StatsSection from "@/components/stats-section";
import ContactForm from "@/components/contact-form";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg-alt overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">Investment</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-fg leading-[1.05] mb-8">
              Simple, Transparent<br />
              <em className="italic text-accent">Pricing</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-xl text-fg-light font-light font-heading italic max-w-2xl">
              Every lawn is different. Our packages provide a starting point — Chris will tailor a programme
              to your lawn&apos;s specific needs during your free consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10" stagger={0.15}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <div
                  className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(42,31,20,0.12)] hover:-translate-y-2 ${
                    pkg.highlighted
                      ? "bg-fg text-cream border-2 border-fg shadow-[0_30px_80px_rgba(42,31,20,0.2)] scale-[1.02] md:scale-105"
                      : "bg-bg border-2 border-gold/15 hover:border-gold/30"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-5 py-1.5 bg-gold rounded-full text-xs font-semibold uppercase tracking-wider text-bg-dark animate-pulse">
                        <Star className="w-3 h-3" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <p className={`text-xs tracking-[0.25em] uppercase font-medium mb-3 ${pkg.highlighted ? "text-gold-light" : "text-gold"}`}>
                      {pkg.tagline}
                    </p>
                    <h3 className={`text-2xl md:text-3xl font-heading font-bold mb-2 ${pkg.highlighted ? "text-cream" : "text-fg"}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="mb-8 pb-8 border-b border-gold/20">
                    <p className={`text-4xl md:text-5xl font-heading font-bold ${pkg.highlighted ? "text-gold-light" : "text-fg"}`}>
                      {pkg.price}
                    </p>
                    <p className={`text-sm mt-1 ${pkg.highlighted ? "text-cream/50" : "text-muted"}`}>
                      {pkg.period}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className={`w-4.5 h-4.5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-gold-light" : "text-accent"}`} />
                        <span className={`text-sm font-light ${pkg.highlighted ? "text-cream/80" : "text-fg-light"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`btn-shimmer flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      pkg.highlighted
                        ? "bg-gold text-bg-dark hover:bg-gold-light hover:shadow-[0_0_30px_rgba(193,167,115,0.4)]"
                        : "bg-fg text-cream hover:bg-bg-dark hover:shadow-[0_0_20px_rgba(42,31,20,0.2)]"
                    }`}
                  >
                    {pkg.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom note */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16 max-w-2xl mx-auto">
              <p className="text-sm text-muted font-light leading-relaxed">
                All pricing is indicative and based on an average-sized domestic lawn (~80m²). Exact pricing
                is confirmed following your free consultation, where Chris assesses your lawn&apos;s specific
                needs. No hidden fees, no surprises.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* One-off services */}
      <section className="py-24 md:py-36 bg-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">One-Off Treatments</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg mb-12 leading-[1.1]">
              Not Ready for a <em className="italic text-accent">Programme?</em>
            </h2>
            <p className="text-lg text-fg-light font-light leading-relaxed mb-12">
              All of our services are available as standalone, one-off treatments. Whether you need a
              single scarification, a targeted moss treatment, or a complete renovation — get in touch
              for a bespoke quote.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.08}>
            {[
              { service: "4-Pass Scarifying", from: "From £120" },
              { service: "Overseeding & Top Dressing", from: "From £85" },
              { service: "Moss & Weed Treatment", from: "From £60" },
              { service: "Lawn Renovation", from: "From £350" },
              { service: "Re-Turfing", from: "From £15/m²" },
              { service: "Soil Analysis", from: "From £45" },
            ].map((s) => (
              <StaggerItem key={s.service}>
                <div className="flex items-center justify-between p-5 rounded-2xl border-2 border-gold/10 bg-cream hover:border-gold/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className="text-sm font-medium text-fg">{s.service}</span>
                  <span className="text-sm font-heading font-bold text-accent">{s.from}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <p className="text-xs text-muted mt-8 font-light">
              * All prices are starting points for an average-sized lawn. Exact pricing provided after assessment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <StatsSection />
      <ContactForm />
    </div>
  );
}
