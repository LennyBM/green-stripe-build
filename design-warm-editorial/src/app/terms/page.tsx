import type { Metadata } from "next";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Green Stripe Lawn Care services.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `These terms and conditions govern your use of the Green Stripe Lawn Care website (www.greenstripelawns.co.uk) and the provision of our lawn care services. By using our website or engaging our services, you agree to be bound by these terms.

Green Stripe Lawn Care is operated by Chris and Jess Maynard, based in North Cornwall, United Kingdom.`,
  },
  {
    title: "2. Definitions",
    content: `• **"We", "us", "our"** refers to Green Stripe Lawn Care
• **"You", "your"** refers to the customer or website visitor
• **"Services"** refers to all lawn care services provided by Green Stripe Lawn Care
• **"Website"** refers to www.greenstripelawns.co.uk`,
  },
  {
    title: "3. Services",
    content: `3.1. We provide professional lawn care services across North Cornwall and North Devon, including but not limited to scarification, overseeding, top dressing, weed and moss control, fertilisation, lawn renovations, and re-turfing.

3.2. All services are subject to an initial lawn assessment, which we provide free of charge and without obligation.

3.3. We reserve the right to refuse or discontinue services at our discretion if conditions are unsafe, access is restricted, or if reasonable working conditions cannot be maintained.`,
  },
  {
    title: "4. Quotations & Pricing",
    content: `4.1. All quotations are valid for 30 days from the date of issue unless otherwise stated.

4.2. Prices are quoted in pounds sterling (GBP) and are inclusive of VAT where applicable.

4.3. We reserve the right to amend pricing if the scope of work changes or if the condition of the lawn differs materially from the initial assessment.

4.4. Additional charges may apply for excessive debris removal, difficult access, or work that falls outside the original scope.`,
  },
  {
    title: "5. Bookings & Cancellations",
    content: `5.1. Bookings are confirmed upon receipt of your written or verbal agreement to proceed with the quoted services.

5.2. We require a minimum of 48 hours' notice for cancellations. Cancellations with less than 48 hours' notice may incur a cancellation fee of up to 50% of the quoted price.

5.3. We reserve the right to reschedule appointments due to adverse weather conditions. In such cases, we will contact you to arrange an alternative date at no additional cost.`,
  },
  {
    title: "6. Payment Terms",
    content: `6.1. Payment is due upon completion of each service visit unless a payment plan has been agreed in advance.

6.2. We accept payment by bank transfer, cash, or other methods agreed at the time of booking.

6.3. For ongoing lawn care programmes, payment terms will be outlined in your individual service agreement.

6.4. Late payments may incur interest at the rate of 2% per month on the outstanding balance, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.`,
  },
  {
    title: "7. Our Obligations",
    content: `7.1. We will carry out all services with reasonable skill and care, in accordance with the Consumer Rights Act 2015.

7.2. We will use professional-grade products and equipment appropriate for your lawn's needs.

7.3. We will leave the work area tidy upon completion of each visit.

7.4. We carry full public liability insurance for all work undertaken.`,
  },
  {
    title: "8. Your Obligations",
    content: `8.1. You must ensure safe and reasonable access to the lawn area prior to each visit.

8.2. You are responsible for informing us of any underground utilities, irrigation systems, or other hazards within the lawn area.

8.3. You agree to keep children and pets away from treated areas for the period specified by our technician.

8.4. You must inform us of any relevant planning restrictions or covenants that may affect the services.`,
  },
  {
    title: "9. Results & Guarantees",
    content: `9.1. While we strive for the best possible results, lawn care outcomes are influenced by factors beyond our control, including weather, soil conditions, existing pest or disease issues, and your ongoing maintenance between visits.

9.2. We offer a results guarantee on our services: if you are not satisfied with the results, we will revisit and re-treat the affected area at no additional cost, subject to reasonable timescales and conditions.

9.3. Our guarantee does not cover damage caused by third parties, pets, extreme weather, or failure to follow our aftercare advice.`,
  },
  {
    title: "10. Liability",
    content: `10.1. Our total liability to you for any claim arising from our services shall not exceed the total amount you have paid for the services giving rise to the claim.

10.2. We shall not be liable for any indirect, consequential, or special losses arising from our services.

10.3. Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "11. Intellectual Property",
    content: `11.1. All content on our website, including text, images, logos, and design, is the property of Green Stripe Lawn Care and is protected by UK copyright law.

11.2. You may not reproduce, distribute, or use any content from our website without our prior written consent.`,
  },
  {
    title: "12. Website Use",
    content: `12.1. Our website is provided for informational purposes and to facilitate service enquiries.

12.2. We make reasonable efforts to ensure information on our website is accurate and up to date, but we do not guarantee the completeness or accuracy of all content.

12.3. We reserve the right to modify or discontinue any aspect of the website at any time without notice.`,
  },
  {
    title: "13. Force Majeure",
    content: `We shall not be liable for any delay or failure to perform our obligations where such delay or failure results from circumstances beyond our reasonable control, including but not limited to extreme weather, natural disasters, pandemic, government action, or supply chain disruptions.`,
  },
  {
    title: "14. Dispute Resolution",
    content: `14.1. We aim to resolve any disputes or complaints promptly and fairly. In the first instance, please contact us at office@greenstripelawns.co.uk.

14.2. If a dispute cannot be resolved directly, you may refer the matter to an alternative dispute resolution (ADR) provider or the courts of England and Wales.`,
  },
  {
    title: "15. Governing Law",
    content: `These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "16. Changes to These Terms",
    content: `We reserve the right to update these terms and conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes have been posted constitutes acceptance of the revised terms.`,
  },
  {
    title: "17. Contact Us",
    content: `If you have any questions about these terms and conditions:

• **Email:** office@greenstripelawns.co.uk
• **Phone:** 01288 371343
• **Post:** Green Stripe Lawn Care, North Cornwall, UK`,
  },
];

export default function TermsPage() {
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
            Terms & <em className="italic text-accent">Conditions</em>
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
              These terms comply with the Consumer Rights Act 2015 and UK contract law.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
