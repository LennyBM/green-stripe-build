"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Phone, Mail, MapPin, Menu, X, MessageCircle,
  ChevronRight, ChevronLeft, Send, CheckCircle, Loader2,
  Leaf, Scissors, Sprout, ShieldAlert, Sparkles, TreePine,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */
const services = [
  { num: "01", title: "Complete Lawn Renovations", sub: "A Fresh Start", desc: "When a lawn has deteriorated beyond seasonal treatment, we strip it back and rebuild from the soil up. Deep aeration, pH correction, precision grading, premium seed mixes — every step informed by 15 years managing championship greens. Recently completed a full renovation for a family home in Wadebridge.", icon: Sprout },
  { num: "02", title: "4-Pass Scarifying", sub: "Our Signature Process", desc: "Most lawn companies scarify once. We run four passes at graduated depths — removing deep thatch layers that standard equipment can't reach. The result is a root system that breathes, absorbs nutrients, and grows back thicker than ever. Our most requested service across Bude and Widemouth Bay.", icon: Scissors },
  { num: "03", title: "Overseeding & Top Dressing", sub: "Championship-Grade Blends", desc: "We use the same cultivar blends specified for professional golf greens — fine-leaf perennial ryegrass and creeping red fescue — hand-broadcast and top-dressed with organic loam. A staple of our Padstow and North Cornwall lawn programmes.", icon: Leaf },
  { num: "04", title: "Moss & Weed Control", sub: "Targeted Seasonal Programmes", desc: "We don't blanket-spray. Every treatment is soil-tested and seasonally calibrated — iron sulphate for moss in autumn, selective herbicides in spring. Particularly effective on the damp, mossy lawns common around Launceston.", icon: ShieldAlert },
  { num: "05", title: "Lawn Care Programmes", sub: "Standard to Ultimate", desc: "Bespoke year-round care plans tailored to your lawn's soil type, aspect, and usage. From quarterly feeds to our comprehensive Ultimate programme — continuous monitoring and guaranteed results. Trusted by homeowners across Okehampton and Bideford.", icon: Sparkles },
  { num: "06", title: "Re-Turfing", sub: "Instant Transformation", desc: "When renovation isn't enough, we lay championship-grade cultivated turf on expertly prepared ground. Precision levelling, root-zone preparation, and our post-lay care programme ensure establishment within weeks. Serving Holsworthy and beyond.", icon: TreePine },
];

const areas = ["Bude & Widemouth Bay", "Wadebridge", "Padstow", "Launceston", "Okehampton", "Bideford", "Holsworthy"];
const serviceOptions = [
  { id: "lawn-renovation", label: "Lawn Renovation", icon: "🌱" },
  { id: "scarifying", label: "4-Pass Scarifying", icon: "✂️" },
  { id: "overseeding", label: "Overseeding & Top Dressing", icon: "🌾" },
  { id: "moss-weed", label: "Moss & Weed Control", icon: "🛡️" },
  { id: "lawn-programme", label: "Lawn Care Programme", icon: "✨" },
  { id: "re-turfing", label: "Re-Turfing", icon: "🏗️" },
];

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="text-sm font-semibold tracking-[0.15em] uppercase text-fg">
          Green Stripe<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm text-muted">
          {["Services", "About", "Results", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-fg transition-colors duration-300">{l}</a>
          ))}
        </div>
        <a href="tel:+441288371343" className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors">
          <Phone className="w-3.5 h-3.5" /> 01288 371343
        </a>
        <button className="md:hidden text-fg" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-bg"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm">
              {["Services", "About", "Results", "Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-muted hover:text-fg">{l}</a>
              ))}
              <a href="tel:+441288371343" className="text-accent font-medium mt-2">01288 371343</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -50]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full" style={{ opacity, y }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20 lg:py-32">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border rounded-full text-xs text-muted tracking-wider uppercase mb-10">
                <MapPin className="w-3 h-3" /> North Cornwall & Devon
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-fg mb-8">
                Creating a{" "}
                <em className="font-normal italic">lasting</em>{" "}
                legacy for your garden
              </h1>

              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-lg mb-12">
                Championship-grade lawn care from Chris Maynard — 15 years on the UK&apos;s finest golf courses. Now bringing that precision to your home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-shimmer px-8 py-4 bg-fg text-bg rounded-full text-sm font-medium hover:bg-fg/90 transition-colors text-center">
                  Get a Quote
                </a>
                <a href="#services" className="px-8 py-4 border border-border rounded-full text-sm font-medium text-muted hover:text-fg hover:border-fg/30 transition-all text-center">
                  Our Services
                </a>
              </div>

              <div className="flex items-center gap-3 mt-12">
                {[1,2,3,4,5].map(i => <span key={i} className="text-accent text-sm">★</span>)}
                <span className="text-xs text-muted ml-1">5-star rated · North Cornwall & Devon</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/hero_bg.webp"
                alt="Championship-grade lawn at a luxury North Cornwall home"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-2xl p-5 shadow-sm">
              <p className="text-3xl font-light text-fg mb-1">15+</p>
              <p className="text-xs text-muted">Years elite turf<br />management</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-5 h-8 border border-muted/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2.5 bg-muted/50 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════════════════ */
function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 section-line">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-24 md:mb-36"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">What We Do</p>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-fg max-w-3xl">
            Built out of pride,<br />maintained with <em className="italic">precision.</em>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group border-t border-border py-12 md:py-16 grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-12 items-start"
              >
                <span className="text-xs text-muted font-light tracking-wider">{s.num}</span>
                <div className="flex items-center gap-4">
                  <Icon className="w-5 h-5 text-accent opacity-60" />
                  <h3 className="text-xl md:text-2xl font-normal text-fg group-hover:text-accent transition-colors duration-500">
                    {s.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">{s.sub}</p>
                  <p className="text-muted leading-relaxed text-[15px]">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════════════════ */
function Stats() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "100+", label: "Lawns Transformed" },
    { value: "40mi", label: "Service Radius" },
    { value: "5.0", label: "Star Rating" },
  ];
  return (
    <section className="py-20 border-y border-border bg-sand/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-light tracking-tight text-fg mb-2">{s.value}</p>
            <p className="text-xs tracking-[0.2em] uppercase text-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT / FOUNDER
   ═══════════════════════════════════════════════════════════════ */
function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 section-line">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border" style={{ y: imgY }}>
              <Image
                src="/images/founder_photo.webp"
                alt="Chris and Jess Maynard of Green Stripe Lawn Care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">The Green Stripe Standard</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-fg mb-10">
              15 years on the top golf courses.{" "}
              <em className="italic">Now in your garden.</em>
            </h2>

            <div className="space-y-6 text-[15px] text-muted leading-relaxed">
              <p>
                Green Stripe Lawn Care is proudly owned and run by husband-and-wife team Chris and Jess Maynard.
                We treat every lawn with the same dedication expected at championship venues.
              </p>
              <p>
                <strong className="text-fg font-medium">Chris</strong> brings over 15 years of elite turf management experience,
                having prepared and maintained grass on some of the UK&apos;s top golf courses. His technical understanding of
                soil science, aeration, and seeding guarantees a proper job.
              </p>
              <p>
                <strong className="text-fg font-medium">Jess</strong> is the organizational heartbeat of the business —
                flawless scheduling, transparent communication, and unparalleled client care.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-12 pl-6 border-l border-accent/30">
              <p className="text-2xl md:text-3xl font-light text-fg leading-snug italic">
                &ldquo;Every lawn gets the same care we&apos;d give a championship green.&rdquo;
              </p>
              <cite className="block mt-4 text-xs tracking-[0.2em] uppercase text-muted not-italic">
                — Chris Maynard, Founder
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOCIAL PROOF
   ═══════════════════════════════════════════════════════════════ */
function Proof() {
  const cases = [
    {
      img: "/images/case_study_padstow.webp",
      loc: "Padstow",
      title: "Spring Renovation Success",
      desc: "A successful Spring renovation featuring a 4-pass scarify and bespoke overseeding program. Transformed a moss-heavy patch into a resilient, family-ready lawn.",
      time: "Completed in 3 Weeks",
    },
    {
      img: "/images/after_lawn.webp",
      loc: "Wadebridge",
      title: "Early Spring Moss Control",
      desc: "Targeted moss control treatments applied during early spring. Yielded a dark green, lush lawn that now acts as the centrepiece of the property.",
      time: "Seasonal Treatment",
    },
  ];

  return (
    <section id="results" className="relative py-32 md:py-48 bg-sand/30 section-line">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">Case Studies</p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.02em] text-fg max-w-2xl">
            Don&apos;t just take our <em className="italic">word for it.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.loc}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group border border-border rounded-2xl overflow-hidden bg-surface hover:shadow-md transition-shadow duration-500"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={c.img}
                  alt={`${c.title} — ${c.loc}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-surface/90 backdrop-blur-sm border border-border rounded-full text-xs tracking-wider uppercase text-muted">
                  {c.loc}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-normal text-fg mb-3 group-hover:text-accent transition-colors">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{c.desc}</p>
                <p className="text-xs text-muted/60 tracking-wider uppercase">{c.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM (Multi-Step)
   ═══════════════════════════════════════════════════════════════ */
function Contact() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const canNext = () => {
    if (step === 1) return selectedService !== "";
    if (step === 2) return form.name.trim() !== "" && form.email.trim() !== "";
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">Get In Touch</p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-fg mb-6">
            Book your free <em className="italic">consultation</em>
          </h2>
          <p className="text-muted text-[15px]">Tell us about your lawn and we&apos;ll arrange a no-obligation visit.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-2xl p-8 md:p-12 bg-surface"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl text-fg mb-2">Message Sent</h3>
                <p className="text-sm text-muted mb-6">Chris or Jess will be in touch within 24 hours.</p>
                <button onClick={() => { setStatus("idle"); setStep(1); setSelectedService(""); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-sm text-accent hover:text-accent-light underline">Send another</button>
              </motion.div>
            ) : (
              <div key="form">
                {/* Step indicators */}
                <div className="flex items-center justify-center gap-2 mb-10">
                  {[1, 2, 3].map(s => (
                    <div key={s} className="flex items-center gap-2">
                      <button
                        onClick={() => s < step && setStep(s)}
                        disabled={s > step}
                        className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                          s === step ? "bg-fg text-bg" : s < step ? "bg-accent/10 text-accent" : "bg-border/50 text-muted/40"
                        }`}
                      >{s}</button>
                      {s < 3 && <div className={`w-8 h-px ${s < step ? "bg-accent/30" : "bg-border"}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                        <p className="text-center text-sm text-muted mb-6">What service are you interested in?</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {serviceOptions.map(s => (
                            <button key={s.id} type="button" onClick={() => setSelectedService(s.id)}
                              className={`p-4 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                                selectedService === s.id ? "border-fg bg-fg/5" : "border-border hover:border-muted/40"
                              }`}>
                              <span className="text-xl block mb-2">{s.icon}</span>
                              <span className="text-xs font-medium text-fg">{s.label}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="space-y-5">
                        <p className="text-center text-sm text-muted mb-6">Your contact details</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-muted mb-2 uppercase tracking-wider">Name *</label>
                            <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                              className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-fg placeholder:text-muted/30 focus:border-fg focus:ring-0 outline-none transition-colors"
                              placeholder="Chris Maynard" />
                          </div>
                          <div>
                            <label className="block text-xs text-muted mb-2 uppercase tracking-wider">Email *</label>
                            <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                              className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-fg placeholder:text-muted/30 focus:border-fg focus:ring-0 outline-none transition-colors"
                              placeholder="chris@example.com" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs text-muted mb-2 uppercase tracking-wider">Phone</label>
                          <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                            className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-fg placeholder:text-muted/30 focus:border-fg focus:ring-0 outline-none transition-colors"
                            placeholder="01288 371343" />
                        </div>
                      </motion.div>
                    )}
                    {step === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                        <p className="text-center text-sm text-muted mb-6">Tell us about your lawn</p>
                        <textarea rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                          className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-fg placeholder:text-muted/30 focus:border-fg focus:ring-0 outline-none transition-colors resize-none"
                          placeholder="Tell us about your lawn — size, condition, and what you'd like to achieve..." />
                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs bg-sand rounded-full text-muted">{serviceOptions.find(s => s.id === selectedService)?.label}</span>
                          <span className="px-3 py-1 text-xs bg-sand rounded-full text-muted">{form.name}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between mt-10 pt-6 border-t border-border">
                    <button type="button" onClick={() => setStep(s => Math.max(1, s - 1))}
                      className={`flex items-center gap-1 text-sm text-muted hover:text-fg transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}>
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    {step < 3 ? (
                      <button type="button" onClick={() => canNext() && setStep(s => s + 1)} disabled={!canNext()}
                        className="btn-shimmer flex items-center gap-1 px-6 py-3 bg-fg text-bg rounded-full text-sm font-medium hover:bg-fg/90 disabled:opacity-30 transition-all">
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button type="submit" disabled={status === "submitting"}
                        className="btn-shimmer flex items-center gap-1 px-6 py-3 bg-fg text-bg rounded-full text-sm font-medium hover:bg-fg/90 disabled:opacity-50 transition-all">
                        {status === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Book Consultation</>}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STICKY WHATSAPP CTA
   ═══════════════════════════════════════════════════════════════ */
function WhatsAppCTA() {
  return (
    <motion.a
      href="https://wa.me/441288371343"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform wa-pulse"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-border py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-6">Green Stripe<span className="text-accent">.</span></p>
            <p className="text-sm text-muted leading-relaxed mb-4">Championship-grade lawn care from Widemouth Bay. Founded by Chris Maynard — 15 years on the UK&apos;s finest golf courses.</p>
            <p className="text-xs text-muted/50">40-mile radius across North Cornwall & Devon</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">Service Areas</p>
            <ul className="text-sm text-muted space-y-2">
              {areas.map(a => (
                <li key={a} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-accent/50" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">Services</p>
            <ul className="text-sm text-muted space-y-2">
              {services.map(s => <li key={s.num}>{s.title}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">Contact</p>
            <ul className="text-sm text-muted space-y-3">
              <li><a href="tel:+441288371343" className="flex items-center gap-2 hover:text-fg transition-colors"><Phone className="w-3.5 h-3.5 text-accent/50" /> 01288 371343</a></li>
              <li><a href="mailto:office@greenstripelawns.co.uk" className="flex items-center gap-2 hover:text-fg transition-colors"><Mail className="w-3.5 h-3.5 text-accent/50" /> office@greenstripelawns.co.uk</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted/40">
          <p>&copy; {new Date().getFullYear()} Green Stripe Lawn Care</p>
          <a href="https://www.peakemanagement.com" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">Site by Peake Management</a>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Proof />
      <Contact />
      <WhatsAppCTA />
      <Footer />
    </main>
  );
}
