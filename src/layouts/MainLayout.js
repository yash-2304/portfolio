import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-theme text-white">
        {/* Floating Tech Bubbles Background */}
        <div className="bubble-bg absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Example bubble icons */}
          <img src="/react-logo.png" className="bubble bubble-1" alt="" />
          <img src="/js-logo.png" className="bubble bubble-2" alt="" />
          <img src="/ts-logo.png" className="bubble bubble-3" alt="" />
          <img src="/node-logo.png" className="bubble bubble-4" alt="" />
          <img src="/python-logo.png" className="bubble bubble-5" alt="" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
