import { useEffect, useRef } from "react";
import { LocatingDot, Crosshair } from "./primitives.jsx";

const CATALOG_HREF = `mailto:info@clearpointscientific.com?subject=${encodeURIComponent(
  "Catalog Request",
)}&body=${encodeURIComponent("Hi,\n\nI would like to request a copy of your product catalog.\n\nName:\nOrganization:\n")}`;

// Pre-decoded image sequence drawn to a <canvas>, driven by scroll. Seeking a
// <video> by currentTime decodes a frame on every scroll tick, which stutters; here
// each frame is a preloaded image, so drawing it is essentially instant — smooth
// scrubbing. The section is taller than the viewport; while pinned, scroll position
// maps to a frame index.
const FRAME_COUNT = 193;
const FRAME_W = 1024;
const FRAME_H = 576;
const frameUrl = (i) => `/frames/f${String(i + 1).padStart(3, "0")}.jpg`;

export default function Showcase3D() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext("2d");

    const images = new Array(FRAME_COUNT);
    let current = -1;

    const drawFrame = (idx) => {
      let img = images[idx];
      if (!img || !img.complete || !img.naturalWidth) {
        // fall back to the nearest already-loaded frame below the target
        for (let j = idx - 1; j >= 0; j--) {
          const cand = images[j];
          if (cand && cand.complete && cand.naturalWidth) {
            img = cand;
            break;
          }
        }
      }
      if (img && img.complete && img.naturalWidth)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // preload the sequence
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameUrl(i);
      images[i] = img;
      if (i === 0) img.onload = () => drawFrame(0);
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      const first = images[0];
      if (first.complete) drawFrame(0);
      return;
    }

    let raf = 0;
    const tick = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(distance, 1));
      const progress = distance > 0 ? scrolled / distance : 0;
      const idx = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
      );
      if (idx !== current) {
        current = idx;
        drawFrame(idx);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      style={{ position: "relative", height: "300vh", background: "#0B2545" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          width={FRAME_W}
          height={FRAME_H}
          aria-label="ClearPoint Scientific laboratory supplies"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundImage: "url(/clearpoint-3d-poster.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* legibility scrim: darker on the left/bottom where the hero copy sits */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(7,18,33,0.86) 0%, rgba(7,18,33,0.5) 42%, rgba(7,18,33,0.12) 72%, rgba(7,18,33,0) 100%)," +
              "linear-gradient(180deg, rgba(7,18,33,0.5) 0%, rgba(7,18,33,0) 24%, rgba(7,18,33,0) 64%, rgba(7,18,33,0.6) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* corner registration marks */}
        <Crosshair top={88} left={26} size={18} color="rgba(255,255,255,0.6)" />
        <Crosshair
          top={88}
          right={26}
          size={18}
          color="rgba(255,255,255,0.6)"
        />
        <Crosshair
          bottom={24}
          left={26}
          size={18}
          color="rgba(255,255,255,0.6)"
        />
        <Crosshair
          bottom={24}
          right={26}
          size={18}
          color="rgba(255,255,255,0.6)"
        />

        {/* hero copy + CTAs — top/bottom padding keeps the content clear of the
            fixed nav (top) and the scroll cue (bottom) when centered on short screens */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "250px 0 160px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "var(--maxw)",
              margin: "0 auto",
              padding: "0 var(--pad-x)",
            }}
          >
            <div
              className="cp-fade-up"
              style={{ maxWidth: 640, animation: "cpFadeUp 0.7s ease both" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                }}
              >
                <LocatingDot
                  pulse
                  ringColor="#9CC2F2"
                  dotColor="#9CC2F2"
                  ringOpacity={0.7}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12.5,
                    fontWeight: 500,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#9CC2F2",
                    textShadow: "0 1px 12px rgba(7,18,33,0.8)",
                  }}
                >
                  Scientific Supply Partner
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(44px, 6.4vw, 84px)",
                  lineHeight: 0.98,
                  letterSpacing: "-1.5px",
                  color: "#fff",
                  margin: "0 0 26px",
                  textShadow:
                    "0 2px 34px rgba(7,18,33,0.7), 0 1px 4px rgba(7,18,33,0.6)",
                }}
              >
                Scientific Supplies.
                <br />
                <span style={{ color: "#6FA8EE" }}>Sourced Smarter.</span>
              </h1>
              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.62,
                  color: "rgba(255,255,255,0.88)",
                  maxWidth: 520,
                  margin: "0 0 36px",
                  textShadow: "0 1px 16px rgba(7,18,33,0.8)",
                }}
              >
                Fast, reliable access to the products your lab runs on — backed
                by responsive service, competitive pricing, and sourcing built
                around your bench, not a giant catalog.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 18,
                  alignItems: "center",
                }}
              >
                <a
                  href="#contact"
                  className="cp-btn-blue"
                  style={{
                    textDecoration: "none",
                    background: "#1E6FD8",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 16,
                    padding: "16px 30px",
                    borderRadius: 5,
                  }}
                >
                  Get a Quote
                </a>
                <a
                  href={CATALOG_HREF}
                  className="cp-btn-outline-light"
                  style={{
                    textDecoration: "none",
                    border: "1.5px solid rgba(255,255,255,0.55)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 16,
                    padding: "15px 28px",
                    borderRadius: 5,
                    background: "transparent",
                  }}
                >
                  Request a Catalog
                </a>
                <a
                  href="mailto:info@clearpointscientific.com"
                  className="cp-email-inline-light"
                  style={{
                    textDecoration: "none",
                    fontFamily: "var(--font-mono)",
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: 14.5,
                    letterSpacing: "0.3px",
                    borderBottom: "1px solid rgba(255,255,255,0.5)",
                    paddingBottom: 3,
                    maxWidth: "100%",
                    overflowWrap: "anywhere",
                    textShadow: "0 1px 12px rgba(7,18,33,0.8)",
                  }}
                >
                  info@clearpointscientific.com{" "}
                  <span className="cp-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 26,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            className="cp-scrollcue"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 7,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10.5,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              Scroll
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2 V13 M3.5 8.5 L8 13 L12.5 8.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
