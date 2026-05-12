"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: 1,
    name: "SIXT",
    year: "[2023-2025]",
    image:
      "https://media.istockphoto.com/id/526728149/photo/sixt-fer-a-cheval-france.webp?a=1&b=1&s=612x612&w=0&k=20&c=ifAkES4PAMjvKEbbVQfeTMNT5rkd6t6Skeh1u1-wN34=",
    label: "Car rental",
    description: "Driving organic growth for a global car rental brand",
    bgColor: "#e8d5c0",
  },
  {
    id: 2,
    name: "Dojo - B2B",
    year: "[2021-2025]",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1125&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=1fcb578bf1ecd514fde786d781e10f0e",
    label: "Card Machines",
    description: "A B2B success story for Dojo card machines",
    bgColor: "#f5c4af",
  },
  {
    id: 3,
    name: "Magnet Trade - B2B",
    year: "[2023-2024]",
    image:
      "https://asset.nobiadigital.com/image/upload/c_crop,w_3600,h_1736,x_0,y_665/q_auto/f_auto,w_750/v1657908185/Magnet/Stockton%20reopening/MagnetR5_09333/",
    label: "Beauty Dupes",
    description: "Transforming trade marketing for Magnet kitchens",
    bgColor: "#c5d9e8",
  },
  {
    id: 4,
    name: "Leading E Sim brand globally",
    year: "[2023-2025]",
    image:
    "data:image/jpeg;base64,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",
    description: "Taking a global eSIM brand to new markets",
    bgColor: "#d4e8c5",
  },
  {
    id: 5,
    name: "JD Sports",
    year: "[2025]",
    image:
      "https://www.mallofberlin.de/fileadmin/files/mieter_header/jdsports.jpg",
    label: "Trainers",
    description: "Powering JD Sports' search presence across Europe",
    bgColor: "#c5d5e8",
  },
  {
    id: 6,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    image:
      "https://www.parkdeanresorts.co.uk/-/media/parkdean-resorts/homepage/2025/06---june/5th-june/hhs/hhs_usedcaravans_519x346.ashx?rev=969c61847e85472585f6aec7f8562f65",
    label: "UK holidays",
    description: "Years of holiday magic driving organic growth",
    bgColor: "#c5e5d8",
  },
  {
    id: 7,
    name: "Pooky",
    year: "[2025]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5vdWVaXf-goxws4seDK2mlDFiXcNZ670-g&s",
    label: "Lighting",
    description: "Illuminating growth for a premium lighting brand",
    bgColor: "#e8e0c0",
  },
  {
    id: 8,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGTabTePRPAdbQMbch5Q5HYD2wmG0JtorCg&s",
    label: "B2B",
    description: "Building a B2B strategy for resort bookings",
    bgColor: "#e0d0f0",
  },
  {
    id: 9,
    name: "Revolution Beauty",
    year: "[2022-2025]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyDYJd-kPvErRjYN0yBqONMJLgx_tQBN1MA&s",
    label: "Beauty",
    description: "A beauty brand revolution through content and search",
    bgColor: "#f0d0e0",
  },
  {
    id: 10,
    name: "Lloyds Pharmacy",
    year: "[2022-2023]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cmQAPBWBQNFyeCJM7TnOP5DfmZnzbMNfpw&s",
    label: "Healthcare",
    description: "Driving pharmacy growth through digital-first strategy",
    bgColor: "#c5dce8",
  },
];

// Reusable hover overlay component for image cards
function HoverInfoOverlay({ project, visible }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: project.bgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "28px 28px 20px 28px",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s ease",
        pointerEvents: "none",
        borderRadius: "inherit",
      }}
    >
      <p
        style={{
          fontSize: "clamp(18px, 2.4vw, 36px)",
          fontWeight: 700,
          color: "#111",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          maxWidth: "85%",
          margin: 0,
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "50%",
            background: "#5ecfbe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <ArrowUpRight size={34} color="#111" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWorkSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null); // 'top' | 'bottom' | null

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
    zIndex: 2,
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
              fontSize: "20px",
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
                        ? "clamp(35px, 4.2vw, 70px)"
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
              height: "20%",
              flex: "0 0 auto",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              opacity: activeIndex === 0 ? 0.25 : 1,
              transition: "all 0.4s ease",
              cursor: activeIndex > 0 ? "pointer" : "default",
            }}
            onMouseEnter={() => activeIndex > 0 && setHoveredCard("top")}
            onMouseLeave={() => setHoveredCard(null)}
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
                    transition: "opacity 0.35s ease",
                    opacity: hoveredCard === "top" ? 0 : 1,
                  }}
                />
                <HoverInfoOverlay
                  project={projects[activeIndex - 1]}
                  visible={hoveredCard === "top"}
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
              marginTop: "0",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              transition: "opacity 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredCard("bottom")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "opacity 0.35s ease",
                opacity: hoveredCard === "bottom" ? 0 : 1,
              }}
            />
            <HoverInfoOverlay
              project={projects[activeIndex]}
              visible={hoveredCard === "bottom"}
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
