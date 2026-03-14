"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gs-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("gs-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("gs-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-4 sm:max-w-md z-50"
        >
          <div className="flex items-center gap-3 rounded-full border border-gold/15 bg-surface/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(42,31,20,0.12)] px-4 py-2.5">
            <p className="text-xs text-muted flex-1 min-w-0">
              We use cookies.{" "}
              <Link href="/privacy" className="text-accent underline underline-offset-2">
                Learn more
              </Link>
            </p>
            <div className="flex gap-1.5 flex-shrink-0">
              <button
                onClick={accept}
                className="px-3 py-1.5 rounded-full bg-accent text-cream text-[11px] font-semibold hover:bg-accent-light transition-colors"
              >
                Accept
              </button>
              <button
                onClick={decline}
                className="px-3 py-1.5 rounded-full border border-gold/20 text-[11px] font-medium text-muted hover:text-fg transition-colors"
              >
                Essential
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
