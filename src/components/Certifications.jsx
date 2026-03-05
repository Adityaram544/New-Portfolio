// ============================================================
// Certifications.jsx — Modern Certifications Section
// ============================================================

import { certifications } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function CertCard({ cert, delay }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative block bg-zinc-900/70 backdrop-blur-xl border border-white/5 rounded-xl p-6
      transform-gpu
      hover:border-[#3c6e71]/40
      hover:-translate-y-1
      hover:scale-[1.02]
      hover:shadow-[0_12px_45px_rgba(60,110,113,0.18)]
      transition-all duration-500 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >

      {/* Title */}
      <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-[#3c6e71] transition-colors duration-300">
        {cert.title}
      </h3>

      {/* Issuer */}
      <p className="text-zinc-400 text-sm mt-1">
        {cert.issuer}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63]
            text-gray-300 text-xs font-mono px-3 py-1 rounded-md
            border border-gray-500/20
            transition-all duration-300
            hover:scale-105 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <div className="absolute bottom-4 right-4 text-[#3c6e71] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        ↗
      </div>
    </a>
  );
}

export default function Certifications() {
  const header = useScrollReveal();

  return (
    <section
      id="certifications"
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-gray-900"
    >

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3c6e71]/10 via-transparent to-cyan-400/5 pointer-events-none" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#3c6e71 0.5px, transparent 1px),
            linear-gradient(90deg, #3c6e71 0.5px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-[#3c6e71]">Certifications</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} delay={i * 120} />
          ))}
        </div>

      </div>
    </section>
  );
}