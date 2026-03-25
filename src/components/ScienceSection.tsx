import { motion } from "framer-motion";

const ScienceSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl text-foreground mb-10">
            Built on how your nervous system works
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Steady uses short, evidence-based techniques that directly affect how your body responds to stress.
            </p>
            <p>Each reset is based on well-established mechanisms:</p>
            <div className="space-y-3 text-base pl-1">
              <p>— Breathing patterns that help slow heart rate</p>
              <p>— Sensory grounding to shift attention out of thought loops</p>
              <p>— Rhythmic stimulation to re-engage the body</p>
            </div>
            <p>
              These approaches are commonly used in anxiety regulation and stress recovery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScienceSection;
