"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MarqueeItem = () => (
  <div className="flex items-center gap-8 md:gap-16 whitespace-nowrap px-4">
    <span className="text-[12vw] md:text-[10vw] font-bold tracking-tighter uppercase">
      Chasing Consumers
    </span>
    <div className="w-[120px] h-[100px] md:w-[200px] md:h-[160px] rounded-[30px] overflow-hidden bg-gray-200 flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500"
        className="w-full h-full object-cover"
        alt="Team"
      />
    </div>
    <span className="text-[12vw] md:text-[10vw] font-bold tracking-tighter uppercase">
      Not Algorithms
    </span>
    <div className="w-[120px] h-[100px] md:w-[200px] md:h-[160px] rounded-[30px] overflow-hidden bg-gray-200 flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500"
        className="w-full h-full object-cover"
        alt="Life"
      />
    </div>
  </div>
);

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse positions for the custom cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothing the cursor movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section
      className="relative w-full py-20 bg-[#EFEEEC] overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Floating Button (Follows Mouse) */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center bg-[#b2f5ea] px-6 py-3 rounded-full shadow-lg whitespace-nowrap text-sm font-bold text-black border border-teal-300"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          display: isHovered ? "flex" : "none",
        }}
      >
        Send Us Your Brief ↗
      </motion.div>

      {/* Infinite Scrolling Marquee */}
      <div className="flex select-none">
        <motion.div
          className="flex flex-row"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 80,
            repeat: Infinity,
          }}
        >
          <MarqueeItem />
          <MarqueeItem />
        </motion.div>
      </div>
    </section>
  );
}