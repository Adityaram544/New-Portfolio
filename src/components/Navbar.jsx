// ============================================================
// Navbar.jsx — Top navigation bar with scroll effect
// ============================================================

import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

// List of nav links — add/remove as needed
const NAV_LINKS = [
  { label: "About",           href: "#about"    },
  { label: "Skills",          href: "#skills"   },
  { label: "Projects",        href: "#projects" },
  { label: "Certifications",  href: "#certifications"  },
  { label: "Contact",         href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow + backdrop blur after scrolling 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300
        ${scrolled ? "bg-gray-900/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}
    >
      {/* Logo */}
      {/* Logo */}
      <a
        href="#"
        className="font-black text-xl tracking-tight text-white
        transition-all duration-300
        hover:text-[#3c6e71] hover:scale-110"
      >
      AR
      <span className="text-[#3c6e71]"></span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-gradient-to-r 
              after:from-[#284b63] 
              after:via-[#3c6e71] 
              after:to-[#6b9080]
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hire Me Button */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 
        bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63]
        text-black text-sm font-bold px-5 py-2.5 rounded-lg
        transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        hover:shadow-lg hover:shadow-[#4ea8a0]/40"
      >
      Hire Me
      </a>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

     
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 py-4 flex flex-col items-center gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#6b9080]
            text-black text-sm font-bold px-6 py-2.5 rounded-lg
            transition-all duration-300
            hover:scale-105 hover:-translate-y-0.5
            hover:shadow-lg hover:shadow-[#3c6e71]/40"
          >
          Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
