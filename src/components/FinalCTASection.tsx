import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const FinalCTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
            Be the first to try Steady
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            We're building Steady to help people stabilize during stressful moments.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
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
