// ============================================================
// Projects.jsx — Portfolio projects grid
// ============================================================

import { projects } from "../data/portfolioData";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Single project card
function ProjectCard({ project, delay }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden
      hover:border-[#3c6e71]/60 hover:-translate-y-3 hover:scale-[1.02]
      hover:shadow-[0_20px_60px_rgba(60,110,113,0.4)]
      transition-all duration-500
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >

      {/* Thumbnail */}
      <div
        className={`relative h-52 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-7xl drop-shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500">
          {project.emoji}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-zinc-950/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63] text-black text-xs font-bold px-5 py-2 rounded-lg
            hover:scale-110
            translate-y-3 group-hover:translate-y-0
            transition-all duration-300 delay-75"
          >
            Live Demo ↗
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold text-xs px-5 py-2 rounded-lg
            transition-all duration-300
            hover:text-[#3c6e71] hover:border-[#3c6e71]/40 hover:-translate-y-1
            translate-y-3 group-hover:translate-y-0 backdrop-blur-sm"
          >
            GitHub →
          </a>

        </div>

        {/* Task badge */}
        <div className="absolute top-4 left-4 bg-zinc-950/60 backdrop-blur-sm text-[#3c6e71] text-xs font-mono px-3 py-1 rounded-full border border-[#3c6e71]/20">
          {project.task}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">

        <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-2">
          {project.type}
        </p>

        <h3 className="text-white font-bold text-lg mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63]
              text-gray-300 text-xs font-mono px-3 py-1 rounded-md
              border border-gray-500/20
              hover:scale-110 hover:bg-[#3c6e71]/40
              hover:text-black hover:border-[#3c6e71]
              transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  const header = useScrollReveal();

  return (
    <section
      id="projects"
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

      {/* Main container */}
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
            My <span className="text-[#3c6e71]">Projects</span>
          </h2>

        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 120} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-14">

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#3c6e71]/40 text-[#3c6e71]
            text-sm font-medium px-7 py-3 rounded-full
            hover:bg-[#3c6e71]/10 hover:scale-105
            transition-all duration-300"
          >
            🐙 See All Projects on GitHub
          </a>

        </div>

      </div>
    </section>
  );
}