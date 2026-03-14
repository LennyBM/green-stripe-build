"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import { reviews } from "@/lib/site-data";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   GOOGLE REVIEWS — £75k Cinematic Edition
   Glassmorphic cards, Apple easing, cinematic micro-interactions.
   ═══════════════════════════════════════════════════════════ */

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "text-[#FBBC04] fill-[#FBBC04]" : "text-white/10"
          }`}
        />
      ))}
    </div>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 150;
  const displayText = isLong && !expanded ? review.text.slice(0, 150) + "..." : review.text;

  const initials = review.name
    .split(" ")
    .filter((w) => !w.includes("&"))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const gradients = [
    "from-blue-500 to-blue-600",
    "from-emerald-500 to-emerald-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
    "from-teal-500 to-teal-600",
    "from-pink-500 to-pink-600",
    "from-indigo-500 to-indigo-600",
    "from-amber-500 to-amber-600",
  ];
  const gradientIndex = review.name.charCodeAt(0) % gradients.length;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.35, ease: APPLE_EASE }}
      className="flex-shrink-0 w-[320px] sm:w-[360px] rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/[0.12] transition-all duration-500 cursor-default"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradients[gradientIndex]} flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}>
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white/90 truncate">{review.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={review.rating} />
            <span className="text-[10px] text-white/25">{review.date}</span>
          </div>
        </div>
        <GoogleIcon className="w-5 h-5 flex-shrink-0 opacity-70" />
      </div>

      {/* Review text */}
      <p className="text-[13px] text-white/50 leading-relaxed mb-2">
        &ldquo;{displayText}&rdquo;
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer text-xs text-accent/80 font-medium hover:text-accent transition-colors duration-300"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      {/* Location */}
      <div className="mt-4 pt-3 border-t border-white/[0.05]">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.12em]">{review.location}, Cornwall</p>
      </div>
    </motion.div>
  );
}

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  };

  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="relative py-28 md:py-40 bg-bg-dark overflow-hidden">

      {/* ── Cinematic mesh glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#c1a773]/[0.03] blur-[80px]" />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "256px",
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, ease: APPLE_EASE }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-accent/60 to-accent/0 mb-10"
              />
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-6 font-medium">What Our Clients Say</p>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-[1.05]">
                Rated <em className="italic text-accent">{avgRating}</em> on Google
              </h2>
            </div>

            {/* Aggregate rating badge — glassmorphic */}
            <div className="flex items-center gap-4 pb-2">
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                <GoogleIcon className="w-7 h-7" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-heading font-bold text-white">{avgRating}</span>
                    <StarRating rating={5} />
                  </div>
                  <p className="text-[10px] text-white/25">{reviews.length} reviews</p>
                </div>
              </div>

              {/* Nav arrows — glassmorphic */}
              <div className="hidden md:flex gap-2">
                <motion.button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, ease: APPLE_EASE }}
                  className="cursor-pointer w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-white/40 hover:border-accent/40 hover:text-accent disabled:opacity-20 disabled:hover:border-white/[0.08] disabled:hover:text-white/40 transition-all duration-500"
                  aria-label="Scroll reviews left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, ease: APPLE_EASE }}
                  className="cursor-pointer w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-white/40 hover:border-accent/40 hover:text-accent disabled:opacity-20 disabled:hover:border-white/[0.08] disabled:hover:text-white/40 transition-all duration-500"
                  aria-label="Scroll reviews right"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Scrollable reviews */}
        <div className="relative">
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-6 -mx-2 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: APPLE_EASE }}
                viewport={{ once: true }}
                className="snap-start"
              >
                <ReviewCard review={review} index={i} />
              </motion.div>
            ))}
          </div>

          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />
          )}
        </div>

        {/* CTA — glassmorphic */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <motion.a
              href="https://g.page/r/greenstripelawns/review"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(26,154,138,0.15)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: APPLE_EASE }}
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-sm font-medium text-white/50 hover:border-accent/30 hover:text-accent transition-all duration-500"
            >
              <GoogleIcon className="w-4 h-4" />
              Leave Us a Review
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
