import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/site-data";
import ContactForm from "@/components/contact-form";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Lawn Care Blog — Seasonal Tips & Expert Advice",
  description:
    "Expert lawn care tips from a championship greenkeeper. Seasonal guides, moss control advice, scarification timing, and more for North Cornwall & Devon homeowners.",
  alternates: {
    canonical: "https://www.greenstripelawns.co.uk/blog",
  },
  openGraph: {
    title: "Lawn Care Blog | Green Stripe Lawn Care",
    description:
      "Expert lawn care tips from a championship greenkeeper. Seasonal guides for North Cornwall & Devon.",
    url: "https://www.greenstripelawns.co.uk/blog",
    images: [
      {
        url: "/images/real/striped-lawn.jpg",
        width: 1200,
        height: 630,
        alt: "Green Stripe Lawn Care — Expert Lawn Care Blog",
      },
    ],
  },
};

/* JSON-LD for the blog listing page */
const blogListingJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Lawn Care Blog",
  description:
    "Expert lawn care tips and seasonal guides from Green Stripe Lawn Care, serving North Cornwall and Devon.",
  url: "https://www.greenstripelawns.co.uk/blog",
  isPartOf: {
    "@type": "WebSite",
    name: "Green Stripe Lawn Care",
    url: "https://www.greenstripelawns.co.uk",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="editorial-line mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6 font-medium">
            Expert Knowledge
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-fg leading-[1.05] mb-8">
            The Lawn Care<br />
            <em className="italic text-accent">Journal</em>
          </h1>
          <p className="text-xl text-fg-light font-light font-heading italic max-w-2xl">
            Seasonal tips, professional insights, and expert advice from
            23 years managing championship greens.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20 bg-cream overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-bg rounded-3xl border-2 border-gold/15 overflow-hidden hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(42,31,20,0.08)] transition-all duration-500"
              >
                {/* Category header bar */}
                <div className="px-6 pt-6 pb-0">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-6 py-5">
                  <h2 className="text-lg md:text-xl font-heading font-bold text-fg leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-fg-light font-light leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta footer */}
                  <div className="flex items-center justify-between text-xs text-muted pt-4 border-t border-gold/10">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.dateLabel}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-bg-dark text-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-[1.1]">
            Ready for <em className="italic text-gold">Championship</em> Results?
          </h2>
          <p className="text-lg text-cream/60 font-light font-heading italic max-w-xl mx-auto mb-12">
            Book a free consultation with Chris and get a bespoke treatment
            plan for your lawn.
          </p>
          <Link
            href="/contact"
            className="btn-shimmer inline-flex items-center gap-2 px-10 py-4 bg-cream text-fg rounded-full text-sm font-medium hover:bg-gold hover:text-bg-dark hover:shadow-[0_0_30px_rgba(193,167,115,0.3)] transition-all duration-300"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
