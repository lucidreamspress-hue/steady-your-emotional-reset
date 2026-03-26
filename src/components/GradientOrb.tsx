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
  const animClass =
    animation === "pulse"
      ? "animate-orb-pulse"
      : animation === "drift"
      ? "animate-orb-drift"
      : "animate-orb-breathe";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className={`rounded-full ${animClass} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 40% 40%, ${color1}, ${color2})`,
        filter: "blur(50px)",
      }}
    />
  );
};

export default GradientOrb;
