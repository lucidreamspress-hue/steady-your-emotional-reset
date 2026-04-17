import { motion } from "framer-motion";

const cards = [
  {
    num: "1",
    color: "#7ab8d8",
    title: "Breathing",
    body: "Physiological sigh breathing activates the parasympathetic nervous system — the body's built-in brake. Double inhale, slow exhale. It works in under 60 seconds.",
  },
  {
    num: "2",
    color: "#f4a0b0",
    title: "Grounding",
    body: "Sensory grounding interrupts the thought loop by shifting attention to the present moment. It's one of the fastest ways to exit an anxiety spiral.",
  },
  {
    num: "3",
    color: "#f5c842",
    title: "Rhythm",
    body: "Rhythmic stimulation — tapping, pacing, breath — reactivates the nervous system when you feel numb or disconnected. It works bottom-up, bypassing overthinking.",
  },
];

const ScienceSection = () => {
  return (
    <section id="science" style={{ background: "#f0f4f8", padding: "100px 24px" }}>
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-center mb-6"
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
        >
          Built on how your nervous system works
        </motion.h2>
        <p
          className="text-center mx-auto mb-16"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            color: "#4a6070",
            maxWidth: "560px",
            lineHeight: 1.65,
          }}
        >
          Every technique in Steady is grounded in how the nervous system actually responds to stress.
        </p>

        <div className="cards-row grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "36px",
                border: "1px solid rgba(200,215,230,0.6)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: `1.5px solid ${c.color}`,
                  color: c.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  marginBottom: "16px",
                }}
              >
                {c.num}
              </div>
              <h3
                className="font-display mb-3"
                style={{ fontSize: "22px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
              >
                {c.title}
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
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
