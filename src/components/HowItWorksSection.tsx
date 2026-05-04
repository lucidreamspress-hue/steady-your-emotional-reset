import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  const autoplayRef = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [mobileEmblaRef] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplayRef.current]
  );

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
    <section id="how-it-works" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display"
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em", marginBottom: "16px" }}
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
                  marginBottom: "20px",
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

          <div className="md:hidden overflow-hidden" ref={mobileEmblaRef}>
            <div className="flex">
              {steps.map((step, i) => {
                const img = [howItWorksMockup, howItWorksMockup2, howItWorksMockup3][i];
                return (
                  <div
                    key={step.number}
                    style={{
                      flex: "0 0 auto",
                      minWidth: "85vw",
                      marginRight: "16px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.75)",
                    }}
                  >
                    <img
                      src={img}
                      alt={step.title}
                      style={{
                        width: "100%",
                        height: "340px",
                        objectFit: "contain",
                        objectPosition: "center",
                        background: "rgba(240,244,248,0.5)",
                      }}
                    />
                    <div style={{ padding: "24px" }}>
                      <div className="glass-number">{step.number}</div>
                      <h3
                        className="font-display"
                        style={{
                          fontFamily: "'Host Grotesk', sans-serif",
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#1a2a3a",
                          marginBottom: "6px",
                          marginTop: "12px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Jost, sans-serif",
                          fontSize: "15px",
                          fontWeight: 300,
                          color: "#4a6070",
                          lineHeight: 1.65,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="how-it-works-visual hidden md:flex justify-center lg:justify-end w-full items-center"
            style={{ minHeight: "720px" }}
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
                  className="w-full h-auto drop-shadow-2xl"
                  style={{ maxWidth: "680px" }}
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
                  className="w-full h-auto drop-shadow-2xl"
                  style={{ maxWidth: "680px" }}
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
                  className="w-full h-auto drop-shadow-2xl"
                  style={{ maxWidth: "680px" }}
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
