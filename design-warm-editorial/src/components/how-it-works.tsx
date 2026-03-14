"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Sparkles, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Book",
    desc: "Request your free, no-obligation lawn consultation. We'll find a time that suits you.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Plan",
    desc: "Chris visits your lawn in person, assesses its condition, and recommends a tailored programme.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Transform",
    desc: "Watch your lawn transform month by month with championship-grade care and seasonal treatments.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <div className="editorial-line mx-auto mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg leading-[1.1]">
              Three Simple <em className="italic text-accent">Steps</em>
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: APPLE_EASE }}
                className="relative text-center p-8 md:p-10 rounded-3xl border-2 border-gold/10 bg-cream/50 hover:border-accent/25 hover:shadow-[0_16px_50px_rgba(42,31,20,0.08)] transition-all duration-500 group"
              >
                {/* Step number watermark */}
                <span className="absolute top-3 right-5 text-[64px] font-heading font-bold text-gold/[0.06] leading-none select-none pointer-events-none">
                  {step.num}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/15 group-hover:shadow-[0_0_20px_rgba(26,154,138,0.12)] transition-all duration-500">
                  <step.icon className="w-6 h-6 text-accent" strokeWidth={1.8} />
                </div>

                {/* Connecting line (between cards) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gold/30 to-gold/0 z-20" />
                )}

                <h3 className="text-xl font-heading font-bold text-fg mb-3">{step.title}</h3>
                <p className="text-sm text-fg-light leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(26,154,138,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: APPLE_EASE }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="btn-premium inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold transition-all duration-500"
              >
                Book Your Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
