import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollStorySection from "@/components/ScrollStorySection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EmotionalStatesSection from "@/components/EmotionalStatesSection";
import ScienceSection from "@/components/ScienceSection";
import ProgressSection from "@/components/ProgressSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollStorySection />
      <SolutionSection />
      <HowItWorksSection />
      <EmotionalStatesSection />
      <ScienceSection />
      <ProgressSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
