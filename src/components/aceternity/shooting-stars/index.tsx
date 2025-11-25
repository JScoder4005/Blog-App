"use client";

import { useEffect, useRef } from "react";

export function ShootingStars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const generateStar = () => {
      const star = document.createElement("div");
      star.className =
        "shooting-star absolute top-[-10px] w-[2px] h-[80px] bg-white opacity-70 rotate-[45deg]";
      star.style.left = Math.random() * container.clientWidth + "px";
      star.style.animationDuration = 0.7 + Math.random() * 0.3 + "s";

      container.appendChild(star);

      setTimeout(() => star.remove(), 1500);
    };

    const interval = setInterval(generateStar, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Tailwind classes for stars animation */}
      <style>{`
        .shooting-star {
          animation: shooting 1s linear forwards;
        }

        @keyframes shooting {
          0% {
            transform: translateY(0) translateX(0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(400px) translateX(200px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
