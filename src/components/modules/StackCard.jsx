"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Pioneers",
    description: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO and multi-channel search.",
    subDescription: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    bgColor: "bg-black text-white",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500",
  },
  {
    id: 2,
    title: "Innovators",
    description: "Our approach to digital marketing combines data-driven insights with creative excellence to deliver unparalleled results.",
    subDescription: "Recognized as the world's best search awards winner for three consecutive years.",
    bgColor: "bg-[#b2f5ea] text-black", // Light teal color from your image
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500",
  },
  {
    id: 3,
    title: "Thinkers",
    description: "Strategy is at the heart of everything we do. We don't just follow trends; we set them through rigorous analysis and bold thinking.",
    subDescription: "Breaking boundaries and redefining what a modern marketing agency should be in 2026.",
    bgColor: "bg-white text-black",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500",
  },
];

export default function StackedCards() {
  return (
    <main className="relative bg-gray-100">
      {/* Spacer for top content */}
      <div className="h-[20vh] flex items-center justify-center">
        <h2 className="text-2xl font-medium text-gray-400">Scroll Down to See Magic</h2>
      </div>

      <section className="px-4 pb-[10vh]">
        {cards.map((card, index) => {
          return <Card key={card.id} {...card} i={index} />;
        })}
      </section>

      {/* Spacer for bottom content */}
      <div className="h-[50vh]" />
    </main>
  );
}

// Single Card Component
const Card = ({ title, description, subDescription, bgColor, img, i }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Scale effect: card ektu choto hobe jokhon porer card upore ashbe
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div 
      ref={container} 
      className="h-[100vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ 
          scale,
          top: `calc(-10% + ${i * 25}px)`, // Spacing between stacked cards
        }}
        className={`relative w-full max-w-[800px] h-[500px] md:h-[600px] ${bgColor} rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center justify-center overflow-hidden border border-gray-200/10`}
      >
        {/* Card Image */}
        <div className="w-32 h-40 md:w-48 md:h-56 rounded-2xl overflow-hidden mb-8 rotate-[-5deg] shadow-lg">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Card Content */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          {title}
        </h2>
        
        <div className="max-w-xl space-y-6">
          <p className="text-lg md:text-xl font-medium leading-tight opacity-90">
            {description}
          </p>
          <p className="text-sm md:text-md opacity-70 leading-relaxed italic">
            {subDescription}
          </p>
        </div>
      </motion.div>
    </div>
  );
};