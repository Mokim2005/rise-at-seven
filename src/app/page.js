import HeroSection from "@/components/modules/HeroSection";
import LogoCarousel from "@/components/modules/LogoCarousel";
import LandingPage from "@/components/modules/LandingPage";
import BlogSection from "@/components/modules/BlogSection";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <LogoCarousel />
      <HeroSection />
      <BlogSection />
    </div>
  );
}