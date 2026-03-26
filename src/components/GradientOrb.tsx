import { motion } from "framer-motion";

interface GradientOrbProps {
  color1: string;
  color2: string;
  size?: number;
  animation?: "pulse" | "drift" | "breathe";
  className?: string;
}

const GradientOrb = ({
  color1,
  color2,
  size = 200,
  animation = "pulse",
  className = "",
}: GradientOrbProps) => {
  const baseColor1 = "hsl(250, 50%, 75%)";
  const baseColor2 = "hsl(260, 45%, 78%)";

  const animClass =
    animation === "pulse"
      ? "animate-orb-pulse"
      : animation === "drift"
      ? "animate-orb-drift"
      : "animate-orb-breathe";

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Base purple layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className={`absolute inset-0 rounded-full ${animClass}`}
        style={{
          background: `radial-gradient(circle at 40% 40%, ${baseColor1}, ${baseColor2})`,
          filter: "blur(50px)",
        }}
      />
      {/* Target color layer that pulses in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className={`absolute inset-0 rounded-full ${animClass}`}
        style={{
          background: `radial-gradient(circle at 40% 40%, ${color1}, ${color2})`,
          filter: "blur(50px)",
          animation: `orb-color-fade 6s ease-in-out infinite alternate`,
        }}
      />
    </div>
  );
};

export default GradientOrb;
