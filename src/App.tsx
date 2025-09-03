
import React, { useState } from "react";
import Home from "./pages/Home";

const App: React.FC = () => {
  // Track theme state (light/dark)
  const [isDark, setIsDark] = useState(false);

   const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 selection:bg-fuchsia-500/40 selection:text-white ${
        isDark ? "bg-[#0b0b12] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Radial Glow */}
        <div
          className={`absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full ${
            isDark
              ? "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.25),rgba(0,0,0,0))]"
              : "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.15),rgba(255,255,255,0))]"
          }`}
        />

        {/* Left Cyan Blur */}
        <div
          className={`absolute left-[-10%] top-1/3 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
          }`}
        />

        {/* Right Fuchsia Blur */}
        <div
          className={`absolute right-[-10%] top-1/4 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-fuchsia-500/10" : "bg-fuchsia-500/5"
          }`}
        />
      </div>

      {/* Navbar / Header */}
      {/* Add Navbar here if needed */}

      {/* Main Content */}
      <main>
        <Home isDark={isDark} toggleTheme={toggleTheme}/>
      </main>
    </div>
  );
};

export default App;
