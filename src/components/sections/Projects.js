import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------- PROJECT DATA ------------------- */
const projects = [
  {
    title: "The News App",
    description:
      "A React-based web application that displays real-time news using the NewsAPI service. Includes category switching, infinite scroll, dynamic routing and API integration.",
    features: [
      "Live news updates",
      "Category filtering",
      "Infinite scroll",
      "Dynamic routing",
    ],
    tags: ["React", "JavaScript", "API"],
    url: "https://github.com/yash-2304/The-News-App",
  },
  {
    title: "Crypto Transaction Web App",
    description:
      "A simple crypto transaction viewer that fetches live cryptocurrency prices using CoinGecko APIs.",
    features: [
      "Live crypto value tracking",
      "Smooth UI updates",
      "API-driven dashboard",
    ],
    tags: ["JavaScript", "API", "Web"],
    url: "https://github.com/yash-2304/-Crypto-Transaction-Web-App",
  },
  {
    title: "Breast Cancer Detection (ML/DL)",
    description:
      "Machine Learning & Deep Learning models built for early detection using medical datasets.",
    features: [
      "ML model training",
      "Deep learning architectures",
      "Data preprocessing",
    ],
    tags: ["Machine Learning", "Python", "Deep Learning"],
    url: "https://github.com/yash-2304/Breast-Cancer-Detection-using-Machine-Learning-and-Deep-Learning",
  },
  {
    title: "Car Parts Inventory System",
    description:
      "An order management and inventory control system created for car parts stock management using database operations.",
    features: [
      "Stock tracking",
      "Order workflow",
      "Search + filtering",
      "Secure CRUD operations",
    ],
    tags: ["JavaScript", "SQL", "Backend"],
    url: "https://github.com/yash-2304/Car-Parts-Inventory-Order-Management-System",
  },
  {
    title: "Infrastructure Automation & Monitoring",
    description:
      "Automated infrastructure monitoring with Ansible, Prometheus and Grafana visualization dashboards.",
    features: [
      "Server automation",
      "Monitoring setup",
      "Grafana dashboards",
      "Prometheus alerts",
    ],
    tags: ["DevOps", "Ansible", "Prometheus", "Grafana"],
    url: "https://github.com/yash-2304/Infrastructure-Automation-Monitoring-with-Ansible-Prometheus-and-Grafana",
  },
  {
    title: "Automated Canteen Ordering System",
    description:
      "Python Flask-based web application that automates a canteen order workflow with simple UI.",
    features: [
      "Python Flask backend",
      "Order routing",
      "Simple UI",
      "Database integration",
    ],
    tags: ["Flask", "Python", "Web App"],
    url: "https://github.com/yash-2304/Automated-Canteen-Ordering-System",
  },
];

/* ------------------- ICONS ------------------- */
const techIcons = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  API: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  Web: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Deep Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Backend: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  DevOps: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Ansible: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  Prometheus: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  Grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  Flask: "https://cdn.simpleicons.org/flask/FFFFFF",
  "Web App": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

/* ------------------- MODAL COMPONENT ------------------- */
function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Dark overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[90%] max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {/* Title + Close */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-white drop-shadow">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-white text-2xl hover:text-red-400 transition"
                >
                  ×
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-200 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Features List */}
              <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* Icons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag) => (
                  <img
                    key={tag}
                    src={techIcons[tag]}
                    alt={tag}
                    className="w-10 h-10 bg-white/10 p-2 rounded-lg border border-white/20"
                  />
                ))}
              </div>

              {/* Link */}
              <a
                href={project.url}
                target="_blank"
                className="text-blue-300 hover:text-blue-100 font-semibold"
              >
                View Project →
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------- MAIN PROJECTS GRID ------------------- */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold mb-12 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative p-6 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/20 
              cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.08)]
              hover:shadow-[0_0_45px_rgba(99,102,241,0.8)] transition-all duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `rotateX(${(-y / 20)}deg) rotateY(${x / 20}deg) scale(1.04)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              <h3 className="text-xl font-semibold drop-shadow">{project.title}</h3>
              <p className="mt-3 text-gray-300 text-sm">
                {project.description.slice(0, 100)}...
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <img
                    key={tag}
                    src={techIcons[tag]}
                    alt={tag}
                    className="w-8 h-8 p-1 bg-white/10 rounded-md border border-white/20"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}