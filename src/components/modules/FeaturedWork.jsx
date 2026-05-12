"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    name: "Pooky",
    year: "[2025]",
    image: "https://images.unsplash.com/photo-1543198126-a2bf12f7e5a7?w=800&q=80",
    label: "Rechargeable Lights",
  },
  {
    id: 2,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    label: "UK holidays",
  },
  {
    id: 3,
    name: "Revolution Beauty",
    year: "[2022-2025]",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    label: "Beauty Dupes",
  },
  {
    id: 4,
    name: "JD Sports",
    year: "[2025]",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    label: "Trainers",
  },
  {
    id: 5,
    name: "Leading E Sim brand globally",
    year: "[2023-2025]",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    label: "Esims",
  },
  {
    id: 6,
    name: "Trade - B2B",
    year: "[2024]",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    label: "B2B",
  },
  {
    id: 7,
    name: "Magnet",
    year: "[2024]",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Kitchen Design",
  },
];

export default function FeaturedWorkSection() {
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

  const labelStyle = {
    position: "absolute",
    bottom: "14px",
    right: "14px",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(8px)",
    borderRadius: "20px",
    padding: "6px 12px",
    fontSize: "12px",
    color: "#fff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontWeight: 500,
    letterSpacing: "0.04em",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const dotStyle = {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#fff",
    display: "inline-block",
    flexShrink: 0,
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

        {/* RIGHT PANEL – two cards: top=previous (small, exiting), bottom=active (large) */}
        <div
          style={{
            flex: "0 0 50%",
            background: "#141414",
            overflow: "hidden",
            borderRadius: "0 28px 28px 0",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "16px 16px 16px 8px",
            boxSizing: "border-box",
          }}
        >
          {/* TOP CARD — previous project, small */}
          <div
            style={{
              flex: "0 0 38%",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              opacity: activeIndex === 0 ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          >
            {activeIndex > 0 && (
              <>
                <img
                  src={projects[activeIndex - 1].image}
                  alt={projects[activeIndex - 1].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={labelStyle}>
                  <span style={dotStyle} />
                  {projects[activeIndex - 1].label}
                </div>
              </>
            )}
          </div>

          {/* BOTTOM CARD — active project, large */}
          <div
            style={{
              flex: "1",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              transition: "opacity 0.4s ease",
            }}
          >
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={labelStyle}>
              <span style={dotStyle} />
              {projects[activeIndex].label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}