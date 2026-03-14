import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areas, services } from "@/lib/site-data";
import StatsSection from "@/components/stats-section";
import ContactForm from "@/components/contact-form";
import { MapPin } from "lucide-react";

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = areas.find((a) => a.slug === areaSlug);
  if (!area) return {};
  const county = ["bude", "wadebridge", "padstow", "launceston", "holsworthy"].includes(area.slug) ? "Cornwall" : "Devon";
  return {
    title: `Lawn Care in ${area.name}, ${county}`,
    description: `Professional lawn care services in ${area.name}. Scarifying, overseeding, moss control & lawn renovations. Championship-grade results from Green Stripe.`,
    alternates: {
      canonical: `https://www.greenstripelawns.co.uk/areas/${area.slug}`,
    },
    openGraph: {
      title: `Lawn Care in ${area.name} | Green Stripe`,
      description: `${area.desc.slice(0, 200)}`,
      url: `https://www.greenstripelawns.co.uk/areas/${area.slug}`,
      images: [
        {
          url: "/images/real/branded-van.webp",
          width: 1200,
          height: 630,
          alt: `Green Stripe Lawn Care serving ${area.name}`,
        },
      ],
    },
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { area: areaSlug } = await params;
  const area = areas.find((a) => a.slug === areaSlug);
  if (!area) notFound();

  /* JSON-LD: LocalBusiness with specific areaServed */
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Green Stripe Lawn Care",
    url: `https://www.greenstripelawns.co.uk/areas/${area.slug}`,
    telephone: "+441288371343",
    areaServed: {
      "@type": "City",
      name: area.name,
    },
    description: `Professional lawn care services in ${area.name}. ${area.desc}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Widemouth Bay",
      addressRegion: "Cornwall",
      addressCountry: "GB",
    },
  };

  /* JSON-LD: BreadcrumbList */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.greenstripelawns.co.uk" },
      { "@type": "ListItem", position: 2, name: `Lawn Care in ${area.name}`, item: `https://www.greenstripelawns.co.uk/areas/${area.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-bg">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-alt overflow-hidden">
        <div className="blob-accent w-[500px] h-[500px] -top-40 -right-40" />
        <div className="blob-accent w-[300px] h-[300px] bottom-0 -left-20" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Link
            href="/#areas"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mb-8"
          >
            ← All Areas
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <MapPin className="w-6 h-6 text-gold" />
            <p className="text-sm tracking-[0.25em] uppercase text-gold font-medium">{area.tagline}</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-fg leading-[1.05] mb-8">
            Lawn Care in<br />
            <em className="italic text-accent">{area.name}</em>
          </h1>

          <p className="text-xl text-fg-light font-light leading-relaxed max-w-2xl font-heading italic">
            Championship-grade lawn care serving {area.name} and surrounding areas.
          </p>
        </div>
      </section>

      {/* Area Description */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="editorial-line mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Local Expertise</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-fg mb-12 leading-[1.1]">
            Why {area.name} Lawns Need <em className="italic text-accent">Specialist Care</em>
          </h2>
          <div className="text-lg text-fg-light leading-relaxed font-light space-y-6">
            <p>{area.desc}</p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-24 md:py-36 bg-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="editorial-line mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">Available in {area.name}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-fg mb-12 leading-[1.1]">
            Our <em className="italic text-accent">Services</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-cream border-2 border-gold/10 hover:border-gold/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-fg group-hover:text-accent transition-colors mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-fg-light font-light leading-relaxed line-clamp-2">{s.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-24 md:py-36 bg-bg-dark text-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="w-16 h-0.5 bg-gold mb-8" />
          <p className="text-sm tracking-[0.3em] text-cream/40 uppercase mb-6">Also Serving</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-[1.08] mb-12">
            Nearby <em className="italic text-gold">Areas</em>
          </h2>
          <div className="flex flex-wrap gap-3">
            {areas
              .filter((a) => a.slug !== areaSlug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="px-6 py-3 rounded-full border border-cream/20 text-sm text-cream/60 hover:bg-gold hover:text-bg-dark hover:border-gold transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-2" />
                  {a.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <ContactForm />
    </main>
  );
}
