"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    name: "SIXT",
    year: "[2023-2025]",
    image:
      "https://media.istockphoto.com/id/526728149/photo/sixt-fer-a-cheval-france.webp?a=1&b=1&s=612x612&w=0&k=20&c=ifAkES4PAMjvKEbbVQfeTMNT5rkd6t6Skeh1u1-wN34=",
    label: "Rechargeable Lights",
  },
  {
    id: 2,
    name: "Dojo - B2B",
    year: "[2021-2025]",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1125&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=1fcb578bf1ecd514fde786d781e10f0e",
    label: "UK holidays",
  },
  {
    id: 3,
    name: "Magnet Trade - B2B",
    year: "[2023-2024]",
    image:
      "https://asset.nobiadigital.com/image/upload/c_crop,w_3600,h_1736,x_0,y_665/q_auto/f_auto,w_750/v1657908185/Magnet/Stockton%20reopening/MagnetR5_09333/",
    label: "Beauty Dupes",
  },
  {
    id: 4,
    name: "Leading E Sim brand globally",
    year: "[2023-2025]",
    image:
      "data:image/jpeg;base64,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",
    label: "Trainers",
  },
  {
    id: 5,
    name: "JD Sports",
    year: "[2025]",
    image:
      "https://www.mallofberlin.de/fileadmin/files/mieter_header/jdsports.jpg",
    label: "Esims",
  },
  {
    id: 6,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    image:
      "https://www.parkdeanresorts.co.uk/-/media/parkdean-resorts/homepage/2025/06---june/5th-june/hhs/hhs_usedcaravans_519x346.ashx?rev=969c61847e85472585f6aec7f8562f65",
    label: "B2B",
  },
  {
    id: 7,
    name: "Pooky",
    year: "[2025]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5vdWVaXf-goxws4seDK2mlDFiXcNZ670-g&s",
    label: "Kitchen Design",
  },
  {
    id: 8,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGTabTePRPAdbQMbch5Q5HYD2wmG0JtorCg&s",
    label: "STI tests",
  },
  {
    id: 9,
    name: "Revolution Beauty",
    year: "[2022-2025]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyDYJd-kPvErRjYN0yBqONMJLgx_tQBN1MA&s",
    label: "Outfits",
  },
  {
    id: 10,
    name: "Lloyds Pharmacy",
    year: "[2022-2023]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cmQAPBWBQNFyeCJM7TnOP5DfmZnzbMNfpw&s",
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
              marginTop: "0",
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
