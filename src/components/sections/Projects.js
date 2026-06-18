import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------- PROJECT DATA ------------------- */
const projects = [
  {
    title: "Food Intelligence",
    description: "AI-powered food analysis platform that evaluates meals, extracts nutritional insights, and provides intelligent breakdowns using computer vision and LLM pipelines.",
    features: [
      "Food image recognition using AI",
      "Nutritional analysis and breakdown",
      "LLM-powered insights generation",
      "Real-time food classification",
      "Modern responsive UI deployed on Vercel"
    ],
    tags: ["React", "JavaScript", "AI"],
    url: "https://food-intelligence-one.vercel.app/"
  },
  {
    title: "Algorithm Gauntlet",
    description: "Interactive platform to practice and visualize algorithms with real-time feedback, challenges, and performance insights for mastering problem-solving skills.",
    features: [
      "Algorithm visualization (BFS, DFS, Dijkstra, A*)",
      "Real-time comparison and execution",
      "Custom grid + weighted graphs",
      "Interactive UI with controls",
      "Deployed on Vercel"
    ],
    tags: ["React", "JavaScript", "Web"],
    url: "https://algorithm-gauntlet.vercel.app"
  },
  {
    title: "Adversarial Resume Auditor",
    description: "An AI-driven resume analysis tool that simulates ATS and LLM evaluation to expose hiring blind spots. It compares multiple scoring perspectives, identifies missing keywords, and delivers structured, actionable insights to improve resume performance in real-world screening systems.",
    features: [
      "ATS + LLM resume scoring simulation",
      "Multi-model evaluation comparison",
      "Keyword gap detection",
      "Structured actionable feedback",
      "Real-world hiring optimization insights"
    ],
    tags: ["React", "JavaScript", "AI"],
    url: "https://adversarial-resume-auditor-mx8r.vercel.app/"
  },
  {
    title: "YouTube Shorts Automation Pipeline",
    description:
      "End-to-end automation pipeline that downloads videos, generates clips, adds captions using Whisper, and uploads YouTube Shorts using yt-dlp, ffmpeg, and Python scripting.",
    features: [
      "Automated video download with yt-dlp",
      "Clip generation and processing with ffmpeg",
      "Auto-captioning using Whisper",
      "Batch pipeline orchestration",
      "YouTube upload automation"
    ],
    tags: ["Python", "API", "Automation"],
    url: "https://github.com/yash-2304/YT-shorts-Automation-"
  },
  {
    title: "Roast My Code",
    description: "Full-stack AI application that analyzes code, generates humorous critiques, and provides structured feedback with optimized code suggestions",
    features: [
      "AI-powered code analysis",
      "Humorous critique generation",
      "Structured feedback system",
      "Optimized code suggestions",
      "Deployed on Vercel"
    ],
    tags: ["React", "JavaScript", "Python"],
    url: "https://roast-my-code-mu.vercel.app/"
  },
  {
    title: "TriggerFlow",
    description: "Event-driven workflow automation platform that allows users to define triggers, conditions, and actions to automate complex processes in real-time.",
    features: [
      "Event-based trigger system",
      "Condition + action chaining",
      "Real-time workflow execution",
      "Interactive flow builder UI",
      "Deployed on Vercel"
    ],
    tags: ["React", "JavaScript", "Web"],
    url: "https://triggerflow-five.vercel.app/"
  },
  {
    title: "AI Math Solver",
    description:
      "An AI-powered math trainer that solves equations, explains steps, and assists with interactive learning using a custom machine learning and LLM pipeline.",
    features: [
      "AI-powered step-by-step solving",
      "Interactive learning interface",
      "Fast and scalable backend",
      "Deployed on Vercel"
    ],
    tags: ["React", "JavaScript", "Python"],
    url: "https://ai-math-solver-mocha.vercel.app/"
  },
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
  Automation: "https://cdn.simpleicons.org/githubactions/FFFFFF",
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
  AI: "https://api.iconify.design/mdi/sparkles.svg?color=white",
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
                  <div
                    key={tag}
                    className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-md hover:bg-white/20 transition"
                  >
                    <img
                      src={techIcons[tag]}
                      alt={tag}
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-white/90">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
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
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);

    if (deltaX > deltaY) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section className="w-full min-h-screen py-20 bg-gradient-to-br from-[#0b1220] via-[#0f1b2d] to-[#0b1220] text-white overflow-x-hidden flex justify-center items-center px-4">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col items-center justify-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center mx-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          Projects
        </motion.h2>

        {/* Coverflow Carousel */}
        <div className="w-full mb-16 flex flex-col items-center justify-center text-center px-2">

          <div
            className="relative flex items-center justify-center w-full max-w-[1200px] mx-auto touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-x' }}
          >
         {!isMobile && (
  <button
    onClick={prev}
    className="absolute left-[-6px] md:left-0 z-[100] w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition"
  >
    ←
  </button>
)}

            <div className="relative w-full max-w-[1100px] h-[520px] md:h-[620px] flex items-center justify-center overflow-visible mx-auto">
              {projects.map((project, i) => {
                let offset = i - index;

                // wrap around
                if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
                if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

                // Only render nearby cards for animation
                if (isMobile) {
                  if (Math.abs(offset) > 1) return null;
                } else {
                  if (Math.abs(offset) > 2) return null;
                }

                const isActive = offset === 0;

                const style = isMobile
                  ? {
                      transform: `translateX(${offset * 40}px) scale(${isActive ? 1 : 0.9})`,
                      opacity: isActive ? 1 : 0,
                      boxShadow: isActive ? '0 0 60px rgba(59,130,246,0.4)' : 'none',
                      zIndex: isActive ? 30 : 10,
                      transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
                    }
                  : {
                      transform: `perspective(1400px) translateX(${offset * 320}px) scale(${isActive ? 1.15 : 0.75}) rotateY(${offset * -35}deg)`,
                      opacity: isActive ? 1 : 0.35,
                      boxShadow: isActive ? '0 0 60px rgba(59,130,246,0.4)' : 'none',
                      zIndex: isActive ? 30 : 10,
                      filter: isActive ? 'none' : 'blur(2px)',
                      transition: 'all 0.5s ease'
                    };

                return (
                  <motion.div
                    key={i}
                    style={style}
                    initial={isMobile ? { opacity: 0, scale: 0.9, x: 80 } : false}
                    animate={isMobile ? {
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.9,
                      x: offset * 40
                    } : {}}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setIndex(i)}
                    className="absolute w-[90vw] max-w-[360px] h-[480px] bg-white/5 border border-blue-400/30 rounded-2xl p-6 cursor-pointer flex flex-col justify-between backdrop-blur-2xl shadow-[0_0_60px_rgba(59,130,246,0.25)]"
                  >
                    <div className="flex flex-col h-full justify-between">
                      {/* Center Icon */}
                      <div className="flex justify-center items-center mt-4 mb-3">
                        <div className="w-12 h-12 border border-blue-400/40 rounded-xl flex items-center justify-center">
                          <img src={techIcons[project.tags[0]]} alt="main" className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-white text-center">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 text-center mt-2 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Icons */}
                      <div className="flex justify-center gap-2 mt-3">
                        {project.tags.slice(0,3).map(tag => (
                          <img
                            key={tag}
                            src={techIcons[tag]}
                            alt={tag}
                            className="w-6 h-6 p-1 bg-white/10 rounded-md border border-white/20"
                          />
                        ))}
                      </div>

                      {/* Features */}
                      {isActive && (
                        <div className="text-xs text-gray-300 mt-3 space-y-1">
                          {project.features.slice(0,2).map((f,i)=>(
                            <div key={i}>• {f}</div>
                          ))}
                        </div>
                      )}

                      {/* Buttons */}
                      {isActive && (
                        <div className="mt-4 flex gap-2 justify-center">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs px-3 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-400 text-white font-medium"
                          >
                            {project.url.includes("github.com") ? "View Code" : "Live Demo"}
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelected(project);
                            }}
                            className="text-xs px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10"
                          >
                            Details
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

         {!isMobile && (
  <button
    onClick={next}
    className="absolute right-[-6px] md:right-0 z-[100] w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition"
  >
    →
  </button>
)}
          </div>

          <p className="text-sm text-gray-400 mt-4">
            {isMobile
              ? "Swipe left or right to navigate"
              : "Use ← → to navigate • Click card to focus"}
          </p>
          <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-3 max-w-4xl mx-auto px-6 py-6 text-center border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
            {projects.map((project, i) => (
              <button
                key={project.title}
                onClick={() => setIndex(i)}
                className={`text-sm transition-colors ${
                  i === index
                    ? 'text-blue-300'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
      </div>

      {/* MODAL */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}