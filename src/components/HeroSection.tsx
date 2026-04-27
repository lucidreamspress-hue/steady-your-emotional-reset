import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center" style={{ paddingTop: "80px", paddingBottom: "48px" }}>
      <div className="mx-auto px-8 md:px-16 max-w-6xl w-full">
        <div className="hero-layout grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-none"
          >
            <h1
              className="hero-headline font-display text-balance mb-6"
              style={{
                fontSize: "58px",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#1a2a3a",
                letterSpacing: "-0.02em",
              }}
            >
              One tap.<br />One reset.<br />Right now.
            </h1>
            <div className="hidden md:block">
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
                When anxiety spikes, a craving hits, or panic sets in — Steady gives you one clear action to get through the next 60 seconds.
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-image flex justify-center order-2 lg:order-none"
          >
            <img
              src={heroMockup}
              alt="Steady app reset screen on iPhone"
              className="w-full h-auto drop-shadow-2xl animate-float"
              style={{ maxWidth: "520px" }}
            />
          </motion.div>

          <div className="md:hidden order-3">
            <p
              className="mb-8 max-w-xl"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                lineHeight: 1.65,
                color: "#4a6070",
              }}
            >
              When anxiety spikes, a craving hits, or panic sets in — Steady gives you one clear action to get through the next 60 seconds.
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
          </div>
        </div>
      </div>
      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default HeroSection;
