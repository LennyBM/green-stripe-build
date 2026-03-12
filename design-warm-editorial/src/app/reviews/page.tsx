"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { reviews } from "@/lib/site-data";
import StatsSection from "@/components/stats-section";
import ContactForm from "@/components/contact-form";
import ScrollReveal from "@/components/scroll-reveal";
import { MapPin, Quote } from "lucide-react";

/* JSON-LD for Reviews */
const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Green Stripe Lawn Care",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(reviews.length),
    bestRating: "5",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
    reviewBody: r.text,
    datePublished: r.date,
  })),
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-bg-alt overflow-hidden">
        <div className="blob-accent w-[400px] h-[400px] -top-20 -right-40" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">Social Proof</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-fg leading-[1.05] mb-8">
              What Our Clients<br />
              <em className="italic text-accent">Are Saying</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-xl text-fg-light font-light font-heading italic max-w-2xl">
              Real words from real homeowners across North Cornwall and Devon.
              Every review is from a verified Green Stripe client.
            </p>
          </ScrollReveal>

          {/* Aggregate rating */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-cream/80 backdrop-blur-md border border-gold/20">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <div className="w-px h-6 bg-gold/30" />
              <div>
                <p className="text-sm font-heading font-bold text-fg">5.0 out of 5</p>
                <p className="text-xs text-muted">{reviews.length} verified reviews</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="break-inside-avoid rounded-3xl bg-bg border-2 border-gold/10 hover:border-gold/25 hover:shadow-[0_15px_40px_rgba(42,31,20,0.08)] p-8 transition-all duration-500 group"
              >
                <Quote className="w-8 h-8 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors duration-300" />

                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-gold text-sm">★</span>
                  ))}
                </div>

                <p className="text-fg-light font-light leading-relaxed mb-6 text-[15px]">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="pt-5 border-t-2 border-gold/10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-heading font-bold text-fg">{review.name}</p>
                    <p className="flex items-center gap-1.5 text-xs text-muted mt-1">
                      <MapPin className="w-3 h-3 text-gold/60" /> {review.location}
                    </p>
                  </div>
                  <p className="text-xs text-muted/50">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 md:py-32 bg-bg-dark text-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-[1.1]">
              Ready to Join <em className="italic text-gold">Them?</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} blur>
            <p className="text-lg text-cream/60 font-light font-heading italic max-w-xl mx-auto mb-12">
              Book your free consultation and discover what championship-grade lawn care
              can do for your home.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-12 py-4 bg-gold text-bg-dark rounded-full text-sm font-medium hover:bg-gold-light hover:shadow-[0_0_30px_rgba(193,167,115,0.3)] transition-all duration-300"
            >
              Get Your Free Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <StatsSection />
      <ContactForm />
    </div>
  );
}
