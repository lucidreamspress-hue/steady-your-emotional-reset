import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const taglines = ["Press once.", "Follow the rhythm.", "Feel steadier."];

const SolutionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 md:py-48">
      <div className="mx-auto px-8 md:px-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
            A reset, not a routine
          </h2>
          <div className="space-y-4 text-xl text-muted-foreground leading-relaxed mb-16">
            <p>Steady isn't a meditation app.</p>
            <p>It's a simple tool you use when something feels off.</p>
          </div>
        </motion.div>

        <div className="space-y-3">
          {taglines.map((line, i) => {
            const start = 0.3 + i * 0.15;
            const end = start + 0.15;
            return (
              <ScrollTagline
                key={line}
                line={line}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ScrollTaglineProps {
  line: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}

const ScrollTagline = ({ line, scrollYProgress, start, end }: ScrollTaglineProps) => {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start, end, 1],
    [0.15, 1, 1, 1]
  );

  return (
    <motion.p
      style={{ opacity }}
      className="text-2xl md:text-3xl font-serif text-foreground"
    >
      {line}
    </motion.p>
  );
};

export default SolutionSection;
