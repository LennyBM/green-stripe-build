"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import { Home, ArrowRight, Sparkles, CreditCard } from "lucide-react";

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sizes = [
  { label: "Small", sub: "Under 50m²", value: "small", icon: "◻" },
  { label: "Medium", sub: "50 – 100m²", value: "medium", icon: "◻◻" },
  { label: "Large", sub: "100m²+", value: "large", icon: "◻◻◻" },
];

const prices: Record<string, { standard: string; premier: string; ultimate: string }> = {
  small: { standard: "£275/yr", premier: "£345/yr", ultimate: "£425/yr" },
  medium: { standard: "£325/yr", premier: "£390/yr", ultimate: "£485/yr" },
  large: { standard: "£390/yr", premier: "£475/yr", ultimate: "£575/yr" },
};

export default function QuoteCalculatorCompact() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-bg-dark text-cream overflow-hidden">
      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[350px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-xs tracking-[0.3em] uppercase text-cream/40 mb-4 font-medium">
              Instant Estimate
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-[1.1] mb-3">
              What Will It <em className="italic text-gold">Cost?</em>
            </h2>
            <p className="text-cream/50 text-sm font-light max-w-md mx-auto">
              Select your lawn size for an instant ballpark. Exact pricing confirmed after your free consultation.
            </p>
          </div>
        </ScrollReveal>

        {/* Size selector */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg mx-auto mb-8">
            {sizes.map((s) => (
              <motion.button
                key={s.value}
                onClick={() => setSelectedSize(s.value)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: APPLE_EASE }}
                className={`cursor-pointer relative p-4 md:p-5 rounded-2xl border text-center transition-all duration-400 ${
                  selectedSize === s.value
                    ? "border-gold/50 bg-cream/[0.08] shadow-[0_0_30px_rgba(193,167,115,0.15)]"
                    : "border-cream/[0.08] bg-cream/[0.03] hover:border-cream/15"
                }`}
              >
                <p className="text-lg md:text-xl font-heading font-bold text-cream mb-1">{s.label}</p>
                <p className="text-[10px] text-cream/30">{s.sub}</p>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Results */}
        <AnimatePresence mode="wait">
          {selectedSize && (
            <motion.div
              key={selectedSize}
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: APPLE_EASE }}
            >
              <div className="max-w-lg mx-auto">
                {/* Prices in a compact row */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
                  {(["standard", "premier", "ultimate"] as const).map((tier) => (
                    <div
                      key={tier}
                      className={`text-center p-4 rounded-2xl border transition-all ${
                        tier === "premier"
                          ? "border-gold/40 bg-gold/[0.08]"
                          : "border-cream/[0.06] bg-cream/[0.02]"
                      }`}
                    >
                      <p className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-2 font-medium">
                        {tier}
                      </p>
                      <p className={`text-xl md:text-2xl font-heading font-bold ${
                        tier === "premier" ? "text-gold" : "text-cream/80"
                      }`}>
                        {prices[selectedSize][tier]}
                      </p>
                      <p className="text-[10px] text-cream/25 mt-1">5 visits/year</p>
                    </div>
                  ))}
                </div>

                {/* DD incentive */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/[0.08] border border-accent/20 mb-6">
                  <CreditCard className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-xs text-cream/70">
                    <strong className="text-accent font-semibold">Save up to 10%</strong>{" "}
                    with Direct Debit — set it and forget it
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(26,154,138,0.2)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block"
                  >
                    <Link
                      href="/contact"
                      className="btn-premium inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold transition-all duration-500"
                    >
                      Book Free Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                  <p className="text-[11px] text-cream/25 mt-3">
                    No commitment. Chris tailors exact pricing to your lawn.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Before selection prompt */}
        {!selectedSize && (
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream/[0.08] bg-cream/[0.03] text-xs text-cream/30">
                <Home className="w-3.5 h-3.5" />
                Tap your lawn size to see prices
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
