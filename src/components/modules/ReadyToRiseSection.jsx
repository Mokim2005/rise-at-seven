"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ReadyToRiseSection - Optimized spacing fix
 */
export default function ReadyToRiseSection() {
  const triggerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const text = textRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=80%",   // 🔧 reduced to remove extra empty scroll
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(text, {
        xPercent: 100,
        y: "5vh",
        opacity: 0,
      });

      tl.to(text, {
        xPercent: 20,
        y: "20vh",
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }).to(
        text,
        {
          xPercent: -120,
          ease: "none",
          duration: 2,
        },
        "+=0.1"
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative h-[150vh] bg-[#EFEEEC] overflow-hidden" // 🔧 reduced height
    >
      <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden">
        <div
          ref={textRef}
          className="inline-block whitespace-nowrap select-none will-change-transform min-w-max"
          style={{ transformOrigin: "left center" }}
        >
          <h2
            className="font-black tracking-tighter text-[#0A0A0A] leading-none"
            style={{
              fontSize: "clamp(80px, 14vw, 240px)",
              letterSpacing: "-0.04em",
              padding: "0 5vw",
            }}
          >
            Ready to Rise at Seven?
          </h2>
        </div>
      </div>
    </section>
  );
}