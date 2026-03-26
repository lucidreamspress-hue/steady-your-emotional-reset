import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sentences = [
  "Stress spikes happen suddenly.",
  "Your heart starts racing.",
  "Your thoughts spiral.",
  "You feel overwhelmed.",
  "Most apps ask you to choose what to do, start a session, or think clearly.",
  "But in that moment, thinking is the hardest part.",
  "What you need is a reset.",
];

const ScrollStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${sentences.length * 50}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="mx-auto px-8 md:px-16 max-w-4xl">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.4] md:leading-[1.35] text-center">
            {sentences.map((sentence, i) => (
              <ScrollWord
                key={i}
                text={sentence + " "}
                index={i}
                total={sentences.length}
                scrollYProgress={scrollYProgress}
                isLast={i === sentences.length - 1}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

interface ScrollWordProps {
  text: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  isLast: boolean;
}

const ScrollWord = ({ text, index, total, scrollYProgress, isLast }: ScrollWordProps) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.02), start, end, Math.min(1, end + 0.02)],
    [0.1, 1, 1, 0.1]
  );

  return (
    <motion.span
      style={{ opacity }}
      className={isLast ? "font-serif italic text-4xl md:text-5xl lg:text-6xl" : ""}
    >
      {text}
    </motion.span>
  );
};

export default ScrollStorySection;
