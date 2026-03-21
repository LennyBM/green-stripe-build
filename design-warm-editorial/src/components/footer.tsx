"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { areas, services, socialLinks } from "@/lib/site-data";
import { SITE_CONFIG, getPhoneUrl, getEmailUrl } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1612] text-cream overflow-hidden">

      {/* ── Ambient glow effects ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] bg-accent/[0.04] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] bg-gold/[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[200px] bg-cream/[0.015] pointer-events-none" />

      {/* ── Subtle top border gradient ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">

        {/* ── Top: Brand + Glassmorphic Contact Card ── */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-20">

          {/* Brand column */}
          <motion.div
            className="lg:w-[380px] flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            variants={fadeUp}
          >
            <Image
              src="/images/real/circular-logo-footer.jpg"
              alt="Green Stripe Lawn Care"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover opacity-90 mb-5"
            />
            <p className="text-cream/35 font-light leading-relaxed text-sm mb-8">
              Championship-grade lawn care from Chris Maynard. 23 years in professional turf management, now bringing
              artisan precision to homes across North Cornwall &amp; North Devon.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group w-10 h-10 rounded-full border border-cream/[0.08] bg-cream/[0.03] backdrop-blur-sm flex items-center justify-center hover:border-gold/25 hover:bg-cream/[0.06] hover:scale-110 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4 text-cream/40 group-hover:text-gold/70 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Glassmorphic contact card */}
          <motion.div
            className="flex-1 w-full rounded-3xl border border-cream/[0.07] bg-gradient-to-br from-cream/[0.04] to-cream/[0.01] backdrop-blur-2xl p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={1}
            variants={fadeUp}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
              <a href={getPhoneUrl()} className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/[0.08] border border-accent/[0.12] flex items-center justify-center flex-shrink-0 group-hover:bg-accent/[0.15] group-hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 text-accent/80" />
                </div>
                <div>
                  <p className="text-[11px] text-cream/30 tracking-[0.15em] uppercase mb-1.5 font-medium">Call Us</p>
                  <p className="text-base font-heading font-semibold group-hover:text-gold transition-colors duration-300">{SITE_CONFIG.phoneDisplay}</p>
                </div>
              </a>
              <a href={getEmailUrl()} className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/[0.08] border border-gold/[0.12] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/[0.15] group-hover:scale-105 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gold/80" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-cream/30 tracking-[0.15em] uppercase mb-1.5 font-medium">Email</p>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors duration-300 break-all">{SITE_CONFIG.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cream/[0.04] border border-cream/[0.08] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cream/40" />
                </div>
                <div>
                  <p className="text-[11px] text-cream/30 tracking-[0.15em] uppercase mb-1.5 font-medium">Based In</p>
                  <p className="text-sm font-medium">{SITE_CONFIG.address.locality}, {SITE_CONFIG.address.region}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent mb-14" />

        {/* ── Link columns ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Service Areas */}
          <motion.div custom={0} variants={fadeUp}>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/25 mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="group text-sm text-cream/40 hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold/60 group-hover:scale-150 transition-all duration-300" />
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div custom={1} variants={fadeUp}>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/25 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-cream/40 hover:text-gold transition-colors duration-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div custom={2} variants={fadeUp}>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/25 mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Results", href: "/results" },
                { label: "Reviews", href: "/reviews" },
                { label: "Pricing", href: "/pricing" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/40 hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div custom={3} variants={fadeUp}>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/25 mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-cream/40 hover:text-gold transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-cream/40 hover:text-gold transition-colors duration-300">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Bottom divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream/[0.06] to-transparent mb-8" />

        {/* ── Bottom: Copyright ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-cream/20">
            © {new Date().getFullYear()} Green Stripe Lawn Care. All rights reserved.
          </p>
          <p className="text-xs text-cream/20">
            Website by{" "}
            <a href="https://www.peakemanagement.com" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-gold transition-colors duration-300">
              Peake Management
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
