import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollStorySection from "@/components/ScrollStorySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EmotionalStatesSection from "@/components/EmotionalStatesSection";
import SolutionSection from "@/components/SolutionSection";
import ReviewsSection from "@/components/ReviewsSection";
import ScienceSection from "@/components/ScienceSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />
      <ScrollStorySection />
      <HowItWorksSection />
      <EmotionalStatesSection />
      <SolutionSection />
      <ReviewsSection />
      <ScienceSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
