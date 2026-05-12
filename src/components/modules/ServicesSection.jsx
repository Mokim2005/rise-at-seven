import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  { id: 1, name: "Digital PR", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000" },
  { id: 2, name: "Search & Growth Strategy", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" },
  { id: 3, name: "Data & Insights", image: "data:image/jpeg;base64,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" },
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