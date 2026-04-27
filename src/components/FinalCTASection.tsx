import { motion } from "framer-motion";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const FinalCTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="cta-section relative py-40 md:py-56 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #f0f4f8, #e8f0ec)" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMax slice"
          style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dceef8" />
              <stop offset="100%" stopColor="#eef5f0" />
            </linearGradient>
          </defs>
          <rect width="1440" height="400" fill="url(#skyGrad)" />
          {[...Array(32)].map((_, i) => {
            const x = (i / 32) * 1440 + Math.sin(i) * 12;
            const h = 60 + Math.sin(i * 1.7) * 30;
            const delay = (i % 6) * 0.4;
            const dur = 2.4 + (i % 4) * 0.5;
            return (
              <g key={i} transform={`translate(${x}, 400)`}>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values={`-4 ${x} 400;4 ${x} 400;-4 ${x} 400`}
                  dur={`${dur}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  additive="sum"
                />
                <path
                  d={`M0,0 C-6,-${h * 0.4} 6,-${h * 0.7} 2,-${h}`}
                  stroke={`rgba(${120 + (i % 3) * 15}, ${170 + (i % 4) * 8}, ${100 + (i % 5) * 6}, 0.5)`}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
          <rect x="0" y="370" width="1440" height="30" fill="rgba(160,200,140,0.18)" rx="2" />
        </svg>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="mx-auto px-8 md:px-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="cta-headline font-display mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 58px)", fontWeight: 600, color: "#1a2a3a", lineHeight: 1.1, letterSpacing: "-0.02em" }}
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
                color: "#4a6070",
              }}
            >
              One tap. Sixty seconds. That's all Steady asks.
            </p>
            <button onClick={() => setOpen(true)} className="btn-primary-dark">
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
