"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 80vh)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
          className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto px-4 pb-4 sm:pb-6">
            <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl bg-bg-dark/95 backdrop-blur-xl border border-cream/10 shadow-[0_-8px_40px_rgba(42,31,20,0.25)] px-4 sm:px-6 py-3 sm:py-3.5">
              <div className="hidden sm:block">
                <p className="text-xs text-cream/50 font-medium tracking-wider uppercase">
                  Spring spaces filling fast
                </p>
              </div>
              <p className="text-xs text-cream/50 font-medium sm:hidden">
                Spring spaces limited
              </p>
              <Link
                href="/contact"
                className="btn-premium inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 transition-all duration-300"
              >
                Get Your Free Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
