import HeroSection from "@/components/sections/HeroSection";
import HeroBannerSection from "@/components/sections/HeroBannerSection";
import AboutusSection from "@/components/sections/AboutusSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ConsultingServicesSection from "@/components/sections/ConsultingServicesSection";
import BentoGridSection from "@/components/sections/BentoGridSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import ConsultingCardsSection from "@/components/sections/ConsultingCardsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import CTASection from "@/components/sections/CTASection";
import SuccessStories from "@/components/sections/SuccessStories";
import TrustedSection from "@/components/sections/TrustedSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroBannerSection />
      <AboutusSection />
      <IndustriesSection />
      <ConsultingServicesSection />
      <BentoGridSection />
      <SuccessStories/>
      <UseCasesSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactFormSection />
      <ConsultingCardsSection />
      <CTASection />
      <TrustedSection />
    </div>
  );
}
