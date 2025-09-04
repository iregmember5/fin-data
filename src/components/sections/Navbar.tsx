import React from "react";
import { Moon, Rocket, Sun } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">myfindata</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {[
            ["Home", "hero"],
            ["Features", "first"],
            // ["Features", "second"],
            ["Process", "process"],
            ["Products", "products"],
            ["Security", "security"],
            ["CTA", "cta"],
          ].map(([label, target]) => (
            <ScrollLink
              key={label}
              to={target}
              smooth={true}
              duration={600}
              offset={-80} // offset for navbar height
              className={`cursor-pointer text-sm transition-colors ${
                isDark
                  ? "text-white/70 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
            </ScrollLink>
          ))}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                : "bg-gray-200 hover:bg-gray-300 text-indigo-700"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {/* <button className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-indigo-700 hover:bg-white/90 transition-colors">
            Get Started
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
