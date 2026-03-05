// ============================================================
// Resume.jsx — Experience & education timeline
// ============================================================

import { education } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Single timeline entry
function TimelineItem({ item, delay }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`relative pl-10 pb-12 transition-all duration-700
      ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-lime-400/50 to-transparent" />

      <div className="absolute left-[-5px] top-3 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/40" />

      <p className="text-lime-400 text-xs font-mono tracking-widest mb-1.5">
        {item.date}
      </p>

      <h3 className="text-white font-bold text-xl tracking-tight mb-1">
        {item.degree}
      </h3>

      <p className="text-zinc-500 text-sm mb-3">{item.institution}</p>

      <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
        {item.description}
      </p>
    </div>
  );
}

export default function Resume() {
  const header = useScrollReveal();

  return (
    <section id="education" className="bg-zinc-950 py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <div
          ref={header.ref}
          className={`mb-16 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lime-400 text-xs font-mono tracking-[0.2em] mb-3">
            // 04 — EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            My <span className="text-zinc-500">Education</span>
          </h2>

          <p className="text-zinc-400 text-base leading-relaxed">
            My academic background and the foundation that shaped my journey into software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="pt-2">
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} delay={i * 150} />
          ))}
        </div>

      </div>
    </section>
  );
}