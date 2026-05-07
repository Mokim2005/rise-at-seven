import { useState } from "react";

const slides = [
  {
    title: "Build Modern UI",
    desc: "Create beautiful interfaces with React & Tailwind",
  },
  {
    title: "Fast Performance",
    desc: "Optimized components for better speed",
  },
  {
    title: "Responsive Design",
    desc: "Looks perfect on all devices",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-black text-white">

      {/* Slider Box */}
      <div className="relative w-full max-w-3xl bg-[#111] rounded-xl p-10 text-center shadow-lg overflow-hidden">

        {/* Slide Content */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500">
          {slides[current].title}
        </h2>

        <p className="text-gray-400 text-sm md:text-base">
          {slides[current].desc}
        </p>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}