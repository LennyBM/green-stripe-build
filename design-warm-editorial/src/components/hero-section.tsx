"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG, getPhoneUrl, GRAIN_BG_SVG } from "@/lib/config";

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER — counts up on mount
   ═══════════════════════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 800);
    return () => clearTimeout(timer);
  }, [target]);
  return <>{count}{suffix}</>;
}

/* ═══════════════════════════════════════════════════════════
   SPLIT TEXT REVEAL — word-by-word staggered animation
   ═══════════════════════════════════════════════════════════ */
function SplitTextReveal({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
  const words = children.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: 40 }}
            animate={{ y: "0%", rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAGNETIC BUTTON — follows cursor subtly
   ═══════════════════════════════════════════════════════════ */
function MagneticButton({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * 0.15);
        y.set((e.clientY - cy) * 0.15);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-medium overflow-hidden transition-all duration-300 ${
        variant === "primary"
          ? "btn-premium"
          : "border-2 border-cream/30 text-cream/80 hover:text-cream hover:border-cream/60 hover:bg-cream/5"
      }`}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION — Full Cinematic Dark Hero
   ═══════════════════════════════════════════════════════════ */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.3]);
  const scrollArrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-bg-dark">

      {/* ── Layer 1: Full-bleed cinematic background ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        {/* Static background image — replaces AI video per client request */}
        <img
          src="/images/real/hero-cornish-bungalow.webp"
          alt="Perfectly striped lawn outside a luxury Cornish home"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
          fetchPriority="high"
        />
        {/* Dark cinematic overlays — Apple-style */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/90 via-bg-dark/60 to-bg-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/20 to-bg-dark/40" />
        <motion.div className="absolute inset-0 bg-bg-dark/30" style={{ opacity: overlayOpacity }} />

        {/* Cinematic vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(42,31,20,0.5) 100%)"
        }} />
      </motion.div>

      {/* ── Layer 2: Mesh gradient accents ── */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 80]),
            background: "radial-gradient(circle, rgba(193,167,115,0.06) 0%, transparent 60%)"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -40]),
            background: "radial-gradient(circle, rgba(74,103,65,0.08) 0%, transparent 60%)"
          }}
        />
      </div>

      {/* ── Layer 3: Film grain ── */}
      <div className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none" style={{
        backgroundImage: GRAIN_BG_SVG,
        backgroundSize: "256px",
      }} />

      {/* ── Layer 4: Content ── */}
      <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 sm:py-32 lg:py-0" style={{ y: textY }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[100svh] lg:min-h-0">

          {/* ── Left: Typography block ── */}
          <div className="lg:col-span-7 lg:pr-20 pt-4 sm:pt-8 lg:pt-0">

            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-cream/15 bg-cream/5 backdrop-blur-md text-xs tracking-[0.25em] uppercase text-cream/60 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                North Cornwall & Devon
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="text-[clamp(2.5rem,7.5vw,6.5rem)] font-heading font-bold leading-[0.92] tracking-[-0.02em] text-cream mb-6 sm:mb-8">
              <SplitTextReveal delay={0.4}>Your Lawn</SplitTextReveal>
              <br />
              <span className="inline-block overflow-hidden">
                <motion.em
                  className="italic font-normal text-gold inline-block"
                  initial={{ y: "120%", rotateX: 40 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  Deserves
                </motion.em>
              </span>{" "}
              <SplitTextReveal delay={0.8}>Better</SplitTextReveal>
            </h1>

            {/* Subhead — aspirational, desire-driven */}
            <motion.p
              className="text-base sm:text-lg md:text-2xl text-cream/60 font-light leading-relaxed max-w-xl mb-8 sm:mb-10 font-heading italic"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Imagine stepping outside to a lawn so perfect, your neighbours pause to look.
              Championship-grade care — now available for homes across Cornwall &amp; Devon.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <MagneticButton href="/contact" variant="primary">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton href={getPhoneUrl()} variant="secondary">
                <Phone className="w-4 h-4" /> {SITE_CONFIG.phoneDisplay}
              </MagneticButton>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <div className="flex items-center gap-1" role="img" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.span
                    key={i}
                    className="text-gold text-base"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + i * 0.1, type: "spring", stiffness: 400 }}
                    aria-hidden="true"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <div className="w-px h-5 bg-cream/20" />
              <span className="text-xs text-cream/40 tracking-wide">5-star rated across Cornwall & Devon</span>
            </motion.div>
          </div>

          {/* ── Right: Frosted Glass Stats Card (hidden on mobile to reduce clutter) ── */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-accent/10 blur-sm" />

              <div className="relative rounded-3xl border border-cream/10 bg-cream/[0.04] backdrop-blur-xl p-10 shadow-[0_40px_100px_rgba(0,0,0,0.3)]">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cream/5 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-8">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { val: 23, suffix: "+", label: "Years\nExperience" },
                      { val: 120, suffix: "+", label: "Happy\nCustomers" },
                      { val: 40, suffix: "mi", label: "Service\nRadius" },
                      { val: 5, suffix: ".0", label: "Star\nRating" },
                    ].map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
                        className="text-center"
                      >
                        <p className="text-3xl font-heading font-bold text-cream tabular-nums">
                          <AnimatedCounter target={s.val} suffix={s.suffix} />
                        </p>
                        <p className="text-[10px] text-cream/40 tracking-[0.15em] uppercase mt-1 whitespace-pre-line leading-tight">
                          {s.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />

                  {/* Family-run trust message */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="text-center"
                  >
                    <p className="text-xs text-cream/30 tracking-wider uppercase mb-1">Family-Run Business</p>
                    <p className="text-sm font-heading font-semibold text-gold/80">Chris & Jess Maynard</p>
                    <p className="text-[10px] text-cream/25 mt-0.5">Based in Widemouth Bay, Bude</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: scrollArrowOpacity }}
      >
        <span className="text-[10px] text-cream/30 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-cream/20" />
        </motion.div>
      </motion.div>

      {/* ── Bottom gradient fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-[5]" />
    </section>
  );
}
