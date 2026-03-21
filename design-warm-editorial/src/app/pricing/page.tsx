"use client";

import Link from "next/link";
import { packages } from "@/lib/site-data";
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

      {/* Free Quote CTA */}
      <section className="py-16 md:py-20 bg-bg overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="rounded-3xl border-2 border-gold/20 bg-cream/50 backdrop-blur-sm p-10 md:p-14">
              <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-medium">Tailored To Your Lawn</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-fg mb-4 leading-[1.1]">
                Every Lawn Is <em className="italic text-accent">Different</em>
              </h2>
              <p className="text-fg-light font-light leading-relaxed mb-8 max-w-xl mx-auto">
                Pricing is based on lawn size and condition. The prices below are starting points
                for a 100m² lawn. For an accurate quote, book a free consultation with Chris —
                he&apos;ll assess your lawn in person and design a bespoke programme.
              </p>
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center gap-2 px-10 py-4 bg-fg text-cream rounded-full text-sm font-medium hover:bg-accent hover:shadow-[0_0_30px_rgba(45,90,39,0.3)] transition-all duration-300"
              >
                Get Your Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
                  className={`relative rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(42,31,20,0.12)] hover:-translate-y-2 ${
                    pkg.highlighted
                      ? "bg-fg text-cream border-2 border-fg shadow-[0_30px_80px_rgba(42,31,20,0.2)] md:scale-105"
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
                    <p className={`text-3xl sm:text-4xl md:text-5xl font-heading font-bold ${pkg.highlighted ? "text-gold-light" : "text-fg"}`}>
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

      {/* Seasonal Visit Calendar */}
      <section className="py-20 md:py-28 bg-bg overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Your Annual Programme</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg mb-4 leading-[1.1]">
              5 Seasonal <em className="italic text-accent">Visits</em>
            </h2>
            <p className="text-lg text-fg-light font-light mb-14 max-w-2xl">
              Every programme is built around 5 expertly timed visits, calibrated to the natural growing cycle of your lawn.
            </p>
          </ScrollReveal>

          {/* SVG gradient definitions for seasonal icons */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="springGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5a7c5a" />
                <stop offset="100%" stopColor="#7fa37f" />
              </linearGradient>
              <linearGradient id="lateSpringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a7c4a" />
                <stop offset="100%" stopColor="#6b9e6b" />
              </linearGradient>
              <linearGradient id="summerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c1a773" />
                <stop offset="100%" stopColor="#d4b880" />
              </linearGradient>
              <linearGradient id="autumnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b07840" />
                <stop offset="100%" stopColor="#c49058" />
              </linearGradient>
              <linearGradient id="winterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7a9aaf" />
                <stop offset="100%" stopColor="#9bb5c5" />
              </linearGradient>
            </defs>
          </svg>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" stagger={0.08}>
            {[
              {
                season: "Early Spring",
                months: "Feb – Mar",
                treatment: "Feed & Moss Control",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 36V20" stroke="url(#springGrad)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 20C20 14 14 8 8 6C8 12 14 18 20 20Z" fill="url(#springGrad)" opacity="0.85" />
                    <path d="M20 24C20 18 26 12 32 10C32 16 26 22 20 24Z" fill="url(#springGrad)" opacity="0.6" />
                    <circle cx="20" cy="36" r="2" fill="url(#springGrad)" opacity="0.4" />
                  </svg>
                ),
              },
              {
                season: "Late Spring",
                months: "Apr – May",
                treatment: "Feed & Weed Control",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 36V18" stroke="url(#lateSpringGrad)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 18C18 12 12 6 6 4C6 10 12 16 18 18" fill="url(#lateSpringGrad)" opacity="0.9" />
                    <path d="M20 18C22 12 28 6 34 4C34 10 28 16 22 18" fill="url(#lateSpringGrad)" opacity="0.9" />
                    <path d="M20 26C18 20 12 14 6 12C6 18 12 24 18 26" fill="url(#lateSpringGrad)" opacity="0.6" />
                    <path d="M20 26C22 20 28 14 34 12C34 18 28 24 22 26" fill="url(#lateSpringGrad)" opacity="0.6" />
                    <path d="M20 8C20 4 20 2 20 2" stroke="url(#lateSpringGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  </svg>
                ),
              },
              {
                season: "Summer",
                months: "Jun – Aug",
                treatment: "Feed & Stress Buster",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="8" fill="url(#summerGrad)" opacity="0.9" />
                    <circle cx="20" cy="20" r="11" stroke="url(#summerGrad)" strokeWidth="1" opacity="0.2" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                      <line
                        key={angle}
                        x1={20 + 13 * Math.cos((angle * Math.PI) / 180)}
                        y1={20 + 13 * Math.sin((angle * Math.PI) / 180)}
                        x2={20 + 17 * Math.cos((angle * Math.PI) / 180)}
                        y2={20 + 17 * Math.sin((angle * Math.PI) / 180)}
                        stroke="url(#summerGrad)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.7"
                      />
                    ))}
                  </svg>
                ),
              },
              {
                season: "Autumn",
                months: "Sep – Nov",
                treatment: "Feed & Weed Control",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C12 8 14 16 20 20C26 24 34 24 34 24C34 24 32 16 26 12C20 8 12 8 12 8Z" fill="url(#autumnGrad)" opacity="0.85" />
                    <path d="M20 20L14 10" stroke="url(#autumnGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    <path d="M20 20L28 14" stroke="url(#autumnGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                    <path d="M8 28C8 28 12 24 18 26C24 28 28 36 28 36" stroke="url(#autumnGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  </svg>
                ),
              },
              {
                season: "Winter",
                months: "Nov – Jan",
                treatment: "Feed & Moss Control",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Main axes */}
                    <line x1="20" y1="4" x2="20" y2="36" stroke="url(#winterGrad)" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="6" y1="12" x2="34" y2="28" stroke="url(#winterGrad)" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="6" y1="28" x2="34" y2="12" stroke="url(#winterGrad)" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Branch details */}
                    <line x1="20" y1="8" x2="16" y2="10" stroke="url(#winterGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                    <line x1="20" y1="8" x2="24" y2="10" stroke="url(#winterGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                    <line x1="20" y1="32" x2="16" y2="30" stroke="url(#winterGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                    <line x1="20" y1="32" x2="24" y2="30" stroke="url(#winterGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                    <circle cx="20" cy="20" r="3" fill="url(#winterGrad)" opacity="0.3" />
                    <circle cx="20" cy="20" r="1.5" fill="url(#winterGrad)" opacity="0.6" />
                  </svg>
                ),
              },
            ].map((v) => (
              <StaggerItem key={v.season}>
                <div className="group text-center p-6 rounded-2xl border border-gold/15 bg-cream/50 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(42,31,20,0.08)] hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center justify-center mb-4 w-16 h-16 mx-auto rounded-2xl bg-bg/80 border border-gold/10 group-hover:border-accent/20 group-hover:shadow-[0_4px_15px_rgba(90,124,90,0.12)] transition-all duration-500">
                    {v.icon}
                  </div>
                  <p className="text-sm font-heading font-bold text-fg mb-1">{v.season}</p>
                  <p className="text-[11px] text-muted tracking-wide uppercase mb-3">{v.months}</p>
                  <p className="text-xs text-fg-light leading-relaxed">{v.treatment}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
              <span className="px-4 py-2 rounded-full border border-gold/15 bg-cream/30">Standard: 5 visits</span>
              <span className="px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium">+ Premier: Annual Aeration</span>
              <span className="px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold font-medium">+ Ultimate: Annual Scarification</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="text-center text-sm text-muted mt-8 font-light">
              All programmes available on direct debit with up to <strong className="text-fg font-semibold">10% discount</strong>.
            </p>
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

      <ContactForm />
    </div>
  );
}
