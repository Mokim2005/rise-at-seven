"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);
      setAtTop(currentScrollY < 80);

      lastScrollY = currentScrollY;
    };

    const initialY = window.scrollY;
    setScrolled(initialY > 20);
    setAtTop(initialY < 80);

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 flex justify-center px-6 transition-all duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${atTop ? "top-8 py-0" : "top-0 py-0"}`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-300 ease-in-out ${
            scrolled
              ? "px-6 py-2.5 rounded-full border border-white/45 backdrop-blur-xl bg-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]"
              : "px-2 py-2"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`text-[15px] font-semibold tracking-tight whitespace-nowrap flex-shrink-0 transition-colors duration-300 ${
              scrolled ? "text-[#1a1209]" : "text-white"
            }`}
          >
            Rise at Seven
            <sup className={`text-[9px] font-medium ml-px ${scrolled ? "text-[#5a4a3a]" : "text-white/70"}`}>
              ®
            </sup>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3.5 py-1.5 text-sm rounded-full transition-all duration-200 whitespace-nowrap ${
                    scrolled
                      ? pathname === href
                        ? "font-semibold text-[#0d0d0d]"
                        : "font-medium text-[#2d2218] hover:bg-black/[0.06] hover:text-[#0d0d0d]"
                      : pathname === href
                      ? "font-semibold text-white"
                      : "font-medium text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <AnimatedButton 
              href="/signup" 
              variant={scrolled ? "dark" : "primary"}
              className="px-5 py-2 text-sm"
            >
              Get Started
              <svg
                width="13" height="13" viewBox="0 0 13 13" fill="none"
                className="flex-shrink-0"
              >
                <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </AnimatedButton>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex md:hidden p-1.5 bg-transparent border-none cursor-pointer transition-colors duration-300 ${
              scrolled ? "text-[#1a1209]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 pt-20 px-6 pb-6 bg-[rgba(240,235,230,0.92)] backdrop-blur-2xl md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl rounded-full px-6 py-3 transition-colors duration-200 ${
                pathname === href
                  ? "font-semibold text-[#0d0d0d]"
                  : "font-medium text-[#2d2218] hover:bg-black/[0.06]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/signup"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 inline-flex items-center gap-2 px-9 py-3.5 bg-[#1a1209] text-[#f5f0e8] text-base font-semibold rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.18)] hover:bg-[#2e2010] transition-all duration-200"
          >
            Get Started
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      )}
    </>
  );
}