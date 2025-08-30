import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  isDark?: boolean;
  children?: React.ReactNode; // for icons or extra content
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  isDark,
  children,
}) => {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-md transition hover:shadow-lg ${
        isDark
          ? "border-white/10 bg-white/5 text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      {children && <div className="mb-3">{children}</div>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{description}</p>
    </div>
  );
};

export default FeatureCard;
