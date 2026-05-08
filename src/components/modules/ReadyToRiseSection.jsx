"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// Extracted into its own component so hooks are called at top level
function RiseLetter({ letter, index, scrollYProgress }) {
  const riseAmount = index * 6;

  const yRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      riseAmount * 0.6,
      -riseAmount * 0.5,
      -riseAmount * 1.2,
    ]
  );

  const smoothY = useSpring(yRaw, {
    stiffness: 50 + index * 3,
    damping: 18,
    mass: 0.4,
  });

  const baseSize = 13;
  const sizeGrowth = index * 0.08;

  return (
    <motion.span
      style={{
        y: smoothY,
        display: "inline-block",
        fontSize: `${baseSize + sizeGrowth}vw`,
        color: "#0a0a0a",
        lineHeight: 1,
        verticalAlign: "bottom",
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
}

export default function ReadyToRiseSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["55%", "-65%"]);
  const smoothX = useSpring(x, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0]
  );

  const letters = "Ready to Rise at Seven".split("");

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh]"
      style={{ background: "#EBEBEB" }}
    >
      <div
        className="sticky top-0 flex h-screen items-center overflow-hidden"
        style={{ background: "#EBEBEB" }}
      >
        <motion.div
          style={{
            x: smoothX,
            opacity,
          }}
          className="relative whitespace-nowrap will-change-transform"
        >
          <h2
            className="flex items-end font-black leading-none"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            {letters.map((letter, index) => (
              <RiseLetter
                key={index}
                letter={letter}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}