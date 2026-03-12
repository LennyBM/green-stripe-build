"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function FounderStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax on the founder photo
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-32 sm:py-40 lg:py-48 overflow-hidden section-glow-top section-glow-bottom"
    >
      {/* Warm sand background with subtle gradient */}
      <div className="absolute inset-0 bg-brand-sand" aria-hidden="true" />
      <div className="absolute inset-0 radial-glow-sand" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image with Parallax + R6: Decorative elements */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* R6: Background decorative frame */}
            <div
              className="absolute -inset-4 md:-inset-6 rounded-[2rem] border-2 border-brand-earth/15 z-0"
              aria-hidden="true"
            />
            {/* R6: Offset accent rectangle */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-brand-green-light/10 rounded-2xl z-0"
              aria-hidden="true"
            />

            <motion.div
              className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] z-10"
              style={{ y: photoY, scale: photoScale }}
            >
              <Image
                src="/images/founder_photo.webp"
                alt="Chris and Jess Maynard of Green Stripe Lawn Care"
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-black/10 rounded-3xl pointer-events-none" />
            </motion.div>

            {/* R6: Floating quote badge */}
            <motion.div
              className="absolute -bottom-6 -left-4 md:left-8 z-20 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-brand-sand/50 max-w-[260px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote className="w-5 h-5 text-brand-green-light mb-2" aria-hidden="true" />
              <p className="text-sm text-brand-green-dark font-medium italic leading-relaxed">
                &ldquo;Every lawn gets the same care we&apos;d give a championship green.&rdquo;
              </p>
              <p className="text-xs text-brand-earth mt-2 font-semibold tracking-wider uppercase">
                — Chris Maynard
              </p>
            </motion.div>
          </motion.div>

          {/* Text with staggered children */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="text-sm font-semibold tracking-[0.3em] text-brand-earth uppercase mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The Green Stripe Standard
            </motion.p>

            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-green-dark mb-10 leading-[1.1]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              15 Years on the <br />
              Top Golf Courses. <br />
              <span className="text-brand-green-light italic">Now in Your Garden.</span>
            </motion.h2>

            <div className="space-y-7 text-lg text-brand-green-base/75 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Green Stripe Lawn Care is proudly owned and run by husband-and-wife
                team Chris and Jess Maynard. We treat every lawn with the same
                dedication and precision expected at championship venues.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <strong className="text-brand-green-dark font-semibold">Chris</strong> brings over 15 years of elite
                turf management experience, having prepared and maintained grass on
                some of the UK and international top golf courses. His technical
                understanding of soil science, aeration, and seeding guarantees a
                proper job.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <strong className="text-brand-green-dark font-semibold">Jess</strong> is the organizational heartbeat
                of the business. As the office manager, she ensures flawless
                scheduling, transparent communication, and unparalleled client
                care. When you call, you speak to us.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We hold ourselves to the exacting standards of the{" "}
                <strong className="text-brand-green-dark font-semibold">
                  British Association of Landscape Industries (BALI)
                </strong>
                . Every lawn we deliver is built to championship-grade
                specifications — the same precision expected at a BALI Grand
                Award-winning project.
              </motion.p>
            </div>

            <motion.div
              className="mt-12 pt-10 border-t border-brand-earth/20 flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div>
                <p className="font-bold text-brand-green-dark text-xl font-heading">
                  Chris & Jess
                </p>
                <p className="text-sm text-brand-earth uppercase tracking-[0.2em] mt-1">
                  Founders
                </p>
              </div>
              <div
                className="w-24 h-24 rounded-full border border-brand-earth/20 flex items-center justify-center p-2 shadow-inner"
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-earth/10 to-brand-sand flex items-center justify-center">
                  <span className="text-brand-earth/50 text-xs font-bold tracking-[0.15em] transform -rotate-45">
                    EST 2024
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
