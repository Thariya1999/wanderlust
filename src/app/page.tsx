import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import DestinationsSection from "@/components/sections/DestinationsSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function HomePage() {
  return (
    <RevealWrapper>
      <HeroSection />
      <StatsBar />
      <DestinationsSection />
      <PackagesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CTASection />
    </RevealWrapper>
  );
}
