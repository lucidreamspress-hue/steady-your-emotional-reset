import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const HeroSection = () => {
  const [showLaunch, setShowLaunch] = useState(false);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-morph" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-accent/30 blur-3xl animate-morph" style={{ animationDelay: '-4s' }} />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight text-foreground mb-6 text-balance">
              Press once when stress spikes.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Steady helps you calm your body in about 60 seconds using guided breathing, rhythm, and grounding.
            </p>
            <button
              onClick={() => setShowLaunch(true)}
              className="neo-button inline-flex items-center px-8 py-3.5 rounded-full text-primary-foreground font-bold text-sm tracking-wide hover:opacity-90 transition-all"
            >
              Install Steady
            </button>

            {/* For moments list */}
            <div className="mt-10">
              <p className="text-sm font-bold text-foreground mb-3">For moments when you feel:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  overwhelmed
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  anxious
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  mentally flooded
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <div className="relative w-[280px] h-[560px] neo rounded-[3rem] p-3">
                <div className="w-full h-full bg-background rounded-[2.25rem] flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Status bar notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground/10 rounded-b-2xl" />

                  <AnimatePresence mode="wait">
                    {!showLaunch ? (
                      <motion.div
                        key="reset"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center"
                      >
                        <p className="text-muted-foreground text-sm mb-8 tracking-wide">Overwhelmed?</p>
                        <button className="animate-breathe w-32 h-32 rounded-full neo-button text-primary-foreground font-bold text-xl tracking-wider flex items-center justify-center">
                          RESET
                        </button>
                        <p className="text-muted-foreground/60 text-xs mt-8 tracking-widest uppercase font-bold">Steady</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="launch"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center px-6"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                          <span className="text-lg">✨</span>
                        </div>
                        <p className="font-bold text-foreground text-base mb-2">Steady is launching soon.</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Join early access to be first to try it.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
