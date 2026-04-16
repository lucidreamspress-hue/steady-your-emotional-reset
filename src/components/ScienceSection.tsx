import { motion } from "framer-motion";

const points = [
  "Breathing slows your heart rate.",
  "Grounding shifts attention out of loops.",
  "Rhythm re-engages your body.",
];

const ScienceSection = () => {
  return (
    <section id="science" className="py-32 md:py-40 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none animate-breathe"
        style={{
          background: "radial-gradient(circle, #c8e8f8, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="mx-auto px-8 md:px-16 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-display mb-8"
              style={{ fontSize: "36px", fontWeight: 400, color: "#1a2a3a", lineHeight: 1.15 }}
            >
              Built on how your nervous system works
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#4a6070",
                lineHeight: 1.6,
              }}
            >
              These techniques are widely used in stress and anxiety regulation.
            </p>
          </motion.div>

          <div className="space-y-6">
            {points.map((point, i) => (
              <motion.p
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="font-display"
                style={{ fontSize: "22px", fontWeight: 400, color: "#1a2a3a", lineHeight: 1.3 }}
              >
                {point}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
