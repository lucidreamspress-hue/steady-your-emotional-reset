import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-5xl">
        <span className="font-serif text-xl tracking-tight text-foreground">Steady</span>
        <a
          href="#waitlist"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Join waitlist
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
