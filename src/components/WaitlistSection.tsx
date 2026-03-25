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
      <div className="container mx-auto px-6 max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Be the first to try Steady
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            We're building Steady to help people regain control in stressful moments.
            Join the waitlist to get early access.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-5 py-3.5 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Join the waitlist
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-accent text-accent-foreground"
            >
              <p className="font-medium">You're on the list! 🌿</p>
              <p className="text-sm text-muted-foreground mt-1">We'll reach out when Steady is ready.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
