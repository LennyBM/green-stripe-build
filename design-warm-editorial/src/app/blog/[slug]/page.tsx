import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/site-data";
import ContactForm from "@/components/contact-form";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.greenstripelawns.co.uk/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Green Stripe Lawn Care`,
      description: post.excerpt,
      url: `https://www.greenstripelawns.co.uk/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      authors: ["Chris Maynard"],
      images: [
        {
          url: "/images/real/striped-lawn.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug);

  /* JSON-LD: BlogPosting */
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      "@type": "Person",
      name: "Chris Maynard",
      jobTitle: "Head Greenkeeper & Founder",
      url: "https://www.greenstripelawns.co.uk/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Green Stripe Lawn Care",
      url: "https://www.greenstripelawns.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://www.greenstripelawns.co.uk/images/real/logo-transparent.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.greenstripelawns.co.uk/blog/${post.slug}`,
    },
    image: "https://www.greenstripelawns.co.uk/images/real/striped-lawn.jpg",
    articleSection: post.category,
    wordCount: post.body.join(" ").split(/\s+/).length,
    url: `https://www.greenstripelawns.co.uk/blog/${post.slug}`,
  };

  /* JSON-LD: BreadcrumbList */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.greenstripelawns.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.greenstripelawns.co.uk/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.greenstripelawns.co.uk/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-bg">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream overflow-hidden">
        <div className="blob-accent w-[500px] h-[500px] -top-40 -right-40" />
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>

          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full mb-6">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-fg leading-[1.08] mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              Chris Maynard
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.dateLabel}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24 bg-bg overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed font-light text-fg-light ${
                  i === 0
                    ? "text-xl md:text-2xl text-fg font-heading italic font-normal leading-[1.5]"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author bio */}
          <div className="mt-16 pt-12 border-t-2 border-gold/10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-gold/20 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1 font-medium">
                  Written by
                </p>
                <h3 className="text-lg font-heading font-bold text-fg mb-2">
                  Chris Maynard
                </h3>
                <p className="text-sm text-fg-light font-light leading-relaxed">
                  BSc (Hons) Turfgrass Science · 23 years managing championship
                  golf courses including The London Club and Pinehurst Resort.
                  Founder of Green Stripe Lawn Care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 md:py-28 bg-cream overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="editorial-line mb-8" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">
              Keep Reading
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-fg mb-12 leading-[1.1]">
              More Expert <em className="italic text-accent">Insights</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col bg-bg rounded-3xl border-2 border-gold/15 overflow-hidden hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(42,31,20,0.08)] transition-all duration-500 p-6"
                >
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full mb-4 self-start">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-fg mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {related.title}
                  </h3>
                  <p className="text-sm text-fg-light font-light leading-relaxed mb-4 line-clamp-2 flex-1">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-accent font-medium">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-36 bg-bg-dark text-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-[1.1]">
            Need Professional{" "}
            <em className="italic text-gold">Help?</em>
          </h2>
          <p className="text-lg text-cream/60 font-light font-heading italic max-w-xl mx-auto mb-12">
            Book a free consultation and let Chris assess your lawn in
            person. No obligation, just expert advice.
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
    </main>
  );
}
