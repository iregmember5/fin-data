import React from "react";

const CTA: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative py-16 md:py-20 bg-[#0b0b12] overflow-hidden"
    >
      {/* Floating Gradient Orb */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/40 via-cyan-400/30 to-purple-600/40 blur-[120px] animate-pulse" />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          The Future of Tax Workflow —
          <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            powered by AI
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
          From intake to delivery, TaxPilot eliminates tedious tasks while
          keeping your client data safe with industry-leading security...
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition">
            Get Started
          </button>
          <button className="bg-transparent hover:bg-gray-700 text-white font-bold py-3 px-6 border border-white/40 rounded-lg transition">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
