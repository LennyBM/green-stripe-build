import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import ContactForm from "@/components/contact-form";
import GoogleReviews from "@/components/google-reviews";
import ComparisonShowcase from "@/components/comparison-showcase";
import SpringBanner from "@/components/spring-banner";
import VanTrustStrip from "@/components/van-trust-strip";
import HowItWorks from "@/components/how-it-works";
import QuoteCalculatorCompact from "@/components/quote-calculator-compact";
import FacebookFeedCompact from "@/components/facebook-feed-compact";
import ServiceAreaMap from "@/components/service-area-map";
import ComponentErrorBoundary from "@/components/component-error-boundary";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <HeroSection />
      <SpringBanner />
      <VanTrustStrip />
      <ComparisonShowcase />
      <HowItWorks />
      <ServicesSection limit={3} showViewAll />
      <GoogleReviews />
      <ComponentErrorBoundary fallbackMessage="The quote calculator couldn't load. Please contact us directly for a quote.">
        <QuoteCalculatorCompact />
      </ComponentErrorBoundary>
      <AboutSection />
      <FacebookFeedCompact />
      <ServiceAreaMap />
      <ComponentErrorBoundary fallbackMessage="The contact form couldn't load. Please call us or send an email instead.">
        <ContactForm />
      </ComponentErrorBoundary>
    </div>
  );
}
