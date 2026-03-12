"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronRight,
  ChevronLeft,
  User,
  Wrench,
  MessageSquare,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  { id: "lawn-renovation", label: "Lawn Renovation", icon: "🌱" },
  { id: "scarifying", label: "4-Pass Scarifying", icon: "✂️" },
  { id: "overseeding", label: "Overseeding & Top Dressing", icon: "🌾" },
  { id: "moss-weed", label: "Moss & Weed Control", icon: "🛡️" },
  { id: "lawn-programme", label: "Lawn Care Programme", icon: "✨" },
  { id: "re-turfing", label: "Re-Turfing", icon: "🏗️" },
];

const steps = [
  { id: 1, label: "Service", icon: Wrench },
  { id: 2, label: "Details", icon: User },
  { id: 3, label: "Message", icon: MessageSquare },
];

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const canAdvance = () => {
    if (currentStep === 1) return selectedService !== "";
    if (currentStep === 2) return formData.name.trim() !== "" && formData.email.trim() !== "";
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canAdvance()) return;

    setStatus("submitting");
    setServerError("");

    try {
      const result = await submitContactForm({
        service: serviceOptions.find((s) => s.id === selectedService)?.label || selectedService,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (result.success) {
        setStatus("success");
      } else {
        setServerError(result.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 sm:py-40 lg:py-48 overflow-hidden section-glow-top"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-white" aria-hidden="true" />
      <div className="absolute inset-0 radial-glow-green" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-sand/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-earth uppercase mb-6">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-green-dark mb-8 leading-[1.1]">
            Book Your Free <br />
            <span className="text-brand-green-light italic">
              Lawn Consultation
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-brand-green-base/70 font-light leading-relaxed">
            Tell us about your lawn and we&apos;ll arrange a no-obligation
            visit to discuss how we can transform it.
          </p>
        </motion.div>

        {/* R12: Trust badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          {[
            { icon: Clock, text: "Response within 24hrs" },
            { icon: Shield, text: "No-obligation quote" },
            { icon: Star, text: "100+ 5-star reviews" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-sm text-brand-green-base/60"
            >
              <badge.icon className="w-4 h-4 text-brand-green-light" />
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Multi-step form card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-brand-sand/50"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-brand-green-light mx-auto mb-6" />
                <h3 className="text-2xl font-heading font-bold text-brand-green-dark mb-3">
                  Message Sent
                </h3>
                <p className="text-brand-green-base/70 mb-2">
                  Thank you! Chris or Jess will be in touch within 24 hours.
                </p>
                <p className="text-sm text-brand-green-base/50 mb-8">
                  We&apos;ll arrange a free, no-obligation lawn consultation at your property.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setCurrentStep(1);
                    setSelectedService("");
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="px-6 py-3 text-sm font-medium text-brand-green-light border border-brand-green-light rounded-full hover:bg-brand-green-light hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <div key="form-wizard">
                {/* Step indicators */}
                <div className="flex items-center justify-center gap-3 mb-10">
                  {steps.map((step, idx) => {
                    const StepIcon = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = currentStep > step.id;

                    return (
                      <div key={step.id} className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            if (step.id < currentStep) setCurrentStep(step.id);
                          }}
                          disabled={step.id > currentStep}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-400 ${
                            isActive
                              ? "bg-brand-green-light text-white scale-105 shadow-[0_4px_16px_rgba(44,95,60,0.3)]"
                              : isCompleted
                              ? "bg-brand-green-light/20 text-brand-green-light"
                              : "bg-brand-sand/50 text-brand-green-base/40"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <StepIcon className="w-4 h-4" />
                          )}
                          <span className="hidden sm:inline">{step.label}</span>
                        </button>
                        {idx < steps.length - 1 && (
                          <div
                            className={`w-8 h-px transition-colors duration-400 ${
                              isCompleted ? "bg-brand-green-light" : "bg-brand-sand"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait" custom={1}>
                    {/* Step 1: Service selection */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h3 className="text-lg font-heading font-bold text-brand-green-dark mb-6 text-center">
                          What service are you interested in?
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {serviceOptions.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => setSelectedService(service.id)}
                              className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                                selectedService === service.id
                                  ? "border-brand-green-light bg-brand-green-light/5 shadow-[0_4px_20px_rgba(44,95,60,0.15)]"
                                  : "border-brand-sand/50 bg-white/50 hover:border-brand-green-light/30"
                              }`}
                            >
                              <span className="text-2xl mb-2 block">{service.icon}</span>
                              <span className="text-sm font-medium text-brand-green-dark leading-tight block">
                                {service.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Contact details */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-5"
                      >
                        <h3 className="text-lg font-heading font-bold text-brand-green-dark mb-6 text-center">
                          Your contact details
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="contact-name"
                              className="block text-sm font-medium text-brand-green-dark mb-2"
                            >
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="contact-name"
                              name="name"
                              type="text"
                              required
                              autoComplete="name"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              placeholder="Chris Maynard"
                              className="w-full px-4 py-3.5 rounded-xl border border-brand-sand/70 bg-brand-white/80 text-brand-green-dark placeholder:text-brand-green-base/30 focus:border-brand-green-light focus:ring-2 focus:ring-brand-green-light/20 transition-all outline-none"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="contact-email"
                              className="block text-sm font-medium text-brand-green-dark mb-2"
                            >
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="contact-email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="chris@example.com"
                              className="w-full px-4 py-3.5 rounded-xl border border-brand-sand/70 bg-brand-white/80 text-brand-green-dark placeholder:text-brand-green-base/30 focus:border-brand-green-light focus:ring-2 focus:ring-brand-green-light/20 transition-all outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-sm font-medium text-brand-green-dark mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="01288 371343"
                            className="w-full px-4 py-3.5 rounded-xl border border-brand-sand/70 bg-brand-white/80 text-brand-green-dark placeholder:text-brand-green-base/30 focus:border-brand-green-light focus:ring-2 focus:ring-brand-green-light/20 transition-all outline-none"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Message */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h3 className="text-lg font-heading font-bold text-brand-green-dark mb-6 text-center">
                          Tell us about your lawn
                        </h3>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-medium text-brand-green-dark mb-2"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Tell us about your lawn — size, condition, and what you'd like to achieve..."
                          className="w-full px-4 py-3.5 rounded-xl border border-brand-sand/70 bg-brand-white/80 text-brand-green-dark placeholder:text-brand-green-base/30 focus:border-brand-green-light focus:ring-2 focus:ring-brand-green-light/20 transition-all outline-none resize-none"
                        />

                        {/* Summary of selections */}
                        <div className="mt-6 p-4 rounded-xl bg-brand-sand/20 border border-brand-sand/40">
                          <p className="text-xs font-semibold tracking-[0.2em] text-brand-earth uppercase mb-3">
                            Your Request Summary
                          </p>
                          <div className="flex flex-wrap gap-2 text-sm text-brand-green-dark">
                            <span className="px-3 py-1 bg-brand-green-light/10 rounded-full">
                              {serviceOptions.find((s) => s.id === selectedService)?.label}
                            </span>
                            <span className="px-3 py-1 bg-brand-green-light/10 rounded-full">
                              {formData.name}
                            </span>
                            <span className="px-3 py-1 bg-brand-green-light/10 rounded-full">
                              {formData.email}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 text-sm mt-4"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverError || "Something went wrong. Please try again."}</span>
                    </motion.div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-sand/30">
                    <button
                      type="button"
                      onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        currentStep === 1
                          ? "opacity-0 pointer-events-none"
                          : "text-brand-green-base/70 hover:text-brand-green-dark hover:bg-brand-sand/30"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (canAdvance()) setCurrentStep((s) => s + 1);
                        }}
                        disabled={!canAdvance()}
                        className="btn-shimmer flex items-center gap-2 px-8 py-3 bg-brand-green-light text-white rounded-full font-medium text-sm hover:bg-brand-green-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(44,95,60,0.3)] disabled:opacity-40 disabled:hover:scale-100"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-shimmer flex items-center gap-2 px-8 py-3 bg-brand-green-light text-white rounded-full font-medium text-sm hover:bg-brand-green-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(44,95,60,0.3)] disabled:opacity-50 disabled:hover:scale-100"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Book Consultation
                          </>
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
