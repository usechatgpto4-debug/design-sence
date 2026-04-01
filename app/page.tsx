import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SneakPeekSection } from "@/components/sections/SneakPeekSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PromotionsSection } from "@/components/sections/PromotionsSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden min-h-screen">
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <SneakPeekSection />
      <ReviewsSection />
      <PromotionsSection />
      <FooterCTA />
    </main>
  );
}
