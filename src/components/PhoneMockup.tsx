import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screens = [
  { id: "reset", duration: 3500 },
  { id: "breathe", duration: 4500 },
  { id: "done", duration: 3000 },
];

const PhoneMockup = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, screens[current].duration);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className="w-[260px] h-[520px] rounded-[2.5rem] border border-border bg-secondary p-3 shadow-sm">
      <div className="w-full h-full bg-background rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary rounded-b-xl" />

        <AnimatePresence mode="wait">
          {current === 0 && (
            <motion.div
              key="reset"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-muted-foreground text-sm mb-8">Overwhelmed?</p>
              <div className="w-28 h-28 rounded-full bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center animate-breathe">
                RESET
              </div>
              <p className="text-muted-foreground/50 text-[10px] mt-8 tracking-widest uppercase font-medium">
                Steady
              </p>
            </motion.div>
          )}

          {current === 1 && (
            <motion.div
              key="breathe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-muted-foreground text-xs mb-6">Breathe in...</p>
              <div className="w-24 h-24 rounded-full border-2 border-foreground/20 animate-breathe-circle" />
              <p className="text-muted-foreground text-xs mt-6">Follow the rhythm</p>
            </motion.div>
          )}

          {current === 2 && (
            <motion.div
              key="done"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center px-6"
            >
              <p className="text-foreground font-semibold text-base mb-2">Feeling steadier</p>
              <p className="text-muted-foreground text-sm">Reset complete.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhoneMockup;
