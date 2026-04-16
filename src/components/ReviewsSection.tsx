import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "This is the first app that actually helped in the exact moment I needed it. I opened it during an anxiety spike at work and within a minute I felt less trapped in my own head. It didn't ask me to journal or build a routine. It just helped.",
    name: "Maya, 28",
  },
  {
    quote:
      "It felt weirdly human. I used it during a smoking craving and the short breathing + distraction flow actually got me past the urge. It's simple, but in a really thoughtful way.",
    name: "Daniel, 34",
  },
  {
    quote:
      "I love that it doesn't ask anything from me when I'm already overwhelmed. Most wellness apps feel like homework. This one feels like immediate support. Calm design, gentle prompts, and no pressure.",
    name: "Sophie, 22",
  },
  {
    quote:
      "The tools are tiny, which is exactly why I can use them. When I'm spiraling, I can't handle anything complicated. Steady gave me something I could actually do in the moment — and that made all the difference.",
    name: "Alex, 31",
  },
];

const ReviewsSection = () => {
  return (
    <section style={{ background: "#ffffff", padding: "80px 24px" }}>
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-center mb-16"
          style={{ fontSize: "36px", fontWeight: 400, color: "#1a2a3a" }}
        >
          What early users say about Steady
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{
                background: "rgba(240,244,248,0.8)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#1a2a3a",
                  lineHeight: 1.6,
                }}
              >
                {r.quote}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#4a6070",
                  marginTop: "16px",
                }}
              >
                — {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
