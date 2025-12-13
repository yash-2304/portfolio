import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";
import React from "react";
import BinaryBackground from "../components/ui/BinaryBackground";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* GLOBAL FLOATING BACKGROUND (covers every page) */}
      

      {/* CONTENT ABOVE THE BACKGROUND */}
      <div className="relative z-10">
        <Navbar />
<BinaryBackground />
      <main className="relative pt-24 pb-16 bg-theme text-white min-h-screen">
  <div className="relative z-20 max-w-6xl mx-auto px-6">
    <Outlet />
  </div>
</main>

        <Footer />
      </div>
    </div>
  );
}