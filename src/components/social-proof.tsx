"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax on background texture
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 sm:py-40 lg:py-48 bg-brand-green-dark text-white overflow-hidden"
    >
      {/* Parallax background texture */}
      <motion.div
        className="absolute inset-0 h-[130%] -top-[15%] opacity-10"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        <Image
          src="/images/case_study_padstow.webp"
          alt=""
          fill
          className="object-cover mix-blend-overlay"
          aria-hidden="true"
        />
      </motion.div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient-dark" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold tracking-[0.3em] text-brand-sand/60 uppercase mb-6">
              Cornish Case Studies
            </p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-[1.08] mb-8">
              Don&apos;t Just Take Our <br />
              <span className="text-brand-green-light italic">Word For It.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-sand/70 font-light leading-relaxed">
              Real results from across North Cornwall. From moss eradication in
              Wadebridge to complete Spring renovations in Padstow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="btn-shimmer px-8 py-3.5 border border-brand-sand/20 rounded-full cursor-pointer hover:bg-brand-sand/10 hover:scale-105 active:scale-95 transition-all duration-300 inline-block backdrop-blur-sm text-sm font-medium tracking-wider"
            >
              Read More Stories
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Case Study 1 — Scale on scroll */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group block rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] cursor-pointer hover:border-white/20 transition-all duration-500"
          >
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <Image
                src="/images/case_study_padstow.webp"
                alt="Padstow Lawn Renovation — Before and after a complete spring renovation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-base/60 to-transparent" />
              <div className="absolute top-6 left-6 glassmorphism px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
                Padstow
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-brand-green-light transition-colors duration-500">
                Spring Renovation Success
              </h3>
              <p className="text-brand-sand/75 font-light leading-relaxed mb-6">
                A successful Spring renovation featuring a 4-pass scarify and
                bespoke overseeding program. Transformed a moss-heavy patch into
                a resilient, family-ready lawn.
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green-dark to-brand-green-base flex items-center justify-center font-bold text-brand-green-light text-sm"
                  aria-hidden="true"
                >
                  GS
                </div>
                <p className="text-sm font-medium text-brand-sand/60">
                  Completed in 3 Weeks
                </p>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 — Scale on scroll (delayed) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="group block rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] cursor-pointer hover:border-white/20 transition-all duration-500"
          >
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <Image
                src="/images/after_lawn.webp"
                alt="Wadebridge Moss Control — Lush dark green lawn after seasonal treatment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-base/60 to-transparent" />
              <div className="absolute top-6 left-6 glassmorphism px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
                Wadebridge
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-brand-green-light transition-colors duration-500">
                Early Spring Moss Control
              </h3>
              <p className="text-brand-sand/75 font-light leading-relaxed mb-6">
                Targeted moss control treatments applied during early spring.
                Yielded a dark green, lush lawn that now acts as the centrepiece
                of the property.
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green-dark to-brand-green-base flex items-center justify-center font-bold text-brand-green-light text-sm"
                  aria-hidden="true"
                >
                  GS
                </div>
                <p className="text-sm font-medium text-brand-sand/60">
                  Seasonal Treatment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
