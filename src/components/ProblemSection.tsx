import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div {...fadeUp} className="text-center glass rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-8">
            Stress spikes happen suddenly.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>Your heart starts racing. Your thoughts spiral. You feel overwhelmed.</p>
            <p>
              Most mental health apps expect you to choose exercises, read instructions,
              or start a meditation. But in stressful moments, thinking clearly is the hardest part.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
