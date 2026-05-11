"use client";

import { useRef, useEffect, useState } from "react";

const phrase = "Ready to Rise at Seven?";

export default function ReadyToRiseSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // progress 0 = section top at bottom of viewport
      // progress 1 = section bottom at top of viewport
      const scrolled = -rect.top;
      const total = sectionHeight - viewportHeight;
      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Horizontal: text starts fully off-screen right, ends fully off-screen left
  // At progress=0: translateX = 100vw (off right)
  // At progress=0.5: translateX = center (text visible, centered-ish)
  // At progress=1: translateX = -120% (off left)
  const totalChars = phrase.length;

  const xPercent = progress < 0.5
    ? 100 - (progress / 0.5) * 130   // 100% -> -30% (center)
    : -30 - ((progress - 0.5) / 0.5) * 100; // -30% -> -130%

  // Each letter rises and grows as scroll progresses
  // Earlier letters: smaller, rise less
  // Later letters: bigger, rise more (matching the website effect)
  const letters = phrase.split("").map((char, i) => {
    const t = i / (totalChars - 1); // 0 to 1 across letters

    // Font size: first letter ~8vw, last letter ~18vw
    const baseFontSize = 8 + t * 10;

    // Vertical rise: letters rise up as you scroll, with later letters rising more
    // At progress=0: letters are at bottom (positive Y = down)
    // At progress=1: letters are at top (negative Y = up)
    const maxRise = 60 + t * 120; // px, later letters rise more
    const yOffset = maxRise * (0.5 - progress); // positive = below center, negative = above

    return { char, baseFontSize, yOffset };
  });

  const opacity = progress < 0.05
    ? progress / 0.05
    : progress > 0.95
    ? 1 - (progress - 0.95) / 0.05
    : 1;

  return (
    <section
      ref={sectionRef}
      style={{
        height: "400vh",
        background: "#EBEBEB",
        position: "relative",
      }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          background: "#EBEBEB",
        }}
      >
        {/* Moving text container */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "flex-end",
            whiteSpace: "nowrap",
            transform: `translateX(${xPercent}vw)`,
            transition: "transform 0.05s linear",
            opacity,
            paddingBottom: "4vh",
          }}
        >
          {letters.map(({ char, baseFontSize, yOffset }, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                fontSize: `${baseFontSize}vw`,
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                fontWeight: 700,
                color: "#0a0a0a",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                transform: `translateY(${yOffset}px)`,
                transition: "transform 0.05s linear, font-size 0.05s linear",
                verticalAlign: "bottom",
                userSelect: "none",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}