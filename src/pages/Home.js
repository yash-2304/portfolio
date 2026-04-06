import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* Featured Projects Preview */}
      <section className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>

        <div className="flex justify-center">

          {/* Project 1 */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition hover:-translate-y-1 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">AI Math Solver </h3>
            <p className="text-white/60 mb-4">
              An interactive AI‑powered math solving platform supporting step‑by‑step solutions,
              equation parsing, and real‑time problem evaluation using custom ML + LLM pipelines.
            </p>
            <p className="text-xs text-white/40 mb-4">
              Note: Demo may take a few seconds to load due to Vercel free tier cold starts.
            </p>
            <a 
              href="https://github.com/yash-2304/ai-math-solver"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              GitHub →
            </a>
            <div className="mt-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] overflow-visible">
              {/* Fake window header */}
              <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-xs text-gray-400">ai-math-solver</span>
                <div />
              </div>

              <div id="ai-solver-embed" className="w-full h-[520px] overflow-x-auto overflow-y-visible pb-6">
                <iframe
                  src="https://ai-math-solver-mocha.vercel.app/"
                  title="AI Math Solver Demo"
                  className="w-[140%] h-[560px] bg-black"
                />
              </div>
            </div>
          </div>

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