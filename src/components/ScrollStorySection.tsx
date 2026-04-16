const words = [
  { text: "in seconds.", color: "#7ab8d8" },
  { text: "right now.", color: "#f4a0b0" },
  { text: "when it spikes.", color: "#f5c842" },
  { text: "without a plan.", color: "#7ab8d8" },
];

const ScrollStorySection = () => {
  return (
    <section
      className="w-full py-32 md:py-40 px-8 md:px-16 flex flex-col items-center justify-center text-center"
      style={{ background: "#0f1a24" }}
    >
      <p
        className="mb-8"
        style={{
          fontFamily: "Jost, sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        Stress hits fast.
      </p>

      <div
        className="font-display flex flex-wrap items-center justify-center gap-x-4"
        style={{
          fontSize: "52px",
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "#ffffff",
        }}
      >
        <span>Steady helps</span>
        <span
          className="relative inline-block overflow-hidden align-bottom"
          style={{ height: "68px", width: "min(420px, 85vw)", textAlign: "left" }}
        >
          <span className="absolute left-0 top-0 flex flex-col animate-scroll-words">
            {words.map((w, i) => (
              <span
                key={i}
                style={{
                  height: "68px",
                  lineHeight: "68px",
                  color: w.color,
                }}
              >
                {w.text}
              </span>
            ))}
            <span style={{ height: "68px", lineHeight: "68px", color: words[0].color }}>
              {words[0].text}
            </span>
          </span>
        </span>
      </div>
    </section>
  );
};

export default ScrollStorySection;
