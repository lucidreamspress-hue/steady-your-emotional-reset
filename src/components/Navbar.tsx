import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Emotional states", href: "#emotional-states" },
  { label: "Science", href: "#science" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-8 md:px-16 py-5 max-w-6xl">
          <div className="glass-surface rounded-full px-6 py-3 flex items-center justify-between">
            <span className="font-mono text-sm tracking-wide text-foreground font-medium">Steady</span>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setOpen(true)}
              className="btn-glass px-5 py-2 text-xs tracking-wide"
            >
              Early access
            </button>
          </div>
        </div>
      </nav>
      <EarlyAccessModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Navbar;
