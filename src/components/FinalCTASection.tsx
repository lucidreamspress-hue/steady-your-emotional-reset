import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";
import desertBg from "@/assets/desert-tranquility.webp";

const FinalCTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="cta-section relative py-40 md:py-56 overflow-hidden"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <img
        src={desertBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "blur(2px) brightness(0.78)",
          transform: "scale(1.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "220px",
          zIndex: 1,
          background: "linear-gradient(to bottom, #f0f4f8 0%, rgba(240,244,248,0) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.18)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="mx-auto px-8 md:px-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="cta-headline font-display mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 58px)", fontWeight: 600, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              You already know what it feels like to spiral. Now you have a way out.
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              One tap. Sixty seconds. That's all Steady asks.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="btn-cta-light"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                color: "#1a2a3a",
                borderRadius: "100px",
                padding: "14px 36px",
                fontFamily: "Jost, system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                letterSpacing: "0.03em",
                transition: "background 0.25s ease",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.88)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
            >
              Install Steady
            </button>
          </motion.div>
        </div>
      </div>
      <EarlyAccessModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default FinalCTASection;
