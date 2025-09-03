import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Animated gradient circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Cracked mirror SVG overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="crackedMirror"
            patternUnits="userSpaceOnUse"
            width="200"
            height="200"
          >
            <rect
              width="200"
              height="200"
              fill="url(#mirrorGradient)"
              opacity="0.1"
            />
            <path
              d="M20,50 Q60,80 120,45 T180,70"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M10,120 Q80,100 140,130 T200,110"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M50,10 Q80,60 110,30 T150,80"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M80,150 Q120,120 160,165 T200,140"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M0,80 Q40,50 90,85 T160,60"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M30,30 L45,50"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M150,20 L170,40"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.6"
              fill="none"
            />
            <path
              d="M60,180 L80,160"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.4"
              fill="none"
            />
            <path
              d="M180,180 L160,160"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>

          <linearGradient
            id="mirrorGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#crackedMirror)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
