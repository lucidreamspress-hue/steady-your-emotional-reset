import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto px-8 md:px-16 max-w-6xl w-full">
        <div className="hero-layout grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1
              className="hero-headline font-display text-balance mb-8"
              style={{
                fontSize: "58px",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#1a2a3a",
                letterSpacing: "-0.02em",
              }}
            >
              Help for the moment you feel{" "}
              <span
                style={{
                  background:
                    "linear-gradient(rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.14) 100%)",
                  borderRadius: "8px",
                  padding: "2px 12px",
                  display: "inline",
                }}
              >
                overwhelmed.
              </span>
            </h1>
            <p
              className="mb-10 max-w-xl"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: 1.65,
                color: "#4a6070",
              }}
            >
              Steady is a one-tap companion for anxiety, cravings, panic, stress, and emotional overwhelm. It gives you simple, personalized tools to calm the spike, interrupt the spiral, and get through the next few minutes.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-primary-dark">
              Install Steady
            </button>
            <p
              className="max-w-xl"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "#4a6070",
                marginTop: "16px",
              }}
            >
              No long programs. No habit trackers. No complicated self-help. Just one clear action when you need it most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-image flex justify-center lg:justify-end"
          >
            <img
              src={heroMockup}
              alt="Steady app reset screen on iPhone"
              className="w-full max-w-[460px] h-auto drop-shadow-2xl animate-float"
            />
          </motion.div>
        </div>
      </div>
      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default HeroSection;
