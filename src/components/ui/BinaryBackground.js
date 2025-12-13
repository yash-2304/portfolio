import React, { useEffect } from "react";
import "./BinaryBackground.css";

export default function BinaryBackground() {
  useEffect(() => {
    const chars = document.querySelectorAll(".binary-char");

    const onMove = (e) => {
      chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          char.style.transform = `translate(${Math.cos(angle) * -20}px, ${
            Math.sin(angle) * -20
          }px)`;
        } else {
          char.style.transform = "";
        }
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

const items = Array.from({ length: 40 }).map((_, i) => {
  const style = {
    "--rand-top": Math.random(),
    "--rand-left": Math.random(),
  };

  return (
    <div key={i} className="binary-char" style={style}>
      {Math.random() > 0.5 ? "1" : "0"}
    </div>
  );
});

  return (
    <div
      className="binary-bg-container"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {items}
    </div>
  );
}