"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/lib/site-data";

export default function ProofSection() {
  return (
    <section id="results" className="relative py-32 md:py-48 bg-bg-dark text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <p className="text-sm tracking-[0.3em] text-cream/70 uppercase mb-6">Cornish Case Studies</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-[1.08] mb-8">
              Don&apos;t Just Take Our<br />
              <em className="italic text-gold">Word For It.</em>
            </h2>
            <p className="text-lg text-cream/60 font-light font-heading italic">
              Real results from across North Cornwall. From moss eradication to complete renovations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.loc}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`group rounded-3xl overflow-hidden bg-cream/5 border border-cream/10 hover:border-gold/30 transition-all duration-500 ${i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-16'}`}
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <Image
                  src={c.img}
                  alt={`${c.title} — ${c.loc}`}
                  fill
                  className="object-cover warm-photo transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-gold/90 rounded-full text-xs font-semibold uppercase tracking-wider text-bg-dark">
                  {c.loc}
                </span>
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gold transition-colors">
                  {c.title}
                </h3>
                <p className="text-cream/60 font-light leading-relaxed mb-4">{c.desc}</p>
                <p className="text-xs text-cream/30 tracking-wider uppercase">{c.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
