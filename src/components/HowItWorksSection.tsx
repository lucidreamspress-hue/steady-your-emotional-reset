import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import howItWorksMockup from "@/assets/how-it-works-mockup.png";
import howItWorksMockup2 from "@/assets/how-it-works-mockup-2.png";
import howItWorksMockup3 from "@/assets/how-it-works-mockup-3.png";

const steps = [
  { number: "1", title: "Tell Steady how you feel", description: "Pick from overwhelmed, stuck, or numb — or just tap reset.", image: howItWorksMockup },
  { number: "2", title: "Get a tailored micro-tool", description: "Breathing, grounding, or attention-shifting in under a minute.", image: howItWorksMockup2 },
  { number: "3", title: "Feel steadier, fast", description: "Most resets take about 60 seconds.", image: howItWorksMockup3 },
];

const HowItWorksSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
      <div className="mx-auto px-8 md:px-16 max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em", marginBottom: "32px" }}
        >
          How it works
        </motion.h2>

        {/* DESKTOP: two columns, image auto-rotates */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: "flex", alignItems: "flex-start", gap: "20px", padding: "16px 0" }}
              >
                <div className="glass-number" style={{ flexShrink: 0 }}>{step.number}</div>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em", marginBottom: "6px" }}>{step.title}</h3>
                  <p style={{ fontFamily: "Jost, sans-serif", fontSize: "16px", fontWeight: 300, color: "#4a6070", lineHeight: 1.7 }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ position: "relative", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
              {steps.map((step, idx) =>
                activeImage === idx ? (
                  <motion.img
                    key={"img" + idx}
                    src={step.image}
                    alt={"Step " + (idx + 1)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: "100%", maxWidth: "520px", height: "auto", filter: "drop-shadow(0 24px 48px rgba(26,42,58,0.15))" }}
                  />
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE: stacked cards, each with unique image */}
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "8px" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.75)", borderRadius: "20px", overflow: "hidden" }}
            >
              <div style={{ background: "rgba(240,244,248,0.8)", display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", minHeight: "420px" }}>
                <img src={step.image} alt={step.title} style={{ width: "100%", maxWidth: "360px", height: "auto", display: "block", objectFit: "contain" }} />
              </div>
              <div style={{ padding: "24px" }}>
                <div className="glass-number" style={{ marginBottom: "12px" }}>{step.number}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em", marginBottom: "6px" }}>{step.title}</h3>
                <p style={{ fontFamily: "Jost, sans-serif", fontSize: "15px", fontWeight: 300, color: "#4a6070", lineHeight: 1.65 }}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
