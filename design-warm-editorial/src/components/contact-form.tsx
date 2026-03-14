"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import { serviceOptions } from "@/lib/site-data";
import { CheckCircle, ChevronRight, ChevronLeft, Phone, Shield, MessageSquare, Star, Clock, AlertTriangle } from "lucide-react";
import { SITE_CONFIG, getPhoneUrl, getWhatsAppUrl, GRAIN_BG_SVG } from "@/lib/config";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        service: form.service,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        consent: form.consent ? "yes" : "no",
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
    } catch {
      console.error("Form submission failed — check Netlify Forms config");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-bg overflow-hidden">
      {/* Background depth elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="blob-accent w-[500px] h-[500px] -top-40 -right-40 opacity-30" />
        <div className="blob-accent w-[400px] h-[400px] -bottom-20 -left-20 opacity-20" />
        {/* Subtle lawn texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: GRAIN_BG_SVG,
          backgroundSize: "256px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="editorial-line mx-auto mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Get in Touch</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-fg leading-[1.05] mb-6">
              Book Your Free<br /><em className="italic text-accent">Lawn Consultation</em>
            </h2>
            <p className="text-lg text-fg-light font-light font-heading italic max-w-xl mx-auto">
              Tell us about your lawn and we&apos;ll arrange a no-obligation visit.
            </p>
          </div>
        </ScrollReveal>

        {/* Split layout: Trust content + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Left: Trust signals & contact info ── */}
          <ScrollReveal className="lg:col-span-5" direction="left" distance={40}>
            <div className="space-y-8">

              {/* Direct contact card */}
              <div className="rounded-2xl border border-gold/15 bg-cream/50 backdrop-blur-sm p-8 shadow-sm">
                <h3 className="text-lg font-heading font-bold text-fg mb-6">Prefer to talk directly?</h3>
                <a href={getPhoneUrl()} className="flex items-center gap-4 group mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-gold/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xl font-heading font-bold text-fg group-hover:text-accent transition-colors">{SITE_CONFIG.phoneDisplay}</p>
                    <p className="text-xs text-muted">{SITE_CONFIG.hours.displayHours}</p>
                  </div>
                </a>
                <a href={getWhatsAppUrl()} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-fg group-hover:text-[#25D366] transition-colors">WhatsApp us</p>
                    <p className="text-xs text-muted">Usually reply within 1 hour</p>
                  </div>
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Fully Insured", desc: "Public liability covered" },
                  { icon: Star, label: "5-Star Rated", desc: "Across all reviews" },
                  { icon: Clock, label: "Free Consultation", desc: "No obligation visit" },
                  { icon: CheckCircle, label: "Results Guarantee", desc: "Or we make it right" },
                ].map((b) => (
                  <div key={b.label} className="rounded-xl border border-gold/10 bg-cream/30 p-4 hover:border-gold/25 transition-colors">
                    <b.icon className="w-5 h-5 text-accent mb-2" />
                    <p className="text-sm font-semibold text-fg">{b.label}</p>
                    <p className="text-xs text-muted mt-0.5">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: The form ── */}
          <ScrollReveal className="lg:col-span-7" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="rounded-3xl border border-gold/15 bg-cream/60 backdrop-blur-sm p-8 md:p-10 shadow-[0_20px_60px_rgba(42,31,20,0.06)]"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              <AnimatePresence mode="wait">
                {status === "error" ? (
                  <motion.div key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12" aria-live="assertive">
                    <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
                      <AlertTriangle className="w-10 h-10 text-amber-500" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-fg mb-3">Something Went Wrong</h3>
                    <p className="text-fg-light mb-6 text-lg max-w-sm mx-auto">
                      Your message couldn&apos;t be sent. Please try again or get in touch directly:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                      <a href={getPhoneUrl()} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-fg text-cream text-sm font-semibold hover:shadow-lg transition-all">
                        <Phone className="w-4 h-4" /> Call {SITE_CONFIG.phoneDisplay}
                      </a>
                      <a href={getWhatsAppUrl()} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:shadow-lg transition-all">
                        <MessageSquare className="w-4 h-4" /> WhatsApp Us
                      </a>
                    </div>
                    <button type="button" onClick={() => { setStatus("idle"); setStep(3); }}
                      className="px-6 py-3 rounded-full border-2 border-gold/30 text-sm text-muted hover:text-fg hover:border-fg transition-all"
                    >Try Again</button>
                  </motion.div>
                ) : status === "success" ? (
                  <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12" aria-live="polite">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-fg mb-3">Message Sent</h3>
                    <p className="text-fg-light mb-8 text-lg">Chris or Jess will be in touch within 24 hours.</p>
                    <button type="button" onClick={() => { setStatus("idle"); setStep(1); setForm({ service: "", name: "", email: "", phone: "", message: "", consent: false }); }}
                      className="px-6 py-3 rounded-full border-2 border-gold/30 text-sm text-muted hover:text-fg hover:border-fg transition-all"
                    >Send another enquiry</button>
                  </motion.div>
                ) : (
                  <motion.div key={`step-${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} role="group" aria-label={`Step ${step} of 3`}>

                    {/* Screen reader announcement */}
                    <div className="sr-only" aria-live="polite" aria-atomic="true">
                      Step {step} of 3: {step === 1 ? "Choose your service" : step === 2 ? "Enter your details" : "Tell us about your lawn"}
                    </div>

                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-8" role="navigation" aria-label="Form progress">
                      {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                            s === step ? "bg-fg text-cream scale-110" : s < step ? "bg-accent text-cream" : "bg-gold/10 text-muted"
                          }`}>{s}</div>
                          {s < 3 && <div className={`w-8 h-px transition-colors ${s < step ? "bg-accent" : "bg-gold/15"}`} />}
                        </div>
                      ))}
                    </div>

                    {/* Step 1: Service */}
                    {step === 1 && (
                      <div>
                        <p className="text-lg font-heading font-semibold text-fg mb-6">What service are you interested in?</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {serviceOptions.map((opt) => (
                            <button key={opt.label} type="button" onClick={() => { setForm({ ...form, service: opt.label }); setStep(2); }}
                              className={`group flex flex-col items-start gap-3 p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(74,103,65,0.1)] hover:-translate-y-0.5 ${
                                form.service === opt.label ? "border-accent bg-accent/8 shadow-md" : "border-gold/10 bg-cream/50 hover:border-accent/30"
                              }`}
                            >
                              <opt.icon className={`w-5 h-5 transition-colors ${form.service === opt.label ? "text-accent" : "text-muted group-hover:text-accent"}`} />
                              <span className="text-sm font-medium text-fg text-left">{opt.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Contact details */}
                    {step === 2 && (
                      <div className="space-y-5">
                        <p className="text-lg font-heading font-semibold text-fg mb-2">Your details</p>
                        {[
                          { key: "name" as const, label: "Full Name", type: "text", ph: "Chris Maynard", req: true },
                          { key: "email" as const, label: "Email", type: "email", ph: "chris@example.com", req: true },
                          { key: "phone" as const, label: "Phone (optional)", type: "tel", ph: "01234 567890", req: false },
                        ].map((f) => (
                          <div key={f.key}>
                            <label className="text-xs font-semibold text-muted tracking-wider uppercase mb-2 block">{f.label}</label>
                            <input
                              type={f.type}
                              required={f.req}
                              aria-required={f.req || undefined}
                              value={form[f.key]}
                              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                              placeholder={f.ph}
                              className="w-full px-5 py-3.5 rounded-xl border border-gold/15 bg-cream/60 text-fg outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted/40"
                            />
                          </div>
                        ))}
                        <div className="flex gap-3 pt-4">
                          <button type="button" onClick={() => setStep(1)} className="px-6 py-3.5 rounded-full border-2 border-gold/20 text-sm text-muted hover:text-fg hover:border-gold/40 hover:bg-cream/40 transition-all flex items-center gap-1.5">
                            <ChevronLeft className="w-4 h-4" /> Back
                          </button>
                          <button type="button" onClick={() => setStep(3)} disabled={!form.name || !form.email}
                            className="btn-shimmer flex-1 px-8 py-3.5 rounded-full bg-gradient-to-r from-fg to-bg-dark text-cream text-sm font-semibold disabled:opacity-40 hover:shadow-[0_8px_30px_rgba(42,31,20,0.25)] transition-all flex items-center justify-center gap-2"
                          >Continue <ChevronRight className="w-4 h-4" /></button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Message */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <p className="text-lg font-heading font-semibold text-fg mb-2">Tell us about your lawn</p>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Describe your lawn's current condition, size, and what you'd like to achieve..."
                          rows={5}
                          className="w-full px-5 py-3.5 rounded-xl border border-gold/15 bg-cream/60 text-fg outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted/40 resize-none"
                        />
                        {/* Consent checkboxes with glow */}
                        <div className="space-y-3 pt-1">
                          <label className="group flex items-start gap-3 cursor-pointer">
                            <div className="relative mt-0.5 has-[:checked]:[&>div]:bg-accent has-[:checked]:[&>div]:border-accent has-[:checked]:[&>div]:shadow-[0_0_12px_rgba(26,154,138,0.4)] has-[:checked]:[&_svg]:opacity-100">
                              <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                                className="sr-only"
                              />
                              <div className="w-5 h-5 rounded-md border-2 border-gold/30 bg-cream/60 flex items-center justify-center transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_8px_rgba(26,154,138,0.15)]">
                                <svg className="w-3 h-3 text-cream opacity-0 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M2 6l3 3 5-5" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-xs text-muted leading-relaxed group-hover:text-fg transition-colors">
                              I consent to Green Stripe Lawn Care storing my details to respond to this enquiry. <span className="text-fg/60">*</span>
                            </span>
                          </label>

                          <label className="group flex items-start gap-3 cursor-pointer">
                            <div className="relative mt-0.5 has-[:checked]:[&>div]:bg-accent has-[:checked]:[&>div]:border-accent has-[:checked]:[&>div]:shadow-[0_0_12px_rgba(26,154,138,0.4)] has-[:checked]:[&_svg]:opacity-100">
                              <input type="checkbox" className="sr-only" />
                              <div className="w-5 h-5 rounded-md border-2 border-gold/30 bg-cream/60 flex items-center justify-center transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_8px_rgba(26,154,138,0.15)]">
                                <svg className="w-3 h-3 text-cream opacity-0 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M2 6l3 3 5-5" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-xs text-muted leading-relaxed group-hover:text-fg transition-colors">
                              I&apos;d like to receive seasonal lawn care tips and offers (optional)
                            </span>
                          </label>

                          <p className="text-[11px] text-muted/60 pl-8">
                            Read our{" "}
                            <a href="/privacy" className="text-accent underline underline-offset-2 hover:text-accent-light transition-colors">privacy policy</a>
                            {" "}&amp;{" "}
                            <a href="/terms" className="text-accent underline underline-offset-2 hover:text-accent-light transition-colors">terms &amp; conditions</a>
                          </p>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <button type="button" onClick={() => setStep(2)} className="px-6 py-3.5 rounded-full border-2 border-gold/20 text-sm text-muted hover:text-fg hover:border-gold/40 hover:bg-cream/40 transition-all flex items-center gap-1.5">
                            <ChevronLeft className="w-4 h-4" /> Back
                          </button>
                          <button type="submit" disabled={status === "submitting" || !form.consent}
                            className="btn-shimmer flex-1 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-light text-cream text-sm font-semibold disabled:opacity-40 hover:shadow-[0_8px_30px_rgba(26,154,138,0.3)] transition-all"
                          >
                            {status === "submitting" ? (
                              <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                                Sending...
                              </span>
                            ) : "Send Enquiry →"}
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
