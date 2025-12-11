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

export default function Projects() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-black mb-12 tracking-tight"
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
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => window.open(project.url, "_blank")}
              className="cursor-pointer bg-[#f5f5f7] p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-[#e5e5e5]"
            >
              
              <h3 className="text-xl font-semibold text-black">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-black bg-white px-3 py-1 rounded-full border border-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}