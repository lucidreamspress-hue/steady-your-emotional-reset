import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import InsightSection from "@/components/InsightSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SituationsSection from "@/components/SituationsSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <InsightSection />
      <HowItWorksSection />
      <SituationsSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
