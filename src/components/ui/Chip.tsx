import React from "react";

interface ChipProps {
  children: React.ReactNode;
  isDark?: boolean;
}

const Chip: React.FC<ChipProps> = ({ children, isDark }) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide ${
        isDark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
};

export default Chip;
