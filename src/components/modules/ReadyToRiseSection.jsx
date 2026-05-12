"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ReadyToRiseSection - Refined & Optimized
 * A high-end, scroll-driven kinetic typography section.
 * Path: RIGHT SIDE -> TOP-20 POSITION -> LEFT EXIT
 */
export default function ReadyToRiseSection() {
  const triggerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const text = textRef.current;
      
      // Master Timeline for synchronized motion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100%", // Reduced further to eliminate the large bottom gap
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial State: Start fully off-screen right
      gsap.set(text, {
        xPercent: 100, // Relative to text width
        y: "5vh",      // Slightly near top
        opacity: 0,
      });

      // 2. Step 1: Diagonal move to Top-20 position (partially visible)
      tl.to(text, {
        xPercent: 20,  // Move into view from the right
        y: "20vh",     // Reach the 20% top position
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      })
      // 3. Step 2: Horizontal scroll to full left exit
      .to(text, {
        xPercent: -120, // Fully clear the screen to the left
        ease: "none",   // Linear for the horizontal exit stage
        duration: 2,
      }, "+=0.1");

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={triggerRef} 
      className="relative h-[200vh] bg-[#EAEAE6] overflow-hidden"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden">
        
        {/* Responsive Text Wrapper */}
        <div
          ref={textRef}
          className="inline-block whitespace-nowrap select-none will-change-transform min-w-max"
          style={{ transformOrigin: "left center" }}
        >
          <h2 
            className="font-black tracking-tighter text-[#0A0A0A] leading-none"
            style={{ 
              fontSize: "clamp(80px, 14vw, 240px)", // Slightly smaller for better fit
              letterSpacing: "-0.04em",
              padding: "0 5vw" // Prevent clipping of edges
            }}
          >
            Ready to Rise at Seven?
          </h2>
        </div>
        
      </div>
    </section>
  );
}