import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto px-8 md:px-16 max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1
              className="font-display text-balance mb-8"
              style={{
                fontSize: "56px",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#1a2a3a",
              }}
            >
              Help for the moment you feel overwhelmed.
            </h1>
            <p
              className="mb-6 max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#4a6070",
              }}
            >
              Steady is a one-tap companion for anxiety, cravings, panic, stress, and emotional overwhelm. It gives you simple, personalized tools to calm the spike, interrupt the spiral, and get through the next few minutes.
            </p>
            <p
              className="mb-10 max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#4a6070",
              }}
            >
              No long programs. No habit trackers. No complicated self-help. Just one clear action when you need it most.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-primary-dark">
              Install Steady
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroMockup}
              alt="Steady app reset screen on iPhone"
              className="w-full max-w-[460px] h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default HeroSection;
