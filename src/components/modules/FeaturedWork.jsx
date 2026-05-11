
"use client";

import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Project One",
    desc: "React landing page design with TailwindCSS.",
  },
  {
    title: "Project Two",
    desc: "Animated portfolio website with framer-motion.",
  },
  {
    title: "Project Three",
    desc: "Next.js dashboard with authentication and charts.",
  },
  {
    title: "Project Four",
    desc: "Responsive blog UI with Markdown rendering.",
  },
  {
    title: "Project Five",
    desc: "Custom 3D portfolio section using Three.js.",
  },
  {
    title: "Project Six",
    desc: "E-commerce platform with payment integration.",
  },
  {
    title: "Project Seven",
    desc: "Real-time chat application using WebSocket.",
  },
  {
    title: "Project Eight",
    desc: "AI-powered image recognition dashboard.",
  },
  {
    title: "Project Nine",
    desc: "Cross-platform mobile app built with React Native.",
  },
  {
    title: "Project Ten",
    desc: "Full-stack social media clone.",
  },
];

const FeaturedWork = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    if (!left || !right) return;

    let target = 0;
    let current = 0;
    let rafId = null;

    const animate = () => {
      current += (target - current) * 0.08;

      right.scrollTop = current;

      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = () => {
      const maxLeftScroll =
        left.scrollHeight - left.clientHeight;

      const progress =
        left.scrollTop / maxLeftScroll;

      const maxRightScroll =
        right.scrollHeight - right.clientHeight;

      target = progress * maxRightScroll * 4;
    };

    left.addEventListener("scroll", handleScroll);

    return () => {
      left.removeEventListener("scroll", handleScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-black">
      {/* LEFT SIDE */}
      <div
        ref={leftRef}
        className="w-1/2 h-full overflow-y-auto bg-[#111] p-10"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="max-w-xl space-y-8 text-white pb-[200px]">
          <h1 className="text-6xl font-bold leading-tight">
            Featured Work
          </h1>

          <p className="text-xl text-gray-400">
            আমি একজন Frontend Developer।
            React, Next.js এবং TailwindCSS
            নিয়ে modern UI তৈরি করি।
          </p>

          {[...Array(10)].map((_, i) => (
            <p
              key={i}
              className="text-gray-500 leading-9 text-lg"
            >
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Architecto magni repellendus
              accusantium aliquid distinctio
              laborum reprehenderit tempora.
            </p>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        ref={rightRef}
        className="w-1/2 h-full overflow-hidden bg-[#0d0d0d] p-10"
      >
        <div className="space-y-10 pb-[500px]">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500"
            >
              <div className="mb-6 h-[250px] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900"></div>

              <h2 className="mb-3 text-3xl font-bold text-white">
                {project.title}
              </h2>

              <p className="text-lg text-gray-400">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;

