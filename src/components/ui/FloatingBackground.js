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

export default function FloatingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {techIcons.map((icon, index) => (
        <motion.div
          key={icon}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: ["0%", "-40%", "0%"],
            x: ["0%", "20%", "-20%", "0%"],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12 + index * 1.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            top: `${20 + (index * 7)}%`,
            left: `${10 + (index * 5)}%`,
          }}
        >
          <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
              className="w-10 h-10 opacity-70"
              alt={icon}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}