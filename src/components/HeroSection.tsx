import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight text-foreground mb-6 text-balance">
              Press once when stress spikes. Steady helps your nervous system reset in 60 seconds.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              A simple button that guides your breathing, rhythm, and focus to help you calm down fast.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              JOIN THE WAITLIST
            </a>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <div className="relative w-[280px] h-[560px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.25rem] flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Status bar notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground rounded-b-2xl" />
                  
                  <p className="text-muted-foreground text-sm mb-8 tracking-wide">Overwhelmed?</p>
                  <button className="animate-breathe w-32 h-32 rounded-full bg-primary text-primary-foreground font-serif text-xl tracking-wider flex items-center justify-center shadow-lg">
                    RESET
                  </button>
                  <p className="text-muted-foreground/60 text-xs mt-8 tracking-widest uppercase">Steady</p>
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
