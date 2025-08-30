import React from "react";

interface AssembleProps {
  isDark: boolean;
}

const Assemble: React.FC<AssembleProps> = ({ isDark }) => {
  return (
    <section
      className={`rounded-2xl border p-8 shadow-lg relative max-w-5xl mx-auto my-10 ${
        isDark ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"
      }`}
    >
      <h3 className="text-xl font-semibold">Assemble</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">
        Simplify Tax Document Assembly with TaxPilot. Take the manual work out
        of tax prep with AI-powered automation.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>✅ Quick Integration with CCH, UltraTax, Lacerte, Drake & more</li>
        <li>✅ AI-Generated Checklists from prior-year data</li>
        <li>✅ Personalized Questionnaires for 1040, 1065, 1120, 1120S</li>
      </ul>
      <p className="mt-4 text-fuchsia-400 font-medium">
        ➡️ Save hours in prep time, reduce errors, and streamline tax assembly.
      </p>
    </section>
  );
};

export default Assemble;
