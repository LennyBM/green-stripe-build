"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/site-data";

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;
    
    const numericMatch = value.match(/^([\d,]+)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }
    
    const target = parseInt(numericMatch[1].replace(/,/g, ""), 10);
    const prefix = value.replace(numericMatch[1], "").replace(/[\d,]/g, "");
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = Math.round(target * progress);
      
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(current.toLocaleString() + prefix + suffix);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, value, suffix]);
  
  return <span ref={ref}>{display}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-bg-dark text-cream overflow-hidden">
      {/* Grain texture on dark */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "256px",
      }} />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-center group"
          >
            <p className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2 transition-transform duration-300 group-hover:scale-110">
              <AnimatedCounter value={s.value} />
            </p>
            <div className="w-8 h-0.5 bg-gold/30 mx-auto mb-3" />
            <p className="text-xs tracking-[0.2em] uppercase text-cream/50">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
