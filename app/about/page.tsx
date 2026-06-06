import AboutHeroSection from "@/components/AboutHeroSection";
import AboutMissionSection from "@/components/AboutMissionSection";
import AboutValuesSection from "@/components/AboutValuesSection";
import AboutVisionSection from "@/components/AboutVisionSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | DreamLift Initiative",
  description: "Learn about DreamLift Initiative — a community-driven platform creating opportunities through collective support, merit-based selection, and full transparency.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutValuesSection />
      <AboutVisionSection />
      <CTASection />
    </main>
  );
}
