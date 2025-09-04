import React, { useState } from "react";
import { FileText, Send, Database, RollerCoaster, Wallet, LockKeyholeOpen } from "lucide-react";
import AnimatedBackground from "../ui/AnimatedBackground";

const IntegratedProducts: React.FC<{isDark: boolean, id?: string }> = ({isDark, id }) => {
  const [activeTab, setActiveTab] = useState("Assemble");

  const products = {
     TaxPlanImplementation: {
      label: "Implement Tax Plans",
      title: "From Strategy to Execution — Flawless Tax Plan Implementation You Can Trust.”",
      subtitle:
        "Turning Strategy into Action with Precision and Compliance",
      features: [
        "Hand-holding support for premium clients — turning plans into reality",
        "Provide detailed checklists, accountable plans, and structured guidelines.",
        "Prepare all necessary paperwork, contracts, and agreements to support compliance.",
        "Continuously verify, validate, and monitor implementation so nothing falls through the cracks.",
      ],
      benefit:
        "✅ Ready to move from planning to execution? Let's implement your tax strategy with confidence.",
      question: "Why It Matters",
      points: [
        "(Ongoing throughout the year).",
        "No matter what tax planning software you use, there comes a time to translate papers into action.",
        "Here comes compliance. Here comes monitoring.",
        "This is where you earn real trust.",
        "While tax plans are everywhere, implementation is the true differentiator that makes you stand out"
      ],
      icon: <RollerCoaster className="w-6 h-6" />,
      gradient: "from-amber-400 via-orange-500 to-red-600",
      glowColor: "orange",
    },
    Assemble: {
      label: "Assemble",
      title: "Simplify Tax Document Assembly with myfindata",
      subtitle:
        "Take the manual work out of tax prep with AI-powered automation.",
      features: [
        "Quick Integration – Connect instantly with CCH Axcess, UltraTax, Lacerte, ProSeries, Drake, and more.",
        "AI-Generated Checklists – Client-specific checklists built from prior-year data, requesting only what's needed.",
        "Personalized Questionnaires – Tailored, easy-to-fill forms for 1040, 1065, 1120, and 1120S returns.",
      ],
      benefit:
        "➡️ Save hours in prep time, reduce errors, and streamline tax assembly.",
      question: "Why It Matters",
      points: [
        "Eliminates repetitive manual work",
        "Cuts down on client back-and-forth",
        "Increases accuracy and reduces errors",
        "Frees up your team to focus on higher-value planning"
      ],
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      glowColor: "cyan",
    },
    Deliver: {
      label: "Deliver",
      title: "Streamlined Tax Document Delivery with myfindata",
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
      question: "Why It Matters",
      points: [
        "Faster turnaround = happier clients",
        "Secure, upfront payments improve cash flow",
        "Less manual work frees your team for higher-value tasks",
        "Enhanced KBA Security – Unlike expensive credit reporting companies that rely on outdated security questions clients often can't recall, we use AI-generated, easy-to-remember questions",
        "Cost-Effective & Supportive – If clients get stuck, they can join a live conference call with transcription, translation, and AI-powered assistance"
      ],
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
      question: "Why It Matters",
      points: [
        "Faster, more accurate reviews with fewer errors",
        "Lower costs through automation at scale",
        "Stronger client trust with bank-grade data security",
        "Simplifies team workflows so you can process more returns in less time"
      ],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      glowColor: "emerald",
    },
    DataWalletsforFamilyOffice: {
      label: "Data Wallets for Family Office",
      title: "Your clients scattered financial artifacts now Organized and Protected in Secure Data Wallets",
      subtitle:
        " Centralized Solutions for Smarter financial artifacts Management and Seamless sharing of pre-authorized data.",
      features: [
        "Build a secure, centralized 'data wallet' to manage critical financial documents.",
        "Assist in preparing paperwork for funding, mortgages, loans, grants, insurance, financial planning",
        "Enable seamless data sharing with attorneys, advisors, and family members — only the right people access the right information",
        "By becoming the custodian of the financial artifacts… Make it easy for your clients to cut costs by enabling to compare current expenses with the proposed solutions by new vendors.",
      ],
      benefit:
        "✅ Safeguard your family's legacy — start building your data wallet today.",
      question: "Why It Matters",
      points: [
        "Eliminates scattered records",
        "One secure hub for financial and wealth documents",
        "Safe, pre-authorized access for the right people",
        "Helps clients save money through smarter vendor comparisons",
        "Builds long-term trust with stronger data protection"
      ],
      icon: <Wallet className="w-6 h-6" />,
      gradient: "from-violet-400 via-indigo-500 to-blue-600",
      glowColor: "indigo",
    },
    NewValueAdvisor: {
      label: "Network & Collaborate with Other Advisors",
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
      question: "Why It Matters",
      points: [
        "Expands your role from tax advisor to trusted business partner",
        "Opens doors to new revenue streams through cross-industry collaboration",
        "Strengthens client relationships by delivering more holistic solutions",
        "Positions your firm as part of a powerful, connected advisor ecosystem"
      ],
      icon: <LockKeyholeOpen className="w-6 h-6" />,
      gradient: "from-red-400 via-red-500 to-pink-600",
      glowColor: "red",
    },
    DataSharing: {
      label: "Data Sharing",
      title: " Data Sharing – Seamless Collaboration Made Simple",
      subtitle:
        "For tax, legal, and service professionals, smooth data sharing is the key to faster, smarter collaboration.",
      features: [
        "Effortlessly share insights and data with individual clients or colleagues through self-service sharing",
        "Collaborate with service providers and specialists on the same dataset in real time",
        "Strengthen professional networks and build lasting partnerships securely",
        "Refer or delegate tasks to trusted third parties for simplified workflows",
        "Ensure all client data is centralized, secure, and easy to access",
        "Protect sensitive information with top-tier confidentiality and security",
      ],
      benefit:
        "Myfindata's Data Sharing makes teamwork simple, secure, and efficient.",
      question: "Why It Matters",
      points: [
        "One secure hub for all their data",
        "Faster collaboration with professionals",
        "Confidence their information is protected",
        "Start sharing smarter today."
      ],
      icon: <LockKeyholeOpen className="w-6 h-6" />,
      gradient: "from-indigo-400 via-indigo-500 to-red-600",
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
                <div className={`p-4 rounded-xl backdrop-blur-sm border mb-6 ${
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

                {/* Question and Points Section */}
                <div className={`p-4 rounded-xl backdrop-blur-sm border ${
                  isDark
                    ? "bg-slate-800/40 border-slate-700/50"
                    : "bg-white/70 border-gray-200/50"
                }`}>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-cyan-300" : "text-cyan-600"
                  }`}>
                    {currentProduct.question}
                  </h3>
                  
                  <div className="space-y-2">
                    {currentProduct.points.map((point: string, idx: any) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          isDark ? "bg-cyan-400" : "bg-cyan-500"
                        }`}></div>
                        <p className={`text-sm ${isDark ? "text-slate-300" : "text-gray-600"}`}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
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