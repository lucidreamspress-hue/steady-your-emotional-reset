import { motion } from "framer-motion";

const orbs = [
  {
    label: "Overwhelmed",
    description: "Heart racing, anxiety spike",
    background:
      "radial-gradient(circle at 38% 35%, rgba(255,220,228,0.95), rgba(244,160,176,0.8) 55%, rgba(232,112,144,0.65))",
    shadow: "0 8px 32px rgba(244,160,176,0.35)",
    delay: "0s",
  },
  {
    label: "Stuck",
    description: "Overthinking, can't stop thoughts",
    background:
      "radial-gradient(circle at 38% 35%, rgba(255,248,180,0.95), rgba(245,200,66,0.8) 55%, rgba(232,168,32,0.65))",
    shadow: "0 8px 32px rgba(245,200,66,0.3)",
    delay: "0.8s",
  },
  {
    label: "Numb",
    description: "Disconnected, low energy",
    background:
      "radial-gradient(circle at 38% 35%, rgba(200,232,250,0.95), rgba(122,184,216,0.8) 55%, rgba(74,144,184,0.65))",
    shadow: "0 8px 32px rgba(122,184,216,0.3)",
    delay: "1.6s",
  },
];

const EmotionalStatesSection = () => {
  return (
    <section id="emotional-states" className="py-32 md:py-40">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display mb-20 text-center"
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
        >
          Built for how you actually feel
        </motion.h2>

        <div className="orbs-row flex flex-wrap items-start justify-center gap-12 md:gap-20">
          {orbs.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
              style={{ width: "180px" }}
            >
              <div
                className="animate-breathe"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: o.background,
                  boxShadow: o.shadow,
                  animationDelay: o.delay,
                  marginBottom: "24px",
                }}
              />
              <p
                className="font-display"
                style={{
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1a2a3a",
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                }}
              >
                {o.label}
              </p>
              <p
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#4a6070",
                  lineHeight: 1.65,
                }}
              >
                {o.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalStatesSection;
