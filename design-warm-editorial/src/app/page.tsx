import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import ProofSection from "@/components/proof-section";
import ContactForm from "@/components/contact-form";
import TestimonialStrip from "@/components/testimonial-strip";
import ComparisonShowcase from "@/components/comparison-showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <HeroSection />
      <ServicesSection limit={3} showViewAll />
      <TestimonialStrip />
      <ComparisonShowcase />
      <StatsSection />
      <AboutSection />
      <ProofSection />
      <ContactForm />
    </div>
  );
}
