"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-4">
        <Link href="/" className="relative flex items-center">
          <Image
            src="/images/real/logo.jpg"
            alt="Green Stripe Lawn Care"
            width={180}
            height={35}
            className="h-8 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`relative py-1 transition-colors duration-300 ${
                isActive(l.href)
                  ? "text-fg font-medium"
                  : "text-fg-light hover:text-fg"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <a
          href="tel:+441288371343"
          className="hidden md:flex items-center gap-2 text-sm text-accent font-medium hover:text-accent-light transition-colors"
        >
          <Phone className="w-3.5 h-3.5" /> 01288 371343
        </a>

        <button className="md:hidden text-fg" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-bg border-t border-gold/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 py-1 ${
                    isActive(l.href)
                      ? "text-fg font-medium"
                      : "text-fg-light hover:text-fg"
                  }`}
                >
                  {isActive(l.href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                  {l.label}
                </Link>
              ))}
              <a href="tel:+441288371343" className="text-accent font-medium mt-2">
                01288 371343
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
