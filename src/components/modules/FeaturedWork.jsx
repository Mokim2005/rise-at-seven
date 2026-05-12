"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    name: "SIXT",
    year: "[2023-2025]",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    label: "Rechargeable Lights",
  },
  {
    id: 2,
    name: "Dojo - B2B",
    year: "[2021-2025]",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    label: "UK holidays",
  },
  {
    id: 3,
    name: "Magnet Trade - B2B",
    year: "[2023-2024]",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    label: "Beauty Dupes",
  },
  {
    id: 4,
    name: "Leading E Sim brand globally",
    year: "[2023-2025]",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    label: "Trainers",
  },
  {
    id: 5,
    name: "JD Sports",
    year: "[2025]",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    label: "Esims",
  },
  {
    id: 6,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    label: "B2B",
  },
  {
    id: 7,
    name: "Pooky",
    year: "[2025]",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Kitchen Design",
  },
  {
    id: 8,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80",
    label: "STI tests",
  },
  {
    id: 9,
    name: "Revolution Beauty",
    year: "[2022-2025]",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    label: "Outfits",
  },
  {
    id: 10,
    name: "Lloyds Pharmacy",
    year: "[2022-2023]",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    label: "Outfits",
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
        projects.length - 1,
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
        background:
          "#f0f0f0" /* light background so rounded dark card is visible */,
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
            background: "#141414",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header — fixed top-left */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "48px",
              fontSize: "13px",
              color: "#888",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              zIndex: 2,
            }}
          >
            Featured Work
          </div>

          {/* Top fade mask — covers above the text zone */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "40%",
              background:
                "linear-gradient(to bottom, #141414 75%, transparent)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          {/* Bottom fade mask — covers below the text zone */}
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, transparent, #141414 35%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Scrolling list — moves up as activeIndex increases, contained within top 30%-50% */}
          <div
            style={{
              position: "absolute",
              top: `calc(62% + ${-activeIndex * 72}px)`,
              left: "48px",
              right: "48px",
              transition: "top 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
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
                    gap: "14px",
                    lineHeight: 1.1,
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: isActive
                        ? "clamp(28px, 4.2vw, 56px)"
                        : "clamp(22px, 3.5vw, 46px)",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 700,
                      color: isActive
                        ? "#ffffff"
                        : isPast
                          ? "#2a2a2a"
                          : "#3a3a3a",
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                      transition: "all 0.5s ease",
                      display: "block",
                    }}
                  >
                    {project.name}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: isActive ? "#666" : "transparent",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                      whiteSpace: "nowrap",
                      transition: "color 0.4s ease",
                      flexShrink: 0,
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              );
            })}
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
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
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
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