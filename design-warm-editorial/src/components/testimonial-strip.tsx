"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { reviews } from "@/lib/site-data";
import ScrollReveal from "@/components/scroll-reveal";
import { Quote } from "lucide-react";

const featured = reviews.slice(0, 3);

export default function TestimonialStrip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-bg-dark text-cream overflow-hidden">
      {/* Grain on dark section */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "256px",
      }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-xs tracking-[0.3em] uppercase text-cream/40 mb-4">What Our Clients Say</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-[1.1]">
              Trusted Across <em className="italic text-gold">Cornwall</em>
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          style={{ x }}
          className="flex flex-col md:flex-row gap-8"
        >
          {featured.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 0.12} className="flex-1">
              <div className="p-8 rounded-2xl border border-cream/10 bg-cream/[0.03] backdrop-blur-sm hover:bg-cream/[0.06] transition-all duration-500">
                <Quote className="w-6 h-6 text-gold/30 mb-4" />
                <p className="text-cream/80 font-light leading-relaxed mb-6 text-[15px] italic font-heading">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-gold text-xs">★</span>
                    ))}
                  </div>
                  <div className="w-px h-4 bg-cream/20" />
                  <p className="text-xs text-cream/50 font-medium">{r.name}, {r.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
