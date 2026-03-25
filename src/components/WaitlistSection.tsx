import { motion } from "framer-motion";
import { useState } from "react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Be the first to try Steady
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We're building Steady to help people regain control in stressful moments.
              Join the waitlist to get early access.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-5 py-3.5 rounded-full neo-inset bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full neo-button text-primary-foreground font-bold text-sm tracking-wide hover:opacity-90 transition-all whitespace-nowrap"
                >
                  Join the waitlist
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl glass"
              >
                <p className="font-bold">You're on the list! ✨</p>
                <p className="text-sm text-muted-foreground mt-1">We'll reach out when Steady is ready.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Angled Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative"
              style={{ transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg) rotateZ(3deg)" }}
            >
              <div className="w-[240px] h-[480px] neo rounded-[2.5rem] p-2.5 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Status bar notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-b-xl" />

                  <p className="text-muted-foreground text-xs mb-6 tracking-wide">Ready to reset?</p>
                  <div className="w-24 h-24 rounded-full neo-button text-primary-foreground font-bold text-base tracking-wider flex items-center justify-center animate-breathe">
                    RESET
                  </div>
                  <p className="text-muted-foreground/60 text-[10px] mt-6 tracking-widest uppercase font-bold">Steady</p>
                </div>
              </div>

              {/* Reflection/glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
