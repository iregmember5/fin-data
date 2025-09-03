import React from "react";
import {
  CheckCircle,
  Upload,
  Link,
  BicepsFlexed,
  Wallet,
  LockKeyholeOpen,
} from "lucide-react";

interface StepProps {
  isDark: boolean;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepProps> = ({
  isDark,
  number,
  title,
  description,
  icon,
}) => (
  <div
    className={`group relative border rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm ${
      isDark
        ? "bg-gradient-to-br from-purple-900/20 via-black/30 to-purple-800/10 border-purple-500/20 hover:border-purple-400/40"
        : "bg-white/90 border-purple-200/50 hover:border-purple-300/70 shadow-lg hover:shadow-purple-200/30"
    }`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDark
          ? "from-purple-600/5 to-transparent"
          : "from-purple-100/30 to-transparent"
      }`}
    ></div>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg ${
            isDark
              ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-600/25"
              : "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-400/30"
          }`}
        >
          {number}
        </div>
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-br from-purple-500/20 to-purple-700/20 text-purple-400 group-hover:text-purple-300"
              : "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 group-hover:text-purple-700"
          }`}
        >
          {icon}
        </div>
      </div>

      <h3
        className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
          isDark
            ? "text-white group-hover:text-purple-200"
            : "text-gray-800 group-hover:text-purple-700"
        }`}
      >
        {title}
      </h3>

      <p
        className={`leading-relaxed transition-colors duration-300 ${
          isDark
            ? "text-gray-300 group-hover:text-gray-200"
            : "text-gray-600 group-hover:text-gray-700"
        }`}
      >
        {description}
      </p>
    </div>

    <div
      className={`absolute bottom-0 left-0 w-full h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
        isDark
          ? "bg-gradient-to-r from-purple-600 to-purple-800"
          : "bg-gradient-to-r from-purple-400 to-purple-600"
      }`}
    ></div>
  </div>
);

const ProcessSection: React.FC<{ isDark: boolean; id?: string }> = ({
  isDark,
  id,
}) => {
  const steps = [
    {
      number: "01",
      title: "Assemble",
      description:
        "Collect, organize, and request only the documents you need with smart checklists and intelligent questionnaires.",
      icon: <CheckCircle size={24} />,
    },
    {
      number: "02",
      title: "Deliver",
      description:
        "Automate return delivery with seamless payments, e-signatures, and instant portal uploads.",
      icon: <Upload size={24} />,
    },
    {
      number: "03",
      title: "Prep",
      description:
        "AI powered preparation ( tax data entry ) backed with real humans.",
      icon: <Link size={24} />,
    },
    {
      number: "04",
      title: "Tax Plan Implementation",
      description:
        "From Strategy to Execution — Flawless Tax Plan Implementation You Can Trust.",
      icon: <BicepsFlexed size={24} />,
    },
    {
      number: "05",
      title: "Data Wallets for Family Office",
      description:
        "AI powered preparation ( tax data entry ) backed with real humans.",
      icon: <Wallet size={24} />,
    },
    {
      number: "06",
      title: "Mastermind & Collaborate with Other Advisors",
      description: "Unlock New Value with Advisor Collaboration",
      icon: <LockKeyholeOpen size={24} />,
    },
  ];

  return (
    <section id={id} className="min-h-screen relative py-20 px-6">
      {/* Background */}
      <div
        className={`absolute inset-0 [background-size:24px_24px] ${
          isDark
            ? "bg-black/80 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,_transparent_1px)]"
            : " from-blue-50/30 via-purple-50/30 to-cyan-50/30 bg-[radial-gradient(circle,_rgba(200,200,255,0.1)_1px,_transparent_1px)]"
        }`}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span
              className={`text-sm font-semibold px-4 py-2 rounded-full border ${
                isDark
                  ? "text-purple-400 bg-purple-500/10 border-purple-500/20"
                  : "text-purple-600 bg-purple-100 border-purple-200/50"
              }`}
            >
              HOW IT WORKS
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-black bg-clip-text mb-6 tracking-tight ${
              isDark
                ? "text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400"
                : "text-transparent bg-gradient-to-r from-gray-800 via-purple-600 to-purple-700"
            }`}
          >
            Tax Pro Power Punches
          </h2>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Streamline your workflow with our intelligent platform
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <StepCard isDark={isDark} {...step} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div
            className={`inline-flex items-center gap-4 p-1 rounded-2xl shadow-2xl ${
              isDark
                ? "bg-gradient-to-r from-purple-600 to-purple-800 shadow-purple-600/25"
                : "bg-gradient-to-r from-purple-500 to-purple-700 shadow-purple-400/30"
            }`}
          >
            <div
              className={`backdrop-blur-sm rounded-xl px-8 py-4 ${
                isDark ? "bg-black/20" : "bg-white/20"
              }`}
            >
              <p
                className={`text-xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Multiple steps. One platform.
              </p>
              <p
                className={`text-lg ${
                  isDark ? "text-purple-200" : "text-purple-100"
                }`}
              >
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Zero
                </span>{" "}
                wasted time.
              </p>
            </div>
            <div className="pr-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isDark ? "bg-white/10" : "bg-white/30"
                }`}
              >
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProcessSection;