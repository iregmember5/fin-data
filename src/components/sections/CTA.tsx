import React from "react";

const CTA: React.FC<{isDark: boolean, id?: string }> = ({isDark, id }) => {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-20 overflow-hidden ${
        isDark ? "bg-[#0b0b12]" : "bg-gradient-to-br from-blue-50 to-purple-50"
      }`}
    >
      {/* Floating Gradient Orb */}
      <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse ${
        isDark 
          ? "bg-gradient-to-r from-purple-500/40 via-cyan-400/30 to-purple-600/40" 
          : "bg-gradient-to-r from-purple-300/30 via-cyan-300/20 to-purple-400/30"
      }`} />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        {/* Headline */}
        <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          isDark ? "text-white" : "text-gray-800"
        }`}>
          The Future of Tax Workflow —
          <span className={`font-semibold bg-gradient-to-r bg-clip-text text-transparent ${
            isDark 
              ? "from-cyan-400 to-purple-400" 
              : "from-cyan-600 to-purple-600"
          }`}>
            powered by AI
          </span>
        </h2>

        {/* Subtext */}
        <p className={`text-base md:text-lg max-w-2xl mx-auto mb-8 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}>
          From intake to delivery, TaxPilot eliminates tedious tasks while
          keeping your client data safe with industry-leading security.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className={`font-bold py-3 px-6 rounded-lg shadow-md transition ${
            isDark
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}>
            Get Started
          </button>
          <button className={`font-bold py-3 px-6 border rounded-lg transition ${
            isDark
              ? "bg-transparent hover:bg-gray-700 text-white border-white/40"
              : "bg-transparent hover:bg-purple-100 text-purple-700 border-purple-400/60"
          }`}>
            Talk to Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;