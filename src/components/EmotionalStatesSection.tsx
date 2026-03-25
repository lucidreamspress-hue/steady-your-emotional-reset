import { motion } from "framer-motion";

const states = [
  {
    emoji: "🔴",
    title: "Overwhelmed",
    subtitle: "Your system is overloaded",
    symptoms: ["anxiety spike", "heart racing", "emotional flooding"],
    goal: "Calm your body down",
    technique: "Steady guides you through a breathing pattern called the physiological sigh",
    steps: "inhale → short second inhale → long slow exhale",
    result: "This helps your body slow down and release tension.",
  },
  {
    emoji: "🟡",
    title: "Stuck",
    subtitle: "Your mind won't stop looping",
    symptoms: ["overthinking", "racing thoughts", "mental spirals"],
    goal: "Interrupt the loop",
    technique: "Steady uses grounding techniques",
    steps: "notice what you see · listen to sounds · feel your body",
    result: "This brings your attention back and interrupts the loop.",
  },
  {
    emoji: "🔵",
    title: "Numb",
    subtitle: "You feel disconnected or shut down",
    symptoms: ["low energy", "detached", "emotionally flat"],
    goal: "Re-engage your system",
    technique: "Steady uses rhythmic tapping and movement",
    steps: "follow a simple rhythm · engage your senses · reconnect with your body",
    result: "This helps you come out of a frozen state.",
  },
];

const EmotionalStatesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-32">
          {states.map((state, i) => (
            <motion.div
              key={state.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-16 items-start ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span className="text-2xl mb-4 block">{state.emoji}</span>
                <h3 className="text-2xl md:text-3xl text-foreground mb-2">
                  {state.title}
                </h3>
                <p className="text-muted-foreground mb-6">{state.subtitle}</p>
                <div className="flex gap-2 flex-wrap mb-8">
                  {state.symptoms.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                  Goal
                </p>
                <p className="text-foreground font-medium mb-6">{state.goal}</p>

                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                  Technique
                </p>
                <p className="text-muted-foreground mb-2">{state.technique}:</p>
                <p className="text-foreground text-sm font-medium mb-4">{state.steps}</p>
                <p className="text-muted-foreground text-sm">{state.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalStatesSection;
