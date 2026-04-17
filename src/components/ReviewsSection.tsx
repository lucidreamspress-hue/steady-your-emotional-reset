import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const reviews = [
  {
    quote:
      "This is the first app that actually helped in the exact moment I needed it. I opened it during an anxiety spike at work and within a minute I felt less trapped in my own head. It didn't ask me to journal or build a routine. It just helped.",
    author: "Maya, 28",
  },
  {
    quote:
      "It felt weirdly human. I used it during a smoking craving and the short breathing + distraction flow actually got me past the urge. It's simple, but in a really thoughtful way.",
    author: "Daniel, 34",
  },
  {
    quote:
      "I love that it doesn't ask anything from me when I'm already overwhelmed. Most wellness apps feel like homework. This one feels like immediate support. Calm design, gentle prompts, and no pressure.",
    author: "Sophie, 22",
  },
  {
    quote:
      "The tools are tiny, which is exactly why I can use them. When I'm spiraling, I can't handle anything complicated. Steady gave me something I could actually do in the moment — and that made all the difference.",
    author: "Alex, 31",
  },
];

const ReviewsSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplay.current]
  );

  return (
    <section style={{ background: "#f0f4f8", padding: "100px 0" }}>
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2
          className="font-display text-center mb-16"
          style={{
            fontSize: "40px",
            fontWeight: 600,
            color: "#1a2a3a",
            letterSpacing: "-0.02em",
          }}
        >
          What early users say about Steady
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="reviews-track flex gap-6 px-6 md:px-12">
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="review-card shrink-0"
              style={{
                width: "420px",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "#1a2a3a",
                  lineHeight: 1.7,
                }}
              >
                "{review.quote}"
              </p>
              <p
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#4a6070",
                  marginTop: "16px",
                }}
              >
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
