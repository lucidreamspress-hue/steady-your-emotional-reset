import { motion } from "framer-motion";
import GradientOrb from "./GradientOrb";

const points = [
  "Breathing slows your heart rate",
  "Grounding shifts attention out of loops",
  "Rhythm re-engages your body",
];

const ScienceSection = () => {
  return (
    <section id="science" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <GradientOrb
          color1="hsl(240, 40%, 80%)"
          color2="hsl(280, 30%, 85%)"
          size={600}
          animation="breathe"
        />
      </div>

      <div className="mx-auto px-8 md:px-16 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
              Built on how your nervous system works
            </h2>
            <p className="text-sm text-muted-foreground">
              These techniques are widely used in stress and anxiety regulation.
            </p>
          </div>

          <div className="space-y-8">
            {points.map((point, i) => (
              <motion.p
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-xl md:text-2xl font-serif text-foreground"
              >
                {point}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScienceSection;
