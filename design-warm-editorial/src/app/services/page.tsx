"use client";

import ServicesSection from "@/components/services-section";

import ContactForm from "@/components/contact-form";
import ScrollReveal from "@/components/scroll-reveal";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-bg">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">What We Do</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-fg leading-[1.05]">
              Championship-Grade<br />
              <em className="italic text-accent">Lawn Services</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* All services — no limit */}
      <ServicesSection />

      <ContactForm />
    </div>
  );
}
