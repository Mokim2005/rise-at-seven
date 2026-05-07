"use client";

import { memo } from "react";

const logos = [
  { name: "Google", color: "hover:text-blue-600" },
  { name: "Microsoft", color: "hover:text-green-600" },
  { name: "Amazon", color: "hover:text-orange-600" },
  { name: "Apple", color: "hover:text-gray-800" },
  { name: "Meta", color: "hover:text-blue-500" },
  { name: "Netflix", color: "hover:text-red-600" },
  { name: "Tesla", color: "hover:text-red-500" },
];

const LogoItem = memo(({ name, color }) => (
  <div className="flex items-center justify-center mx-4 sm:mx-8 md:mx-12">
    <div
      className={`flex items-center justify-center rounded-xl border border-gray-100 bg-white/50 backdrop-blur-sm shadow-sm
        w-24 h-14 sm:w-28 sm:h-16 md:w-36 md:h-20
        transition-all duration-300 hover:shadow-md hover:scale-110 group`}
    >
      <span
        className={`text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 transition-colors duration-300 ${color}`}
      >
        {name}
      </span>
    </div>
  </div>
));

LogoItem.displayName = "LogoItem";

export default function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden py-10 bg-transparent">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scroll-left 20s linear infinite;
        }
        .carousel-container:hover .animate-scroll-fast {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative carousel-container flex">
        <div className="flex items-center animate-scroll-fast">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
}