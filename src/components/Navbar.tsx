import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto px-8 md:px-16 py-5 flex items-center justify-between max-w-6xl">
          <span className="font-mono text-sm tracking-wide text-foreground">Steady</span>
          <button
            onClick={() => setOpen(true)}
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Early access
          </button>
        </div>
      </nav>
      <EarlyAccessModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Navbar;
