import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "Stress spikes happen suddenly.",
  "Your heart starts racing.",
  "Your thoughts spiral.",
  "You feel overwhelmed.",
  "",
  "Most apps ask you to choose what to do.",
  "Start a session.",
  "Read instructions.",
  "Think clearly.",
  "",
  "But in that moment, thinking is the hardest part.",
  "",
  "What you need is a reset.",
];

const ScrollStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const nonEmptyLines = lines.filter((l) => l !== "");
  const totalNonEmpty = nonEmptyLines.length;
  let nonEmptyIndex = -1;

  return (
    <section ref={containerRef} className="py-32 md:py-48">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="space-y-4">
          {lines.map((line, i) => {
            if (line === "") {
              return <div key={i} className="h-6" />;
            }

            nonEmptyIndex++;
            const idx = nonEmptyIndex;
            const start = idx / totalNonEmpty;
            const peak = (idx + 0.5) / totalNonEmpty;
            const end = (idx + 1) / totalNonEmpty;

            return (
              <ScrollLine
                key={i}
                line={line}
                scrollYProgress={scrollYProgress}
                start={start}
                peak={peak}
                end={end}
                isLast={line === "What you need is a reset."}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ScrollLineProps {
  line: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  peak: number;
  end: number;
  isLast: boolean;
}

const ScrollLine = ({ line, scrollYProgress, start, peak, end, isLast }: ScrollLineProps) => {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start, peak, end, Math.min(1, end + 0.05)],
    [0.15, 0.15, 1, 1, 0.15]
  );

  return (
    <motion.p
      style={{ opacity }}
      className={`${
        isLast
          ? "text-2xl md:text-3xl font-semibold text-foreground mt-8"
          : "text-xl md:text-2xl text-foreground"
      } leading-relaxed`}
    >
      {line}
    </motion.p>
  );
};

export default ScrollStorySection;
