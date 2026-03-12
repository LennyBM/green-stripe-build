import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { services, areas, socialLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-2xl italic mb-6 text-gold-light block">
              Green Stripe
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed mb-4">
              Championship-grade lawn care from Widemouth Bay. Founded by Chris Maynard — 15 years
              on the UK&apos;s finest golf courses.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-gold">
              Service Areas
            </h3>
            <ul className="text-sm text-cream/60 space-y-3">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="flex items-center gap-2.5 hover:text-cream transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-gold">
              Our Services
            </h3>
            <ul className="text-sm text-cream/60 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-cream transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold uppercase tracking-[0.2em] text-sm mb-8 text-gold">
              Contact Us
            </h3>
            <ul className="text-sm text-cream/60 space-y-4">
              <li>
                <a href="tel:+441288371343" className="flex items-center gap-3 hover:text-cream transition-colors">
                  <Phone className="w-4 h-4 text-gold/60" /> 01288 371343
                </a>
              </li>
              <li>
                <a href="mailto:office@greenstripelawns.co.uk" className="flex items-center gap-3 hover:text-cream transition-colors">
                  <Mail className="w-4 h-4 text-gold/60" /> office@greenstripelawns.co.uk
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Green Stripe Lawn Care</p>
          <a
            href="https://www.peakemanagement.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            Site by Peake Management
          </a>
        </div>
      </div>
    </footer>
  );
}
