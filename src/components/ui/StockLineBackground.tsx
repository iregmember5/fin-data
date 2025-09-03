import React from "react";
import { motion } from "framer-motion";

const StockLineBackground: React.FC = () => {
  return (
    <div className="relative mt-16">
      <svg
        width="100%"
        height="300"
        viewBox="0 0 1200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
        preserveAspectRatio="none"
      >
        {/* Animated glowing stock line */}
        <motion.path
          d="M0 220 
            C150 150, 250 180, 350 120 
            C450 80, 550 160, 650 100
            C750 60, 850 140, 950 90
            C1050 50, 1150 130, 1200 80"
          fill="none"
          stroke="url(#purpleGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, filter: "url(#glowAbove)" }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          filter="url(#glowAbove)"
          markerEnd="url(#arrowhead)"
        />

        {/* Pulsing dots */}
        {[
          { cx: 150, cy: 150 },
          { cx: 250, cy: 180 },
          { cx: 350, cy: 120 },
          { cx: 450, cy: 80 },
          { cx: 550, cy: 160 },
          { cx: 650, cy: 100 },
          { cx: 750, cy: 60 },
          { cx: 850, cy: 140 },
          { cx: 950, cy: 90 },
          { cx: 1150, cy: 130 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="5"
            fill="#a855f7"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: 1 }}
            transition={{
              delay: 1.5 + i * 0.1,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            filter="url(#dotGlow)"
          />
        ))}

        <defs>
          {/* Purple gradient */}
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>

          {/* Arrowhead */}
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L6,3 Z" fill="#a855f7" />
          </marker>

          {/* Glow above the line */}
          <filter id="glowAbove" x="-50%" y="-200%" width="200%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feOffset in="blur" dx="0" dy="-10" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow for dots */}
          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default StockLineBackground;
