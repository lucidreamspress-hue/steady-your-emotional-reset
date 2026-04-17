import { motion } from "framer-motion";

const features = [
  {
    label: "Evidence-based mechanics",
    body: "Breathing, grounding, and attention-shifting tools inspired by evidence-based methods — simplified for moments when your brain is overloaded.",
    icon: <i className="fa-solid fa-brain" style={{ fontSize: "22px", color: "#1a2a3a" }} />,
  },
  {
    label: "Personalized to what you're feeling",
    body: "Whether it's anxiety, a craving, panic, stress, sadness, or emotional overload, Steady adapts the support to your state in real time.",
    icon: <i className="fa-solid fa-sliders" style={{ fontSize: "22px", color: "#1a2a3a" }} />,
  },
  {
    label: "Relief in seconds, not someday",
    body: "No programs, no tracking, no overthinking. Just one simple action that helps you steady yourself right now.",
    icon: <i className="fa-solid fa-bolt" style={{ fontSize: "22px", color: "#1a2a3a" }} />,
  },
];

const SolutionSection = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display mb-16"
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", lineHeight: 1.15, letterSpacing: "-0.02em" }}
        >
          Designed for the moments that don't wait
        </motion.h2>

        <div className="cards-row grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: "32px" }}
            >
              <div style={{ marginBottom: "20px" }}>{f.icon}</div>
              <p
                className="font-display"
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#1a2a3a",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                {f.label}
              </p>
              <p
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "#4a6070",
                  lineHeight: 1.7,
                }}
              >
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
