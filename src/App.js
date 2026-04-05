import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 80 + Math.random() * 80);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const crtStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 50,
    background: `
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.15) 0px,
        rgba(255,255,255,0.15) 1px,
        transparent 1px,
        transparent 2px
      ),
      repeating-linear-gradient(
        to right,
        rgba(255,255,255,0.10) 0px,
        rgba(255,255,255,0.10) 1px,
        transparent 1px,
        transparent 3px
      ),
      radial-gradient(circle at center, rgba(255,255,255,0.18), transparent 70%)
    `,
    mixBlendMode: "overlay",
    opacity: 1,
    filter: "none",
    transition: "all 0.05s ease",
  };

  const flashStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 60,
    background: "white",
    opacity: flicker ? 0.08 : 0,
    transition: "opacity 0.08s ease"
  };

  return (
    <>
      <div style={crtStyle}></div>
      <div style={flashStyle}></div>
      <div className="relative z-10">
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}