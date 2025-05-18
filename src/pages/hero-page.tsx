import AnimatedBackground from "@/components/Hero/animated-background";
import FeaturesSection from "@/components/Hero/features-section";
import FloatingNavigation from "@/components/Hero/floating-navigation";
import CTASection from "@/components/Hero/hero-cta-section";
import HeroFooter from "@/components/Hero/hero-footer";
import HeroHeader from "@/components/Hero/hero-header";
import HeroSection from "@/components/Hero/hero-section";
import HowItWorks from "@/components/Hero/how-it-works";
import TrustedSection from "@/components/Hero/trusted-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <AnimatedBackground />
      <FloatingNavigation />

      {/* Header */}
      <HeroHeader />

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedSection />
      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <CTASection />
      {/* Footer */}
      <HeroFooter />
    </div>
  );
}
