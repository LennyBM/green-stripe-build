"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Phone, Mail, MapPin, Menu, X, MessageCircle,
  ChevronRight, ChevronLeft, Send, CheckCircle, Loader2,
  Leaf, Scissors, Sprout, ShieldAlert, Sparkles, TreePine,
  PhoneCall, Facebook, Instagram, Quote,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */
const services = [
  { num: "01", title: "Complete Lawn Renovations", sub: "A Fresh Start for Degraded Turf", desc: "When a lawn has deteriorated beyond seasonal treatment, we strip it back and rebuild from the soil up. Deep aeration, pH correction, precision grading, premium seed mixes — every step informed by 15 years managing championship greens. Recently completed a full renovation for a family home in Wadebridge.", icon: Sprout },
  { num: "02", title: "4-Pass Scarifying", sub: "Our Signature Process", desc: "Most lawn companies scarify once. We run four passes at graduated depths — removing deep thatch layers that standard equipment can't reach. The result is a root system that breathes, absorbs nutrients, and grows back thicker than ever. Our most requested service across Bude and Widemouth Bay.", icon: Scissors },
  { num: "03", title: "Overseeding & Top Dressing", sub: "Championship-Grade Seed Blends", desc: "We use the same cultivar blends specified for professional golf greens — fine-leaf perennial ryegrass and creeping red fescue — hand-broadcast and top-dressed with organic loam. A staple of our Padstow and North Cornwall lawn programmes.", icon: Leaf },
  { num: "04", title: "Moss & Weed Control", sub: "Targeted Seasonal Programmes", desc: "We don't blanket-spray. Every treatment is soil-tested and seasonally calibrated — iron sulphate for moss in autumn, selective herbicides in spring. Particularly effective on the damp, mossy lawns common around Launceston.", icon: ShieldAlert },
  { num: "05", title: "Lawn Care Programmes", sub: "From Standard to Ultimate", desc: "Bespoke year-round care plans tailored to your lawn's soil type, aspect, and usage. From quarterly feeds to our comprehensive Ultimate programme — continuous monitoring and guaranteed results. Trusted by homeowners across Okehampton and Bideford.", icon: Sparkles },
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-4">
        <a href="#" className="font-heading font-bold text-lg uppercase tracking-[0.15em] text-fg-bright">
          Green Stripe<span className="text-accent-light">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm text-fg/70">
          {["Services", "About", "Results", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-fg-bright transition-colors duration-300 relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-light group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <a href="tel:+441288371343" className="hidden md:flex items-center gap-2.5 text-sm font-medium text-accent-light hover:text-fg-bright transition-colors">
          <PhoneCall className="w-4 h-4" /> 01288 371343
        </a>
        <button className="md:hidden text-fg-bright" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden overflow-hidden glass-strong">
            <div className="px-6 py-6 flex flex-col gap-4 text-sm text-fg/70">
              {["Services", "About", "Results", "Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-fg-bright">{l}</a>
              ))}
              <a href="tel:+441288371343" className="text-accent-light font-medium mt-2">01288 371343</a>
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOp = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: bgY, scale: bgScale }}>
        <Image src="/images/hero_bg.webp" alt="Championship-grade lawn" fill priority quality={85} className="object-cover object-[center_25%]" sizes="100vw" />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/60 to-bg/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(44,95,60,0.25)_0%,_transparent_60%)]" />

      {/* Aurora orbs */}
      <div className="aurora-orbs" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16" style={{ opacity: contentOp, y: contentY }}>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-fg font-semibold tracking-[0.25em] uppercase text-sm mb-6">
                Widemouth Bay · North Cornwall
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-fg-bright leading-[1.08] mb-8">
                Creating a Lasting{" "}
                <br className="hidden sm:block" />
                Legacy: Your Garden,{" "}
                <span className="text-accent-light italic">Reimagined.</span>
              </h1>
              <p className="text-lg sm:text-xl text-fg/75 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Championship-grade lawn care from Chris Maynard — 15 years on the UK&apos;s finest golf courses.
                From complete renovations to 4-pass scarifying, now bringing that precision to your home.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.a href="#contact"
                  className="btn-shimmer w-full sm:w-auto px-10 py-4 bg-accent-light text-fg-bright rounded-full font-medium text-lg hover:bg-accent hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(44,95,60,0.4)] text-center"
                  whileHover={{ boxShadow: "0 12px 40px rgba(44,95,60,0.5)" }}>
                  Get a Quote
                </motion.a>
                <a href="tel:+441288371343"
                  className="btn-shimmer w-full sm:w-auto px-10 py-4 glass text-fg-bright rounded-full font-medium text-lg hover:bg-[rgba(255,255,255,0.12)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
                  <PhoneCall className="w-5 h-5" /><span>01288 371343</span>
                </a>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-lg drop-shadow-sm">★</span>)}
                </div>
                <div className="h-5 w-px bg-fg-bright/20" />
                <p className="text-fg/60 text-sm">5-star rated across North Cornwall & Devon</p>
              </div>
            </motion.div>
          </div>

          {/* Image comparison placeholder */}
          <motion.div className="flex-1 w-full max-w-[560px]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}>
            <div className="glass rounded-3xl p-2.5 glow-border">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/images/after_lawn.webp" alt="Lush lawn after Green Stripe treatment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-fg-bright">
                  After Treatment
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <motion.div className="w-6 h-10 rounded-full border-2 border-fg/20 flex justify-center pt-2" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
          <motion.div className="w-1.5 h-3 bg-fg/50 rounded-full" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════════════════ */
function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="glow-line mb-0" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div className="text-center mb-20 md:mb-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-sm font-semibold tracking-[0.3em] text-earth uppercase mb-6">Properly Done</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-fg-bright mb-8 leading-[1.1]">
            Built out of Pride,<br /><span className="text-accent-light italic">Maintained with Precision.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-fg/60 font-light">
            Serving a 40-mile radius — Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford, and Holsworthy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass rounded-2xl p-8 glow-border-hover transition-all duration-500 hover:border-accent-light/30">
                {/* Number */}
                <span className="text-[80px] font-heading font-bold text-accent/[0.08] leading-none block mb-[-20px]">{s.num}</span>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent-light" />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-earth mb-2">{s.sub}</p>
                <h3 className="text-xl font-heading font-bold text-fg-bright mb-4 group-hover:text-accent-light transition-colors">{s.title}</h3>
                <p className="text-sm text-fg/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
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
    { value: "15+", label: "Years Managing Elite Greens" },
    { value: "100+", label: "Lawns Transformed" },
    { value: "40mi", label: "Service Radius" },
    { value: "5.0", label: "Star Rating" },
  ];
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="glow-line" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center">
            <p className="text-4xl md:text-5xl font-heading font-bold text-accent-light mb-2">{s.value}</p>
            <p className="text-xs tracking-[0.15em] uppercase text-fg/40">{s.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="glow-line" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT / FOUNDER
   ═══════════════════════════════════════════════════════════════ */
function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-bg-elevated" />
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Photo */}
          <motion.div className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <div className="absolute -inset-4 md:-inset-6 rounded-3xl border border-accent/20 z-0" />
            <motion.div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] z-10 glow-border" style={{ y: imgY }}>
              <Image src="/images/founder_photo.webp" alt="Chris and Jess Maynard" fill className="object-cover" style={{ objectPosition: "center 20%" }} sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 ring-1 ring-inset ring-fg-bright/5 rounded-3xl" />
            </motion.div>

            {/* Floating quote */}
            <motion.div className="absolute -bottom-6 -left-4 md:left-8 z-20 glass-strong rounded-2xl p-5 max-w-[260px] glow-border"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              <Quote className="w-5 h-5 text-accent-light mb-2" />
              <p className="text-sm text-fg font-medium italic leading-relaxed">&ldquo;Every lawn gets the same care we&apos;d give a championship green.&rdquo;</p>
              <p className="text-xs text-earth mt-2 font-semibold tracking-wider uppercase">— Chris Maynard</p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}>
            <p className="text-sm font-semibold tracking-[0.3em] text-earth uppercase mb-6">The Green Stripe Standard</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-fg-bright mb-10 leading-[1.1]">
              15 Years on the<br />Top Golf Courses.<br />
              <span className="text-accent-light italic">Now in Your Garden.</span>
            </h2>
            <div className="space-y-6 text-lg text-fg/70 leading-relaxed font-light">
              <p>Green Stripe Lawn Care is proudly owned by husband-and-wife team Chris and Jess Maynard.</p>
              <p><strong className="text-fg-bright font-semibold">Chris</strong> brings over 15 years of elite turf management, having maintained grass on the UK&apos;s top golf courses. His technical understanding of soil science, aeration, and seeding guarantees a proper job.</p>
              <p><strong className="text-fg-bright font-semibold">Jess</strong> is the organizational heartbeat — flawless scheduling, transparent communication, and unparalleled client care.</p>
            </div>
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
    { img: "/images/case_study_padstow.webp", loc: "Padstow", title: "Spring Renovation Success", desc: "A 4-pass scarify and bespoke overseeding program transformed a moss-heavy patch into a resilient, family-ready lawn.", time: "Completed in 3 Weeks" },
    { img: "/images/after_lawn.webp", loc: "Wadebridge", title: "Early Spring Moss Control", desc: "Targeted treatments yielded a dark green, lush lawn — now the centrepiece of the property.", time: "Seasonal Treatment" },
  ];

  return (
    <section id="results" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="glow-line" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-sm font-semibold tracking-[0.3em] text-fg/40 uppercase mb-6">Cornish Case Studies</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold leading-[1.08] text-fg-bright mb-8">
            Don&apos;t Just Take Our<br /><span className="text-accent-light italic">Word For It.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div key={c.loc}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group glass rounded-3xl overflow-hidden glow-border-hover transition-all duration-500">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <Image src={c.img} alt={`${c.title} — ${c.loc}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-fg-bright">{c.loc}</div>
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-heading font-bold mb-4 text-fg-bright group-hover:text-accent-light transition-colors">{c.title}</h3>
                <p className="text-fg/60 font-light leading-relaxed mb-4">{c.desc}</p>
                <p className="text-xs text-fg/30 tracking-wider uppercase">{c.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM
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
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-bg-elevated" />
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="glow-line" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-[0.3em] text-earth uppercase mb-6">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-fg-bright mb-8 leading-[1.1]">
            Book Your Free<br /><span className="text-accent-light italic">Lawn Consultation</span>
          </h2>
          <p className="text-lg text-fg/60 font-light">Tell us about your lawn and we&apos;ll arrange a no-obligation visit.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-3xl p-8 sm:p-12 glow-border">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-accent-light mx-auto mb-6" />
                <h3 className="text-2xl font-heading font-bold text-fg-bright mb-3">Message Sent</h3>
                <p className="text-fg/60 mb-6">Chris or Jess will be in touch within 24 hours.</p>
                <button onClick={() => { setStatus("idle"); setStep(1); setSelectedService(""); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-accent-light border border-accent-light/30 rounded-full px-6 py-2.5 text-sm hover:bg-accent-light hover:text-fg-bright transition-all">Send Another</button>
              </motion.div>
            ) : (
              <div key="form">
                {/* Steps */}
                <div className="flex items-center justify-center gap-3 mb-10">
                  {[1,2,3].map((s, idx) => (
                    <div key={s} className="flex items-center gap-3">
                      <button onClick={() => s < step && setStep(s)} disabled={s > step}
                        className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                          s === step ? "bg-accent-light text-fg-bright shadow-[0_0_20px_rgba(44,95,60,0.4)]"
                          : s < step ? "bg-accent/30 text-accent-light" : "bg-glass text-fg/30"
                        }`}>{s}</button>
                      {idx < 2 && <div className={`w-8 h-px ${s < step ? "bg-accent-light/40" : "bg-glass-border"}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                        <p className="text-center text-sm text-fg/50 mb-6">What service are you interested in?</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {serviceOptions.map(s => (
                            <button key={s.id} type="button" onClick={() => setSelectedService(s.id)}
                              className={`p-4 rounded-2xl border text-left transition-all hover:scale-[1.03] ${
                                selectedService === s.id
                                  ? "border-accent-light bg-accent/10 shadow-[0_0_15px_rgba(44,95,60,0.2)]"
                                  : "border-glass-border bg-glass hover:border-accent/30"
                              }`}>
                              <span className="text-2xl block mb-2">{s.icon}</span>
                              <span className="text-xs font-medium text-fg-bright">{s.label}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }} className="space-y-5">
                        <p className="text-center text-sm text-fg/50 mb-6">Your contact details</p>
                        {[
                          { label: "Full Name", type: "text", key: "name" as const, ph: "Chris Maynard", req: true },
                          { label: "Email", type: "email", key: "email" as const, ph: "chris@example.com", req: true },
                          { label: "Phone", type: "tel", key: "phone" as const, ph: "01288 371343", req: false },
                        ].map(f => (
                          <div key={f.key}>
                            <label className="block text-sm font-medium text-fg/70 mb-2">{f.label} {f.req && <span className="text-red-400">*</span>}</label>
                            <input type={f.type} required={f.req} value={form[f.key]}
                              onChange={e => setForm({...form, [f.key]: e.target.value})}
                              placeholder={f.ph}
                              className="w-full px-4 py-3.5 rounded-xl border border-glass-border bg-glass text-fg-bright placeholder:text-fg/20 focus:border-accent-light focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                          </div>
                        ))}
                      </motion.div>
                    )}
                    {step === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                        <p className="text-center text-sm text-fg/50 mb-6">Tell us about your lawn</p>
                        <textarea rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                          placeholder="Size, condition, and what you'd like to achieve..."
                          className="w-full px-4 py-3.5 rounded-xl border border-glass-border bg-glass text-fg-bright placeholder:text-fg/20 focus:border-accent-light focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between mt-10 pt-6 border-t border-glass-border">
                    <button type="button" onClick={() => setStep(s => Math.max(1, s - 1))}
                      className={`flex items-center gap-2 text-sm text-fg/50 hover:text-fg-bright transition-colors ${step === 1 ? "opacity-0" : ""}`}>
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    {step < 3 ? (
                      <button type="button" onClick={() => canNext() && setStep(s => s + 1)} disabled={!canNext()}
                        className="btn-shimmer flex items-center gap-2 px-8 py-3 bg-accent-light text-fg-bright rounded-full font-medium text-sm hover:bg-accent hover:scale-105 active:scale-95 transition-all shadow-[0_8px_32px_rgba(44,95,60,0.3)] disabled:opacity-30">
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button type="submit" disabled={status === "submitting"}
                        className="btn-shimmer flex items-center gap-2 px-8 py-3 bg-accent-light text-fg-bright rounded-full font-medium text-sm hover:bg-accent hover:scale-105 active:scale-95 transition-all shadow-[0_8px_32px_rgba(44,95,60,0.3)] disabled:opacity-50">
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
    <motion.a href="https://wa.me/441288371343" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-transform wa-pulse"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring" }}
      aria-label="Chat on WhatsApp">
      <MessageCircle className="w-6 h-6 text-white" />
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative bg-bg text-fg py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="glow-line" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <p className="font-heading font-bold text-xl uppercase tracking-widest mb-6 text-fg-bright">Green Stripe<span className="text-accent-light">.</span></p>
            <p className="text-sm opacity-70 leading-relaxed mb-4">Championship-grade lawn care from Widemouth Bay. Founded by Chris Maynard — 15 years on the UK&apos;s finest golf courses.</p>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-fg-bright">Service Areas</h3>
            <ul className="text-sm opacity-70 space-y-3">
              {areas.map(a => <li key={a} className="flex items-center gap-2.5"><MapPin className="w-3.5 h-3.5 text-accent-light shrink-0" />{a}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-fg-bright">Our Services</h3>
            <ul className="text-sm opacity-70 space-y-3">
              {services.map(s => <li key={s.num}>{s.title}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-fg-bright">Contact Us</h3>
            <ul className="text-sm opacity-70 space-y-4">
              <li><a href="tel:+441288371343" className="flex items-center gap-3 hover:text-fg-bright transition-colors"><Phone className="w-4 h-4 text-accent-light" /> 01288 371343</a></li>
              <li><a href="mailto:office@greenstripelawns.co.uk" className="flex items-center gap-3 hover:text-fg-bright transition-colors"><Mail className="w-4 h-4 text-accent-light" /> office@greenstripelawns.co.uk</a></li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[{ href: "https://www.facebook.com/greenstripelawns", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/greenstripelawns", icon: Instagram, label: "Instagram" },
                { href: "https://wa.me/441288371343", icon: MessageCircle, label: "WhatsApp" }
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent-light hover:scale-110 transition-all" aria-label={s.label}>
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-glass-border flex flex-col sm:flex-row justify-between gap-4 text-xs opacity-30">
          <p>&copy; {new Date().getFullYear()} Green Stripe Lawn Care</p>
          <a href="https://www.peakemanagement.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Site by Peake Management</a>
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
