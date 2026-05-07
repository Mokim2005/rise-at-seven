"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Paragraph */}
          <div className="order-2 lg:order-1">
            <p className="text-gray-800 text-base md:text-lg leading-tight" style={{ lineHeight: "1.2" }}>
              We are a full-service digital marketing agency specializing in SEO, content marketing,
              and paid media. Our team of experts drives measurable results for brands looking to
              scale their online presence and achieve sustainable growth.
            </p>
          </div>

          {/* Right Column - Heading and Buttons */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-8">
              Driving Demand &  Discovery{" "}
              <span className="relative inline-block">
                D
                <span className="inline-block w-10 h-10 md:w-14 md:h-14 absolute -top-1 -right-6 md:-right-8">
                  <Image
                    src="/flight.jpg"
                    alt="Badge"
                    fill
                    className="object-cover rounded-full shadow-lg"
                  />
                </span>
              </span>
              <br className="hidden md:block" />
             
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                Our Story
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-2 py-1 font-medium text-gray-900 hover:text-gray-600 transition-colors">
                Our Services
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}