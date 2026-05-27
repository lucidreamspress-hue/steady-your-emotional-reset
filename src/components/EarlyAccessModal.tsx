import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EarlyAccessModal = ({ open, onOpenChange }: Props) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="border-none glass-surface rounded-2xl"
        style={{ maxWidth: "360px", width: "calc(100vw - 48px)", margin: "0 auto", padding: "32px 28px" }}
      >
        <DialogHeader>
          <DialogTitle className="font-display text-2xl" style={{ color: "#1a2a3a", fontWeight: 400 }}>Download for iOS</DialogTitle>
          <DialogDescription style={{ color: "#4a6070" }}>
            Join the early access list. We'll email you when Steady is ready.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl bg-secondary/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 text-sm border border-border/30"
            />
            <button
              type="submit"
              className="w-full btn-primary-dark"
              style={{ padding: "16px 32px", fontSize: "15px" }}
            >
              Download for iOS
            </button>
          </form>
        ) : (
          <div className="py-8 text-center">
            <p className="font-serif text-foreground text-xl">You're in.</p>
            <p className="text-sm text-muted-foreground mt-2">
              We'll reach out when Steady is ready.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessModal;
