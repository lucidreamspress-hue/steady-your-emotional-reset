import { motion } from "framer-motion";

const orbs = [
  {
    label: "Overwhelmed",
    description: "Heart racing, anxiety spike",
    background:
      "radial-gradient(circle at 38% 38%, #ffd0d8, #f4a0b0 55%, #e87090)",
    delay: "0s",
  },
  {
    label: "Stuck",
    description: "Overthinking, can't stop thoughts",
    background:
      "radial-gradient(circle at 38% 38%, #fff0a0, #f5c842 55%, #e8a820)",
    delay: "0.8s",
  },
  {
    label: "Numb",
    description: "Disconnected, low energy",
    background:
      "radial-gradient(circle at 38% 38%, #c8e8f8, #7ab8d8 55%, #4a90b8)",
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
          style={{ fontSize: "36px", fontWeight: 400, color: "#1a2a3a" }}
        >
          Built for how you actually feel
        </motion.h2>

        <div className="flex flex-wrap items-start justify-center gap-12 md:gap-20">
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
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background: o.background,
                  boxShadow: "0 12px 40px rgba(26,42,58,0.12)",
                  animationDelay: o.delay,
                  marginBottom: "24px",
                }}
              />
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#1a2a3a",
                  marginBottom: "6px",
                }}
              >
                {o.label}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#4a6070",
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
