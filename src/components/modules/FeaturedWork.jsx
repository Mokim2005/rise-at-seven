"use client";

import React, { useEffect, useRef } from "react";

const FeaturedWork = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    let targetScrollTop = 0;
    let currentScrollTop = 0;
    let rafId = null;

    const animate = () => {
      currentScrollTop += (targetScrollTop - currentScrollTop) * 0.08;
      if (Math.abs(currentScrollTop - targetScrollTop) < 0.5) {
        currentScrollTop = targetScrollTop;
      }
      right.scrollTop = currentScrollTop;
      if (Math.abs(currentScrollTop - targetScrollTop) > 0.1) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const handleScroll = () => {
      const leftScrollPercent =
        (left.scrollTop / (left.scrollHeight - left.clientHeight)) * 100;
      const rightScrollPercent = leftScrollPercent * 5;
      targetScrollTop =
        ((right.scrollHeight - right.clientHeight) * rightScrollPercent) / 100;

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    left.addEventListener("scroll", handleScroll);

    return () => {
      left.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="flex mx-3 justify-between h-screen overflow-hidden">
      {/* LEFT section */}
      <div
        ref={leftRef}
        className="w-1/2 p-6 bg-amber-300 overflow-y-scroll h-full"
      >
        <h2 className="text-2xl font-bold mb-4">Left Section</h2>
        <p className="mb-4">
          আমি একজন ফ্রন্টএন্ড ডেভেলপার, React এবং TailwindCSS নিয়ে কাজ করি। নিচে কিছু লেখা দেওয়া হলো যাতে scroll করা যায়।
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
          euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
          non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
        </p>
        <p>
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo.
        </p>
        <p className="mt-4">
          আরো কিছু লেখা যোগ করা হলো যাতে left side এ বেশি scroll করা যায় এবং right side এর প্রজেক্ট গুলো ধীরে ধীরে দেখা যায়।
        </p>
        <p className="mt-4">
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        </p>
        <p className="mt-4">
          নিচের দিকে আরো স্ক্রল করলে right side এর বাকি প্রজেক্ট গুলো দেখা যাবে। এই ফিচারটি scroll-syncing নামে পরিচিত।
        </p>
        <p className="mt-4">
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </p>
      </div>

      {/* RIGHT section */}
      <div
        ref={rightRef}
        className="w-1/2 p-6 bg-green-300 overflow-y-scroll h-full"
      >
        <h2 className="text-2xl font-bold mb-4">Right Section</h2>
        <div className="space-y-8">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project One</h3>
            <p>React landing page design with TailwindCSS.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Two</h3>
            <p>Animated portfolio website with framer-motion.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Three</h3>
            <p>Next.js dashboard with authentication and charts.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Four</h3>
            <p>Responsive blog UI with Markdown rendering.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Five</h3>
            <p>Custom 3D portfolio section using Three.js.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Six</h3>
            <p>E-commerce platform with payment integration and cart system.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Seven</h3>
            <p>Real-time chat application using WebSocket and Node.js.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Eight</h3>
            <p>AI-powered image recognition dashboard with TensorFlow.js.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Nine</h3>
            <p>Cross-platform mobile app built with React Native.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Project Ten</h3>
            <p>Full-stack social media clone with real-time notifications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
