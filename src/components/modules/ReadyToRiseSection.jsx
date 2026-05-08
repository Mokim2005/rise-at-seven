"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export default function ReadyToRiseSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Right → Left smooth movement
  const x = useTransform(scrollYProgress, [0, 1], ["60%", "-70%"]);

  const smoothX = useSpring(x, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  // Fade effect
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  // Subtle scale
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 1.02]
  );

  const text = "Ready to Rise Together?";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Sticky Area */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Moving Text */}
        <motion.div
          style={{
            x: smoothX,
            opacity,
            scale,
          }}
          className="relative whitespace-nowrap"
        >
          <h2 className="flex items-center font-black uppercase tracking-[-0.05em] leading-none">
            {text.split("").map((letter, index) => {
              const y = useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [0, index % 2 === 0 ? -15 : 15, 0]
              );

              return (
                <motion.span
                  key={index}
                  style={{ y }}
                  className="
                    inline-block
                    text-black
                    text-[12vw]
                    sm:text-[10vw]
                    md:text-[8vw]
                    lg:text-[7vw]
                  "
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}