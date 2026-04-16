const words = ["in seconds.", "right now.", "when it spikes.", "without a plan."];

const ScrollStorySection = () => {
  return (
    <section
      className="w-full py-32 md:py-40 px-8 md:px-16 flex flex-col items-center justify-center text-center"
      style={{ background: "#0f1a24" }}
    >
      <h2
        className="font-display mb-10"
        style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "#f0f4f8",
        }}
      >
        Stress hits fast.
      </h2>

      <div
        className="font-display flex flex-wrap items-center justify-center gap-x-3"
        style={{
          fontSize: "clamp(28px, 4.5vw, 48px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "#f0f4f8",
        }}
      >
        <span>Steady helps</span>
        <span
          className="relative inline-block overflow-hidden align-bottom"
          style={{ height: "64px", width: "min(360px, 80vw)" }}
        >
          <span className="absolute left-0 top-0 flex flex-col animate-cycle-up" style={{ color: "#7ab8d8" }}>
            {words.map((w) => (
              <span key={w} style={{ height: "64px", lineHeight: "64px" }}>
                {w}
              </span>
            ))}
            <span style={{ height: "64px", lineHeight: "64px" }}>{words[0]}</span>
          </span>
        </span>
      </div>
    </section>
  );
};

export default ScrollStorySection;
