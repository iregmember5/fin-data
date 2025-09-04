import { CalendarCheck, RollerCoaster, Share2, Wallet } from "lucide-react";
import React from "react";

interface FirstSectionProps {
  isDark: boolean;
  id?: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({ isDark, id }) => {
  return (
    <div
      id={id}
      className={`min-h-screen p-10 ${
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
              Beyond Tax Prep
            </span>
          </h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            From Yearly Engagements to Continuous Value
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Monthly Recurring Service",
              subtitle: "Convert yearly tax engagements into steady monthly services.",
              Question: "Why it matters:",
              point1: "Add compliance & implementation",
              point2: "Turn one-time projects into recurring revenue",
              point3: "Build long-term client relationships",
              footer: "👉 “Turn compliance into continuous value.”",
              icon: <CalendarCheck/>,
            },
            {
              title: "Implement Tax Plans",
              subtitle: "Go beyond “just paperwork” — deliver real, actionable results.",
              Question: "What you provide:",
              point1: "Actively implement tax strategies",
              point2: "Differentiate from other tax planners",
              point3: "Help clients save more & grow faster",
              footer: "👉 “Be the advisor clients rely on all year.”",
              icon: <RollerCoaster/>,
            },
            {
              title: "Data Wallets",
              subtitle: "You already hold your clients’ valuable data—unlock its potential.",
              Question: "With Data Wallets:",
              point1: "Securely store & manage data",
              point2: "Support mortgages, insurance & financial planning",
              point3: "Create a one-stop hub for clients’ needs",
              footer: "👉 “Unlock client data for smarter planning.”",
              icon: <Wallet/>,
            },
            {
             title: "Advisor Network",
              subtitle: "Expand your impact by partnering with trusted professionals.",
              Question: "How you help clients:",
              point1: "Collaborate with mortgage agents, brokers & attorneys",
              point2: "Automate loan packages & insurance quotes",
              point3: "Cut costs with seamless planning",
              footer: "👉 “Collaborate to deliver more value.”",
              icon: <Share2/>,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`relative border rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm  shadow-lg ${
                isDark
                  ? "bg-gray-800 hover:shadow-purple-500/20"
                  : "bg-gray-100 hover:shadow-purple-300/20 border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <h6 className="text-md  mb-2">{feature.subtitle}</h6>
              <p className="text-sm font-semibold mb-2">{feature.Question}</p>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {feature.point1}
              </p>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {feature.point2}
              </p>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {feature.point3}
              </p>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {feature.footer}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className={`text-2xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>
            Become the advisor who helps clients grow,{" "}
            <span className={isDark ? "text-purple-300" : "text-purple-500"}>
              not just file
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;