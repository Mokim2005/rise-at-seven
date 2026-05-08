"use client";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const socialLinks = [
  { label: "f", href: "#" },
  { label: "𝕏", href: "#" },
  { label: "in", href: "#" },
  { label: "yt", href: "#" },
  { label: "tt", href: "#" },
  { label: "ig", href: "#" },
];

const navLinks = [
  ["Services", "Work", "About", "Culture", "Meet The Risers"],
  ["Testimonials", "Blog & Resources", "Webinars", "Careers"],
  ["Sheffield", "Manchester", "London", "New York", "Contact"],
];

function FitText({ children, className, style }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;

      // Reset to a large size first
      text.style.fontSize = "200px";
      const containerWidth = container.offsetWidth;
      const textWidth = text.scrollWidth;
      const ratio = containerWidth / textWidth;
      const newSize = Math.floor(200 * ratio);
      text.style.fontSize = `${newSize}px`;
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [children]);

  return (
    <div ref={containerRef} style={{ width: "100%", overflow: "hidden" }}>
      <span
        ref={textRef}
        className={className}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          lineHeight: 0.85,
          ...style,
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 md:px-8 lg:px-10">
      <div
        className="mx-auto rounded-[28px] md:rounded-[40px] overflow-hidden"
        style={{ maxWidth: "1440px", background: "#0a0a0a", color: "#fff" }}
      >
        {/* ── Inner padding ── */}
        <div className="px-6 pt-10 md:px-12 md:pt-14 lg:px-16 lg:pt-16">

          {/* ── TOP: newsletter + nav ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-12 pb-10 border-b border-white/10">

            {/* Left — Newsletter */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className="text-2xl sm:text-3xl md:text-[2rem] font-bold leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Stay updated with Rise news
              </h2>

              <div className="relative max-w-[420px]">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-full py-3.5 px-5 text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-[#b2f5ea]"
                  style={{ background: "#1c1c1c", border: "none" }}
                />
                <button
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors"
                  style={{ width: 40, height: 40, background: "#b2f5ea", color: "#0a0a0a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#b2f5ea")}
                  aria-label="Subscribe"
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-center rounded-full text-[10px] font-bold transition-colors"
                    style={{ width: 34, height: 34, background: "#fff", color: "#0a0a0a" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#b2f5ea")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                    aria-label={label}
                  >
                    {label}&nbsp;↗
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Nav columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {navLinks.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-3">
                  {col.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-base font-semibold leading-snug transition-colors"
                      style={{ color: "#fff" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#b2f5ea")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── BIG BRAND TEXT — always 1 line, full width ── */}
          <div className="relative mt-10 mb-0">
            <div className="flex items-end w-full gap-2">
              {/* FitText fills the full container width in 1 line */}
              <div className="flex-1 min-w-0">
                <FitText
                  className="font-black tracking-tighter uppercase select-none"
                  style={{
                    color: "#fff",
                    letterSpacing: "-0.04em",
                    fontFamily: "'Helvetica Neue', 'Arial Black', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  Rise at Seven
                </FitText>
              </div>

              {/* ® badge pinned to bottom-right */}
              <span
                className="flex items-center justify-center rounded-full font-bold flex-shrink-0 self-end"
                style={{
                  width: "clamp(32px, 3.8vw, 60px)",
                  height: "clamp(32px, 3.8vw, 60px)",
                  fontSize: "clamp(12px, 1.5vw, 24px)",
                  border: "2px solid #fff",
                  marginBottom: "clamp(4px, 0.8vw, 14px)",
                  color: "#fff",
                }}
              >
                ®
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 px-6 md:px-12 lg:px-16 py-5 border-t border-white/10 mt-6"
          style={{ fontSize: "11px", color: "#666" }}
        >
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
            <span>© 2026 Rise at Seven Ltd. All rights reserved</span>
            <span className="hidden md:inline" style={{ color: "#333" }}>•</span>
            <span>Company Number 11955187</span>
            <span className="hidden md:inline" style={{ color: "#333" }}>•</span>
            <span>VAT Registered GB 322402945</span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-1 items-center">
            <a
              href="#"
              style={{ color: "#666" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              className="transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ color: "#666" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              className="transition-colors"
            >
              Terms &amp; conditions
            </a>
            <span className="md:ml-4" style={{ color: "#444" }}>
              Website Made By Shape
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}