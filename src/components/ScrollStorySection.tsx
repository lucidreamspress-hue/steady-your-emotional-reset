import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const fragments = [
  "When your heart races",
  "and thoughts spiral,",
  "you don't need instructions—",
  "you need",
  "a reset.",
];

const ScrollStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} style={{ height: "500vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          background: "#f0f4f8",
        }}
      >
        <div style={{ maxWidth: "880px", width: "100%", textAlign: "center" }}>
          <p
            className="font-display"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#4a6070",
              marginBottom: "32px",
            }}
          >
            Steady
          </p>

          <div
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            {fragments.map((fragment, i) => (
              <FragmentWord
                key={i}
                text={fragment}
                index={i}
                total={fragments.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <ScrollHint scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
};

const FragmentWord = ({
  text,
  index,
  total,
  scrollYProgress,
}: {
  text: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.15)],
    [0.15, 1, 1, 0.15]
  );

  const color = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start],
    ["rgba(26,42,58,0.18)", "rgba(26,42,58,1)"]
  );

  return (
    <motion.span style={{ opacity, color, display: "inline" }}>
      {text}{" "}
    </motion.span>
  );
};

const ScrollHint = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  return (
    <motion.div
      style={{
        opacity,
        marginTop: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        fontFamily: "Jost, sans-serif",
        fontSize: "12px",
        fontWeight: 400,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#4a6070",
      }}
    >
      <span>scroll</span>
      <span style={{ fontSize: "16px" }}>↓</span>
    </motion.div>
  );
};

export default ScrollStorySection;
