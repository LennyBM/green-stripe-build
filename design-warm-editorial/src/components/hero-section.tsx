"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
      const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
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
      className={`group relative inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-medium overflow-hidden transition-all duration-300 ${
        variant === "primary"
          ? "bg-fg text-cream hover:shadow-[0_8px_40px_rgba(42,31,20,0.3)]"
          : "border-2 border-gold text-muted hover:text-fg hover:border-fg"
      }`}
    >
      {/* Shimmer sweep */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION — Cinematic Editorial
   ═══════════════════════════════════════════════════════════ */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  // Parallax layers at different speeds
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.4]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scrollArrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] lg:min-h-[105vh] flex items-end overflow-hidden">
      {/* ── Layer 1: Full-bleed background image ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/real/lawn-summer.jpg"
          alt="Championship-grade lawn in North Cornwall"
          fill
          priority
          className="object-cover warm-photo scale-110"
          sizes="100vw"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30" />
        {/* Extra dark overlay on mobile for text legibility */}
        <div className="absolute inset-0 bg-bg-dark/20 md:bg-transparent transition-colors" />
        <motion.div className="absolute inset-0 bg-bg-dark/40" style={{ opacity: overlayOpacity }} />
      </motion.div>

      {/* ── Layer 2: Organic decorative shapes ── */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]), background: "radial-gradient(circle, rgba(193,167,115,0.08) 0%, transparent 70%)" }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]), background: "radial-gradient(circle, rgba(45,87,44,0.06) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Layer 3: Content ── */}
      <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-20 lg:pb-28" style={{ y: textY }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">

          {/* ── Left: Typography block (7 cols) ── */}
          <div className="lg:col-span-7 lg:pr-16 pt-32 lg:pt-44">

            {/* Location pill — fade in */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gold/30 bg-cream/80 backdrop-blur-md text-xs tracking-[0.25em] uppercase text-muted font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Widemouth Bay · North Cornwall
              </span>
            </motion.div>

            {/* Main headline — split-text reveal */}
            <h1 className="text-[clamp(3.2rem,7.5vw,6.5rem)] font-heading font-bold leading-[0.92] tracking-[-0.02em] text-fg mb-8">
              <SplitTextReveal delay={0.4}>Creating a</SplitTextReveal>
              <br />
              <span className="inline-block overflow-hidden">
                <motion.em
                  className="italic font-normal text-accent inline-block"
                  initial={{ y: "120%", rotateX: 40 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  Lasting
                </motion.em>
              </span>{" "}
              <SplitTextReveal delay={0.8}>Legacy</SplitTextReveal>
            </h1>

            {/* Subhead — fade in with blur */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-fg-light/80 font-light leading-relaxed max-w-xl mb-8 sm:mb-14 font-heading italic"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Championship-grade lawn care from Chris Maynard — 15 years on the UK&apos;s finest golf courses,
              now bringing that artisan precision to your home.
            </motion.p>

            {/* CTAs — magnetic buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <MagneticButton href="/contact" variant="primary">Get a Quote</MagneticButton>
              <MagneticButton href="/services" variant="secondary">Explore Services</MagneticButton>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.span
                    key={i}
                    className="text-gold text-base"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + i * 0.1, type: "spring", stiffness: 400 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <div className="w-px h-5 bg-gold/30" />
              <span className="text-xs text-muted tracking-wide">5-star rated across Cornwall & Devon</span>
            </motion.div>
          </div>

          {/* ── Right: Floating image card (5 cols) ── */}
          <div className="hidden lg:block lg:col-span-5 relative lg:-ml-16 lg:mb-[-100px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: imgY }}
            >
              {/* Decorative ring behind image */}
              <motion.div
                className="absolute -inset-3 md:-inset-6 rounded-3xl border border-gold/15 z-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />

              {/* Main image */}
              <motion.div
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(42,31,20,0.25)] z-10"
                style={{ scale: imgScale }}
              >
                <Image
                  src="/images/real/striped-lawn-result.jpg"
                  alt="Championship-grade striped lawn by Green Stripe"
                  fill
                  priority
                  className="object-cover warm-photo"
                  style={{ objectPosition: "center 40%" }}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" />

                {/* "After Treatment" label */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-cream/90 backdrop-blur-md border border-gold/20 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs font-medium text-fg tracking-wider uppercase">After Treatment</span>
                    <span className="ml-auto text-xs text-muted">Wadebridge, 2024</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ── Floating stats badge ── */}
            <motion.div
              className="absolute -bottom-10 left-4 md:-left-10 z-20"
              style={{ y: badgeY }}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="bg-cream/95 backdrop-blur-xl border-2 border-gold/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(42,31,20,0.15)]">
                <p className="text-5xl font-heading font-bold text-fg mb-1 tabular-nums">
                  <AnimatedCounter target={15} suffix="+" />
                </p>
                <p className="text-[10px] text-muted tracking-[0.2em] uppercase leading-tight">
                  Years Elite<br />Turf Experience
                </p>
              </div>
            </motion.div>

            {/* ── Floating lawns counter ── */}
            <motion.div
              className="absolute -top-4 -right-4 md:right-4 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.6, type: "spring" }}
            >
              <div className="bg-accent/95 backdrop-blur-xl rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                <span className="text-lg font-heading font-bold text-cream tabular-nums">
                  <AnimatedCounter target={100} suffix="+" />
                </span>
                <span className="text-[8px] text-cream/70 tracking-wider uppercase">Lawns</span>
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
        <span className="text-[10px] text-muted/60 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
