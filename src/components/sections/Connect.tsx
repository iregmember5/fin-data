import React from "react";

interface ConnectProps {
  isDark: boolean;
}

const Connect: React.FC<ConnectProps> = ({ isDark }) => {
  return (
    <section
      className={`rounded-2xl border p-8 shadow-lg relative max-w-5xl mx-auto my-10 ${
        isDark ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"
      }`}
    >
      <h3 className="text-xl font-semibold">Connect</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">
        Smarter Accuracy & Seamless Reviews powered by AI.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>✅ AI-powered form recognition & one-step review</li>
        <li>✅ Automated leadsheets for K-1s & 1099s</li>
        <li>✅ Limitless AI scalability & auto data entry</li>
        <li>✅ Bank-grade security with full audit trails</li>
      </ul>
      <p className="mt-4 text-indigo-400 font-medium">
        ➡️ Reduce review time, protect client data, and simplify workflows.
      </p>
    </section>
  );
};

export default Connect;
