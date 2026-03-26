import { motion } from "framer-motion";

const stats = [
  { label: "Resets", value: "3" },
  { label: "Stress spikes handled", value: "3" },
  { label: "Average improvement", value: "+28%" },
  { label: "Calm streak", value: "5 days" },
];

const ProgressSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              See your progress
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over time, you'll see how often you reset and how your response to stress improves.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-8 uppercase">
              Today
            </p>
            <div className="space-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between">
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                  <span className="font-mono text-lg text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
