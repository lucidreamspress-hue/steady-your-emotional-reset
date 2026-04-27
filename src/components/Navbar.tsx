import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Emotional states", href: "#emotional-states" },
  { label: "Science", href: "#solution" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-8 md:px-16 py-5 max-w-6xl">
          <div className="glass-surface rounded-full px-6 py-3 flex items-center justify-between">
            <a
              href="#"
              onClick={scrollToTop}
              className="font-display hover:opacity-70 transition-opacity cursor-pointer"
              style={{ color: "#1a2a3a", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.02em" }}
            >
              Steady
            </a>
            <div className="nav-links hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="transition-colors"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#4a6070",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => setOpen(true)}
                className="btn-primary-dark"
                style={{ padding: "10px 22px", fontSize: "13px" }}
              >
                Install Steady
              </button>
            </div>
            <a
              className="md:hidden"
              href="#install"
              onClick={(e) => { e.preventDefault(); setOpen(true); }}
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                color: "#1a2a3a",
                textDecoration: "none",
                marginLeft: "auto",
              }}
            >
              Install
            </a>
          </div>
        </div>
      </nav>
      <EarlyAccessModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Navbar;
