import { motion } from "framer-motion";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="pt-4 sm:pt-8 md:pt-12 lg:pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-16 text-white">

        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Hi, I’m{" "}
            <span className="text-blue-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]">
              Yash Prajapati
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
            A Full Stack Engineer crafting beautiful, high-performance digital experiences.
            Passionate about React, TypeScript, AI integrations, and building scalable web products.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/projects"
              className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333] transition text-center"
            >
              View My Work →
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333] transition text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Soft Gradient Behind Image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e3f0ff] to-[#ffffff] blur-2xl opacity-70"></div>

            {/* Profile Image */}
            <img
              src={profileImg}
              alt="Yash profile"
              className="relative w-full h-full object-cover rounded-3xl shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}