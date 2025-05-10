import Footer from "@/components/Landing/footer";
import Header from "@/components/Landing/header";
import FeatureSection from "@/components/Landing/feature-section";
import HowItWorkSection from "@/components/Landing/how-it-work-section";
import HeroSection from "@/components/Landing/hero-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeatureSection />
      <HowItWorkSection />
      <Footer />
    </div>
  );
}
