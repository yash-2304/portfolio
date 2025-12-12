import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";

export default function Contact() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#0f172a] to-[#0a0f1f] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Let's Connect
        </motion.h2>

        {/* Top Section: Photo + Info */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* Tech Silhouette Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-28 h-28 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="w-14 h-14 opacity-80"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M4 20c1.5-5 14.5-5 16 0" />
            </svg>
          </motion.div>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left max-w-xl"
          >
            <h3 className="text-3xl font-semibold mb-2">Yash Prajapati</h3>
            <p className="text-blue-300 text-lg mb-4">
              Full Stack Engineer • JavaScript • React • TypeScript • Python • Node  
            </p>

            <p className="text-gray-300 leading-relaxed">
              Passionate about building high‑quality applications, crafting smooth UI/UX, 
              and developing full‑stack systems with modern tools.  
              Always learning, always innovating.
            </p>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 gap-10"
        >
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-blue-400 pl-3">Experience</h3>
            <ul className="space-y-3 text-gray-300">
              <li> DXC Technology – DevOps / Software Engineer</li>
              <li> Trinary Bits – Developer</li>
              <li> Freelance Full‑Stack Projects</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-blue-400 pl-3">Education</h3>
            <ul className="space-y-3 text-gray-300">
              <li> MS Computer Science — CSUCI</li>
              <li> BS Computer Science — India</li>
            </ul>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex justify-center gap-10 mt-16"
        >
          <a
            href="https://github.com/yash-2304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-blue-300 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yash-prajapati-29a423187"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-4xl hover:text-blue-200 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:pyash7621@gmail.com"
            className="text-red-300 text-4xl hover:text-red-200 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
