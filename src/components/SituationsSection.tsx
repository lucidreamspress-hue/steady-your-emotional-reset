import { motion } from "framer-motion";

const situations = [
  "Overwhelmed before a meeting",
  "Anxious on public transport",
  "Stuck in racing thoughts",
  "Emotionally flooded",
];

const SituationsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl tracking-tight text-foreground mb-12"
        >
          Use Steady when you feel:
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {situations.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="inline-block px-6 py-3 rounded-full border border-border bg-background text-foreground text-sm font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SituationsSection;
