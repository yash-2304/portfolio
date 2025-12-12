import { motion } from "framer-motion";

const projects = [
  {
    title: "The News App",
    description:
      "A React-based web application that displays real-time news using the NewsAPI service.",
    tags: ["React", "JavaScript", "API"],
    url: "https://github.com/yash-2304/The-News-App",
  },
  {
    title: "Crypto Transaction Web App",
    description:
      "A simple crypto transaction viewer that fetches live cryptocurrency prices using CoinGecko APIs.",
    tags: ["JavaScript", "API", "Web"],
    url: "https://github.com/yash-2304/-Crypto-Transaction-Web-App",
  },
  {
    title: "Breast Cancer Detection (ML/DL)",
    description:
      "Machine Learning & Deep Learning models built for early-stage breast cancer detection using medical datasets.",
    tags: ["Machine Learning", "Python", "Deep Learning"],
    url: "https://github.com/yash-2304/Breast-Cancer-Detection-using-Machine-Learning-and-Deep-Learning",
  },
  {
    title: "Car Parts Inventory System",
    description:
      "An order management and inventory control system created for managing car parts stock using database operations.",
    tags: ["JavaScript", "SQL", "Backend"],
    url: "https://github.com/yash-2304/Car-Parts-Inventory-Order-Management-System",
  },
  {
    title: "Infrastructure Automation & Monitoring",
    description:
      "Automated IT infrastructure monitoring stack using Ansible, Prometheus, and Grafana dashboards.",
    tags: ["DevOps", "Ansible", "Prometheus", "Grafana"],
    url: "https://github.com/yash-2304/Infrastructure-Automation-Monitoring-with-Ansible-Prometheus-and-Grafana",
  },
  {
    title: "Automated Canteen Ordering System",
    description:
      "Python Flask-based web application for automating a canteen order workflow with a simple UI.",
    tags: ["Flask", "Python", "Web App"],
    url: "https://github.com/yash-2304/Automated-Canteen-Ordering-System",
  },
];

const techIcons = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  
  // Better API icon
  "API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",

  "Web": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

  "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

  "Deep Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",

  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Backend": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

  // Use Docker for DevOps
  "DevOps": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

  "Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  "Prometheus": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  "Grafana": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",

  // Flask (SimpleIcons)
  "Flask": "https://cdn.simpleicons.org/flask/FFFFFF",

  "Web App": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
};

export default function Projects() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-white mb-12 tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
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
              onClick={() => window.open(project.url, "_blank")}
              className="relative cursor-pointer p-6 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/20 overflow-hidden
shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_45px_rgba(99,102,241,0.8)] transition-all duration-700

before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 
before:bg-[length:300%_300%] before:animate-gradient-x before:opacity-40

after:absolute after:-inset-20 after:bg-gradient-to-br after:from-white/40 after:to-white/0 after:rotate-45 after:blur-2xl 
after:opacity-0 hover:after:opacity-40 after:transition-all after:duration-700

hover:scale-[1.06] hover:-translate-y-2"
            >
              
              <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <img
                    key={tag}
                    src={techIcons[tag]}
                    alt={tag}
                    className="w-8 h-8 rounded-md bg-white/10 p-1 border border-white/20 backdrop-blur-md shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                  />
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}