import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [hoverX, setHoverX] = useState(null);
  const [activeX, setActiveX] = useState(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const activeIndex = ["", "/", "/projects", "/contact"].indexOf(
      location.pathname === "/" ? "/" : location.pathname
    );

    if (linksRef.current[activeIndex]) {
      const rect = linksRef.current[activeIndex].getBoundingClientRect();
      setActiveX({ left: rect.left, width: rect.width });
    }
  }, [location.pathname]);

  const handleHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    setHoverX({ left: rect.left, width: rect.width });
  };

  const clearHover = () => setHoverX(null);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/60 border-b border-gray-300 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO WITH FADE + GLOW */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-black hover:text-blue-700 transition"
          >
            Yash Prajapati
          </Link>
        </motion.div>

        {/* NAV ITEMS */}
        <div
          className="relative flex gap-8 text-sm font-medium"
          onMouseLeave={clearHover}
        >
          {/* Sliding underline (active) */}
          <AnimatePresence>
            {activeX && (
              <motion.div
                className="absolute bottom-0 h-[2px] bg-black rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  left: activeX.left - linksRef.current[0]?.getBoundingClientRect().left,
                  width: activeX.width,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            )}
          </AnimatePresence>

          {/* Magnetic Hover underline */}
          <AnimatePresence>
            {hoverX && (
              <motion.div
                className="absolute bottom-0 h-[2px] bg-blue-500 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  left: hoverX.left - linksRef.current[0]?.getBoundingClientRect().left,
                  width: hoverX.width,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.20 }}
              />
            )}
          </AnimatePresence>

          {["Home", "Projects", "Contact"].map((label, i) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
              <NavLink
                key={label}
                to={path}
                ref={(el) => (linksRef.current[i] = el)}
                onMouseEnter={handleHover}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-600"} hover:text-black transition`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
