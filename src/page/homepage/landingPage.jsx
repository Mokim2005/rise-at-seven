"use client";
import React, { useEffect, useState } from "react";

const images = ["/flight.jpg", "/flight2.jpg", "/flight3.jpg"];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto change every 30s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Slider */}
      <div className="absolute inset-0">
        <img
          src={images[current]}
          alt="bg"
          className="w-full h-full object-cover blur-sm scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">

        {/* Top text */}
        <p className="text-xs md:text-sm tracking-wide mb-4 opacity-80">
          #1 MOST RECOMMENDED CONTENT MARKETING AGENCY
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          We Create <br />
          Category
          <span className="inline-block mx-3 align-middle">
            {/* Center Image Slider (same as bg) */}
            <img
              src={images[current]}
              alt="center"
              className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-xl transition-all duration-1000"
            />
          </span>
          Leaders
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl opacity-80">
          on every searchable platform
        </p>

        {/* Bottom Left */}
        <div className="absolute bottom-6 left-6 text-left text-xs md:text-sm max-w-xs opacity-80">
          Organic media planners creating, distributing & optimising
          search-first content for SEO, Social, PR, AI and LLM search
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-6 right-6 text-right text-xs md:text-sm opacity-80">
          4 Global Offices serving <br />
          UK, USA (New York) & EU
        </div>

      </div>
    </section>
  );
};

export default LandingPage;