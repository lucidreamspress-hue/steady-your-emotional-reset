import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-8 md:px-16 py-6 flex items-center justify-between max-w-6xl">
          <div className="glass-surface rounded-full px-5 py-2.5">
            <span className="font-mono text-sm tracking-wide text-foreground">Steady</span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="btn-glass px-5 py-2.5 text-xs tracking-wide"
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
