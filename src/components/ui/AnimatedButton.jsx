"use client";

import React from "react";
import Link from "next/link";

/**
 * AnimatedButton
 * A premium button component with a kinetic typography hover effect.
 * Text slides up and a duplicate slides in from the bottom.
 */
export default function AnimatedButton({ 
  children, 
  href, 
  className, 
  onClick, 
  variant = "primary",
  type = "button"
}) {
  const content = (
    <span className="relative h-6 overflow-hidden flex items-center">
      {/* Default State */}
      <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {children}
      </span>

      {/* Hover State (Slides in from bottom) */}
      <span className="absolute left-0 top-full flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {children}
      </span>
    </span>
  );

  const baseClasses = "group relative overflow-hidden inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer";
  
  const variants = {
    primary: "bg-white border border-gray-300 rounded-full hover:rounded-lg text-gray-900",
    dark: "bg-[#1a1209] text-[#f5f0e8] rounded-full hover:rounded-lg shadow-lg",
    ghost: "px-2 py-1 text-gray-900 hover:text-gray-600",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
}
