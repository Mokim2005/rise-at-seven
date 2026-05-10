"use client";

import { memo } from "react";

const logos = [
  {
    name: "Emirates",
    svg: (
      <svg viewBox="0 0 120 36" className="h-12 w-auto" fill="currentColor">
        <text x="30" y="25" fontSize="13" fontWeight="600" fontFamily="serif" letterSpacing="1">Emirates</text>
        <g transform="translate(2,2) scale(0.52)">
          <path d="M8 4C8 4 3 9 3 16C3 22 7 27 13 29C11 25 10 20 11 16C12 12 15 9 19 8C15 6 11 4 8 4Z"/>
          <path d="M14 2C10 4 7 8 6 13C9 11 13 10 17 11C15 7 14 4 14 2Z"/>
          <path d="M19 1C16 2 13 5 13 9C16 8 19 9 21 11C21 6 20 3 19 1Z"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Capital One",
    svg: (
      <svg viewBox="0 0 132 36" className="h-12 w-auto" fill="currentColor">
        <text x="2" y="24" fontSize="17" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-0.5">Capital</text>
        <path d="M78 8 Q93 18 78 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <text x="82" y="24" fontSize="17" fontWeight="400" fontFamily="Arial, sans-serif" fontStyle="italic">One</text>
      </svg>
    ),
  },
  {
    name: "Red Bull",
    svg: (
      <svg viewBox="0 0 88 40" className="h-11 w-auto" fill="currentColor">
        <ellipse cx="30" cy="13" rx="10" ry="7"/>
        <ellipse cx="50" cy="13" rx="10" ry="7"/>
        <path d="M24 9 Q26 3 30 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M56 9 Q54 3 50 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="8" y="36" fontSize="13" fontWeight="800" fontFamily="Arial Black, sans-serif" letterSpacing="1">Red Bull</text>
      </svg>
    ),
  },
  {
    name: "JD",
    svg: (
      <svg viewBox="0 0 42 42" className="h-12 w-auto" fill="currentColor">
        <circle cx="21" cy="21" r="20" fill="currentColor"/>
        <text x="21" y="28" fontSize="15" fontWeight="900" fontFamily="Arial Black, sans-serif" textAnchor="middle" fill="white">JD</text>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 108 36" className="h-12 w-auto" fill="currentColor">
        <circle cx="11" cy="18" r="4.5"/>
        <circle cx="25" cy="11" r="3.5"/>
        <circle cx="25" cy="25" r="3.5"/>
        <line x1="15.5" y1="18" x2="21.5" y2="13" stroke="currentColor" strokeWidth="2"/>
        <line x1="15.5" y1="18" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
        <text x="34" y="24" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">HubSpot</text>
      </svg>
    ),
  },
  {
    name: "Xbox",
    svg: (
      <svg viewBox="0 0 96 36" className="h-12 w-auto" fill="currentColor">
        <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 9 Q18 18 8 27" fill="currentColor" opacity="0.75"/>
        <path d="M28 9 Q18 18 28 27" fill="currentColor" opacity="0.75"/>
        <text x="40" y="24" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1">XBOX</text>
      </svg>
    ),
  },
  {
    name: "Sixt",
    svg: (
      <svg viewBox="0 0 76 36" className="h-10 w-auto" fill="currentColor">
        <text x="2" y="29" fontSize="28" fontWeight="900" fontFamily="Arial Black, sans-serif" letterSpacing="-1">SiXT</text>
      </svg>
    ),
  },
  {
    name: "Revolution",
    svg: (
      <svg viewBox="0 0 138 40" className="h-11 w-auto" fill="currentColor">
        <text x="2" y="20" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="2">REVOLUTION</text>
        <text x="2" y="34" fontSize="8" fontWeight="400" fontFamily="Arial, sans-serif" letterSpacing="3">BEAUTY LONDON</text>
      </svg>
    ),
  },
  {
    name: "PlayStation",
    svg: (
      <svg viewBox="0 0 42 42" className="h-12 w-auto" fill="currentColor">
        <path d="M16 30 L16 10 C16 10 23 9 25 15 C27 20 24 24 19 25 L27 30 L21 30 L17 25.5 L17 30 Z"/>
        <path d="M14 28.5 L10 27 L10 25 L21 29 L21 30.5 Z" opacity="0.65"/>
      </svg>
    ),
  },
  {
    name: "AXA",
    svg: (
      <svg viewBox="0 0 52 42" className="h-11 w-auto" fill="currentColor">
        <rect x="1" y="1" width="50" height="40" rx="2" fill="currentColor"/>
        <text x="26" y="28" fontSize="17" fontWeight="900" fontFamily="Arial Black, sans-serif" textAnchor="middle" fill="white">AXA</text>
      </svg>
    ),
  },
  {
    name: "SharkNinja",
    svg: (
      <svg viewBox="0 0 124 36" className="h-12 w-auto" fill="currentColor">
        <text x="2" y="25" fontSize="14" fontWeight="800" fontFamily="Arial Black, sans-serif">Shark</text>
        <rect x="58" y="7" width="2" height="20" fill="currentColor"/>
        <text x="64" y="25" fontSize="14" fontWeight="800" fontFamily="Arial Black, sans-serif">NINJA</text>
      </svg>
    ),
  },
];

const LogoItem = memo(({ name, svg }) => (
  <div className="flex-shrink-0 flex items-center justify-center mx-12">
    <div className="text-gray-800 opacity-75 hover:opacity-100 transition-opacity duration-300">
      {svg}
    </div>
  </div>
));

LogoItem.displayName = "LogoItem";

export default function LogoCarousel() {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#EEEEEE] py-7 relative overflow-hidden flex items-center">
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .logo-track {
          display: flex;
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Left fade — stronger, covers the fixed text area */}
      <div
        className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
        style={{
          width: "220px",
          background: "linear-gradient(to right, #EEEEEE 55%, transparent 100%)",
        }}
      />

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
        style={{
          width: "160px",
          background: "linear-gradient(to left, #EEEEEE 45%, transparent 100%)",
        }}
      />

      {/* Fixed left text — sits on top of fade */}
      <div className="absolute left-5 z-30 flex-shrink-0">
        <p className="text-[11px] font-medium text-gray-500 leading-snug whitespace-nowrap">
          Trusted by top brands
        </p>
      </div>

      {/* Scrolling logo track */}
      <div className="logo-track">
        {repeated.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} name={logo.name} svg={logo.svg} />
        ))}
      </div>
    </div>
  );
}