import HeroSection from "@/components/modules/HeroSection";
import LogoCarousel from "@/components/modules/LogoCarousel";
import LandingPage from "@/components/modules/LandingPage";
import BlogSection from "@/components/modules/BlogSection";
import ServicesSection from "@/components/modules/ServicesSection";
import CTASection from "@/components/modules/CTASection";
import StackedCards from "@/components/modules/StackCard";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <LogoCarousel />
      <HeroSection />
      <ServicesSection />
      <StackedCards />
      <CTASection />
      <BlogSection />
    </div>
  );
}