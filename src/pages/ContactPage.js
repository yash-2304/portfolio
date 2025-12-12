import { useState, useEffect } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function ContactPage() {
  const timeline = [
    {
      year: "2025 — Present",
      title: "Full Stack Developer · DXC Technology (USA)",
      details: [
        "Building React + TypeScript front-end flows with protected routing, complex forms, error boundaries, and accessibility for enterprise dashboards.",
        "Developing FastAPI microservices with async handlers, JWT authentication, schema-driven API contracts, and structured logging hooks.",
        "Implemented automated interface checks preventing frontend breakage due to silent backend changes.",
        "Architected Firestore read/write paths for high‑frequency real-time updates without cost spikes.",
        "Improved UI performance with React Query caching, request batching, debounced triggers, and route-level code splitting.",
        "Containerized services and shipped via CI/CD with smoke tests and rollback safeguards.",
        "Collaborated directly with product & design to identify edge cases early (offline access, retry logic, stale data)."
      ]
    },
    {
      year: "2021 — 2023",
      title: "Web Application Developer · Trinary Bits (India)",
      details: [
        "Delivered production-grade React + TypeScript apps and handled complete UI architecture, accessibility, and deployments.",
        "Built a reusable component + hook system reducing UI development time by 30%.",
        "Rolled out a Firebase‑based authentication and real-time sync system with custom security rules.",
        "Developed FastAPI microservices with logging, throttling, and versioned endpoints with full OpenAPI documentation.",
        "Integrated external ML APIs with retry/backoff + queue handling to prevent UI freeze cases.",
        "Optimized network behavior with Axios interceptors, caching, and deduplication, reducing load times by 20–25%.",
        "Refactored global Redux state, eliminating stale-state bugs across navigation flows.",
        "Improved performance using lazy loading, memoization, virtualization, and manual DOM cleanup."
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (i) => {
    if (!isDesktop) setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="pt-10 space-y-24">
      
      {/* ABOUT ME */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <p className="text-white/70 leading-relaxed">
          I’m Yash Prajapati, a Full Stack Engineer with strong experience in React,
          TypeScript, Node.js, FastAPI, and cloud-native architectures. I specialize in 
          building clean, scalable UI systems, robust backend microservices, and modern 
          end‑to‑end application flows. I focus heavily on performance, clean code, 
          maintainability, and user‑centric design. My work spans enterprise dashboards, 
          authentication systems, real‑time applications, and backend automation services.
        </p>
      </section>

      {/* HEADER */}
      <section>
        <h2 className="text-4xl font-bold text-white mb-6">Professional Journey</h2>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          Here's a detailed look at my experience — the challenges I solved,
          systems I built, and the impact delivered across teams and products.
        </p>
      </section>

      {/* VERTICAL TIMELINE */}
      <section className="relative border-l border-white/20 pl-5 sm:pl-10">

        {timeline.map((item, i) => (
          <div key={i} className="relative mb-10">

            <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40 border border-white/40 transition"></div>

            <button
              onClick={() => !isDesktop && toggle(i)}
              className="w-full text-left bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-xl p-4 flex justify-between items-center hover:bg-white/10 
                         transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              <span className="text-white text-xl">
                {isDesktop ? "" : openIndex === i ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isDesktop ? "max-h-full mt-4" : openIndex === i ? "max-h-[800px] mt-4" : "max-h-0"
              }`}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 
                              text-white/70 text-sm sm:text-base leading-relaxed">
                <ul className="space-y-2">
                  {item.details.map((d, index) => (
                    <li key={index}>• {d}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}

      </section>

      {/* EDUCATION */}
      <section className="space-y-6 mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-white">Education</h2>

        <div>
          <h3 className="text-xl font-semibold text-white">M.S. in Computer Science</h3>
          <p className="text-white/70">California State University Channel Islands, USA</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">B.E. in Computer Engineering</h3>
          <p className="text-white/70">
            Gujarat Technological University, India
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="space-y-6 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">Skills</h2>

        <div className="space-y-8">

          {/* FRONTEND ICON ROW */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-10 h-10" alt="TypeScript" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" className="w-10 h-10" alt="TailwindCSS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10" alt="HTML" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 h-10" alt="CSS" />
            </div>
          </div>

          {/* BACKEND ICON ROW */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
            <div className="flex flex-wrap gap-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" className="w-10 h-10" alt="FastAPI" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-10 h-10" alt="PostgreSQL" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-10 h-10" alt="Firebase" />
            </div>
          </div>

          {/* CLOUD & DEVOPS ICON ROW */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="w-10 h-10" alt="GCP" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-10 h-10" alt="Git" />
<img 
  src="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
  className="w-10 h-10 object-contain"
  alt="AWS"
/>              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" className="w-10 h-10" alt="Ansible" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" className="w-10 h-10" alt="Grafana" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="w-10 h-10" alt="Linux" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" className="w-10 h-10" alt="Prometheus" />
            </div>
          </div>

        </div>
      </section>

      {/* GLOWING DIVIDER */}
      <div className="w-full flex justify-center my-10">
        <div className="h-[2px] w-3/4 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"></div>
      </div>
      {/* RECRUITER CTA BOX */}
      <section className="text-center space-y-10 py-20">
        <h2 className="text-3xl font-bold text-white">Let’s Connect</h2>
        <p className="max-w-xl mx-auto text-white/60 leading-relaxed">
          Whether it's collaboration, opportunities, or just a good conversation
          feel free to reach out.
        </p>

        <div className="flex justify-center gap-10">
          <a href="mailto:pyash7621@gmail.com" className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition text-white">
            <FiMail className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/yash-prajapati-29a423187" target="_blank" className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            <FiLinkedin className="text-3xl text-blue-500" />
          </a>
          <a href="https://github.com/yash-2304" target="_blank" className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            <FiGithub className="text-3xl" />
          </a>
        </div>
      </section>

    </div>
  );
}
