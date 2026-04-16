import { motion } from "framer-motion";
import howItWorksMockup from "@/assets/how-it-works-mockup.png";

const steps = [
  { number: "1", title: "Tell Steady how you feel", description: "Pick from overwhelmed, stuck, or numb — or just tap reset." },
  { number: "2", title: "Get a tailored micro-tool", description: "Breathing, grounding, or attention-shifting in under a minute." },
  { number: "3", title: "Feel steadier, fast", description: "Most resets take about 60 seconds." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 md:py-40">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display mb-20"
          style={{ fontSize: "36px", fontWeight: 400, color: "#1a2a3a" }}
        >
          How it works
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="glass-number shrink-0">{step.number}</div>
                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "22px", fontWeight: 500, color: "#1a2a3a" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      fontWeight: 300,
                      color: "#4a6070",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={howItWorksMockup}
              alt="Steady app emotional state selection screen"
              className="w-full max-w-[420px] h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
