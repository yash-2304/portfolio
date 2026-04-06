import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [active, setActive] = useState(null);
  const [typedLines, setTypedLines] = useState([]);
  const [aboutLines, setAboutLines] = useState([]);

  useEffect(() => {
    if (!active) return;

    const lines = (
      active === 'react' ? [
        'Built 15+ reusable components across projects',
        'Improved UI responsiveness by ~25% using memo & lazy loading',
        'Managed complex state using hooks & context effectively'
      ] :
      active === 'javascript' ? [
        'Handled async APIs with optimized Axios pipelines',
        'Reduced redundant calls via caching & deduping (~20%)',
        'Built dynamic, event-driven UI interactions'
      ] :
      active === 'typescript' ? [
        'Enforced type-safe architecture in large components',
        'Reduced runtime bugs by ~30% via strict typing',
        'Designed scalable interfaces for API data handling'
      ] :
      active === 'nodejs' ? [
        'Built REST APIs handling high-frequency requests',
        'Optimized backend response time by ~20%',
        'Designed scalable service architecture'
      ] :
      active === 'express' ? [
        'Developed modular REST APIs with middleware layers',
        'Structured routes for maintainability & scale',
        'Handled request validation & error pipelines'
      ] :
      active === 'mongodb' ? [
        'Designed flexible schemas for dynamic data models',
        'Optimized query performance for faster reads',
        'Handled real-time data storage scenarios'
      ] :
      active === 'postgresql' ? [
        'Designed relational schemas with complex joins',
        'Used indexing to improve query performance',
        'Maintained strong data integrity constraints'
      ] :
      active === 'python' ? [
        'Built ML pipelines & backend logic scripts',
        'Processed structured/unstructured datasets efficiently',
        'Integrated AI workflows into web applications'
      ] :
      active === 'flask' ? [
        'Built lightweight APIs for ML model serving',
        'Handled request routing & backend logic cleanly',
        'Enabled fast prototyping of backend services'
      ] :
      active === 'tensorflow' ? [
        'Trained models for classification & prediction tasks',
        'Integrated ML outputs into live applications',
        'Worked with model evaluation & tuning workflows'
      ] :
      active === 'ansible' ? [
        'Automated deployment workflows & configurations',
        'Reduced manual setup effort significantly',
        'Managed infra provisioning scripts'
      ] :
      active === 'prometheus' ? [
        'Monitored system metrics & performance data',
        'Set up alerting pipelines for anomalies',
        'Tracked real-time service health'
      ] :
      active === 'grafana' ? [
        'Built dashboards for real-time observability',
        'Visualized metrics for system insights',
        'Improved debugging via data visualization'
      ] : []
    );

    setTypedLines([]);

    let i = 0;
    let j = 0;
    let current = '';

    const interval = setInterval(() => {
      if (i >= lines.length) {
        clearInterval(interval);
        return;
      }

      if (j < lines[i].length) {
        current += lines[i][j];
        j++;
        setTypedLines(prev => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      } else {
        i++;
        j = 0;
        current = '';
      }
    }, 20);

    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    const lines = [
      'initializing profile...',
      'role: Full Stack Engineer',
      'experience: 3+ years building production web apps',
      'stack: React, TypeScript, Node, Python',
      'specialization: scalable systems & high-performance UI',
      'impact: improved performance by ~25% across projects',
      'focus: real-time data, APIs, and clean architecture',
      'status: actively seeking opportunities'
    ];

    let i = 0;
    let j = 0;
    let current = '';

    setAboutLines([]);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i >= lines.length) {
          clearInterval(interval);
          return;
        }

        if (j < lines[i].length) {
          current += lines[i][j];
          j++;
          setAboutLines(prev => {
            const updated = [...prev];
            updated[i] = current;
            return updated;
          });
        } else {
          i++;
          j = 0;
          current = '';
        }
      }, 25);
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-[#0f1427] to-[#1b2440] py-24 flex justify-center">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="relative bg-black/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

          {/* Top bar (monitor header) */}
          <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="text-xs text-gray-400 font-mono">about_yash.js</div>
          </div>

          <div className="px-6 py-10 text-white">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-mono text-sm text-green-400 leading-relaxed mt-4"
            >
              {aboutLines.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    idx === 0
                      ? 'text-gray-500'
                      : 'text-green-400'
                  }
                >
                  &gt; {line}
                  {idx === aboutLines.length - 1 && (
                    <span className="animate-pulse">█</span>
                  )}
                </div>
              ))}
            </motion.div>

            <div className="mt-4 text-sm text-gray-500 font-mono">
              &gt; tap on a tech to open terminal
            </div>

            <div className="mt-10 space-y-6">
              {Array.from({ length: Math.ceil(techIcons.length / 4) }, (_, rowIndex) => {
                const rowIcons = techIcons.slice(rowIndex * 4, rowIndex * 4 + 4);
                return (
                  <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
                    {rowIcons.map((icon, index) => (
                      <div key={icon} className="flex flex-col items-center">

                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.06 }}
                          viewport={{ once: true }}
                          className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/10 transition-transform w-24 h-24 flex items-center justify-center cursor-pointer hover:scale-105"
                          onClick={() => setActive(active === icon ? null : icon)}
                        >
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                            className="w-10 h-10 object-contain"
                            alt={icon}
                          />
                        </motion.div>

                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {active && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-[90%] max-w-lg text-white shadow-2xl">
                  
                  <button
                    className="absolute top-3 right-4 text-gray-300 hover:text-white"
                    onClick={() => setActive(null)}
                  >
                    ✕
                  </button>

                  <div className="font-mono text-xs text-green-400 leading-relaxed break-words">
                    <div className="text-gray-400 mb-2">$ {active}</div>

                    {typedLines.map((line, idx) => (
                      <div key={idx} className="whitespace-pre-wrap break-words">
                        &gt; {line}
                        {idx === typedLines.length - 1 && (
                          <span className="animate-pulse">█</span>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}