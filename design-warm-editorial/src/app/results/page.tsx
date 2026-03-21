"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { expandedCaseStudies } from "@/lib/site-data";
import ContactForm from "@/components/contact-form";
import ImageComparison from "@/components/image-comparison";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { MapPin, Clock, Ruler, ArrowRight, X } from "lucide-react";

function CaseStudyModal({ study, onClose }: { study: typeof expandedCaseStudies[0]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-bg-dark/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative z-10 bg-cream rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gold/20"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
      >
        <div className="relative h-64 sm:h-80">
          <Image src={study.img} alt={study.title} fill className="object-cover warm-photo" sizes="(max-width: 768px) 100vw, 700px" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/70 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center hover:bg-cream transition-colors"
          >
            <X className="w-4 h-4 text-fg" />
          </button>
          <div className="absolute bottom-6 left-6">
            <span className="px-4 py-1.5 bg-gold/90 rounded-full text-xs font-semibold uppercase tracking-wider text-bg-dark">
              {study.loc}
            </span>
          </div>
        </div>
        <div className="p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-fg mb-4">{study.title}</h3>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock className="w-4 h-4 text-gold" /> {study.time}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Ruler className="w-4 h-4 text-gold" /> {study.area}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4 text-gold" /> {study.loc}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">Service</p>
            <p className="text-fg font-medium">{study.service}</p>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">The Story</p>
            <p className="text-fg-light leading-relaxed font-light">{study.fullDesc}</p>
          </div>

          <div className="mt-10 pt-6 border-t-2 border-gold/10">
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-3 bg-fg text-cream rounded-full text-sm font-medium hover:bg-bg-dark hover:shadow-[0_0_20px_rgba(42,31,20,0.2)] transition-all"
            >
              Book Your Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ResultsPage() {
  const [selectedStudy, setSelectedStudy] = useState<typeof expandedCaseStudies[0] | null>(null);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-bg-dark text-cream overflow-hidden">
        <div className="blob-accent w-[500px] h-[500px] -top-40 -right-40 opacity-30" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <p className="text-sm tracking-[0.3em] text-cream/40 uppercase mb-6">Our Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-8">
              Real Results,<br />
              <em className="italic text-gold">Real Lawns</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-xl text-cream/60 font-light font-heading italic max-w-2xl">
              Every project tells a story. From moss eradication to complete ground-up renovations —
              here&apos;s the proof behind the promise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Before/After comparisons */}
      <section className="py-16 md:py-28 bg-bg-alt overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-12">
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted mb-3 md:mb-4">Interactive Comparison</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-fg">
                Drag to <em className="italic text-accent">Compare</em>
              </h2>
            </div>
          </ScrollReveal>

          {/* 3 before/after sliders */}
          <div className="space-y-10 md:space-y-14">
            <ScrollReveal delay={0.1}>
              <ImageComparison
                before="/images/real/yeolmbridge-before.jpg"
                after="/images/real/yeolmbridge-after.jpg"
                beforeLabel="Before"
                afterLabel="After"
                className="shadow-[0_20px_60px_rgba(42,31,20,0.15)] border-2 border-gold/15"
              />
              <p className="mt-3 text-center text-sm text-muted font-light">
                Yeolmbridge — Drought-damaged lawn to healthy, lush sward
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ImageComparison
                before="/images/real/bude-before.jpg"
                after="/images/real/bude-after.jpg"
                beforeLabel="Before"
                afterLabel="After"
                className="shadow-[0_20px_60px_rgba(42,31,20,0.15)] border-2 border-gold/15"
              />
              <p className="mt-3 text-center text-sm text-muted font-light">
                Bude — Complete lawn renovation and recovery
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ImageComparison
                before="/images/real/turf-rock-before.jpg"
                after="/images/real/turf-rock-after.jpg"
                beforeLabel="Before"
                afterLabel="After"
                className="shadow-[0_20px_60px_rgba(42,31,20,0.15)] border-2 border-gold/15"
              />
              <p className="mt-3 text-center text-sm text-muted font-light">
                Rock — New turf laid, extending an existing lawn for a holiday let
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {expandedCaseStudies.map((study, i) => (
              <StaggerItem key={study.title}>
                <motion.button
                  onClick={() => setSelectedStudy(study)}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group rounded-3xl overflow-hidden bg-bg border-2 border-gold/10 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(42,31,20,0.1)] transition-all duration-500 text-left w-full cursor-explore"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={study.img}
                      alt={study.title}
                      fill
                      className="object-cover warm-photo transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
                    <span className="absolute top-6 left-6 px-4 py-1.5 bg-gold/90 rounded-full text-xs font-semibold uppercase tracking-wider text-bg-dark">
                      {study.loc}
                    </span>
                  </div>
                  <div className="p-8 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-fg group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-fg-light font-light leading-relaxed mb-6 line-clamp-2">{study.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-xs text-muted">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {study.time}</span>
                        <span className="flex items-center gap-1"><Ruler className="w-3 h-3" /> {study.area}</span>
                      </div>
                      <span className="text-sm font-medium text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cinematic Cornwall Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/real/van-rainbow-cornwall.jpg"
          alt="Green Stripe van under a rainbow in the Cornwall countryside"
          fill
          className="object-cover warm-photo"
          style={{ objectPosition: "center 60%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-bg-dark/20 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <p className="text-cream/80 text-sm tracking-[0.3em] uppercase mb-3">Proudly Serving</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-cream leading-tight">
              North Cornwall &<br />
              <em className="italic text-gold-light">North Devon</em>
            </h2>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedStudy && <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />}
      </AnimatePresence>

      <ContactForm />
    </div>
  );
}
