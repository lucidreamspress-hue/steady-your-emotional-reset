import { motion } from "framer-motion";

const features = [
  {
    label: "Evidence-based mechanics",
    body: "Breathing, grounding, and attention-shifting tools inspired by evidence-based methods — simplified for moments when your brain is overloaded.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a2a3a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9.5 2a4.5 4.5 0 0 1 0 9H9" />
        <path d="M14.5 2a4.5 4.5 0 0 0 0 9H15" />
        <path d="M9 11v10" />
        <path d="M15 11v10" />
        <path d="M6 21h12" />
      </svg>
    ),
  },
  {
    label: "Personalized to what you're feeling",
    body: "Whether it's anxiety, a craving, panic, stress, sadness, or emotional overload, Steady adapts the support to your state in real time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a2a3a" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="5" cy="17" r="2" />
      </svg>
    ),
  },
  {
    label: "Relief in seconds, not someday",
    body: "No programs, no tracking, no overthinking. Just one simple action that helps you steady yourself right now.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a2a3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
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

        <div className="grid md:grid-cols-3 gap-6">
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
