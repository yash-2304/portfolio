import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
export default function ContactPage() {
  return (
    <div className="space-y-16 pt-10">
      {/* ABOUT ME */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="text-white-700 leading-relaxed">
          I’m Yash Prajapati — a Full Stack Engineer with nearly 4 years of
          hands-on experience building production-ready applications using
          React, TypeScript, Python (FastAPI), Firebase, and modern deployment
          tooling. I specialize in secure authentication flows, high-performance
          UI, real-time data systems, and stable API integrations. I’m known for
          catching edge cases early, simplifying complex UI logic, and shipping
          features that stay stable across browsers and devices.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Professional Experience
        </h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Full Stack Developer — DXC Technology (USA)
          </h3>
          <p className="text-white-700">
            Building React + TypeScript front-end flows with protected routing,
            complex forms, accessibility, error boundaries, and smooth UX.
            Developing FastAPI microservices with async handlers, JWT auth,
            schema-driven API contracts, and deployment through CI/CD pipelines.
            Integrating Firebase Auth + Firestore for real-time data and session
            control.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Web Application Developer — Trinary Bits (India)
          </h3>
          <p className="text-white-700">
            Delivered production-grade React apps, built reusable component
            systems, improved performance with memoization, lazy loading,
            caching, and API optimization. Created FastAPI services, implemented
            ML API integrations, and set up Firebase-based user authentication
            and hosting.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Education</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">M.S. in Computer Science</h3>
          <p className="text-white-700">
            California State University Channel Islands, USA
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            B.E. in Computer Engineering
          </h3>
          <p className="text-white-700">
            Gujarat Technological University, India
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Skills</h2>
        <ul className="space-y-4 text-white-700">
          <li>
            <strong>Core Skills:</strong> React.js, TypeScript, JavaScript
            (ES6+), FastAPI, Firebase Auth & Firestore, PostgreSQL, REST APIs,
            CI/CD, TailwindCSS.
          </li>

          <li>
            <strong>Frontend Strengths:</strong> Component-driven design,
            routing, protected routes, state management, form handling,
            accessibility, performance optimization, and reusable UI systems.
          </li>

          <li>
            <strong>Backend Skills:</strong> Python FastAPI microservices, JWT
            authentication, async handlers, schema-based API contracts, database
            modeling, and optimized queries.
          </li>

          <li>
            <strong>Achievements:</strong> Delivered multiple production-ready
            apps, contributed to open-source (Saayam-for-all), fixed complex UI
            bugs, improved app performance, built secure authentication flows,
            and implemented smooth developer-friendly APIs.
          </li>
        </ul>
      </section>

      {/* CONTACT – MINIMAL ICON STYLE */}
      <section className="py-16 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>

        <p className="max-w-xl mx-auto text-white-600">
          Let’s connect. I’m open to opportunities, collaborations, and
          interesting conversations.
        </p>

        <div className="flex justify-center gap-10">
          {/* EMAIL */}
          <a
            href="mailto:pyash7621@gmail.com"
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-1 text-blue-300"
          >
            <FiMail className="text-3xl text-white-800" />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/yash-prajapati-29a423187"
            target="_blank"
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-1 text-blue-300"
          >
            <FiLinkedin className="text-3xl text-blue-600" />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/yash-2304"
            target="_blank"
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-1 text-blue-300"
          >
            <FiGithub className="text-3xl text-white-900" />
          </a>
        </div>
      </section>
    </div>
  );
}
