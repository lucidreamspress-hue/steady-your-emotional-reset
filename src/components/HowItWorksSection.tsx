import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import howItWorksMockup from "@/assets/how-it-works-mockup.png";

const steps = [
  { number: "1", title: "Tell Steady how you feel", description: "Pick from overwhelmed, stuck, or numb — or just tap reset." },
  { number: "2", title: "Get a tailored micro-tool", description: "Breathing, grounding, or attention-shifting in under a minute." },
  { number: "3", title: "Feel steadier, fast", description: "Most resets take about 60 seconds." },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-32 md:py-40">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display mb-20"
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
        >
          How it works
        </motion.h2>

        <div className="how-it-works-layout grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className="flex items-start gap-5 cursor-pointer transition-all duration-300"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    borderLeft: isActive ? "2px solid #1a2a3a" : "2px solid transparent",
                    background: isActive ? "rgba(255,255,255,0.6)" : "transparent",
                    paddingLeft: isActive ? "16px" : "0px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    borderRadius: "8px",
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
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="how-it-works-visual flex justify-center lg:justify-end w-full lg:min-h-[580px] items-center"
          >
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.img
                  key="step-0"
                  /* STEP 0 IMAGE — replace src to update */
                  src={howItWorksMockup}
                  alt="Steady step 1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[420px] h-auto drop-shadow-2xl"
                />
              )}
              {activeStep === 1 && (
                <motion.img
                  key="step-1"
                  /* STEP 1 IMAGE — replace src to update */
                  src={howItWorksMockup}
                  alt="Steady step 2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[420px] h-auto drop-shadow-2xl"
                />
              )}
              {activeStep === 2 && (
                <motion.img
                  key="step-2"
                  /* STEP 2 IMAGE — replace src to update */
                  src={howItWorksMockup}
                  alt="Steady step 3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[420px] h-auto drop-shadow-2xl"
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
