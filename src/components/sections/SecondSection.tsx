import React from "react";

const SecondSection: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/20 text-white p-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-purple-500">TaxPilot</span>
          </h1>
          <p className="text-xl text-gray-300">
            Built for Modern Accounting Firms
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "All-in-One Workflow",
              description: "No juggling multiple platforms",
              icon: "🔄",
            },
            {
              title: "AI at Every Step",
              description:
                "From intake to delivery, AI handles the repetitive work",
              icon: "🤖",
            },
            {
              title: "Faster Onboarding",
              description: "Integrates with your tax software in minutes",
              icon: "⚡",
            },
            {
              title: "Client-First Design",
              description: "Simple, secure experience for every taxpayer",
              icon: "🔒",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-400">
            TaxPilot isn’t just software — it’s your firm’s{" "}
            <span className="text-purple-300">AI-powered copilot</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
