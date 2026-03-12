"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Send, CheckCircle, Loader2 } from "lucide-react";
import { serviceOptions } from "@/lib/site-data";

export default function ContactForm() {
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
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-cream overflow-hidden">
      <div className="blob-accent w-[400px] h-[400px] top-10 -right-40" />

      <div className="max-w-2xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="editorial-line mx-auto mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-fg mb-6 leading-[1.1]">
            Book Your Free<br />
            <em className="italic text-accent">Lawn Consultation</em>
          </h2>
          <p className="text-lg text-fg-light font-light font-heading italic">
            Tell us about your lawn and we&apos;ll arrange a no-obligation visit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border-2 border-gold/20 rounded-3xl p-8 sm:p-12 shadow-lg"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                <CheckCircle className="w-14 h-14 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-heading font-bold text-fg mb-3">Message Sent</h3>
                <p className="text-fg-light mb-6">Chris or Jess will be in touch within 24 hours.</p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setStep(1);
                    setSelectedService("");
                    setForm({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="text-accent border-2 border-gold/30 rounded-full px-6 py-2.5 text-sm hover:bg-accent hover:text-cream hover:border-accent transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <div key="form">
                {/* Steps indicator */}
                <div className="flex items-center justify-center gap-3 mb-10">
                  {[1, 2, 3].map((s, idx) => (
                    <div key={s} className="flex items-center gap-3">
                      <button
                        onClick={() => s < step && setStep(s)}
                        disabled={s > step}
                        className={`w-9 h-9 rounded-full text-sm font-heading font-bold transition-all ${
                          s === step
                            ? "bg-fg text-cream"
                            : s < step
                              ? "bg-accent/20 text-accent"
                              : "bg-gold/10 text-muted/40"
                        }`}
                      >
                        {s}
                      </button>
                      {idx < 2 && <div className={`w-8 h-px ${s < step ? "bg-gold" : "bg-gold/20"}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                        <p className="text-center text-sm text-fg-light mb-6 font-heading italic">
                          What service are you interested in?
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {serviceOptions.map((s) => {
                            const Icon = s.icon;
                            return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setSelectedService(s.id)}
                              className={`p-5 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${
                                selectedService === s.id
                                  ? "border-accent bg-accent/5 shadow-md"
                                  : "border-gold/20 hover:border-gold/40"
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors ${
                                selectedService === s.id
                                  ? "bg-accent/20 border-2 border-accent/30"
                                  : "bg-accent/10 border-2 border-gold/20"
                              }`}>
                                <Icon className={`w-5 h-5 transition-colors ${
                                  selectedService === s.id ? "text-accent" : "text-accent/70"
                                }`} />
                              </div>
                              <span className="text-xs font-medium text-fg leading-tight block">{s.label}</span>
                            </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="space-y-5">
                        <p className="text-center text-sm text-fg-light mb-6 font-heading italic">
                          Your contact details
                        </p>
                        {[
                          { label: "Full Name", type: "text", key: "name" as const, ph: "Your name", req: true },
                          { label: "Email", type: "email", key: "email" as const, ph: "you@example.com", req: true },
                          { label: "Phone", type: "tel", key: "phone" as const, ph: "01288 371343", req: false },
                        ].map((f) => (
                          <div key={f.key}>
                            <label className="block text-sm font-medium text-fg mb-2">
                              {f.label} {f.req && <span className="text-red-500">*</span>}
                            </label>
                            <input
                              type={f.type}
                              required={f.req}
                              value={form[f.key]}
                              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                              placeholder={f.ph}
                              className="w-full px-4 py-3.5 rounded-xl border-2 border-gold/20 bg-cream text-fg placeholder:text-muted/40 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all"
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                    {step === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                        <p className="text-center text-sm text-fg-light mb-6 font-heading italic">
                          Tell us about your lawn
                        </p>
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Size, condition, and what you'd like to achieve..."
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-gold/20 bg-cream text-fg placeholder:text-muted/40 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all resize-none"
                        />
                        <label className="flex items-start gap-3 mt-5 cursor-pointer group">
                          <input
                            type="checkbox"
                            required
                            className="mt-1 w-4 h-4 rounded border-2 border-gold/30 accent-accent cursor-pointer"
                          />
                          <span className="text-xs text-fg-light leading-relaxed">
                            I consent to Green Stripe Lawn Care storing my details to respond to this enquiry. 
                            See our{" "}
                            <a href="/privacy" className="text-accent underline underline-offset-2 hover:text-accent-light transition-colors">
                              Privacy Policy
                            </a>
                            . Your data will never be shared with third parties.
                          </span>
                        </label>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between mt-10 pt-6 border-t-2 border-gold/10">
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      className={`flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={() => canNext() && setStep((s) => s + 1)}
                        disabled={!canNext()}
                        className="btn-shimmer flex items-center gap-2 px-8 py-3 bg-fg text-cream rounded-full font-medium text-sm hover:bg-bg-dark hover:scale-105 active:scale-95 transition-all disabled:opacity-30"
                      >
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-shimmer flex items-center gap-2 px-8 py-3 bg-fg text-cream rounded-full font-medium text-sm hover:bg-bg-dark hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                      >
                        {status === "submitting" ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                        ) : (
                          <><Send className="w-4 h-4" /> Book Consultation</>
                        )}
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
