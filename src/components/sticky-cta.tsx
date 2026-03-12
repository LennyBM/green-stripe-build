"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, MessageCircle, X } from "lucide-react";

export function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded options */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3"
              >
                <a
                  href="tel:+441288371343"
                  className="flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-xl backdrop-saturate-150 text-brand-green-dark rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/50 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 group"
                  aria-label="Call Green Stripe Lawn Care"
                >
                  <PhoneCall className="w-5 h-5 text-brand-green-light group-hover:rotate-12 transition-transform" />
                  <span className="font-medium text-sm whitespace-nowrap">
                    01288 371343
                  </span>
                </a>
                <a
                  href="https://wa.me/441288371343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-[#25D366]/90 backdrop-blur-xl backdrop-saturate-150 text-white rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.3)] border border-[#25D366]/50 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="WhatsApp Green Stripe Lawn Care"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-medium text-sm whitespace-nowrap">
                    WhatsApp
                  </span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-xl backdrop-saturate-150 text-brand-green-dark rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/50 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Go to contact form"
                >
                  <MessageCircle className="w-5 h-5 text-brand-green-light" />
                  <span className="font-medium text-sm whitespace-nowrap">
                    Send a Message
                  </span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB Button — Glassmorphism */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 bg-brand-green-light/90 backdrop-blur-xl text-white rounded-full shadow-[0_8px_32px_rgba(44,95,60,0.5)] cursor-pointer hover:bg-brand-green-base hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-brand-green-light/50"
            aria-label={
              isExpanded ? "Close contact options" : "Open contact options"
            }
            aria-expanded={isExpanded}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? (
                <X className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
