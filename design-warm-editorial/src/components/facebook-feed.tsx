"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/greenstripelawnsltd/";

/* Recent posts — manually curated from their Facebook. 
   In production you'd fetch via Facebook Graph API or an embed widget. */
const recentPosts = [
  {
    id: 1,
    text: "Lovely Spring day to be renovating this lawn in Padstow. 4 pass scarify, overseed and a little top dressing to reduce thatch, thicken the sward and help this lawn thrive in 2026. 🌤🌱",
    date: "3 days ago",
    image: "/images/real/spring-close.jpg",
    likes: 2,
  },
  {
    id: 2,
    text: "Lawns are starting to dry out and it could be a good weekend to get a first cut done on your lawn. Only reduce height by 1/3 at the most — just a little trim is all that's needed. ✂️",
    date: "6 days ago",
    image: "/images/real/late-spring-lawn.jpg",
    likes: 1,
  },
  {
    id: 3,
    text: "Spring has officially sprung and our early Spring treatments are off to a good start. Some lovely St David's Day daffodils on this lawn in Wadebridge — a lovely dark green even before its fertiliser and moss control today ☀️🌼",
    date: "1 week ago",
    image: "/images/real/striped-lawn.jpg",
    likes: 2,
  },
];

export default function FacebookFeed() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="facebook-feed" ref={ref} className="relative py-24 md:py-32 bg-bg overflow-hidden">
      {/* Subtle background depth */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          y: bgY,
          background: "radial-gradient(circle, rgba(74,103,65,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="editorial-line mx-auto mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-4 font-medium">
              What We&apos;re Up To
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-fg mb-6 leading-tight">
              Latest from the <em className="italic text-accent">Field</em>
            </h2>
            <p className="text-lg text-fg-light max-w-2xl mx-auto">
              Follow our work across North Cornwall and Devon. Tips, transformations, and the odd bit of sunshine.
            </p>
          </div>
        </ScrollReveal>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {recentPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.15}>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream/60 rounded-2xl border-2 border-gold/10 overflow-hidden hover:border-accent/20 hover:shadow-[0_12px_40px_rgba(74,103,65,0.08)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Post image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Green Stripe Facebook post from ${post.date}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Post content */}
                <div className="p-5">
                  {/* Profile row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold/20 shrink-0">
                      <Image
                        src="/images/real/round-logo.jpg"
                        alt="Green Stripe"
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-fg">Green Stripe Lawns</p>
                      <p className="text-[10px] text-muted">{post.date}</p>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-sm text-fg-light leading-relaxed line-clamp-3 mb-3">
                    {post.text}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gold/10">
                    <span className="text-xs text-muted">👍 {post.likes}</span>
                    <span className="text-[10px] text-accent tracking-wide uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      View on Facebook <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA to Facebook page */}
        <ScrollReveal>
          <div className="text-center">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gold/20 bg-cream/50 text-fg font-medium hover:border-accent/30 hover:bg-cream/80 hover:shadow-lg transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow Us on Facebook
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
