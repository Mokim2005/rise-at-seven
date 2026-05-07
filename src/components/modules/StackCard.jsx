"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Pioneers",
    description: "We're dedicated to creating the industry narrative that others follow 3 years from now.",
    subDescription: "We paved the path for creative SEO and multi-channel search.",
    bgColor: "bg-black text-white",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500",
  },
  {
    id: 2,
    title: "Innovators",
    description: "Our approach to digital marketing combines data-driven insights with creative excellence.",
    subDescription: "Recognized as the world's best search awards winner.",
    bgColor: "bg-[#b2f5ea] text-black",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500",
  },
  {
    id: 3,
    title: "Thinkers",
    description: "Strategy is at the heart of everything we do. We set trends through bold thinking.",
    subDescription: "Breaking boundaries and redefining modern marketing.",
    bgColor: "bg-white text-black",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500",
  },
];

export default function StackedCards() {
  return (
    <section className="relative ">
      {/* Spacer for top content */}
      <div className="h-[25vh] flex items-center justify-center px-4">
        <h2 className="text-xl md:text-2xl font-medium text-gray-500 text-center">
          Scroll Down to Discover Our Approach
        </h2>
      </div>

      {/* Cards Container - smaller height for tighter stacking */}
      <div className="relative">
        {cards.map((card, index) => {
          return <Card key={card.id} {...card} i={index} total={cards.length} />;
        })}
      </div>

      {/* Spacer for bottom content */}
      <div className="h-[30vh]" />
    </section>
  );
}

// Single Card Component with fanned stack animation
const Card = ({ title, description, subDescription, bgColor, img, i, total }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  // Cards fan out at an angle when stacked
  const rotate = useTransform(scrollYProgress, [0, 1], [i * 8 - 8, i * 8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -30 * i]);

  return (
    <div ref={container} className="h-[80vh] flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          rotate,
          scale,
          y: translateY,
        }}
        className={`relative w-[90vw] max-w-[400px] md:w-[440px] h-[460px] md:h-[500px] ${bgColor} rounded-[35px] p-8 md:p-10 shadow-2xl flex flex-col items-center text-center justify-center overflow-hidden border border-gray-200/20`}
      >
        {/* Card Image - larger prominent circular style */}
        <div className="w-28 h-36 md:w-32 md:h-40 rounded-2xl overflow-hidden mb-6 shadow-xl">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Card Content */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
          {title}
        </h2>

        <p className="text-base md:text-lg font-medium leading-tight opacity-90 mb-3 px-2">
          {description}
        </p>
        <p className="text-sm md:text-base opacity-70 leading-relaxed italic px-4">
          {subDescription}
        </p>
      </motion.div>
    </div>
  );
};