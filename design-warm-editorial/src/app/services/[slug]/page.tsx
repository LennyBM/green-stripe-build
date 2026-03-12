import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, caseStudies } from "@/lib/site-data";
import StatsSection from "@/components/stats-section";
import ContactForm from "@/components/contact-form";
import { CheckCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const relatedCase = caseStudies[0]; // Show a related case study

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-cream overflow-hidden">
        <div className="blob-accent w-[500px] h-[500px] -top-40 -right-40" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mb-8"
          >
            ← All Services
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-gold/20 flex items-center justify-center">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <span className="text-7xl md:text-9xl font-heading font-bold text-gold/[0.1] leading-none select-none">
              {service.num}
            </span>
          </div>

          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">{service.sub}</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-fg leading-[1.05] mb-8">
            {service.title}
          </h1>
          <p className="text-xl text-fg-light font-light leading-relaxed max-w-2xl font-heading italic">
            {service.desc}
          </p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-24 md:py-36 bg-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="editorial-line mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">The Details</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-fg mb-12 leading-[1.1]">
            What&apos;s <em className="italic text-accent">Involved</em>
          </h2>
          <div className="space-y-6 text-lg text-fg-light leading-relaxed font-light">
            {service.longDesc.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="editorial-line mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Step by Step</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-fg mb-12 leading-[1.1]">
            Our <em className="italic text-accent">Process</em>
          </h2>
          <div className="space-y-6">
            {service.process.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-bg border-2 border-gold/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gold font-medium tracking-wider uppercase mb-1">Step {i + 1}</p>
                  <p className="text-fg font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      {relatedCase && (
        <section className="py-24 md:py-36 bg-bg-dark text-cream overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <p className="text-sm tracking-[0.3em] text-cream/40 uppercase mb-6">Real Results</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-[1.08] mb-8">
              See It in <em className="italic text-gold">Action</em>
            </h2>
            <div className="rounded-3xl overflow-hidden bg-cream/5 border border-cream/10 p-8 sm:p-10">
              <span className="px-4 py-1.5 bg-gold/90 rounded-full text-xs font-semibold uppercase tracking-wider text-bg-dark inline-block mb-6">
                {relatedCase.loc}
              </span>
              <h3 className="text-2xl font-heading font-bold mb-4">{relatedCase.title}</h3>
              <p className="text-cream/60 font-light leading-relaxed mb-4">{relatedCase.desc}</p>
              <p className="text-xs text-cream/30 tracking-wider uppercase">{relatedCase.time}</p>
            </div>
          </div>
        </section>
      )}

      <StatsSection />
      <ContactForm />
    </main>
  );
}
