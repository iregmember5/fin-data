import React, { useState } from "react";
import { Moon, Rocket, Sun, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    ["Home", "hero"],
    ["Features", "first"],
    ["How It Works", "process"],
    ["Products", "products"],
    ["Security", "security"],
    ["Apply for Early Access", "cta"],
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg ${
        isDark 
          ? "bg-black/40 border-white/10" 
          : "bg-white/90 border-gray-200/50"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
              <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className={`text-base sm:text-lg font-bold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              myfindata
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, target]) => (
              <ScrollLink
                key={label}
                to={target}
                smooth={true}
                duration={600}
                offset={-80}
                className={`cursor-pointer text-sm font-medium transition-colors ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-800 hover:text-purple-600"
                }`}
              >
                {label}
              </ScrollLink>
            ))}
          </nav>

          {/* Right-side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Menu size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      } ${
        isDark 
          ? "bg-gray-900/95 border-l border-gray-700/50" 
          : "bg-white/95 border-l border-gray-200/50"
      } backdrop-blur-md shadow-2xl`}>
        
        {/* Mobile Menu Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          isDark ? "border-gray-700/50" : "border-gray-200/50"
        }`}>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className={`text-base font-bold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              myfindata
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
          >
            <X size={18} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col p-4 space-y-1">
          {navItems.map(([label, target]) => (
            <ScrollLink
              key={label}
              to={target}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={closeMobileMenu}
              className={`cursor-pointer px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              }`}
            >
              {label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t ${
          isDark ? "border-gray-700/50" : "border-gray-200/50"
        }`}>
          <div className={`text-xs text-center ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>
            © 2024 myfindata
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;