import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const FinalCTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-40 md:py-56 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          background:
            "linear-gradient(135deg, hsl(350, 60%, 90%), hsl(45, 50%, 88%), hsl(215, 50%, 88%), hsl(280, 40%, 90%))",
          backgroundSize: "300% 300%",
        }}
      />
      {/* Soft wave orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-wave opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(350, 50%, 80%), transparent)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-orb-breathe opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(215, 50%, 80%), transparent)",
          filter: "blur(100px)",
        }}
      />

      <div className="mx-auto px-8 md:px-16 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8">
            Be the first to try Steady
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg mx-auto">
            We're building Steady to help people stabilize during stressful moments.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="btn-glass px-8 py-3.5 text-sm"
          >
            Get early access
          </button>
        </motion.div>
      </div>
      <EarlyAccessModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default FinalCTASection;
