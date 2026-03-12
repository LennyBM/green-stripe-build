"use client";

import ContactForm from "@/components/contact-form";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-bg-alt overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">Get In Touch</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-fg leading-[1.05] mb-8">
              Let&apos;s Talk About<br />
              <em className="italic text-accent">Your Lawn</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-xl text-fg-light font-light leading-relaxed max-w-2xl font-heading italic">
              Whether you need a one-off treatment or a year-round programme, we&apos;re always happy to chat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "01288 371343",
                href: "tel:+441288371343",
                sub: "Mon–Fri, 8am–6pm",
              },
              {
                icon: Mail,
                label: "Email",
                value: "office@greenstripelawns.co.uk",
                href: "mailto:office@greenstripelawns.co.uk",
                sub: "We reply within 24hrs",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Widemouth Bay",
                href: null,
                sub: "North Cornwall, EX23",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon–Fri",
                href: null,
                sub: "8:00 AM – 6:00 PM",
              },
            ].map((c) => {
              const Icon = c.icon;
              const Wrapper = c.href ? "a" : "div";
              const wrapperProps = c.href ? { href: c.href } : {};
              return (
                <StaggerItem key={c.label}>
                  <Wrapper
                    {...wrapperProps}
                    className="block p-6 rounded-2xl bg-cream border-2 border-gold/10 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-gold/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-2">{c.label}</p>
                    <p className="font-heading font-bold text-fg text-sm mb-1">{c.value}</p>
                    <p className="text-xs text-fg-light">{c.sub}</p>
                  </Wrapper>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Form */}
      <ContactForm />
    </div>
  );
}
