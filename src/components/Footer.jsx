// ============================================================
// Footer.jsx — Single line footer (theme matched)
// ============================================================

import { personalInfo } from "../data/portfolioData";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 border-t border-white/5 px-6 md:px-16 py-6">

      <div className="max-w-6xl mx-auto
      flex flex-col md:flex-row
      items-center justify-between
      gap-4">

        {/* Logo */}
        <div className="font-mono text-xl font-bold text-[#3c6e71]">
          &lt;AR/&gt;
        </div>

        {/* Center Text */}
        <p className="text-sm text-zinc-500 text-center">
          Crafted with <span className="text-[#3c6e71]">❤</span> by{" "}
          <span className="text-zinc-300 font-semibold">{personalInfo.name}</span> © {year}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center
            border border-white/10 rounded-lg
            text-zinc-400
            transition-all duration-300
            hover:text-cyan-400
            hover:border-[#3c6e71]
            hover:shadow-lg hover:shadow-[#3c6e71]/30"
          >
            <FaGithub />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center
            border border-white/10 rounded-lg
            text-zinc-400
            transition-all duration-300
            hover:text-cyan-400
            hover:border-[#3c6e71]
            hover:shadow-lg hover:shadow-[#3c6e71]/30"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 flex items-center justify-center
            border border-white/10 rounded-lg
            text-zinc-400
            transition-all duration-300
            hover:text-cyan-400
            hover:border-[#3c6e71]
            hover:shadow-lg hover:shadow-[#3c6e71]/30"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* Back to top (kept exactly like your design) */}
      <a
        href="#hero"
        className="fixed bottom-8 right-8 z-50
        w-12 h-12 flex items-center justify-center
        rounded-full
        bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63]
        text-white text-lg
        shadow-lg shadow-[#3c6e71]/30
        transition-all duration-300
        hover:scale-110 hover:-translate-y-1
        hover:shadow-xl hover:shadow-[#3c6e71]/50"
      >
        <FaArrowUp />
      </a>

    </footer>
  );
}