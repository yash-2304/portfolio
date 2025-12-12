import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/70 border-b border-gray-200 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-black"
        >
          Yash Prajapati
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-black" : "text-gray-500"} hover:text-black`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${isActive ? "text-black" : "text-gray-500"} hover:text-black`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-black" : "text-gray-500"} hover:text-black`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}
