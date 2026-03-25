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
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
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
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-6">
              Today
            </p>
            <div className="space-y-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between border-b border-border/50 pb-4">
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                  <span className="text-foreground font-semibold text-lg">{stat.value}</span>
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
