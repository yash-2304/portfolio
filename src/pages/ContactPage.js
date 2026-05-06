import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function ContactPage() {
  const timeline = [
    {
  year: "Mar 2026 — Present",
  title: "Gen AI Engineer · Saayam for All (Volunteer)",
  details: [
    "Architected an AI-driven matching engine using FastAPI and PostgreSQL that automated the connection between 100+ volunteers and urgent community tasks; reduced manual coordination overhead and ensured critical help reached recipients 40% faster.",
    "Engineered a high-precision volunteer matching system using FastAPI and debounced triggers to eliminate redundant processing; improved the user experience by providing instant, context-aware task alignments that increased volunteer engagement and system reliability.",
    "Deployed real-time intelligent processing by integrating OpenAI APIs into a Python/FastAPI backend; engineered robust error-handling and queued request logic to ensure 99.9% uptime and consistent response delivery during high-traffic volunteer surges.",
    "Architected end-to-end data pipelines using PostgreSQL and automated CI/CD release workflows to manage the full lifecycle of data ingestion and decision-making; optimized database query paths to slash processing latency and improve system-wide data reliability.",
    "Refined AI output quality through strategic prompt engineering, ensuring volunteer recommendations were contextually accurate and aligned with organizational needs.",
    "Accelerated release cycles by leading peer code reviews in GitHub and coordinating with a distributed team to enforce code standards, using React Query and Firebase Firestore to streamline client-server data flow, which kept project momentum steady"
  ]
},

    {
  year: "Jan 2025 — Mar 2026",
  title: "Full Stack Developer · DXC Technology",
  details: [
    "Architected end-to-end features using React (TypeScript) and FastAPI, managing the full data lifecycle from complex front-end form logic to secure, schema-driven backend handlers, which accelerated feature delivery and improved data consistency",
    "Eliminated 'silent API failures' and reduced integration friction by implementing automated interface contract checks (Pydantic/OpenAPI), ensuring seamless synchronization between front-end and back-end teams.",
    "Optimized application performance and reduced visible loading stalls by 20%+ through React Query caching, request batching, and route-level code splitting, making transitions feel instant for the end user.",
    "Engineered cost-efficient data architectures using Firebase and Firestore, designing high-speed read/write paths that maintained sub-second latency under continuous updates without increasing operational overhead.",
    "Partnered with Product and Design teams to identify edge cases-including offline access and stale data handling-before development began, reducing QA 'bounce-backs' and ensuring a smoother path to production.",
    "Hardened deployment reliability by containerizing services with Docker and engineering CI/CD pipelines featuring automated smoke checks and rollback procedures to ensure zero disruption for active user sessions.",
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

  const [activeItem, setActiveItem] = useState(null);


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
                onClick={() => setActiveItem(item)}
                className="w-full text-left bg-white/5 backdrop-blur-xl border border-white/10 
                           rounded-xl p-4 flex justify-between items-center hover:bg-white/10 
                           transition cursor-pointer"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.year}</p>
                </div>
              </button>

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

      {activeItem && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-xl pt-12 px-6 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="sticky top-0 ml-auto text-white bg-black/60 rounded-full w-8 h-8 flex items-center justify-center z-50"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-2">{activeItem.title}</h3>
            <p className="text-white/50 mb-4">{activeItem.year}</p>

            <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
              {activeItem.details.map((d, i) => (
                <li key={i}>• {d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
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
