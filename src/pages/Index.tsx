
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { CompanyLogos } from "@/components/CompanyLogos";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesGrid />
      <CompanyLogos />
      <Footer />
    </div>
  );
};

export default Index;
