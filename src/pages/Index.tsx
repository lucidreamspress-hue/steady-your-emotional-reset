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
    <div className="min-h-screen bg-background relative">
      {/* Ambient background blob */}
      <div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full animate-ambient opacity-[0.07] pointer-events-none -translate-x-1/3 -translate-y-1/4"
        style={{
          background: "radial-gradient(circle, hsl(240, 40%, 75%), hsl(280, 30%, 80%), transparent)",
          filter: "blur(100px)",
        }}
      />
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
