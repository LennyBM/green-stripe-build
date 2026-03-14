"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONFIG, getPhoneUrl } from "@/lib/config";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl">⚠️</span>
        </div>
        <h1 className="text-3xl font-heading font-bold text-fg mb-4">
          Something went wrong
        </h1>
        <p className="text-fg-light mb-8 font-light">
          We&apos;re sorry — an unexpected error occurred. Please try again or get in
          touch directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-accent text-cream text-sm font-semibold hover:bg-accent-light transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border-2 border-gold/30 text-sm text-fg hover:border-fg transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <p className="mt-8 text-xs text-muted">
          Or call us directly:{" "}
          <a href={getPhoneUrl()} className="text-accent font-medium">
            {SITE_CONFIG.phoneDisplay}
          </a>
        </p>
      </motion.div>
    </div>
  );
}
