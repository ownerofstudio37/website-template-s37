import { CTASection } from "@/components/cta-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { LogoWall } from "@/components/logo-wall";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <LogoWall />
      <FeatureGrid />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
