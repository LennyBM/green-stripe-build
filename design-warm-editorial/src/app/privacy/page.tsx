import type { Metadata } from "next";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Green Stripe Lawn Care collects, uses, and protects your personal data under UK GDPR.",
};

const sections = [
  {
    title: "1. Who We Are",
    content: `Green Stripe Lawn Care is a lawn care service operated by Chris and Jess Maynard, based in North Cornwall, United Kingdom. We are committed to protecting and respecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.

**Data Controller:** Green Stripe Lawn Care
**Email:** office@greenstripelawns.co.uk
**Phone:** 01288 371343`,
  },
  {
    title: "2. What Data We Collect",
    content: `We may collect and process the following personal data:

• **Identity data** — your name
• **Contact data** — email address, telephone number, postal address
• **Service data** — details about your lawn and the services you require
• **Technical data** — IP address, browser type, device information, and cookies when you visit our website
• **Usage data** — how you interact with our website
• **Marketing data** — your preferences for receiving communications from us`,
  },
  {
    title: "3. How We Collect Your Data",
    content: `We collect data through:

• Our website contact form
• Direct email, telephone, or WhatsApp correspondence
• Site visits and consultations
• Cookies and similar tracking technologies on our website`,
  },
  {
    title: "4. Lawful Basis for Processing",
    content: `Under UK GDPR, we process your personal data on the following legal bases:

• **Consent** — where you have given clear consent for us to process your data for a specific purpose (e.g. marketing emails)
• **Contract** — where processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract
• **Legitimate interests** — where processing is necessary for our legitimate business interests, provided those interests do not override your rights`,
  },
  {
    title: "5. How We Use Your Data",
    content: `We use your personal data to:

• Respond to your enquiries and provide quotes
• Deliver our lawn care services
• Send appointment reminders and service updates
• Send marketing communications (only with your explicit consent)
• Improve our website and services
• Comply with legal obligations`,
  },
  {
    title: "6. Data Sharing",
    content: `We do not sell, trade, or rent your personal data to third parties. We may share your data with:

• Our website hosting provider (Netlify)
• Email service providers for sending service communications
• Analytics providers (anonymised data only)
• Legal or regulatory authorities, if required by law`,
  },
  {
    title: "7. Data Retention",
    content: `We retain personal data only for as long as necessary for the purposes it was collected. Enquiry data is kept for up to 24 months from the date of last contact. Customer data for completed services is kept for 6 years for tax and legal compliance purposes.`,
  },
  {
    title: "8. Cookies",
    content: `Our website uses cookies to enhance your experience. Cookies are small text files stored on your device. We use:

• **Essential cookies** — necessary for the website to function properly
• **Analytics cookies** — to understand how visitors interact with our website
• **Preference cookies** — to remember your choices (e.g. cookie consent)

You can manage cookie preferences through your browser settings or our cookie consent banner. Refusing non-essential cookies will not affect the core functionality of our website.`,
  },
  {
    title: "9. Your Rights Under UK GDPR",
    content: `You have the following rights:

• **Right of access** — request a copy of the personal data we hold about you
• **Right to rectification** — request correction of inaccurate data
• **Right to erasure** — request deletion of your data ("right to be forgotten")
• **Right to restrict processing** — request that we limit how we use your data
• **Right to data portability** — receive your data in a structured, commonly used format
• **Right to object** — object to processing based on legitimate interests or for direct marketing
• **Right to withdraw consent** — withdraw consent at any time

To exercise any of these rights, please contact us at office@greenstripelawns.co.uk. We will respond within one month.`,
  },
  {
    title: "10. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against accidental loss, unauthorised access, alteration, or disclosure. Our website uses SSL/TLS encryption for data transmitted online.`,
  },
  {
    title: "11. Third-Party Links",
    content: `Our website may contain links to third-party websites. We have no control over the content or privacy practices of these sites and accept no responsibility for them. We encourage you to read the privacy policies of any external site you visit.`,
  },
  {
    title: "12. Children's Privacy",
    content: `Our services are not directed at individuals under the age of 18, and we do not knowingly collect personal data from children.`,
  },
  {
    title: "13. Changes to This Policy",
    content: `We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.`,
  },
  {
    title: "14. Complaints",
    content: `If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):

• **Website:** ico.org.uk
• **Telephone:** 0303 123 1113`,
  },
  {
    title: "15. Contact Us",
    content: `If you have any questions about this privacy policy or how we handle your data:

• **Email:** office@greenstripelawns.co.uk
• **Phone:** 01288 371343
• **Post:** Green Stripe Lawn Care, North Cornwall, UK`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-alt overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob-accent w-[400px] h-[400px] -top-40 -right-40 opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="editorial-line mb-8" />
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted mb-4 font-medium">Legal</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-fg leading-[1.05] mb-4">
            Privacy <em className="italic text-accent">Policy</em>
          </h1>
          <p className="text-sm text-muted">Last updated: 12 March 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 space-y-10">
          {sections.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-fg mb-4">{s.title}</h2>
                <div className="text-fg-light leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {s.content.split("**").map((part, j) =>
                    j % 2 === 1 ? <strong key={j} className="text-fg">{part}</strong> : part
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="pt-8 border-t-2 border-gold/20">
            <p className="text-sm text-muted">
              This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
