"use client";

import ImageComparison from "@/components/image-comparison";
import ScrollReveal from "@/components/scroll-reveal";

const comparisons = [
  {
    before: "/images/real/before-weedy.webp",
    after: "/images/real/after-striped.webp",
    beforeLabel: "Before Treatment",
    afterLabel: "After Green Stripe",
    caption: "Weedy, neglected lawn → Championship stripes in 8 weeks",
  },
  {
    before: "/images/real/before-mossy.webp",
    after: "/images/real/after-lush.webp",
    beforeLabel: "Before Treatment",
    afterLabel: "After Green Stripe",
    caption: "Heavy moss infestation → Lush, healthy green turf",
  },
  {
    before: "/images/real/turf-rock-before.jpg",
    after: "/images/real/turf-rock-after.jpg",
    beforeLabel: "Before Turfing",
    afterLabel: "After Green Stripe",
    caption: "New turf laid in Rock — extending an existing lawn for a holiday let",
  },
];

export default function ComparisonShowcase() {
  return (
    <section className="relative py-20 md:py-36 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="editorial-line mx-auto mb-6 md:mb-8" />
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted mb-4 md:mb-6">Real Results</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-fg leading-[1.1] mb-4 md:mb-6">
              See the <em className="italic text-accent">Transformation</em>
            </h2>
            <p className="text-base sm:text-lg text-fg-light font-light font-heading italic max-w-xl mx-auto">
              Drag the slider to see the difference championship-grade care makes.
            </p>
          </div>
        </ScrollReveal>

        {/* Three before/after sliders */}
        <div className="space-y-12 md:space-y-16">
          {comparisons.map((comp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group">
                <ImageComparison
                  before={comp.before}
                  after={comp.after}
                  beforeLabel={comp.beforeLabel}
                  afterLabel={comp.afterLabel}
                  className="shadow-[0_20px_60px_rgba(42,31,20,0.12)] border-2 border-gold/15"
                />
                <p className="mt-4 text-center text-sm text-muted font-light">
                  {comp.caption}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
