// ============================================================
// AboutEducation.jsx — About + Education combined section
// ============================================================

import { personalInfo, education } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// ============================================================
// Timeline Item Component
// ============================================================

function TimelineItem({ item, delay }) {

  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`relative pl-10 pb-12 transition-all duration-700
      ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >

      {/* Vertical timeline line */}
      <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-[#3c6e71]/70 to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-3 w-3 h-3 bg-[#3c6e71] rounded-full shadow-lg shadow-[#3c6e71]/40" />

      {/* Date */}
      <p className="text-[#3c6e71] text-xs font-mono tracking-widest mb-1.5">
        {item.date}
      </p>

      {/* Degree */}
      <h3 className="text-white font-bold text-xl tracking-tight mb-1">
        {item.degree}
      </h3>

      {/* Institution */}
      <p className="text-zinc-500 text-sm mb-3">
        {item.institution}
      </p>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
        {item.description}
      </p>

    </div>
  );
}


// ============================================================
// Main Component
// ============================================================

export default function About() {

  const aboutReveal = useScrollReveal();
  const educationHeader = useScrollReveal();

  return (

    <section
      id="about"
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-gray-900"
    >

      {/* ============================================================ */}
      {/* Grid Background */}
      {/* ============================================================ */}

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

      {/* ============================================================ */}
      {/* Container */}
      {/* ============================================================ */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* ============================================================ */}
        {/* LEFT SIDE — ABOUT */}
        {/* ============================================================ */}

        <div
          ref={aboutReveal.ref}
          className={`transition-all duration-700 ${
            aboutReveal.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            About{" "}
            <span className="text-[#3c6e71]">Me</span>
          </h2>
          {/* Heading */}

          <h2 className="text-xl md:text-4xl font-black leading-tight mb-8 pt-7 text-white">
            Turning ideas <br />
            into <span className="text-[#3c6e71]">smart solutions</span>
          </h2>

          {/* Description */}

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            {personalInfo.bio}
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            {personalInfo.bio2}
          </p>


          {/* ============================================================ */}
          {/* Stats */}
          {/* ============================================================ */}

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">

            <div>
              <h3 className="text-4xl font-black text-[#3c6e71]">
                1000+
              </h3>
              <p className="text-zinc-400 text-xs tracking-widest mt-2">
                CODING PROBLEMS
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#3c6e71]">
                10+
              </h3>
              <p className="text-zinc-400 text-xs tracking-widest mt-2">
                SKILLS MASTERED
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#3c6e71]">
                20+
              </h3>
              <p className="text-zinc-400 text-xs tracking-widest mt-2">
                CONTESTS BATTLED
              </p>
            </div>

          </div>

        </div>


        {/* ============================================================ */}
        {/* RIGHT SIDE — EDUCATION */}
        {/* ============================================================ */}

        <div>

          {/* Section Header */}

          <div
            ref={educationHeader.ref}
            className={`mb-16 transition-all duration-700 ${
              educationHeader.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >

          </div>

          {/* Timeline */}

          <div>

            {education.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                delay={i * 150}
              />
            ))}

          </div>

        </div>

      </div>

    </section>

  );

}