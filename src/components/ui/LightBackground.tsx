import React from "react";

interface LightBackgroundProps {
  children: React.ReactNode;
}

export const LightBackground: React.FC<LightBackgroundProps> = ({ children }) => {
  // Light mode background pattern
  const LightPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="lightGrid"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="rgba(200, 180, 255, 0.1)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lightGrid)" />
    </svg>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <LightPattern />
      
      {/* Content */}
      <div className="relative z-10 text-gray-800">
        {children}
      </div>
    </div>
  );
};