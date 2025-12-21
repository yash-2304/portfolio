import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* Featured Projects Preview */}
      <section className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-3">AI Math Solver </h3>
            <p className="text-white/60 mb-4">
              An interactive AI‑powered math solving platform supporting step‑by‑step solutions,
              equation parsing, and real‑time problem evaluation using custom ML + LLM pipelines.
            </p>
            <a 
              href="https://ai-math-solver-mocha.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Demo →
            </a>
            <br />
            <a 
              href="https://github.com/yash-2304/ai-math-solver"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              GitHub →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-3">NewsMonkey App</h3>
            <p className="text-white/60 mb-4">
              A React-based news application featuring category filtering, API-driven content, 
              dynamic routing, and real‑time updates.
            </p>
            <a 
              href="https://github.com/yash-2304/NewsMonkey-React-master"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              View Project →
            </a>
          </div>

        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/projects"
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 text-white font-semibold"
          >
            View All Projects →
          </a>
        </div>
      </section>
      <Contact />
    </>
  );
}