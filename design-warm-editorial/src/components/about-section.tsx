"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 bg-bg-alt overflow-hidden">
      <div className="blob-accent w-[350px] h-[350px] -bottom-20 -right-20" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image with parallax */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-4 md:-inset-6 rounded-3xl border-2 border-gold/20 z-0" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-accent/10 rounded-2xl z-0" />

            <motion.div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(42,31,20,0.2)] z-10"
              style={{ y: imgY, scale: imgScale }}
            >
              <Image
                src="/images/real/founders-jess-chris.jpg"
                alt="Chris and Jess Maynard"
                fill
                className="object-cover warm-photo"
                style={{ objectPosition: "center 20%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-fg/5 rounded-3xl" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-4 md:left-8 z-20 bg-cream rounded-2xl p-5 shadow-lg border-2 border-gold/20 max-w-[260px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Quote className="w-5 h-5 text-gold mb-2" />
              <p className="text-sm text-fg font-heading italic leading-relaxed">
                &ldquo;Every lawn gets the same care we&apos;d give a championship green.&rdquo;
              </p>
              <p className="text-xs text-muted mt-2 font-semibold tracking-wider uppercase">
                — Chris Maynard
              </p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">
              The Green Stripe Standard
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-fg mb-10 leading-[1.1]">
              15 Years on the<br />Top Golf Courses.<br />
              <em className="italic text-accent">Now in Your Garden.</em>
            </h2>

            <div className="space-y-6 text-lg text-fg-light leading-relaxed font-light">
              <p>Green Stripe Lawn Care is proudly owned and run by husband-and-wife team Chris and Jess Maynard.</p>
              <p>
                <strong className="text-fg font-semibold">Chris</strong> brings over 15 years of elite turf
                management experience, having prepared and maintained grass on some of the UK&apos;s top golf courses.
              </p>
              <p>
                <strong className="text-fg font-semibold">Jess</strong> is the organizational heartbeat of the
                business — flawless scheduling, transparent communication, and unparalleled client care.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t-2 border-gold/20 flex items-center justify-between">
              <div>
                <p className="text-xl font-heading font-bold text-fg">Chris & Jess</p>
                <p className="text-sm text-muted uppercase tracking-[0.2em] mt-1">Founders</p>
              </div>
              <Link
                href="/about"
                className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
              >
                Read our story →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
