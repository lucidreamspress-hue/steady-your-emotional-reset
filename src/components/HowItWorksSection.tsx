import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Press reset",
    description: "Tap when stress spikes.",
  },
  {
    number: "02",
    title: "Follow the rhythm",
    description: "Breathing and gentle guidance help your body regulate.",
  },
  {
    number: "03",
    title: "Feel calmer",
    description: "Most resets take about 60 seconds.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-foreground mb-20 text-center"
        >
          How it works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="inline-block text-xs font-medium text-muted-foreground tracking-widest uppercase mb-4">
                Step {step.number}
              </span>
              <h3 className="text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
