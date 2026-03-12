"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ImageComparison } from "@/components/ui/image-comparison";
import { PhoneCall } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Hero content fades and shifts up as user scrolls away
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background — Parallax Next.js Image */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/images/hero_bg.webp"
          alt="Perfectly manicured championship-grade lawn at a luxury North Cornwall home"
          fill
          priority
          quality={85}
          className="object-cover object-[center_25%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/85 via-brand-green-dark/50 to-brand-green-dark/80" />
      {/* Subtle radial glow from top-left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(44,95,60,0.3)_0%,_transparent_60%)]" />

      {/* R1: Aurora floating orbs */}
      <div className="aurora-orbs" aria-hidden="true" />

      {/* R1: Film grain texture */}
      <div className="film-grain" aria-hidden="true" />

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-sand font-semibold tracking-[0.25em] uppercase text-sm mb-6">
              Widemouth Bay · North Cornwall
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.08] mb-8">
              Creating a Lasting{" "}
              <br className="hidden sm:block" />
              Legacy: Your Garden,{" "}
              <span className="text-brand-green-light italic">Reimagined.</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-sand/85 mb-10 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
              We create outside spaces that are comfortable, memorable and
              inspiring — gardens designed to be lived in, not just admired.
              From complete renovations to 4-pass scarifying.
            </p>

            {/* CTA's — R7: Shimmer sweep */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <motion.a
                href="#services"
                className="btn-shimmer w-full sm:w-auto px-10 py-4 bg-brand-green-light text-white rounded-full font-medium text-lg hover:bg-brand-green-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(44,95,60,0.4)] text-center"
                whileHover={{ boxShadow: "0 12px 40px rgba(44,95,60,0.5)" }}
              >
                Explore Services
              </motion.a>
              <a
                href="tel:+441288371343"
                className="btn-shimmer w-full sm:w-auto px-10 py-4 glassmorphism-dark text-white rounded-full font-medium text-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>01288 371343</span>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-lg drop-shadow-sm"
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="h-5 w-px bg-white/30" aria-hidden="true" />
              <p className="text-white/80 text-sm font-medium">
                5-star rated across North Cornwall &amp; Devon
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image Comparison */}
        <motion.div
          className="flex-1 w-full max-w-[600px] mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="p-2.5 glassmorphism-dark rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <ImageComparison
              beforeImage="/images/before_lawn.webp"
              afterImage="/images/after_lawn.webp"
              beforeAlt="Untidy lawn before treatment"
              afterAlt="Lush dark green lawn after Green Stripe treatment"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
