"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

const recentPosts = [
  {
    id: 1,
    text: "Lovely Spring day renovating this lawn in Padstow. 4 pass scarify, overseed and top dressing 🌤🌱",
    image: "/images/real/spring-close.jpg",
  },
  {
    id: 2,
    text: "Lawns drying out — a good weekend for a first cut. Only reduce height by 1/3 ✂️",
    image: "/images/real/late-spring-lawn.jpg",
  },
  {
    id: 3,
    text: "Spring treatments off to a great start. Lovely dark green in Wadebridge even before today's feed ☀️",
    image: "/images/real/striped-lawn.jpg",
  },
];

const FACEBOOK_PAGE_URL = "https://www.facebook.com/greenstripelawnsltd/";

export default function FacebookFeedCompact() {
  return (
    <section className="py-16 md:py-20 bg-bg-alt overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/20 flex-shrink-0">
                <Image
                  src="/images/real/round-logo.jpg"
                  alt="Green Stripe"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">Latest from the Field</p>
                <p className="text-[10px] text-muted">@greenstripelawnsltd</p>
              </div>
            </div>
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent font-medium hover:text-accent-light transition-colors"
            >
              Follow →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {recentPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.08}>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.text}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 300px"
                />
                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-bg-dark/0 group-hover:bg-bg-dark/60 transition-all duration-400 flex items-end p-2 sm:p-3">
                  <p className="text-[10px] sm:text-xs text-cream leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    {post.text}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
