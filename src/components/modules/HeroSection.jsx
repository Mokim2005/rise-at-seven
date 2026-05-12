"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="bg-[#EBEBEB] min-h-[280px] py-14 font-[Manrope]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* LEFT */}
          <div
            className={`max-w-[360px] transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-[20px] font-bold justify-between text-[#222] leading-relaxed">
              A global team of search-first content marketers engineering semantic relevancy &amp;
              category signals for both the internet and people
            </p>
          </div>

          {/* RIGHT */}
          <div
            className={`flex-1 max-w-[660px] transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >

            {/* HEADING */}
            <h1 className="text-[#111] font-bold leading-[1.05] tracking-[-0.02em]
              text-[clamp(2.6rem,6vw,4.5rem)] mb-9">

              {/* 1st line */}
              <span className="block">
              Driving Demand &amp;
              </span>

              {/* 2nd line */}
              <span className="flex items-center gap-3 flex-wrap">
                Discovery

                <span className="w-[clamp(52px,7vw,76px)] h-[clamp(52px,7vw,76px)] rounded-[10px] overflow-hidden shadow-md">
                  <img
                    src="/flight.jpg"
                    alt="badge"
                    className="w-full h-full object-cover"
                  />
                </span>
              </span>
            </h1>

  {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  {/* Button 1 */}
  <button className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full hover:rounded-lg cursor-pointer font-medium text-gray-900 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
    
    {/* Default Text */}
    <span className="relative h-6 overflow-hidden flex items-center">
      <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        Our Story
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>

      {/* Hover Text */}
      <span className="absolute left-0 top-full flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        Our Story
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>
    </span>
  </button>

  {/* Button 2 */}
  <a
    href="#"
    className="group relative overflow-hidden inline-flex items-center justify-center px-2 py-1 font-medium text-gray-900 cursor-pointer"
  >
    <span className="relative h-6 overflow-hidden flex items-center">
      <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        Our Services
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>

      <span className="absolute left-0 top-full flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        Our Services
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>
    </span>
  </a>
</div>
          </div>

        </div>
      </div>
    </section>
  );
}