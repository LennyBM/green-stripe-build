"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { faqs } from "@/lib/site-data";
import ContactForm from "@/components/contact-form";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG, getPhoneUrl, getWhatsAppUrl, safeJsonLd } from "@/lib/config";

/* JSON-LD for FAQ page */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function AccordionItem({ q, a, isOpen, onClick, index }: { q: string; a: string; isOpen: boolean; onClick: () => void; index: number }) {
  return (
    <motion.div
      className="border-b-2 border-gold/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 rounded-lg"
      >
        <h3 className={`text-lg md:text-xl font-heading font-bold transition-colors duration-300 ${isOpen ? "text-accent" : "text-fg group-hover:text-accent"}`}>
          {q}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1.5"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-accent" : "text-muted"}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-fg-light font-light leading-relaxed pb-7 pr-12 text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">Knowledge</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-fg leading-[1.05] mb-8">
              Frequently Asked<br />
              <em className="italic text-accent">Questions</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-xl text-fg-light font-light font-heading italic max-w-2xl">
              Everything you need to know about our services, process, and what to expect.
              Can&apos;t find your answer? Get in touch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-20 bg-cream overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="bg-bg rounded-3xl border-2 border-gold/15 p-8 sm:p-12">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-24 md:py-36 bg-bg-dark text-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-[1.1]">
              Still Have <em className="italic text-gold">Questions?</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} blur>
            <p className="text-lg text-cream/60 font-light font-heading italic max-w-xl mx-auto mb-12">
              Chris is always happy to chat about lawns. Reach out by phone or WhatsApp
              and he&apos;ll get back to you personally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getPhoneUrl()}
                className="btn-shimmer inline-flex items-center gap-2 px-10 py-4 bg-cream text-fg rounded-full text-sm font-medium hover:bg-gold hover:text-bg-dark hover:shadow-[0_0_30px_rgba(193,167,115,0.3)] transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-cream/30 rounded-full text-sm font-medium text-cream/80 hover:bg-cream/10 hover:border-cream/50 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
