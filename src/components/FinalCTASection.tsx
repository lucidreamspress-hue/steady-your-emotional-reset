import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const FinalCTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-40 md:py-56 overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient opacity-40"
        style={{
          background:
            "linear-gradient(135deg, #c8e8f8, #f0f4f8, #ffd0d8, #c8e8f8)",
          backgroundSize: "300% 300%",
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-wave opacity-30"
        style={{
          background: "radial-gradient(circle, #7ab8d8, transparent)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-breathe opacity-25"
        style={{
          background: "radial-gradient(circle, #f4a0b0, transparent)",
          filter: "blur(100px)",
        }}
      />

      <div className="mx-auto px-8 md:px-16 max-w-3xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-display mb-6"
            style={{ fontSize: "clamp(40px, 5vw, 58px)", fontWeight: 600, color: "#1a2a3a", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            The next spike is coming. Be ready.
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#4a6070",
            }}
          >
            One tap. One reset. That's it.
          </p>
          <button onClick={() => setOpen(true)} className="btn-primary-dark">
            Install Steady
          </button>
        </motion.div>
      </div>
      <EarlyAccessModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default FinalCTASection;
