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
  number,
  title,
  description,
  icon,
  isDark,
}) => (
  <div
    className="group relative bg-gradient-to-br from-purple-900/20 via-black/30 to-purple-800/10 border border-purple-500/20 
  rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-600/25">
          {number}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </div>
);

const ProcessSection: React.FC<{ isDark: boolean, id?: string }> = ({isDark, id }) => {
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
      title: "Tax Pro Power Punches",
      description:
        "From Strategy to Execution — Flawless Tax Plan Implementation You Can Trust.”",
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
      description: " Unlock New Value with Advisor Collaboration",
      icon: <LockKeyholeOpen size={24} />,
    },
  ];

  return (
    <section id={id} className="min-h-screen relative py-20 px-6">
      {/* Dotted Background */}
      <div className={`absolute inset-0 bg-black/75 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,_transparent_1px)] [background-size:24px_24px] ${
        isDark ? "bg-black/80" : "bg-gray-50"
      }`}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text mb-6 tracking-tight">
            Tax Pro power Punches
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Streamline your workflow with our intelligent platform
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <StepCard isDark {...step} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-purple-800 p-1 rounded-2xl shadow-2xl shadow-purple-600/25">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl px-8 py-4">
              <p className="text-xl font-bold text-white mb-2">
                Multiple steps. One platform.
              </p>
              <p className="text-purple-200 text-lg">
                <span className="font-semibold text-white">Zero</span> wasted
                time.
              </p>
            </div>
            <div className="pr-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
