import { motion } from "framer-motion";

const techIcons = [
  "react",
  "javascript",
  "typescript",
  "nodejs",
  "express",
  "mongodb",
  "postgresql",
  "python",
  "flask",
  "tensorflow",
  "ansible",
  "prometheus",
  "grafana"
];

export default function About() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f1427] to-[#1b2440] py-24">
      <div className="max-w-6xl mx-auto px-6 text-white">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed w-full max-w-none"
        >
          I’m a passionate Full Stack Engineer who loves building clean, modern,
          high performance applications. I focus on creating seamless user experiences
          using React, TypeScript, and scalable backend systems. I enjoy working at the
          intersection of design and engineering crafting software that feels elegant,
          fast, and meaningful.
        </motion.p>

<div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-4 sm:gap-y-6 mt-6 justify-items-center">          {techIcons.map((icon, index) => (
            <motion.div
              key={icon}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/10 hover:scale-110 transition-transform w-24 h-24 flex items-center justify-center"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                className="w-10 h-10 object-contain"
                alt={icon}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}