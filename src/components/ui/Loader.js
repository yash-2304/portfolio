import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0f24]/80 backdrop-blur-md z-[9999]">
      <div className="relative w-24 h-24">
        {/* Outer Glow Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping"></div>

        {/* Spinning Gradient Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-purple-400 animate-spin"></div>

        {/* Center Glow Orb */}
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-[0_0_25px_#6c63ff] animate-pulse"></div>
      </div>
    </div>
  );
}
