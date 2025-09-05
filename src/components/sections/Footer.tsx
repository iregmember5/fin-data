import React from "react";

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-10">
      <div
        className={`flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row ${
          isDark
            ? "border-white/10 text-white/60"
            : "border-gray-200 text-gray-700"
        }`}
      >
        <p>© {new Date().getFullYear()} myfindata All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className={`transition-colors ${
              isDark ? "hover:text-white" : "hover:text-gray-900"
            }`}
          >
            Privac
          </a>
          <a
            href="#"
            className={`transition-colors ${
              isDark ? "hover:text-white" : "hover:text-gray-900"
            }`}
          >
            Terms
          </a>
          <a
            href="#"
            className={`transition-colors ${
              isDark ? "hover:text-white" : "hover:text-gray-900"
            }`}
          >
            Status
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
