import { Lock, Repeat, Skull, Zap } from "lucide-react";
import React from "react";

interface SecondSectionProps {
  isDark: boolean;
  id?: string;
}

const SecondSection: React.FC<SecondSectionProps> = ({ isDark, id }) => {
  return (
    <div
      id={id}
      className={`min-h-screen p-10  ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-purple-900/20 text-white"
          : "bg-gradient-to-b from-gray-100 to-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className={isDark ? "text-purple-500" : "text-purple-600"}>
              myfindata
            </span>
          </h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
           Built for forward thinking and proactive tax professionals....
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "AI powered Workflow",
              description: "Use the power of multiple platforms",
              icon: <Repeat/>,
            },
            {
              title: "AI at Every Step",
              description:
                "Efficient gathering of tax & financial artifacts.",
              icon: <Skull/>,
            },
            {
              title: "Faster Onboarding",
              description: "Integrates with your tax software in minutes",
              icon: <Zap/>,
            },
            {
              title: "Client-First Design",
              description: "Simple, secure experience for every taxpayer",
              icon: <Lock/>,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={` relative border rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm  shadow-lg  ${
                isDark
                  ? "bg-gray-800 hover:shadow-purple-500/20"
                  : "bg-white hover:shadow-purple-300/20 border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className={`text-2xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>
            myfindata isn't just software — it's your firm's{" "}
            <span className={isDark ? "text-purple-300" : "text-purple-500"}>
              AI-powered copilot
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;