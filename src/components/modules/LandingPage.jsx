"use client";
import React, { useEffect, useState } from "react";

const images = ["/flight.jpg", "/flight2.jpg", "/flight3.jpg"];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .hero-heading {
          font-size: clamp(3rem, 8.5vw, 7.5rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .hero-section {
          border-radius: 1rem;
        }
        @media (max-width: 768px) {
          .hero-section {
            border-radius: 0;
          }
        }
      `}</style>

      <div className="md:p-3">
        <section className="hero-section relative h-screen w-full overflow-hidden">

          {/* Background — slight blur like original */}
          <div className="absolute inset-0">
            <img
              src={images[current]}
              alt="bg"
              className="w-full h-full object-cover scale-105 transition-all duration-1000"
              style={{ filter: "blur(2px)" }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

            {/* Top badge text */}
            <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 leading-relaxed mb-5">
              #1 Most Recommended<br />Content Marketing Agency
            </p>

            {/* Award icons row */}
            <div className="flex items-center justify-center gap-3 mb-10 opacity-55">
              {/* Laurel left */}
              <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 38C14 38 2 28 2 16C2 9 7.4 3 14 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M14 32C14 32 4 24 4 14" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none"/>
                <path d="M14 26C14 26 6 20 6 12" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none"/>
              </svg>

              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/80 leading-tight">GLOBAL<br/>SEARCH<br/>AWARDS</span>
                </div>
                <div className="w-px h-6 bg-white/30" />
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/80 leading-tight">THE<br/>DRUM</span>
                </div>
                <div className="w-px h-6 bg-white/30" />
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/80 leading-tight">UK SOCIAL<br/>MEDIA<br/>AWARDS</span>
                </div>
                <div className="w-px h-6 bg-white/30" />
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/80 leading-tight">CONTENT<br/>AWARDS</span>
                </div>
              </div>

              {/* Laurel right */}
              <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 38C14 38 26 28 26 16C26 9 20.6 3 14 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M14 32C14 32 24 24 24 14" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none"/>
                <path d="M14 26C14 26 22 20 22 12" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            {/* Hero heading */}
            <div className="hero-heading text-center">
              <div>We Create</div>
              <div className="flex items-center justify-center gap-4 mt-1">
                <span>Category</span>
                <span className="inline-block align-middle" style={{ lineHeight: 0 }}>
                  <img
                    src={images[current]}
                    alt="inline"
                    className="object-cover rounded-2xl transition-all duration-1000"
                    style={{
                      width: "clamp(4rem, 9vw, 9.5rem)",
                      height: "clamp(4rem, 9vw, 9.5rem)",
                    }}
                  />
                </span>
                <span>Leaders</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-base md:text-xl font-normal text-white/75 tracking-wide">
              on every searchable platform
            </p>
          </div>

          {/* Bottom left */}
          <div className="absolute bottom-6 left-6 z-10 text-left max-w-xs">
            <p className="text-[11px] md:text-sm text-white/70 leading-relaxed">
              Organic media planners creating, distributing & optimising{" "}
              <strong className="text-white font-semibold">search-first</strong>{" "}
              content for SEO, Social, PR, Ai and LLM search
            </p>
          </div>

          {/* Bottom right */}
          <div className="absolute bottom-6 right-6 z-10 text-right">
            <p className="text-[11px] md:text-sm text-white/70 leading-relaxed">
              4 Global Offices serving <br />
              <strong className="text-white font-semibold">UK, USA (New York) & EU</strong>
            </p>
          </div>

        </section>
      </div>
    </>
  );
};

export default LandingPage;