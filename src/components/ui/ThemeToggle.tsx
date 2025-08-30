import React from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition 
        ${
          isDark
            ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
            : "border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
