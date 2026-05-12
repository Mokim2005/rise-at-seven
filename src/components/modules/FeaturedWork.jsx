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
    image: "https://ln.run/zZwnD",
    label: "Global eSIM",
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
