"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowRight, ChevronLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { calculatePrice } from "@/lib/calculate-price";

/* ═══════════════════════════════════════════════════════════
   INTERACTIVE QUOTE CALCULATOR — £75k Cinematic Edition
   Extreme glassmorphism, mesh glows, Apple easing,
   scale-105 hover cards, cinematic glow CTAs.
   ═══════════════════════════════════════════════════════════ */

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PRESETS = [
  { label: "Small", area: 40, desc: "Town garden", icon: "◻" },
  { label: "Medium", area: 80, desc: "Average lawn", icon: "◼" },
  { label: "Large", area: 150, desc: "Spacious garden", icon: "⬛" },
  { label: "XL", area: 250, desc: "Large property", icon: "⬜" },
];

const PROGRAMMES = [
  {
    name: "Standard",
    tagline: "Essential Seasonal Care",
    basePrice: 45,
    features: ["5 seasonal visits", "Feed & weed control", "Moss treatments", "Post-visit reports"],
    accent: false,
  },
  {
    name: "Premier",
    tagline: "Our Most Popular",
    basePrice: 65,
    features: ["Everything in Standard", "Annual solid tine aeration", "Targeted pH correction", "Priority scheduling"],
    accent: true,
  },
  {
    name: "Ultimate",
    tagline: "Championship-Grade",
    basePrice: 95,
    features: ["Everything in Premier", "Annual scarification", "Full soil testing", "Guaranteed results pledge"],
    accent: false,
  },
];

const ONE_OFF = [
  { name: "4-Pass Scarifying", base: 120 },
  { name: "Overseeding & Top Dressing", base: 85 },
  { name: "Moss & Weed Treatment", base: 60 },
  { name: "Lawn Renovation", base: 350 },
  { name: "Re-Turfing (per m²)", base: 15, perSqm: true },
];



/* ─── Step Indicator ─── */
function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`relative w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            s === current
              ? "bg-accent text-white shadow-[0_0_20px_rgba(26,154,138,0.4)]"
              : s < current
                ? "bg-accent/30 text-white/80"
                : "bg-white/[0.06] text-white/25 border border-white/[0.08]"
          }`}>
            {s < current ? "✓" : s}
            {s === current && (
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
            )}
          </div>
          {s < 3 && (
            <div className={`w-8 h-px transition-colors duration-500 ${s < current ? "bg-accent/40" : "bg-white/[0.06]"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState(80);
  const [customArea, setCustomArea] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(1);
  const [quoteType, setQuoteType] = useState<"programme" | "oneoff" | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  const handlePreset = (index: number) => {
    setSelectedPreset(index);
    setArea(PRESETS[index].area);
    setCustomArea("");
  };

  const handleCustomArea = (val: string) => {
    setCustomArea(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0 && num <= 1000) {
      setArea(num);
      setSelectedPreset(-1);
    }
  };

  const handleSlider = (val: string) => {
    const num = parseInt(val, 10);
    setArea(num);
    setCustomArea("");
    const closest = PRESETS.reduce((prev, curr, i) =>
      Math.abs(curr.area - num) < Math.abs(PRESETS[prev].area - num) ? i : prev, 0);
    setSelectedPreset(Math.abs(PRESETS[closest].area - num) <= 10 ? closest : -1);
  };

  const reset = () => {
    setStep(1);
    setArea(80);
    setCustomArea("");
    setSelectedPreset(1);
    setQuoteType(null);
    setSelectedService(null);
  };

  const getEstimate = useCallback(() => {
    if (quoteType === "programme" && selectedService) {
      const prog = PROGRAMMES.find((p) => p.name === selectedService);
      if (prog) return calculatePrice(prog.basePrice, area);
    }
    if (quoteType === "oneoff" && selectedService) {
      const svc = ONE_OFF.find((s) => s.name === selectedService);
      if (svc) return calculatePrice(svc.base, area, svc.perSqm);
    }
    return null;
  }, [quoteType, selectedService, area]);

  const sliderPercent = ((area - 20) / (300 - 20)) * 100;

  return (
    <ScrollReveal>
      <section className="relative py-24 md:py-36 bg-bg-dark overflow-hidden">

        {/* ── Cinematic mesh gradient glows ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#c1a773]/[0.03] blur-[100px]" />
        </div>

        {/* Film grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }} />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, ease: APPLE_EASE }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-accent/60 to-accent/0 mx-auto mb-10"
            />
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/30 mb-6 font-medium">
              Instant Quote
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5 leading-[1.1]">
              Get Your <em className="italic text-accent">Estimate</em>
            </h2>
            <p className="text-base text-white/40 font-light font-heading italic max-w-xl mx-auto leading-relaxed">
              Select your lawn size and service for an instant ballpark price.
              Exact pricing confirmed at your free consultation.
            </p>
          </div>

          {/* ── Glassmorphic Calculator Card ── */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">

            {/* Card inner glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
              {step === 3 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-accent/[0.06] blur-[80px]" />
              )}
            </div>

            <div className="relative z-10">
              <StepIndicator current={step} />

              <AnimatePresence mode="wait">
                {/* ── Step 1: Lawn Size ── */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: APPLE_EASE }}
                  >
                    <p className="text-sm font-medium text-white/60 mb-8">How big is your lawn?</p>

                    {/* Presets */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                      {PRESETS.map((p, i) => (
                        <motion.button
                          key={p.label}
                          type="button"
                          onClick={() => handlePreset(i)}
                          whileHover={{ scale: 1.05, y: -4 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.3, ease: APPLE_EASE }}
                          className={`cursor-pointer group flex flex-col items-center gap-2 p-6 rounded-2xl border transition-all duration-500 ${
                            selectedPreset === i
                              ? "border-accent/50 bg-accent/[0.08] shadow-[0_0_30px_rgba(26,154,138,0.15)]"
                              : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.06]"
                          }`}
                        >
                          <span className={`text-xl transition-all duration-300 ${selectedPreset === i ? "text-accent scale-110" : "text-white/20 group-hover:text-white/40"}`}>
                            {p.icon}
                          </span>
                          <span className="text-sm font-semibold text-white/90">{p.label}</span>
                          <span className="text-[11px] text-white/30">~{p.area}m²</span>
                          <span className="text-[10px] text-white/20">{p.desc}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Slider */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between text-xs text-white/25 mb-3">
                        <span>20m²</span>
                        <span className="text-lg font-heading font-bold text-white tabular-nums">{area}m²</span>
                        <span>300m²</span>
                      </div>
                      <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-200"
                            style={{ width: `${sliderPercent}%` }}
                          />
                        </div>
                        <input
                          ref={sliderRef}
                          type="range" min="20" max="300" step="5"
                          value={area}
                          onChange={(e) => handleSlider(e.target.value)}
                          className="relative z-10 w-full h-1.5 appearance-none bg-transparent cursor-pointer
                            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:border-2
                            [&::-webkit-slider-thumb]:border-white/20 [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(26,154,138,0.5)]
                            [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform
                            [&::-webkit-slider-thumb]:hover:scale-125
                            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full
                            [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white/20
                            [&::-moz-range-thumb]:shadow-[0_0_15px_rgba(26,154,138,0.5)] [&::-moz-range-thumb]:cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Custom input */}
                    <div className="flex items-center gap-3 mb-10">
                      <span className="text-xs text-white/25">Or enter exact:</span>
                      <input
                        type="number" min="10" max="1000" placeholder="e.g. 120"
                        value={customArea}
                        onChange={(e) => handleCustomArea(e.target.value)}
                        className="w-24 px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_20px_rgba(26,154,138,0.15)] transition-all placeholder:text-white/15"
                      />
                      <span className="text-xs text-white/25">m²</span>
                    </div>

                    <motion.button
                      type="button"
                      onClick={() => setStep(2)}
                      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(26,154,138,0.25)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3, ease: APPLE_EASE }}
                      className="cursor-pointer btn-shimmer w-full py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold shadow-[0_8px_30px_rgba(26,154,138,0.2)] hover:shadow-[0_12px_40px_rgba(26,154,138,0.35)] transition-all duration-500 flex items-center justify-center gap-2"
                    >
                      Choose Service <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}

                {/* ── Step 2: Service Selection ── */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: APPLE_EASE }}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <p className="text-sm font-medium text-white/60">What are you looking for?</p>
                      <span className="text-xs text-white/30 bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/[0.06]">{area}m² lawn</span>
                    </div>

                    {/* Type toggle */}
                    <div className="flex gap-3 mb-10">
                      {([
                        { type: "programme" as const, label: "Lawn Programme", desc: "Year-round care" },
                        { type: "oneoff" as const, label: "One-Off Treatment", desc: "Single service" },
                      ]).map((t) => (
                        <motion.button
                          key={t.type}
                          type="button"
                          onClick={() => { setQuoteType(t.type); setSelectedService(null); }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.3, ease: APPLE_EASE }}
                          className={`cursor-pointer flex-1 p-5 rounded-2xl border transition-all duration-500 text-left ${
                            quoteType === t.type
                              ? "border-accent/50 bg-accent/[0.08] shadow-[0_0_30px_rgba(26,154,138,0.12)]"
                              : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.06]"
                          }`}
                        >
                          <span className="text-sm font-semibold text-white/90 block">{t.label}</span>
                          <span className="text-[11px] text-white/30">{t.desc}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Programme options */}
                    {quoteType === "programme" && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: APPLE_EASE }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
                      >
                        {PROGRAMMES.map((prog) => {
                          const est = calculatePrice(prog.basePrice, area);
                          return (
                            <motion.button
                              key={prog.name}
                              type="button"
                              onClick={() => setSelectedService(prog.name)}
                              whileHover={{ scale: 1.05, y: -6 }}
                              whileTap={{ scale: 0.97 }}
                              transition={{ duration: 0.35, ease: APPLE_EASE }}
                              className={`cursor-pointer relative p-6 rounded-2xl border transition-all duration-500 text-left ${
                                selectedService === prog.name
                                  ? "border-accent/50 bg-accent/[0.08] shadow-[0_0_35px_rgba(26,154,138,0.15)]"
                                  : prog.accent
                                    ? "border-[#c1a773]/20 bg-[#c1a773]/[0.04]"
                                    : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12]"
                              }`}
                            >
                              {prog.accent && (
                                <span className="absolute -top-2.5 left-4 px-3 py-0.5 bg-gradient-to-r from-[#c1a773] to-[#d4b98a] text-bg-dark text-[9px] font-bold uppercase tracking-[0.15em] rounded-full">Popular</span>
                              )}
                              <span className="text-sm font-bold text-white/90 block mb-0.5">{prog.name}</span>
                              <span className="text-[10px] text-white/25 uppercase tracking-[0.15em] block mb-4">{prog.tagline}</span>
                              <span className="text-xl font-heading font-bold text-accent block mb-4">
                                £{est.low}–£{est.high}
                                <span className="text-[10px] text-white/25 font-normal ml-1.5">/ visit</span>
                              </span>
                              <ul className="space-y-2">
                                {prog.features.map((f) => (
                                  <li key={f} className="text-[11px] text-white/40 flex items-start gap-2">
                                    <span className="text-accent/70 mt-0.5 text-[10px]">✓</span> {f}
                                  </li>
                                ))}
                              </ul>
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    )}

                    {/* One-off options */}
                    {quoteType === "oneoff" && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: APPLE_EASE }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
                      >
                        {ONE_OFF.map((svc) => {
                          const est = calculatePrice(svc.base, area, svc.perSqm);
                          return (
                            <motion.button
                              key={svc.name}
                              type="button"
                              onClick={() => setSelectedService(svc.name)}
                              whileHover={{ scale: 1.03, y: -3 }}
                              whileTap={{ scale: 0.97 }}
                              transition={{ duration: 0.3, ease: APPLE_EASE }}
                              className={`cursor-pointer flex items-center justify-between p-5 rounded-2xl border transition-all duration-500 ${
                                selectedService === svc.name
                                  ? "border-accent/50 bg-accent/[0.08] shadow-[0_0_30px_rgba(26,154,138,0.12)]"
                                  : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12]"
                              }`}
                            >
                              <span className="text-sm font-medium text-white/80">{svc.name}</span>
                              <span className="text-sm font-heading font-bold text-accent">
                                £{est.low}–£{est.high}
                              </span>
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    )}

                    <div className="flex gap-3">
                      <motion.button
                        type="button"
                        onClick={() => setStep(1)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="cursor-pointer px-6 py-3.5 rounded-full border border-white/[0.08] text-sm text-white/40 hover:text-white/70 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-500 flex items-center gap-1.5"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => selectedService && setStep(3)}
                        disabled={!selectedService}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(26,154,138,0.25)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3, ease: APPLE_EASE }}
                        className="cursor-pointer btn-shimmer flex-1 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold disabled:opacity-30 shadow-[0_8px_30px_rgba(26,154,138,0.2)] hover:shadow-[0_12px_40px_rgba(26,154,138,0.35)] transition-all duration-500 flex items-center justify-center gap-2"
                      >
                        See My Estimate <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* ── Step 3: Result ── */}
                {step === 3 && (() => {
                  const est = getEstimate();
                  const annual = est ? { low: est.low * 5, high: est.high * 5 } : null;
                  const isProgramme = quoteType === "programme";
                  return (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: APPLE_EASE }}
                      className="text-center"
                    >
                      {/* Result glow */}
                      <div className="w-20 h-20 rounded-full bg-accent/[0.08] border border-accent/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(26,154,138,0.15)]">
                        <svg className="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                        </svg>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                        Your Estimate
                      </h3>
                      <p className="text-sm text-white/30 mb-10">
                        {selectedService} · {area}m² lawn
                      </p>

                      {est && (
                        <div className="mb-10">
                          <p className="text-5xl md:text-7xl font-heading font-bold text-accent mb-3 tracking-tight">
                            £{est.low}–£{est.high}
                          </p>
                          <p className="text-sm text-white/30">
                            {isProgramme ? "per visit (5 visits/year)" : "one-off treatment"}
                          </p>
                          {isProgramme && annual && (
                            <p className="text-xs text-white/20 mt-3">
                              Annual investment: <strong className="text-white/50">£{annual.low}–£{annual.high}</strong>
                              {" "}· Save up to 10% on direct debit
                            </p>
                          )}
                        </div>
                      )}

                      <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] p-6 mb-10 max-w-md mx-auto backdrop-blur-sm">
                        <p className="text-xs text-white/30 leading-relaxed">
                          This is a ballpark estimate based on your lawn size. Exact pricing is confirmed
                          during your <strong className="text-white/60">free, no-obligation consultation</strong> where
                          Chris assesses your lawn&apos;s specific needs in person.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <motion.div
                          whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(26,154,138,0.3)" }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.3, ease: APPLE_EASE }}
                        >
                          <Link
                            href="/contact"
                            className="cursor-pointer btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold shadow-[0_8px_30px_rgba(26,154,138,0.25)] transition-all duration-500"
                          >
                            Book Free Consultation <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                        <motion.button
                          type="button"
                          onClick={reset}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/[0.08] text-sm text-white/30 hover:text-white/60 hover:border-white/[0.15] transition-all duration-500"
                        >
                          <RotateCcw className="w-4 h-4" /> Start Over
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
