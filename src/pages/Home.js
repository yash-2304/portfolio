import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const projects = [
    {
      title: "Adversarial Resume Auditor",
      desc: "An AI-driven resume analysis tool that simulates ATS and LLM evaluation to expose hiring blind spots. It compares multiple scoring perspectives, identifies missing keywords, and delivers structured, actionable insights to improve resume performance in real-world screening systems.",
      note: "Note: Demo may take a few seconds to load due to Vercel free tier cold starts.",
      github: "",
      embed: "https://adversarial-resume-auditor-mx8r.vercel.app/",
      label: "resume-auditor"
    },
    {
      title: "AI Math Solver",
      desc: "An interactive AI‑powered math solving platform supporting step‑by‑step solutions, equation parsing, and real‑time problem evaluation using custom ML + LLM pipelines.",
      note: "Note: Demo may take a few seconds to load due to Vercel free tier cold starts.",
      github: "https://github.com/yash-2304/ai-math-solver",
      embed: "https://ai-math-solver-mocha.vercel.app/",
      label: "ai-math-solver"
    },
    {
      title: "Roast My Code",
      desc: "Full-stack AI application that analyzes code, generates humorous critiques, and provides structured feedback with optimized code suggestions",
      note: "Note: Demo may take a few seconds to load due to Vercel free tier cold starts.",
      github: "https://github.com/yash-2304/roast-my-code",
      embed: "https://roast-my-code-mu.vercel.app/",
      label: "roast-my-code"
    },
    {
      title: "TriggerFlow",
      desc: "Event-driven workflow automation platform that allows users to define triggers, conditions, and actions to automate complex processes in real-time.",
      note: "Note: Demo may take a few seconds to load due to Vercel free tier cold starts.",
      github: "https://github.com/yash-2304/Triggerflow",
      embed: "https://triggerflow-five.vercel.app/",
      label: "triggerflow"
    }
  ];
  return (
    <div>
      <Hero />
      <About />
      {/* Featured Projects Preview */}
      <section className="mt-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>

        <div className="relative w-full flex justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => setIndex((index - 1 + projects.length) % projects.length)}
            className="absolute -left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl z-10"
          >
            ←
          </button>

          {/* Project Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition hover:-translate-y-1 border border-white/10 w-full max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              {projects[index].title}
            </h3>

            <p className="text-white/60 mb-4">
              {projects[index].desc}
            </p>

            <p className="text-xs text-white/40 mb-4">
              {projects[index].note}
            </p>

            <a
              href={projects[index].github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              GitHub →
            </a>

            <div className="relative mt-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] overflow-visible">
              <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-xs text-gray-400 flex-1 text-center">{projects[index].label}</span>
                <a
                  href={projects[index].embed}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded-md border border-white/20 backdrop-blur-md transition"
                  title="Open in new tab"
                >
                  ⛶
                </a>
              </div>

              <div className="flex justify-center overflow-x-auto overflow-y-visible pb-6">
                <iframe
                  src={projects[index].embed}
                  title={projects[index].title}
                  className="w-[1024px] h-[600px] bg-black"
                />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((index + 1) % projects.length)}
            className="absolute -right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl z-10"
          >
            →
          </button>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/projects"
            className='px-8 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition'
          >
            View All Projects 
          </a>
        </div>
      </section>
      <Contact />
    </div>
  );
}