import { motion } from "framer-motion";

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl text-foreground mb-10">
            A reset, not a routine
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Steady isn't a meditation app.</p>
            <p>It's a simple tool you use when something feels off.</p>
            <div className="pt-4 space-y-2 text-foreground font-medium">
              <p>Press once.</p>
              <p>Follow the rhythm.</p>
              <p>Feel steadier.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
