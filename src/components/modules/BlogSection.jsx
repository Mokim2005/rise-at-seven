import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const blogData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
    author: "Ray Saddiq",
    time: "3 mins",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000",
    author: "Ray Saddiq",
    time: "2 mins",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000",
    author: "Carrie Rose",
    time: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12 border-t border-gray-200 pt-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
          What's New
        </h2>
        <button className="hidden md:flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all">
          Explore More Thoughts <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[40px] mb-6 aspect-[4/5]">
              {/* Badge */}
              <span className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full font-medium">
                News
              </span>

              {/* Main Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-md"
              />

              {/* Hover Overlay with Arrow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-black/10">
                <div className="bg-[#b2f5ea] p-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                  <ArrowUpRight size={32} strokeWidth={2.5} className="text-black" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=${item.author}`} alt="author" />
                  </div>
                  <span>{item.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight group-hover:underline">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}