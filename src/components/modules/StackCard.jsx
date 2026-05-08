"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Pioneers",
    description:
      "We're dedicated to creating the industry narrative that others follow 3 years from now.",
    subDescription:
      "We paved the path for creative SEO and multi-channel search.",
    bgColor: "#000000",
    textColor: "#ffffff",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500",
  },
  {
    id: 2,
    title: "Innovators",
    description:
      "Our approach to digital marketing combines data-driven insights with creative excellence.",
    subDescription: "Recognized as the world's best search awards winner.",
    bgColor: "#b2f5ea",
    textColor: "#000000",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500",
  },
  {
    id: 3,
    title: "Thinkers",
    description:
      "Strategy is at the heart of everything we do. We set trends through bold thinking.",
    subDescription: "Breaking boundaries and redefining modern marketing.",
    bgColor: "#ffffff",
    textColor: "#000000",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500",
  },
];

export default function StackedCards() {
  return (
    <section style={{ position: "relative",  }}>
      <div
        style={{
          height: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            fontWeight: 500,
            color: "#6b7280",
            textAlign: "center",
            fontFamily: "sans-serif",
            margin: 0,
          }}
        >
          Scroll Down to Discover Our Approach
        </h2>
      </div>

      <div style={{ position: "relative" }}>
        {cards.map((card, index) => (
          <Card key={card.id} {...card} i={index} total={cards.length} />
        ))}
      </div>

      <div style={{ height: "25vh" }} />
    </section>
  );
}

const Card = ({
  title,
  description,
  subDescription,
  bgColor,
  textColor,
  img,
  i,
  total,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  // Fan rotation: earlier cards rotate more (negative = counter-clockwise fan)
  const startRotate = (total - 1 - i) * -8;
  const rawRotate = useTransform(scrollYProgress, [0, 0.6], [startRotate, 0]);
  const rotate = useSpring(rawRotate, { stiffness: 120, damping: 20, mass: 0.5 });

  // Card slides up from below as it comes into view
  const rawY = useTransform(scrollYProgress, [0, 0.6], [80, 0]);
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.5 });

  // Fade in smoothly
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0, 1, 1, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 20 });

  // Scale up slightly as card enters
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const scale = useSpring(rawScale, { stiffness: 120, damping: 20, mass: 0.5 });

  return (
    <div
      ref={container}
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
      }}
    >
      <motion.div
        style={{
          rotate,
          y,
          opacity,
          scale,
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: "35px",
          padding: "clamp(1.75rem, 4vw, 2.25rem)",
          width: "min(85vw, 380px)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          gap: "0.75rem",
          willChange: "transform, opacity",
          overflow: "hidden",
          border: "1px solid rgba(200,200,200,0.15)",
        }}
      >
        {/* Image */}
        <div
          style={{
            width: "clamp(80px, 18vw, 96px)",
            height: "clamp(100px, 22vw, 128px)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            flexShrink: 0,
          }}
        >
          <img
            src={img}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
          />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(1.75rem, 6vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1.1,
            fontFamily: "sans-serif",
            color: textColor,
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            opacity: 0.9,
            margin: "0 0.5rem",
            fontFamily: "sans-serif",
            color: textColor,
          }}
        >
          {description}
        </p>

        {/* Sub description */}
        <p
          style={{
            fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            opacity: 0.65,
            fontStyle: "italic",
            margin: "0 0.75rem",
            fontFamily: "sans-serif",
            color: textColor,
          }}
        >
          {subDescription}
        </p>
      </motion.div>
    </div>
  );
};