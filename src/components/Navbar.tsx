import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-5xl">
          <span className="font-semibold text-lg tracking-tight text-foreground">Steady</span>
          <button
            onClick={() => setOpen(true)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Get early access
          </button>
        </div>
      </nav>
      <EarlyAccessModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Navbar;
