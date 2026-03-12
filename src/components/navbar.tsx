"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      aria-label="Primary navigation"
    >
      {/* Glassmorphism backdrop — fades in on scroll */}
      <motion.div
        className="absolute inset-0 bg-brand-green-dark/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-2xl"
        style={{ opacity: bgOpacity }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-7xl py-4 flex justify-between items-center">
        <a href="#main-content" className="font-black tracking-[0.2em] uppercase text-xl md:text-2xl font-heading text-white hover:opacity-80 transition-opacity">
          Green Stripe<span className="text-brand-green-light">.</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* R9: Animated underline nav links — desktop */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link hidden sm:inline-block text-sm font-medium tracking-wider text-white/80 hover:text-white transition-colors ${scrolled ? "opacity-100" : "opacity-70"
                }`}
            >
              {link.label}
            </a>
          ))}

          {/* Phone CTA */}
          <a
            href="tel:+441288371343"
            className="btn-shimmer flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wider hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Call Green Stripe Lawn Care at 01288 371343"
          >
            <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">01288 371343</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden relative z-10 overflow-hidden border-t border-white/10"
          >
            <div className="bg-brand-green-dark/95 backdrop-blur-2xl px-6 py-6 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.34, duration: 0.3 }}
                className="pt-3 border-t border-white/10 mt-3"
              >
                <a
                  href="tel:+441288371343"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 text-base font-medium text-brand-green-light hover:bg-white/5 rounded-xl transition-all duration-200"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call 01288 371343
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
