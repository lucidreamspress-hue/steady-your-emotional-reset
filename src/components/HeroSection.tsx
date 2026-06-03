import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* DESKTOP */}
      <section className="hidden md:flex items-center min-h-screen pt-24 pb-16">
        <div className="mx-auto px-8 md:px-16 max-w-6xl w-full">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 style={{ fontSize: "58px", fontWeight: 600, lineHeight: 1.1, color: "#1a2a3a", letterSpacing: "-0.02em", marginBottom: "24px" }}>
                One tap.<br />One reset.<br />Right now.
              </h1>
              <p style={{ fontFamily: "Jost, sans-serif", fontSize: "20px", fontWeight: 300, lineHeight: 1.65, color: "#4a6070", marginBottom: "32px", maxWidth: "480px" }}>
                When anxiety spikes, a craving hits, or panic sets in — Steady gives you one clear action to get through the next 60 seconds.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-primary-dark">
                Download for iOS
              </button>
              <p style={{ fontFamily: "Jost, sans-serif", fontSize: "15px", fontWeight: 300, fontStyle: "italic", lineHeight: 1.6, color: "#4a6070", marginTop: "16px", maxWidth: "420px" }}>
                No long programs. No habit trackers. No complicated self-help. Just one clear action when you need it most.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={heroMockup}
                alt="Steady app reset screen on iPhone"
                className="animate-float"
                style={{ width: "100%", maxWidth: "560px", height: "auto", filter: "drop-shadow(0 32px 64px rgba(26,42,58,0.15))" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOBILE — same container as navbar: mx-auto px-8 max-w-6xl */}
      <section className="md:hidden" style={{ paddingTop: "140px", paddingBottom: "40px" }}>
        <div className="mx-auto px-8 max-w-6xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: "40px", fontWeight: 600, lineHeight: 1.1, color: "#1a2a3a", letterSpacing: "-0.02em", marginBottom: "20px" }}
          >
            One tap.<br />One reset.<br />Right now.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
          >
            <img
              src={heroMockup}
              alt="Steady app"
              className="animate-float"
              style={{ width: "85%", maxWidth: "300px", height: "auto", filter: "drop-shadow(0 16px 32px rgba(26,42,58,0.15))" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: "Jost, sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.65, color: "#4a6070", marginBottom: "24px" }}
          >
            When anxiety spikes, a craving hits, or panic sets in — Steady gives you one clear action to get through the next 60 seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button onClick={() => setModalOpen(true)} className="btn-primary-dark">
              Download for iOS
            </button>
            <p style={{ fontFamily: "Jost, sans-serif", fontSize: "13px", fontWeight: 300, fontStyle: "italic", lineHeight: 1.6, color: "#4a6070", marginTop: "12px" }}>
              No long programs. No habit trackers. Just one clear action when you need it most.
            </p>
          </motion.div>
        </div>
      </section>

      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default HeroSection;
