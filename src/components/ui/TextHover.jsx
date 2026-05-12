"use client";

import React from "react";

/**
 * TextHover
 * A premium kinetic typography component for text-only hover effects.
 * Current text slides up and fades, new text slides in from bottom.
 */
export default function TextHover({ children, className }) {
  return (
    <span className={`group relative inline-block overflow-hidden cursor-pointer ${className || ""}`}>
      {/* Container for both states */}
      <span className="relative inline-block h-[1.2em] overflow-hidden leading-[1.2]">
        
        {/* Default State */}
        <span 
          className="flex items-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:opacity-0"
        >
          {children}
        </span>

        {/* Hover State (Slides in from below) */}
        <span 
          className="absolute left-0 top-full flex items-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full opacity-0 group-hover:opacity-100"
        >
          {children}
        </span>

      </span>
    </span>
  );
}
