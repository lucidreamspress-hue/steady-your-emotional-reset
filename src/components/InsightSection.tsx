import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const InsightSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div {...fadeUp} className="text-center glass rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-8">
            What you need is a reset.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In moments of stress, your nervous system needs help slowing down. Steady provides
            a guided reset designed for real-life situations — when anxiety or overwhelm hits.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightSection;
