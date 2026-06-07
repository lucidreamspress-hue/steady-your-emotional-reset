import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface EarlyAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EarlyAccessModal = ({ open, onOpenChange }: EarlyAccessModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{
          maxWidth: "360px",
          width: "calc(100vw - 48px)",
          borderRadius: "20px",
          padding: "36px 28px",
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle
                style={{
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#1a2a3a",
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                Get Early Access
              </DialogTitle>
              <DialogDescription
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "#4a6070",
                  lineHeight: 1.6,
                  textAlign: "center",
                  marginBottom: "24px",
                }}
              >
                Leave your email and we'll let you know as soon as Steady is ready.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(26,42,58,0.15)",
                  background: "rgba(240,244,248,0.8)",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "#1a2a3a",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary-dark"
                style={{ width: "100%", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Getting Early Access..." : "Get Early Access"}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <h3
              style={{
                fontFamily: "'Host Grotesk', sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#1a2a3a",
                letterSpacing: "-0.02em",
                marginBottom: "8px",
              }}
            >
              You're on the list.
            </h3>
            <p style={{ fontFamily: "Jost, sans-serif", fontSize: "15px", fontWeight: 300, color: "#4a6070", lineHeight: 1.6 }}>
              We'll email you as soon as Steady is ready.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessModal;
