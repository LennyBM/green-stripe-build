"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Scissors, Sprout, ShieldAlert, Sparkles, TreePine } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Complete Lawn Renovations",
    subtitle: "A Fresh Start for Degraded Turf",
    description:
      "When a lawn has deteriorated beyond seasonal treatment, we strip it back and rebuild from the soil up. Deep aeration, pH correction, precision grading, premium seed mixes — every step informed by 15 years managing championship greens. Recently completed a full renovation for a family home in Wadebridge.",
    icon: Sprout,
  },
  {
    num: "02",
    title: "4-Pass Scarifying",
    subtitle: "Our Signature Process",
    description:
      "Most lawn companies scarify once. We run four passes at graduated depths — removing deep thatch layers that standard equipment can't reach. The result is a root system that breathes, absorbs nutrients, and grows back thicker than ever. Our most requested service across the Bude and Widemouth Bay area.",
    icon: Scissors,
  },
  {
    num: "03",
    title: "Overseeding & Top Dressing",
    subtitle: "Championship-Grade Seed Blends",
    description:
      "We use the same cultivar blends specified for professional golf greens — fine-leaf perennial ryegrass and creeping red fescue — hand-broadcast and top-dressed with organic loam for perfect seed-to-soil contact. A staple of our Padstow and North Cornwall lawn programmes.",
    icon: Leaf,
  },
  {
    num: "04",
    title: "Moss & Weed Control",
    subtitle: "Targeted Seasonal Programmes",
    description:
      "We don't blanket-spray. Every treatment is soil-tested and seasonally calibrated — iron sulphate for moss in autumn, selective herbicides in spring. Precise application protects your lawn's biology while eradicating the problem at the root. Particularly effective on the damp, mossy lawns common around Launceston.",
    icon: ShieldAlert,
  },
  {
    num: "05",
    title: "Lawn Care Programmes",
    subtitle: "From Standard to Ultimate",
    description:
      "Bespoke year-round care plans tailored to your lawn's soil type, aspect, and usage. From quarterly feeds and treatments to our comprehensive Ultimate programme — continuous monitoring, seasonal interventions, and guaranteed results. Trusted by homeowners across Okehampton and Bideford.",
    icon: Sparkles,
  },
  {
    num: "06",
    title: "Re-Turfing",
    subtitle: "Instant Transformation",
    description:
      "When renovation isn't enough, we lay championship-grade cultivated turf on expertly prepared ground. Precision levelling, root-zone preparation, and our post-lay care programme ensure establishment within weeks, not months. Serving new builds and established homes across Holsworthy and beyond.",
    icon: TreePine,
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-32 sm:py-40 lg:py-48 overflow-hidden section-glow-top section-glow-bottom"
    >
      {/* Soft radial glow background */}
      <motion.div
        className="absolute inset-0 radial-glow-green"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand-white/95" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-earth uppercase mb-6">
            Properly Done
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-green-dark mb-8 leading-[1.1]">
            Built out of Pride, <br />
            Maintained with Precision.
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-green-base/70 font-light leading-relaxed">
            We service a 40-mile radius across North Cornwall and North Devon —
            Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford, and
            Holsworthy.
          </p>
        </motion.div>

        {/* R4: Editorial Service Blocks with breakout typography */}
        <div className="space-y-24 md:space-y-36">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 40, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-8 md:gap-16 group`}
              >
                {/* R4: Massive breakout number behind content */}
                <span
                  className="absolute -top-6 md:-top-10 left-0 text-[120px] md:text-[180px] font-heading font-bold text-brand-green-light/[0.06] leading-none select-none pointer-events-none z-0"
                  aria-hidden="true"
                >
                  {service.num}
                </span>

                {/* Icon Column */}
                <div className="flex-shrink-0 flex items-start gap-6 md:w-[100px] relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green-light/10 to-brand-sand/30 flex items-center justify-center border border-brand-green-light/10"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon className="w-8 h-8 text-brand-green-light" />
                  </motion.div>
                </div>

                {/* Content Column */}
                <div className="flex-1 max-w-xl relative z-10">
                  <p className="text-xs font-semibold tracking-[0.25em] text-brand-earth uppercase mb-3">
                    {service.subtitle}
                  </p>
                  <motion.h3
                    className="text-2xl md:text-4xl font-heading font-bold text-brand-green-dark mb-5 leading-tight"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-brand-green-base/70 leading-relaxed text-base md:text-lg font-light">
                    {service.description}
                  </p>

                  {/* Animated divider line */}
                  <motion.div
                    className="mt-8 h-px bg-gradient-to-r from-brand-green-light/40 to-transparent"
                    initial={{ width: 48 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
