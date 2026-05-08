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
    <section className="relative">
      <div className="h-[20vh] flex items-center justify-center px-4">
        <h2 className="text-xl md:text-2xl font-medium text-gray-500 text-center">
          Scroll Down to Discover Our Approach
        </h2>
      </div>

      <div className="relative">
        {cards.map((card, index) => {
          return <Card key={card.id} {...card} i={index} total={cards.length} />;
        })}
      </div>

      <div className="h-[25vh]" />
    </section>
  );
}

const Card = ({ title, description, subDescription, bgColor, img, i, total }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  // Each card starts rotated (fanned) and straightens on scroll
  // Card 1: -12deg to 0deg, Card 2: -6deg to 0deg, Card 3: 0deg to 0deg
  const rotate = useTransform(scrollYProgress, [0, 1], [i * -6, 0]);
  
  // Cards slide up as they straighten
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * (total - i - 1)]);
  
  // Opacity fade for smoother transitions
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={container} className="h-[70vh] flex items-center justify-center sticky top-0">
      <motion.div
        style={{ rotate, y, opacity }}
        className={`relative w-[85vw] max-w-[380px] md:w-[420px] h-[420px] md:h-[460px] ${bgColor} rounded-[35px] p-7 md:p-9 shadow-2xl flex flex-col items-center text-center justify-center overflow-hidden border border-gray-200/20`}
      >
        <div className="w-24 h-32 md:w-28 md:h-36 rounded-2xl overflow-hidden mb-5 shadow-lg">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tighter">
          {title}
        </h2>

        <p className="text-sm md:text-base font-medium leading-tight opacity-90 mb-2 px-2">
          {description}
        </p>
        <p className="text-xs md:text-sm opacity-70 leading-relaxed italic px-3">
          {subDescription}
        </p>
      </motion.div>
    </div>
  );
};