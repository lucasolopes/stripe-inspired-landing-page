
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { CompanyLogos } from "@/components/CompanyLogos";
import { Testimonials } from "@/components/Testimonials";
import { Statistics } from "@/components/Statistics";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { IntegrationSection } from "@/components/IntegrationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CompanyLogos />
      <FeaturesGrid />
      <IntegrationSection />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
