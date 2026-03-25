import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const situations = [
  {
    label: "Overwhelmed",
    color: "hsl(250, 60%, 58%)",
    secondaryColor: "hsl(270, 50%, 65%)",
  },
  {
    label: "Anxious",
    color: "hsl(220, 70%, 55%)",
    secondaryColor: "hsl(200, 60%, 60%)",
  },
  {
    label: "Racing thoughts",
    color: "hsl(280, 50%, 55%)",
    secondaryColor: "hsl(260, 45%, 62%)",
  },
  {
    label: "Emotionally flooded",
    color: "hsl(240, 55%, 52%)",
    secondaryColor: "hsl(250, 50%, 60%)",
  },
];

const SituationsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % situations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl tracking-tight text-foreground mb-16"
        >
          Use Steady when you feel:
        </motion.h2>

        {/* Abstract Shape Carousel */}
        <div className="relative h-64 md:h-72 mb-12">
          {situations.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: active === i ? 1 : 0.15,
                scale: active === i ? 1 : 0.7,
                x: `${(i - active) * 110}%`,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div
                className="w-40 h-40 md:w-48 md:h-48 animate-morph flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.secondaryColor})`,
                  opacity: 0.85,
                  animationDelay: `${i * -2}s`,
                }}
              />
              <motion.p
                animate={{ opacity: active === i ? 1 : 0 }}
                className="mt-6 text-lg font-bold text-foreground"
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2">
          {situations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SituationsSection;
