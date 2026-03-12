"use client";

import ImageComparison from "@/components/image-comparison";
import ScrollReveal from "@/components/scroll-reveal";

export default function ComparisonShowcase() {
  return (
    <section className="relative py-24 md:py-36 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="editorial-line mx-auto mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Real Results</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg leading-[1.1] mb-6">
              See the <em className="italic text-accent">Transformation</em>
            </h2>
            <p className="text-lg text-fg-light font-light font-heading italic max-w-xl mx-auto">
              Drag the slider to see the difference championship-grade care makes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <ImageComparison
            before="/images/real/weedy-lawn.jpg"
            after="/images/real/striped-lawn.jpg"
            beforeLabel="Before Treatment"
            afterLabel="After Green Stripe"
            className="shadow-[0_20px_60px_rgba(42,31,20,0.12)] border-2 border-gold/15"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted font-light">
              Moss-infested lawn in Bude → Championship stripes in 8 weeks
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
