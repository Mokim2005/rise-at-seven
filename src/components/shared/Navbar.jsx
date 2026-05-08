"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        .navbar {
          font-family: 'Outfit', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-inner {
          margin: 12px 20px;
          border-radius: 20px;
          padding: 14px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .navbar-inner.transparent {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px) saturate(1.8);
          -webkit-backdrop-filter: blur(16px) saturate(1.8);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow:
            0 4px 30px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .navbar-inner.scrolled {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(24px) saturate(2);
          -webkit-backdrop-filter: blur(24px) saturate(2);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow:
            0 8px 40px rgba(0, 0, 0, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        /* Logo */
        .logo {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.6);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .logo:hover .logo-dot {
          transform: scale(1.4);
        }

        .navbar-inner.transparent .logo {
          color: white;
          text-shadow: 0 1px 8px rgba(0,0,0,0.15);
        }

        .navbar-inner.scrolled .logo {
          color: #1a1a2e;
        }

        /* Nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          padding: 8px 18px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .navbar-inner.transparent .nav-link {
          color: rgba(255, 255, 255, 0.85);
        }

        .navbar-inner.transparent .nav-link:hover,
        .navbar-inner.transparent .nav-link.active {
          color: white;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
        }

        .navbar-inner.scrolled .nav-link {
          color: #4b5563;
        }

        .navbar-inner.scrolled .nav-link:hover {
          color: #1a1a2e;
          background: rgba(99, 102, 241, 0.08);
        }

        .navbar-inner.scrolled .nav-link.active {
          color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
        }

        /* Active indicator pill */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 16px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          transition: transform 0.25s ease;
        }

        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* CTA Button */
        .cta-btn {
          padding: 9px 22px;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          border: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: inline-block;
        }

        .navbar-inner.transparent .cta-btn {
          background: rgba(255, 255, 255, 0.18);
          color: white;
          border: 1px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(8px);
        }

        .navbar-inner.transparent .cta-btn:hover {
          background: rgba(255, 255, 255, 0.28);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .navbar-inner.scrolled .cta-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
        }

        .navbar-inner.scrolled .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.45);
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }

        .cta-btn:hover::before {
          left: 100%;
        }
      `}</style>

      <nav className="navbar">
        <div className={`navbar-inner ${scrolled ? "scrolled" : "transparent"}`}>
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="logo-dot" />
            MyApp
          </Link>

          {/* Nav Links */}
          <ul className="nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${activeLink === href ? "active" : ""}`}
                  onClick={() => setActiveLink(href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/signup" className="cta-btn">
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}