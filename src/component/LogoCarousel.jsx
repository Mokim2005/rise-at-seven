"use client";

import { memo } from "react";

const logos = [
  { name: "Google", color: "text-blue-600" },
  { name: "Microsoft", color: "text-green-600" },
  { name: "Amazon", color: "text-orange-600" },
  { name: "Apple", color: "text-gray-800" },
  { name: "Meta", color: "text-blue-500" },
  { name: "Netflix", color: "text-red-600" },
  { name: "Tesla", color: "text-red-500" },
];

const LogoItem = memo(({ name, color }) => (
  <div className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12">
    <div
      className={`flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm
        w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-20
        transition-transform duration-300 hover:scale-105`}
    >
      <span
        className={`font-bold
          text-xs sm:text-sm md:text-base lg:text-lg
          ${color}`}
      >
        {name}
      </span>
    </div>
  </div>
));

LogoItem.displayName = "LogoItem";

export default function LogoCarousel() {
  return (
    <div className="w-full bg-white overflow-hidden py-8">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .carousel-container:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative carousel-container">
        <div className="flex items-center animate-scroll-left">
          {[...logos, ...logos].map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
}