import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-black mb-8 tracking-tight"
        >
          About Me
        </motion.h2>

        {/* Short About Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed max-w-3xl"
        >
          I’m a passionate Full Stack Engineer who loves building clean, modern, 
          high-performance applications. I focus on creating seamless user experiences 
          using React, TypeScript, and scalable backend systems. I enjoy working at the 
          intersection of design and engineering — crafting software that feels elegant, 
          fast, and meaningful.
        </motion.p>

        {/* Skill Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          
          {[
            "React & TypeScript",
            "Node.js & Express",
            "REST APIs & Integrations",
            "Framer Motion Animations",
            "Tailwind & Modern UI Design",
            "Database Systems (MongoDB / SQL)"
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#f8f5f7] px-6 py-4 rounded-2xl border border-[#e5e5e5] shadow-sm text-gray-900 font-medium hover:shadow-md transition"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}