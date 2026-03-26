import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Press reset", description: "Tap when stress spikes." },
  { number: "02", title: "Follow the rhythm", description: "Breathing and gentle guidance help your body regulate." },
  { number: "03", title: "Feel calmer", description: "Most resets take about 60 seconds." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 md:py-40">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl text-foreground mb-24"
        >
          How it works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="glass-number mb-6">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
