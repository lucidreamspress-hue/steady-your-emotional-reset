import { motion } from "framer-motion";
import GradientOrb from "./GradientOrb";

const states = [
  {
    title: "Overwhelmed",
    description: "Your system is overloaded — heart racing, anxiety rising.",
    goal: "Calm your body",
    technique: "Physiological sigh breathing",
    steps: "inhale → inhale → long exhale",
    color1: "hsl(350, 70%, 65%)",
    color2: "hsl(25, 80%, 65%)",
    animation: "pulse" as const,
  },
  {
    title: "Stuck",
    description: "Your mind is looping — thoughts won't stop.",
    goal: "Interrupt the loop",
    technique: "Grounding",
    steps: "bring attention to senses and surroundings",
    color1: "hsl(45, 70%, 70%)",
    color2: "hsl(55, 60%, 60%)",
    animation: "drift" as const,
  },
  {
    title: "Numb",
    description: "You feel disconnected or shut down.",
    goal: "Re-engage your system",
    technique: "Rhythmic tapping and sensory activation",
    steps: "follow a rhythm, engage your senses, reconnect",
    color1: "hsl(215, 60%, 65%)",
    color2: "hsl(240, 50%, 70%)",
    animation: "breathe" as const,
  },
];

const EmotionalStatesSection = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <div className="space-y-48">
          {states.map((state, i) => (
            <motion.div
              key={state.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-20 items-center ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              <div className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <GradientOrb
                  color1={state.color1}
                  color2={state.color2}
                  size={280}
                  animation={state.animation}
                />
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {state.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">{state.description}</p>

                <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2 uppercase">
                  Goal
                </p>
                <p className="text-foreground mb-6">{state.goal}</p>

                <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2 uppercase">
                  Technique
                </p>
                <p className="text-muted-foreground mb-1">{state.technique}</p>
                <p className="text-foreground text-sm font-medium">{state.steps}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalStatesSection;
