// ============================================================
// Skills.jsx — Tech skills grid
// ============================================================

import { skills } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// A single skill card
function SkillCard({ skill, delay }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative
      bg-gradient-to-br from-[#111827] via-[#111827] to-[#3c6e71]/15
      border border-[#3c6e71]/20
      rounded-2xl p-7
      shadow-[0_10px_35px_rgba(0,0,0,0.45)]
      backdrop-blur-lg
      hover:shadow-[0_15px_50px_rgba(60,110,113,0.35)]
      hover:border-[#3c6e71]/50
      hover:-translate-y-1
      transition-all duration-500
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >

      {/* top glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3c6e71] to-transparent opacity-60" />

      {/* icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-[#3c6e71]/15 text-[#3c6e71] text-2xl
      shadow-[0_0_10px_rgba(60,110,113,0.5)]
      mb-5">
        {skill.icon}
      </div>

      {/* title */}
      <h3 className="text-white font-bold text-lg mb-2">
        {skill.category}
      </h3>

      {/* divider */}
      <div className="h-px bg-gradient-to-r from-[#3c6e71] to-transparent mb-4 opacity-70" />

      {/* skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {skill.items.map((item) => (
          <span
            key={item}
            className="bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63]
            text-gray-300 text-xs font-mono px-3 py-1 rounded-md
            border border-gray-500/20
            transition-all duration-300

            hover:scale-110
            hover:bg-[#3c6e71]/40
            hover:text-black
            hover:border-[#3c6e71]
            hover:shadow-[0_0_10px_rgba(60,110,113,0.7)]
            "
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}

export default function Skills() {
  const header = useScrollReveal();

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-gray-900"
    >

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3c6e71]/10 via-transparent to-cyan-400/5 pointer-events-none" />

      {/* Grid Background */}
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

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Section header */}
        <div
          ref={header.ref}
          className={`mb-16 transition-all duration-700 ${
            header.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Skills &{" "}
            <span className="text-[#3c6e71]">Technologies</span>
          </h2>
        </div>

        {/* Grid of skill cards */}
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {skills.map((skill, i) => (
              <SkillCard key={skill.category} skill={skill} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}