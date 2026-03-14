"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/lib/site-data";
import ScrollReveal from "@/components/scroll-reveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const AUTO_PLAY_INTERVAL = 6000;

export default function TestimonialStrip() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const total = reviews.length;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Swipe handling
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const review = reviews[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 bg-bg-dark text-cream overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      {/* Cinematic ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] rounded-full bg-gold/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-xs tracking-[0.3em] uppercase text-cream/70 mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-[1.1]">
              Trusted Across{" "}
              <em className="italic text-gold">Cornwall</em>
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel card */}
        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: APPLE_EASE,
              }}
              className="absolute inset-0"
            >
              <div className="p-8 md:p-12 rounded-3xl border border-cream/[0.08] bg-cream/[0.03] backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] mx-auto max-w-3xl">
                <Quote className="w-8 h-8 text-gold/25 mb-6" />
                <p className="text-cream/80 font-light leading-relaxed text-base md:text-lg italic font-heading mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <span key={j} className="text-gold text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="w-px h-4 bg-cream/20" />
                    <p className="text-sm text-cream/50 font-medium">
                      {review.name}
                    </p>
                  </div>
                  <p className="text-xs text-cream/30 uppercase tracking-[0.15em]">
                    {review.location}, Cornwall
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev arrow */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: APPLE_EASE }}
            className="cursor-pointer w-10 h-10 rounded-full border border-cream/[0.1] bg-cream/[0.04] backdrop-blur-xl flex items-center justify-center text-cream/40 hover:border-gold/40 hover:text-gold transition-all duration-500"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`cursor-pointer transition-all duration-500 rounded-full ${
                  i === activeIndex
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-cream/20 hover:bg-cream/40"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: APPLE_EASE }}
            className="cursor-pointer w-10 h-10 rounded-full border border-cream/[0.1] bg-cream/[0.04] backdrop-blur-xl flex items-center justify-center text-cream/40 hover:border-gold/40 hover:text-gold transition-all duration-500"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-cream/20 mt-4 font-mono tracking-wider">
          {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
