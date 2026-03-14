"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   SPRING URGENCY BANNER — £75k Sliding Marquee
   Extreme glassmorphism, cinematic glows, Apple easing.
   Entire strip is a clickable CTA → /contact.
   ═══════════════════════════════════════════════════════════ */

const APPLE_EASE = [0.22, 1, 0.36, 1] as const;
const DEADLINE = new Date("2026-03-31T23:59:59");

function getTimeLeft() {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function formatCountdown(t: { days: number; hours: number; minutes: number; seconds: number }) {
  return `${t.days}d ${String(t.hours).padStart(2, "0")}h ${String(t.minutes).padStart(2, "0")}m ${String(t.seconds).padStart(2, "0")}s`;
}

/** A single repeating unit inside the marquee */
function MarqueeItem({ countdown }: { countdown: string }) {
  return (
    <span className="inline-flex items-center gap-8 sm:gap-12 px-8 sm:px-14 whitespace-nowrap">
      {/* Elegant separator diamond */}
      <span className="w-1 h-1 rotate-45 bg-[#c1a773]/60 flex-shrink-0" />

      <span className="text-[11px] sm:text-[13px] font-medium tracking-[0.08em] text-white/80">
        <strong className="font-bold text-white">Spring Programme 2026</strong>
        <span className="mx-3 text-white/15">|</span>
        Limited Spaces Remaining
      </span>

      <span className="text-[10px] sm:text-[11px] font-heading font-bold tabular-nums tracking-[0.12em] text-[#c1a773]/90">
        {countdown}
      </span>

      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-white/40 group-hover:text-white/70 transition-colors duration-500">
        Book Your Space
        <svg className="w-2.5 h-2.5 inline-block ml-1.5 -mt-px transition-transform duration-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </span>
  );
}

export default function SpringBanner() {
  const [time, setTime] = useState(getTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || time.expired) return null;
  const countdown = formatCountdown(time);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: APPLE_EASE }}
    >
      <Link href="/contact" className="group block cursor-pointer">
        <div className="relative overflow-hidden backdrop-blur-xl backdrop-saturate-150 bg-[#0a2e1a]/85 border-y border-white/[0.06]">

          {/* Cinematic mesh glow behind */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-accent/[0.06] blur-[80px]" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[150px] rounded-full bg-[#c1a773]/[0.05] blur-[60px]" />
          </div>

          {/* Shimmer overlay */}
          <div className="absolute inset-0 spring-banner-shimmer pointer-events-none" />

          {/* Marquee container */}
          <div className="relative py-3.5 sm:py-4">
            <div className="spring-marquee-track flex">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="spring-marquee-slide flex-shrink-0 flex" aria-hidden={i > 0}>
                  <MarqueeItem countdown={countdown} />
                </div>
              ))}
            </div>
          </div>

          {/* Premium edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#0a2e1a]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#0a2e1a]/90 to-transparent z-10 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}
