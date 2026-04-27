import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EmotionalStatesSection from "@/components/EmotionalStatesSection";
import SolutionSection from "@/components/SolutionSection";
import ReviewsSection from "@/components/ReviewsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f8" }}>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <EmotionalStatesSection />
      <SolutionSection />
      <ReviewsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
