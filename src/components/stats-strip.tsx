"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 150, suffix: "+", label: "Lawns Transformed" },
  { value: 15, suffix: " yrs", label: "Elite Turf Experience" },
  { value: 40, suffix: " mi", label: "Service Radius" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out: decelerate towards the end
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * target);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full py-16 sm:py-20 overflow-hidden bg-brand-green-dark"
    >
      {/* Mesh gradient backdrop */}
      <div className="absolute inset-0 mesh-gradient-dark" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center group"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-3 leading-none">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </p>
              <p className="text-sm sm:text-base text-brand-sand/50 font-medium tracking-[0.15em] uppercase">
                {stat.label}
              </p>
              {/* Subtle glow line */}
              <div className="mt-4 mx-auto h-px w-12 bg-gradient-to-r from-transparent via-brand-green-light/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
