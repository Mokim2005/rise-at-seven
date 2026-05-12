"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    name: "Resorts",
    year: "[2023-2024]",
    color: "#c8b89a",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    label: "Luxury Escapes",
  },
  {
    id: 2,
    name: "Revolution Beauty",
    year: "[2022-2025]",
    color: "#e8a090",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    label: "Beauty Dupes ↗",
  },
  {
    id: 3,
    name: "Lloyds",
    year: "[2022-23]",
    color: "#7eb8a4",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    label: "Finance & Trust ↗",
  },
];

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const total = sectionHeight - viewportHeight;
      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(p);

      // Determine active card based on scroll
      const idx = Math.min(
        Math.floor(p * projects.length),
        projects.length - 1
      );
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Card stack offsets
  const getCardStyle = (i) => {
    const diff = i - activeIndex;
    const totalCards = projects.length;

    if (diff < 0) {
      // Past cards: slide up and out
      return {
        transform: `translateY(-105%) scale(0.95)`,
        opacity: 0,
        zIndex: 0,
      };
    } else if (diff === 0) {
      // Active card: front
      return {
        transform: `translateY(0%) scale(1)`,
        opacity: 1,
        zIndex: totalCards,
      };
    } else {
      // Upcoming cards: stacked below, slightly offset
      const offset = Math.min(diff, 3);
      return {
        transform: `translateY(${offset * 14}px) scale(${1 - offset * 0.04})`,
        opacity: 1 - offset * 0.2,
        zIndex: totalCards - diff,
      };
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        height: `${(projects.length + 1) * 100}vh`,
        background: "#f0f0f0",   /* light background so rounded dark card is visible */
        position: "relative",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Sticky container with rounded corners */}
      <div
        style={{
          position: "sticky",
          top: "20px",
          height: "calc(100vh - 40px)",
          borderRadius: "28px",
          overflow: "hidden",
          background: "#141414",
          display: "flex",
          flexDirection: "row",
          boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* LEFT PANEL */}
        <div
          style={{
            flex: "0 0 50%",
            padding: "40px 48px",
            display: "flex",
            flexDirection: "column",
            background: "#141414",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              fontSize: "13px",
              color: "#888",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "auto",
            }}
          >
            Featured Work
          </div>

          {/* Project list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              marginBottom: "40px",
            }}
          >
            {projects.map((project, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <div
                  key={project.id}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                    padding: "6px 0",
                    cursor: "default",
                    transition: "all 0.4s ease",
                  }}
                >
                  <span
                    style={{
                      fontSize: isActive ? "clamp(32px, 5.5vw, 72px)" : "clamp(28px, 4.5vw, 60px)",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 700,
                      color: isActive ? "#ffffff" : isPast ? "#333" : "#555",
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {project.name}
                  </span>
                  {isActive && (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        fontFamily: "'Helvetica Neue', Arial, sans-serif",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
                        opacity: 1,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      {project.year}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
            {projects.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === activeIndex ? "#fff" : "#444",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT PANEL – card stack */}
        <div
          style={{
            flex: "0 0 50%",
            position: "relative",
            background: "#1a1a1a",
            overflow: "hidden",
            borderRadius: "0 24px 24px 0",
          }}
        >
          {projects.map((project, i) => {
            const style = getCardStyle(i);
            return (
              <div
                key={project.id}
                style={{
                  position: "absolute",
                  inset: "20px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease",
                  ...style,
                }}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Overlay label */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    padding: "6px 14px",
                    fontSize: "12px",
                    color: "#fff",
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#fff",
                    display: "inline-block",
                  }} />
                  {project.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}