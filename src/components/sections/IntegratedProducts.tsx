import React, { useState } from "react";
import { FileText, Send, Database, RollerCoaster, Wallet, LockKeyholeOpen } from "lucide-react";
import AnimatedBackground from "../ui/AnimatedBackground";

const IntegratedProducts: React.FC<{isDark: boolean, id?: string }> = ({isDark, id }) => {
  const [activeTab, setActiveTab] = useState("Assemble");

  const products = {
    Assemble: {
      label: "Assemble",
      title: "Simplify Tax Document Assembly with TaxPilot",
      subtitle:
        "Take the manual work out of tax prep with AI-powered automation.",
      features: [
        "Quick Integration – Connect instantly with CCH Axcess, UltraTax, Lacerte, ProSeries, Drake, and more.",
        "AI-Generated Checklists – Client-specific checklists built from prior-year data, requesting only what's needed.",
        "Personalized Questionnaires – Tailored, easy-to-fill forms for 1040, 1065, 1120, and 1120S returns.",
      ],
      benefit:
        "➡️ Save hours in prep time, reduce errors, and streamline tax assembly.",
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      glowColor: "cyan",
    },
    Deliver: {
      label: "Deliver",
      title: "Streamlined Tax Document Delivery with TaxPilot",
      subtitle: "Deliver returns in minutes, not days.",
      features: [
        "Collect Payment Before Delivery – Ensure secure payments upfront.",
        "Automated Reminders – Nudge clients to sign and pay without manual follow-ups.",
        "Smart E-Signature Placement – AI places e-signature boxes automatically.",
        "Instant Client Portal Uploads – Returns delivered in under 4 minutes.",
        "Paperless & Efficient – Eliminate printing, reduce costs, and boost team productivity.",
        "Estimated & Current Tax Return",
      ],
      benefit:
        "➡️ Automate delivery from payment to e-signature—fast, secure, and client-friendly.",
      icon: <Send className="w-6 h-6" />,
      gradient: "from-fuchsia-400 via-purple-500 to-violet-600",
      glowColor: "purple",
    },
    Prep: {
      label: "Prep",
      title: "Smarter Accuracy & Seamless Reviews",
      subtitle:
        "Optimize tax form processing with AI precision and scalable automation.",
      features: [
        "AI-powered tax form recognition with one-step review process.",
        "Automated leadsheets for K-1s & 1099s, no 7216 consent forms.",
        "Limitless AI scalability with auto data entry across tax software.",
        "Customizable leadsheets & workflows with one-click export.",
        "Bank-grade client data security with effortless document tracking.",
        "Lower review costs with automation & quick, reliable data export.",
      ],
      benefit:
        "➡️ Reduce review time, protect client data, and simplify workflows with end-to-end automation.",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      glowColor: "emerald",
    },
    TaxPlanImplementation: {
      label: "Tax Plan Implementation",
      title: "From Strategy to Execution — Flawless Tax Plan Implementation You Can Trust.”",
      subtitle:
        "Turning Strategy into Action with Precision and Compliance",
      features: [
        "Go beyond strategy by ensuring every tax plan is put into action.",
        "Provide detailed checklists, accountable plans, and structured guidelines.",
        "Prepare all necessary paperwork, contracts, and agreements to support compliance.",
        "Continuously verify, validate, and monitor implementation so nothing falls through the cracks.",
      ],
      benefit:
        "✅ Ready to move from planning to execution? Let's implement your tax strategy with confidence.",
      icon: <RollerCoaster className="w-6 h-6" />,
      gradient: "from-amber-400 via-orange-500 to-red-600",
      glowColor: "orange",
    },
    DataWalletsforFamilyOffice: {
      label: "Data Wallets for Family Office",
      title: "Your Family's Wealth, Organized and Protected in One Secure Data Wallet.",
      subtitle:
        "Centralized Solutions for Smarter Wealth Management and Seamless Transitions",
      features: [
        "Build a secure, centralized 'data wallet' to manage critical financial documents.",
        "Assist in preparing paperwork for funding, mortgages, loans, grants, and insurance.",
        "Organize and streamline family wealth planning, including trusts, inheritances, and next-generation transfers.",
        "Support complex transactions such as marriages, divorces, joint ventures, mergers, and acquisitions.",
      ],
      benefit:
        "✅ Safeguard your family's legacy — start building your data wallet today.",
      icon: <Wallet className="w-6 h-6" />,
      gradient: "from-violet-400 via-indigo-500 to-blue-600",
      glowColor: "indigo",
    },
    NewValueAdvisor: {
      label: "Mastermind & Collaborate with Other Advisors",
      title: " Unlock New Value with Advisor Collaboration",
      subtitle:
        "Turn financial data into opportunities by working with a network of proactive advisors.",
      features: [
        "Collaborate with trusted professionals — insurance agents, mortgage brokers, financial planners, real estate experts, attorneys, and more.",
        "Help your clients 10X their business and uncover new revenue streams.",
        "Seamless data exchange across industries: tax, accounting, insurance, employee benefits, mortgages, legal, and real estate.",
        "Create a private advisor network ready to serve your clients on-demand.",
        "Securely share and manage critical data across platforms while ensuring privacy and compliance.",
      ],
      benefit:
        "💡 Provide ready-to-go Expert Financial Analysis to insurance and mortgage agents, enabling them to jumpstart their client relationships and close deals faster.",
      icon: <LockKeyholeOpen className="w-6 h-6" />,
      gradient: "from-red-400 via-red-500 to-pink-600",
      glowColor: "red",
    },
  };

  const currentProduct = (products as any)[activeTab];

  return (
    <div id={id} className="min-h-screen relative overflow-hidden">
      {/* Background based on theme */}
      {isDark ? (
        <>
          {/* Dark mode background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          <AnimatedBackground/>
        </>
      ) : (
        <>
          {/* Light mode background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 ${isDark ? "text-white" : "text-gray-800"}`}>
        {/* Header */}
        <div className="text-center py-16 px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4 relative">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? "from-white via-blue-200 to-purple-200" 
                : "from-gray-800 via-blue-600 to-purple-600"
            }`}>
              Our Easy-to-Use
            </span>
            &nbsp;
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? "from-purple-400 via-pink-400 to-cyan-400" 
                : "from-purple-600 via-pink-600 to-cyan-600"
            }`}>
              Services
            </span>
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent blur-sm ${
              isDark 
                ? "via-cyan-400 to-transparent" 
                : "via-cyan-600 to-transparent"
            }`}></div>
          </h1>

          <p className={`text-lg md:text-xl mb-12 font-light tracking-wide ${
            isDark ? "text-slate-300" : "text-gray-600"
          }`}>
            Delivering a frictionless client journey, powered by{" "}
            <span className={`font-semibold bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? "from-cyan-400 to-purple-400" 
                : "from-cyan-600 to-purple-600"
            }`}>
              AI
            </span>
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
            {(Object.keys(products) as Array<keyof typeof products>).map((product) => {
              const isActive = activeTab === product;
              const productData = products[product];
              return (
                <button
                  key={product}
                  onClick={() => setActiveTab(product)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold text-base transition-all duration-500 transform hover:scale-105 ${
                    isActive
                      ? isDark
                        ? "bg-white/10 backdrop-blur-md text-white shadow-xl border border-white/20"
                        : "bg-white backdrop-blur-md text-gray-800 shadow-xl border border-gray-200"
                      : isDark
                        ? "bg-slate-800/40 backdrop-blur-sm text-slate-300 hover:bg-slate-700/60 hover:text-white border border-slate-700/50"
                        : "bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-gray-800 border border-gray-200"
                  }`}
                >
                  {isActive && (
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${productData.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {productData.icon}
                    {productData.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="relative group">
            <div
              className={`absolute -inset-3 bg-gradient-to-r ${currentProduct.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700`}
            ></div>

            {/* Main card */}
            <div className={`relative backdrop-blur-xl rounded-2xl p-6 md:p-8 border shadow-xl hover:scale-[1.01] transition-transform duration-300 ${
              isDark 
                ? "bg-slate-900/80 border-slate-700/50" 
                : "bg-white/90 border-gray-200/50"
            }`}>
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${currentProduct.gradient} p-[1px] opacity-40`}
              >
                <div className={`rounded-2xl w-full h-full ${
                  isDark ? "bg-slate-900/90" : "bg-white/90"
                }`}></div>
              </div>

              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${currentProduct.gradient} w-fit`}
                  >
                    {currentProduct.icon}
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? "from-white to-slate-300" 
                      : "from-gray-800 to-gray-700"
                  }`}>
                    {currentProduct.title}
                  </h2>
                </div>

                <p className={`mb-6 text-lg leading-snug font-light ${
                  isDark ? "text-slate-300" : "text-gray-600"
                }`}>
                  {currentProduct.subtitle}
                </p>

                {/* Features Grid */}
                <div className="grid gap-4 mb-6">
                  {currentProduct.features.map((feature: string, idx: any) => (
                    <div
                      key={idx}
                      className={`group flex items-start gap-3 p-3 rounded-lg backdrop-blur-sm border transition-all ${
                        isDark
                          ? "bg-slate-800/40 border-slate-700/30 hover:bg-slate-800/60"
                          : "bg-white/70 border-gray-200/50 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${currentProduct.gradient} mt-2`}
                      ></div>
                      <span className={`text-base leading-snug flex-1 ${
                        isDark ? "text-slate-200" : "text-gray-700"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Benefit */}
                <div className={`p-4 rounded-xl backdrop-blur-sm border ${
                  isDark
                    ? "bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600/50"
                    : "bg-gradient-to-r from-white/80 to-gray-100/80 border-gray-200/50"
                }`}>
                  <p
                    className={`text-lg font-semibold bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent`}
                  >
                    {currentProduct.benefit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedProducts;