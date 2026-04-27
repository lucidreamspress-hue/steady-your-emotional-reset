import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import howItWorksMockup from "@/assets/how-it-works-mockup.png";
import howItWorksMockup2 from "@/assets/how-it-works-mockup-2.png";
import howItWorksMockup3 from "@/assets/how-it-works-mockup-3.png";

const steps = [
  { number: "1", title: "Tell Steady how you feel", description: "Pick from overwhelmed, stuck, or numb — or just tap reset." },
  { number: "2", title: "Get a tailored micro-tool", description: "Breathing, grounding, or attention-shifting in under a minute." },
  { number: "3", title: "Feel steadier, fast", description: "Most resets take about 60 seconds." },
];

const HowItWorksSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    [howItWorksMockup, howItWorksMockup2, howItWorksMockup3].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="how-it-works" className="py-12 md:py-16">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display mb-6"
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
        >
          How it works
        </motion.h2>

        <div className="how-it-works-layout grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-5"
                style={{
                  background: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.75)",
                  borderRadius: "16px",
                  padding: "20px",
                  marginBottom: "12px",
                  boxShadow: "0 4px 24px rgba(26, 42, 58, 0.06)",
                }}
              >
                <div className="glass-number shrink-0">{step.number}</div>
                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "22px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontSize: "17px",
                      fontWeight: 300,
                      color: "#4a6070",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-5"
                style={{
                  background: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.75)",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 4px 24px rgba(26, 42, 58, 0.06)",
                }}
              >
                <div className="glass-number shrink-0">{step.number}</div>
                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "22px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontSize: "17px",
                      fontWeight: 300,
                      color: "#4a6070",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="how-it-works-visual hidden md:flex justify-center lg:justify-end w-full lg:min-h-[640px] items-center"
          >
            <AnimatePresence mode="wait">
              {activeImage === 0 && (
                <motion.img
                  key="step-0"
                  /* STEP 0 IMAGE — replace src to update */
                  src={howItWorksMockup}
                  alt="Steady step 1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[560px] h-auto drop-shadow-2xl"
                />
              )}
              {activeImage === 1 && (
                <motion.img
                  key="step-1"
                  /* STEP 1 IMAGE — replace src to update */
                  src={howItWorksMockup2}
                  alt="Steady step 2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[560px] h-auto drop-shadow-2xl"
                />
              )}
              {activeImage === 2 && (
                <motion.img
                  key="step-2"
                  /* STEP 2 IMAGE — replace src to update */
                  src={howItWorksMockup3}
                  alt="Steady step 3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[560px] h-auto drop-shadow-2xl"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
