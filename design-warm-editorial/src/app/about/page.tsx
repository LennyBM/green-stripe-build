"use client";

import Image from "next/image";
import StatsSection from "@/components/stats-section";
import ContactForm from "@/components/contact-form";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-bg-alt overflow-hidden">
        <div className="blob-accent w-[400px] h-[400px] -top-20 -right-40" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Photo */}
            <ScrollReveal className="w-full lg:w-1/2 relative" direction="left" distance={60}>
              <div className="absolute -inset-4 md:-inset-6 rounded-3xl border-2 border-gold/20 z-0" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-accent/10 rounded-2xl z-0" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(42,31,20,0.2)] z-10">
                <Image
                  src="/images/real/founders-jess-chris.jpg"
                  alt="Chris and Jess Maynard — founders of Green Stripe Lawn Care"
                  fill
                  priority
                  className="object-cover warm-photo"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            {/* Copy */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal delay={0.2}>
                <div className="editorial-line mb-8" />
                <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">Our Story</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-fg mb-10 leading-[1.05]">
                  Built on<br />
                  <em className="italic text-accent">Championship Standards</em>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.4} blur>
                <div className="space-y-6 text-lg text-fg-light leading-relaxed font-light">
                  <p>
                    Green Stripe Lawn Care was founded by husband-and-wife team <strong className="text-fg font-semibold">Chris</strong> and <strong className="text-fg font-semibold">Jess Maynard</strong> with a single conviction: every home lawn deserves the same care and precision given to a championship golf green.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Chris's Story */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">The Greenkeeper</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg mb-12 leading-[1.1]">
              15 Years on the UK&apos;s <em className="italic text-accent">Finest Turf</em>
            </h2>
          </ScrollReveal>

          <div className="space-y-8 text-lg text-fg-light leading-relaxed font-light">
            <ScrollReveal delay={0.1}><p>
              Chris Maynard didn&apos;t learn lawn care from a textbook. He learned it knee-deep in fairways, bunker edges, and tournament-prep greens at some of the UK&apos;s most demanding golf courses.
            </p></ScrollReveal>
            <ScrollReveal delay={0.15}><p>
              Over 15 years, Chris mastered the art of turf management — understanding soil biology, microclimate adaptation, and the precise seasonal timing that separates good greens from championship greens. He learned to read a lawn the way a sommelier reads wine: the colour tells you about iron levels, the texture reveals thatch depth, the bounce reveals root structure.
            </p></ScrollReveal>
            <ScrollReveal delay={0.2}><p>
              When Chris and Jess moved to Widemouth Bay in 2024, they saw an opportunity. The lawns of North Cornwall and North Devon were crying out for the same level of expertise that Chris had been delivering to professional sports facilities for over a decade.
            </p></ScrollReveal>
            <ScrollReveal delay={0.25}><p>
              Green Stripe was born from that gap — bringing genuine championship-grade knowledge to residential and commercial properties within a 40-mile radius.
            </p></ScrollReveal>
          </div>

          {/* Timeline */}
          <ScrollReveal delay={0.1}>
            <div className="mt-20 border-l-2 border-gold/30 pl-8 space-y-12">
              {[
                { year: "2009", event: "Chris begins his greenkeeping career on professional golf courses" },
                { year: "2012", event: "Advances to head greenkeeper, managing championship-level course preparation" },
                { year: "2018", event: "Specialises in renovation and construction of new greens and tees" },
                { year: "2024", event: "Chris & Jess relocate to Widemouth Bay and found Green Stripe Lawn Care" },
                { year: "2025", event: "Serving 100+ lawns across 7 towns in North Cornwall and North Devon" },
              ].map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 0.1} direction="left" distance={20}>
                  <div className="relative">
                    <div className="absolute -left-[calc(2rem+6px)] top-1 w-3 h-3 rounded-full bg-gold border-2 border-cream" />
                    <p className="text-sm font-heading font-bold text-gold tracking-wider mb-2">{t.year}</p>
                    <p className="text-fg-light font-light">{t.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Jess's Role */}
      <section className="py-24 md:py-36 bg-bg-alt overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">The Heartbeat</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg mb-12 leading-[1.1]">
              Jess: <em className="italic text-accent">Flawless Client Care</em>
            </h2>
          </ScrollReveal>

          <div className="space-y-8 text-lg text-fg-light leading-relaxed font-light">
            <ScrollReveal delay={0.1}><p>
              Behind every perfectly striped lawn is a perfectly organised schedule. That&apos;s Jess.
            </p></ScrollReveal>
            <ScrollReveal delay={0.15}><p>
              Jess manages every client relationship, from the first enquiry to the annual programme review. She ensures every appointment runs on time, every communication is prompt and transparent, and every client feels genuinely valued — not just serviced.
            </p></ScrollReveal>
            <ScrollReveal delay={0.2}><p>
              Her attention to detail extends to the business operations — invoicing, scheduling, supplier relationships, and the digital presence that helps North Cornwall find Green Stripe. Chris often says the lawns wouldn&apos;t look half as good if Jess wasn&apos;t keeping everything else running flawlessly.
            </p></ScrollReveal>
          </div>

          {/* Fleet Image */}
          <ScrollReveal delay={0.3} className="mt-16">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(42,31,20,0.15)] border-2 border-gold/10">
              <Image
                src="/images/real/branded-van.webp"
                alt="Green Stripe branded transit van — serving North Cornwall and North Devon"
                fill
                className="object-cover warm-photo"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-cream/90 backdrop-blur-md border border-gold/20 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs font-medium text-fg tracking-wider uppercase">Our Fleet</span>
                  <span className="ml-auto text-xs text-muted">Widemouth Bay</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Our Values</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg mb-16 leading-[1.1]">
              What We <em className="italic text-accent">Stand For</em>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12" stagger={0.1}>
            {[
              { title: "No Shortcuts", desc: "We scarify four times when others do one. We soil-test before we treat. We use championship seed when others use standard. The extra effort shows." },
              { title: "Honest Communication", desc: "We'll tell you what your lawn actually needs — even if that means less work for us. No upselling, no scare tactics, just straight talk from people who know turf." },
              { title: "Local Knowledge", desc: "North Cornwall's coastal microclimates, heavy clay soils, and Atlantic exposure demand specialist understanding. We live here. We know the terrain." },
              { title: "Guaranteed Results", desc: "Every programme comes with a results guarantee. If we haven't delivered what we promised, we'll make it right — no arguments, no excuses." },
            ].map((v) => (
              <StaggerItem key={v.title}>
                <div className="border-t-2 border-gold/20 pt-8 hover:border-accent transition-colors duration-500">
                  <h3 className="text-xl font-heading font-bold text-fg mb-4">{v.title}</h3>
                  <p className="text-fg-light font-light leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                { label: "Fully Insured", icon: "🛡️" },
                { label: "DBS Checked", icon: "✓" },
                { label: "Free Consultations", icon: "💬" },
                { label: "Results Guarantee", icon: "⭐" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 text-sm text-muted">
                  <span className="w-10 h-10 rounded-full bg-accent/10 border border-gold/20 flex items-center justify-center text-base">
                    {badge.icon}
                  </span>
                  <span className="font-medium tracking-wide">{badge.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <StatsSection />
      <ContactForm />
    </div>
  );
}
