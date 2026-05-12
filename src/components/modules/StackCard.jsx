"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CARDS = [
  {
    id: 1,
    title: "Pioneers",
    image: "/card1.jpg",
    bgColor: "#111111",
    textColor: "#FFFFFF",
    restingRotation: -7,
    exitRotation: -22,
    zIndex: 3,
    body: [
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo."
    ]
  },
  {
    id: 2,
    title: "Award Winning",
    image: "/card2.jpg",
    bgColor: "#7EDDD0",
    textColor: "#111111",
    restingRotation: 6,
    exitRotation: -22,
    zIndex: 2,
    body: [
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards."
    ]
  },
  {
    id: 3,
    title: "Speed",
    image: "/card3.jpg",
    bgColor: "#FFFFFF",
    textColor: "#111111",
    restingRotation: -4,
    exitRotation: -22,
    zIndex: 1,
    body: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes."
    ]
  }
];

export default function StackedCards() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;

      // Initial state
      cards.forEach((card, index) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          rotate: CARDS[index].restingRotation,
          zIndex: CARDS[index].zIndex,
          y: 0,
          opacity: 1,
          force3D: true,
        });
      });

      // Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Card 1
      tl.to(cards[0], {
        y: "-130vh",
        rotate: CARDS[0].exitRotation,
        duration: 1,
        ease: "power1.out",
      });

      // Card 2
      tl.to(cards[1], {
        y: "-130vh",
        rotate: CARDS[1].exitRotation,
        duration: 1,
        ease: "power1.out",
      });

      // Card 3
      tl.to(cards[2], {
        y: "-130vh",
        rotate: CARDS[2].exitRotation,
        duration: 1,
        ease: "power1.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#EFEEEC]"
      style={{
        height: "300vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">

        {/* Section Title */}
        <div className="absolute top-[32px] left-0 w-full text-center z-20 pointer-events-none">
          <p
            className="text-[14px] md:text-[15px] text-[#555] tracking-[0.02em]"
            style={{
              fontFamily: "Manrope, Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            Legacy In The Making
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

          {CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="
                absolute top-1/2 left-1/2
                rounded-[28px]
                flex flex-col items-center text-center
                overflow-hidden will-change-transform
                shadow-[0_24px_64px_rgba(0,0,0,0.18)]
              "
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
                width: "min(460px,92vw)",
                padding: "44px 40px 48px",
                transformOrigin: "center center",
              }}
            >

              {/* Image */}
              <div
                className="
                  w-[120px] h-[120px]
                  md:w-[155px] md:h-[155px]
                  rounded-[14px]
                  overflow-hidden
                  mb-[28px]
                  bg-[#333]
                  flex-shrink-0
                "
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#333";
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-[38px] md:text-[54px]
                  leading-[1.05]
                  mb-[20px]
                  tracking-tighter
                "
                style={{
                  fontWeight: 800,
                  fontFamily: "Manrope, Inter, sans-serif",
                }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <div className="space-y-4 max-w-[380px]">
                {card.body.map((text, idx) => (
                  <p
                    key={idx}
                    className="
                      text-[12.5px]
                      md:text-[13.5px]
                      leading-[1.65]
                    "
                    style={{
                      fontFamily: "Manrope, Inter, sans-serif",
                      fontWeight: 500,
                      color:
                        card.textColor === "#FFFFFF"
                          ? "rgba(255,255,255,0.9)"
                          : "#1a1a1a",
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}