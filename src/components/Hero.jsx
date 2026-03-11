// ============================================================
// Hero.jsx — Full-screen landing section
// ============================================================

import profile from "../assets/Adi's Ai pic 2.png"; // change to your image path
import { personalInfo } from "../data/portfolioData";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-20 overflow-hidden bg-gray-900"
    >
      {/* --- Background grid pattern --- */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#3c6e71 1px, transparent 1px),
            linear-gradient(90deg, #3c6e71 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* --- Glowing orbs for visual depth --- */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* --- Main hero content --- */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* --- Image --- */}
        <div className="flex justify-center md:justify-end order-first md:order-last">  
            <img
              src={profile}
              alt="profile"
              className="w-64 md:w-80 rounded-2xl border-4 border-[#3c6e71]/50 
              shadow-lg shadow-cyan-400/20
              transition-all duration-300
              hover:scale-105"

            />
        </div>

        {/* --- Text Content --- */}
        <div>
          {personalInfo.availableForWork && (
            <div className="inline-flex items-center gap-2 bg-[#3c6e71]/10 border border-[#3c6e71]/25 text-[#3c6e71] text-xs font-mono tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#3c6e71] rounded-full animate-pulse" />
              AVAILABLE FOR WORK
            </div>
          )}
          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl font-black tracking-wide leading-none mb-6">
            <span className="block mb-4 bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63] bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
            <span className="block text-zinc-400">{personalInfo.role}</span>
          </h1>

          {/* Subheading */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
           <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
              bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63]
              text-black font-bold text-sm px-7 py-3.5 rounded-lg
              transition-all duration-300
              hover:scale-105 hover:-translate-y-1
              hover:shadow-xl hover:shadow-[#3c6e71]/40
              cursor-pointer"
            >
            View Resume
            </a>

           <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold text-sm px-7 py-3.5 rounded-lg
              transition-all duration-300
              hover:text-[#3c6e71] hover:border-[#3c6e71]/40 hover:-translate-y-1"
            >
            Let's Connect
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start items-center gap-6 mt-8 text-[#3c6e71] text-xl">
            <a
              href={personalInfo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#3c6e71] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/adityaram544"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#3c6e71] transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:YOUR_EMAIL"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#3c6e71] transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>
        
      </div>

    </section>
  );
}