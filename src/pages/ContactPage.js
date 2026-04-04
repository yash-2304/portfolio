import { useState, useEffect } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function ContactPage() {
  const timeline = [
    {
  year: "Mar 2026 — Present",
  title: "Gen AI Engineer · Saayam for All (Volunteer)",
  details: [
    "Built Gen AI features using FastAPI and PostgreSQL to improve task-to-volunteer matching efficiency and accuracy",
    "Designed a multifactor matching system using FastAPI, rate limiting, and debounced triggers to align volunteers based on skills, availability, and context",
    "Integrated AI APIs such as OpenAI into a FastAPI backend to enable real-time intelligent processing and response generation",
    "Developed backend workflows for data ingestion, processing, and decision-making, reducing processing latency",
    "Applied prompt engineering techniques to improve output relevance and contextual understanding for better recommendations",
    "Collaborated in an Agile open-source environment using Git and GitHub, contributing features and code reviews to improve release speed and code quality"
  ]
},

    {
  year: "Jan 2025 — Mar 2026",
  title: "Full Stack Developer · DXC Technology",
  details: [
    "Built React and TypeScript front-end systems handling routing, protected views, complex forms, accessibility, and cross-browser behavior",
    "Developed FastAPI services with async handlers, JWT authentication, schema-driven contracts, and logging, ensuring stable API integration",
    "Implemented automated interface checks to prevent frontend failures caused by backend changes",
    "Managed Firebase Authentication and Firestore for real-time data and secure session handling with optimized read/write patterns",
    "Improved UI performance using React Query caching, request batching, debounced triggers, and route-level code splitting",
    "Containerized services and deployed via CI/CD pipelines with smoke tests and rollback mechanisms",
    "Collaborated with product and design teams to identify edge cases early such as offline handling, retry logic, and stale data"
  ]
},
    {
  year: "Jan 2021 — Jul 2023",
  title: "Web Application Developer · Trinary Bits Technologies",
  details: [
    "Built and deployed React and TypeScript web applications with focus on UI architecture, accessibility, and production readiness",
    "Developed a reusable React component and hook library that reduced UI development time by ~30%",
    "Implemented Firebase-based architecture (Auth, Hosting, Realtime DB) for scalable user sessions and real-time data sync",
    "Built FastAPI microservices with logging, rate limiting, and OpenAPI documentation for reliable backend systems",
    "Integrated external ML APIs with retry/backoff and queue handling to prevent UI freezes and API failures",
    "Optimized frontend performance using Axios caching, deduplication, and interceptors, reducing load time by ~20–25%",
    "Refactored global state using Redux to eliminate stale data issues across navigation flows",
    "Improved performance using lazy loading, memoization, virtualization, and efficient DOM handling",
    "Collaborated with product teams to define API contracts, UI specs, and documentation reducing rework cycles"
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
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-[float2_14s_ease-in-out_infinite]"></div>
        <div className="absolute top-[30%] right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-2xl animate-[float3_18s_ease-in-out_infinite]"></div>
      </div>
      <div className="pt-10 space-y-24">
        
        {/* ABOUT ME */}
        <section className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-white/70 leading-relaxed">
            Full-stack developer specializing in building robust web platforms using React, TypeScript, FastAPI, and Firebase. Experienced in delivering scalable UI systems, backend services, and CI/CD pipelines that improve performance, reliability, and user experience.
          </p>
        </section>

        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-white mb-6">Professional Journey</h2>
          <p className="text-white/70 leading-relaxed">
            Here's a detailed look at my experience the challenges I solved,
            systems I built, and the impact delivered across teams and products.
          </p>
        </section>

        {/* VERTICAL TIMELINE */}
        <section className="max-w-5xl mx-auto px-6 relative border-l border-white/20 pl-5 sm:pl-10">

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

        {/* TECH STACK — EXPANDABLE ICON CARDS */}
        <section className="space-y-14 mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-white">Tech Stack</h2>
          <p className="text-white/60 max-w-2xl">
            Click a technology to reveal proficiency levels.
          </p>

          {/* CATEGORY WRAPPER */}
          {[
            {
              title: "Frontend",
              color: "from-blue-400 via-blue-500 to-blue-600",
              items: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 95 },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85 },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
                { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 75 },
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 95 },
              ],
            },
            {
              title: "Backend",
              color: "from-green-400 via-green-500 to-green-600",
              items: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80 },
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", level: 90 },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 85 },
                { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 70 },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 85 },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 80 },
              ],
            },
            {
              title: "Cloud & DevOps",
              color: "from-orange-400 via-orange-500 to-orange-600",
              items: [
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 70 },
                { name: "AWS", icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", level: 72 },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 75 },
                { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", level: 65 },
                { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", level: 68 },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: 70 },
              ],
            },
          ].map((category, ci) => (
            <div key={ci} className="space-y-6">
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((tech, i) => (
                  <TechCard key={i} tech={tech} color={category.color} />
                ))}
              </div>
            </div>
          ))}
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
            <a href="https://www.linkedin.com/in/yash-prajapati-29a423187" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
              <FiLinkedin className="text-3xl text-blue-500" />
            </a>
            <a href="https://github.com/yash-2304" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
              <FiGithub className="text-3xl" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

function TechCard({ tech, color }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer p-4 bg-white/5 hover:bg-white/10 transition rounded-xl border border-white/10 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
               <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span className="text-white font-medium">{tech.name}</span>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-20 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${color}`}
            style={{ width: tech.level + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
