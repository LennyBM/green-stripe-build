"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { areas } from "@/lib/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function ServiceAreaMap() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="service-area-map"
      className="relative py-28 md:py-40 bg-bg overflow-hidden"
    >
      {/* ── Ambient blobs ── */}
      <div className="blob-accent w-[400px] h-[400px] -top-20 -left-32" />
      <div className="blob-accent w-[300px] h-[300px] -bottom-16 right-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Section header ── */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
        >
          <div className="editorial-line mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">
            Our Coverage
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-fg leading-[1.1]">
            Where We <em className="italic text-accent">Work</em>
          </h2>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* ── Left: Service area list ── */}
          <motion.div
            className="w-full lg:w-[380px] flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Base location callout */}
            <motion.div
              className="mb-8 p-6 rounded-2xl border-2 border-gold/15 bg-cream/60 backdrop-blur-md shadow-sm"
              custom={1}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-[0.15em] font-semibold">
                    Based In
                  </p>
                  <p className="text-base font-heading font-bold text-fg">
                    Widemouth Bay, EX23
                  </p>
                </div>
              </div>
              <p className="text-sm text-fg-light font-light leading-relaxed">
                Serving a <strong className="text-fg font-semibold">40-mile radius</strong> across
                North Cornwall &amp; North Devon.
              </p>
            </motion.div>

            {/* Area links */}
            <motion.div custom={2} variants={fadeUp}>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
                Service Areas
              </p>
              <ul className="space-y-2">
                {areas.map((area, i) => (
                  <motion.li key={area.slug} custom={3 + i * 0.3} variants={fadeUp}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-transparent hover:border-gold/20 hover:bg-cream/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors duration-300" />
                        <span className="text-sm font-medium text-fg group-hover:text-accent transition-colors duration-300">
                          {area.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted/60 group-hover:text-accent/60 transition-colors duration-300">
                        {area.tagline}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ── Right: Google Map embed ── */}
          <motion.div
            className="flex-1 w-full min-h-[400px] lg:min-h-[520px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={fadeUp}
          >
            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-gold/15 shadow-[0_20px_60px_rgba(42,31,20,0.12)]">
              {/* Subtle green tint overlay */}
              <div className="absolute inset-0 bg-accent/[0.03] pointer-events-none z-10 rounded-3xl" />

              {/* Inner glow ring */}
              <div className="absolute inset-0 ring-1 ring-inset ring-fg/5 rounded-3xl z-10 pointer-events-none" />

              <iframe
                title="Green Stripe Lawn Care — Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165000!2d-4.72!3d50.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c23b62f8fc81f%3A0x4e91ca3bbcbc5b1c!2sWidemouth+Bay%2C+Bude!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />

              {/* Bottom gradient fade for premium feel */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg/30 to-transparent pointer-events-none z-10 rounded-b-3xl" />
            </div>

            {/* Open in Google Maps link */}
            <motion.div className="mt-4 flex justify-end" custom={4} variants={fadeUp}>
              <a
                href="https://www.google.com/maps/place/Widemouth+Bay,+Bude/@50.77,-4.55,11z"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors duration-300"
              >
                <ExternalLink className="w-3 h-3" />
                Open in Google Maps
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
