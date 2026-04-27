import { motion } from "framer-motion";

const states = [
  {
    label: "Overwhelmed",
    feeling: "Heart racing, anxiety spike",
    orbBackground:
      "radial-gradient(circle at 38% 35%, rgba(255,220,228,0.95), rgba(244,160,176,0.8) 55%, rgba(232,112,144,0.65))",
    orbShadow: "0 8px 32px rgba(244,160,176,0.35)",
    orbDelay: "0s",
    accentColor: "#f4a0b0",
    technique: "Breathing",
    techniqueCircle: "1",
    help: "A physiological sigh activates your body's brake — double inhale, slow exhale — in under 60 seconds.",
  },
  {
    label: "Stuck",
    feeling: "Overthinking, can't stop thoughts",
    orbBackground:
      "radial-gradient(circle at 38% 35%, rgba(255,248,180,0.95), rgba(245,200,66,0.8) 55%, rgba(232,168,32,0.65))",
    orbShadow: "0 8px 32px rgba(245,200,66,0.3)",
    orbDelay: "0.8s",
    accentColor: "#f5c842",
    technique: "Grounding",
    techniqueCircle: "2",
    help: "Sensory grounding pulls attention out of the thought loop and back to the present moment.",
  },
  {
    label: "Numb",
    feeling: "Disconnected, low energy",
    orbBackground:
      "radial-gradient(circle at 38% 35%, rgba(200,232,250,0.95), rgba(122,184,216,0.8) 55%, rgba(74,144,184,0.65))",
    orbShadow: "0 8px 32px rgba(122,184,216,0.3)",
    orbDelay: "1.6s",
    accentColor: "#7ab8d8",
    technique: "Rhythm",
    techniqueCircle: "3",
    help: "Rhythmic tapping re-engages the nervous system from the bottom up, bypassing the need to think.",
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
          className="font-display mb-6 text-center"
          style={{ fontSize: "40px", fontWeight: 600, color: "#1a2a3a", letterSpacing: "-0.02em" }}
        >
          Feel it. Name it. Reset it.
        </motion.h2>
        <p
          className="text-center mx-auto mb-20"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            color: "#4a6070",
            lineHeight: 1.65,
            maxWidth: "520px",
          }}
        >
          Steady recognizes what you're feeling and gives you one simple technique — matched to your state — in real time.
        </p>

        <div className="orbs-row grid md:grid-cols-3 gap-8">
          {states.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.75)",
                borderRadius: "24px",
                padding: "40px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <div
                className="animate-breathe"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: s.orbBackground,
                  boxShadow: s.orbShadow,
                  animationDelay: s.orbDelay,
                }}
              />
              <p
                className="font-display"
                style={{
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#1a2a3a",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "#4a6070",
                  margin: 0,
                }}
              >
                {s.feeling}
              </p>
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "rgba(26,42,58,0.12)",
                  margin: "8px auto",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    border: `1.5px solid ${s.accentColor}`,
                    color: s.accentColor,
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  {s.techniqueCircle}
                </span>
                <span
                  style={{
                    fontFamily: "'Host Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#1a2a3a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.technique}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#4a6070",
                  lineHeight: 1.65,
                  marginTop: "8px",
                }}
              >
                {s.help}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalStatesSection;
