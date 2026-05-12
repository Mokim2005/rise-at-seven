import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  { id: 1, name: "Digital PR", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000" },
  { id: 2, name: "Search & Growth Strategy", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" },
  { id: 3, name: "Data & Insights", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000" },
  { id: 4, name: "Organic Social & Content", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000" },
  { id: 5, name: "Content Experience", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000" },
  { id: 6, name: "Onsite SEO", image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=1000" },
];

import AnimatedButton from "@/components/ui/AnimatedButton";

export default function ServicesSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20 ">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter flex items-center gap-4">
            Our 
            <span className="inline-block w-12 h-12 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-gray-200">
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200" 
                className="w-full h-full object-cover" 
                alt="team"
               />
            </span>
            Services
          </h2>
        </div>
        <AnimatedButton variant="primary" className="px-6 py-2 text-sm">
          View All Services <ArrowUpRight size={16} />
        </AnimatedButton>
      </div>

      <hr className="border-gray-200" />

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group relative cursor-pointer border-b border-gray-300 py-6 px-4 flex items-center transition-all duration-300"
          >
            {/* The Rounded Hover Image Container */}
            <div 
              className="absolute inset-x-2 inset-y-2 z-0 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 ease-out rounded-[40px] overflow-hidden"
            >
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark Overlay for text contrast */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center gap-4 w-full px-6 py-4 transition-transform duration-500 group-hover:translate-x-4">
              {/* Arrow appears only on hover */}
              <span className="w-0 overflow-hidden opacity-0 group-hover:w-12 group-hover:opacity-100 transition-all duration-500 text-white">
                <ArrowUpRight size={40} strokeWidth={2.5} />
              </span>
              
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black group-hover:text-white transition-colors duration-300">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}