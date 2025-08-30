import React, { useState } from "react";
import { FileText, Send, Database } from "lucide-react";

const IntegratedProducts: React.FC<{ id?: string }> = ({ id }) => {
  const [activeTab, setActiveTab] = useState("Assemble");

  const products = {
    Assemble: {
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
    Connect: {
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
  };

  const currentProduct = products[activeTab];

  // Cracked mirror SVG pattern
  const CrackedMirrorPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="crackedMirror"
          patternUnits="userSpaceOnUse"
          width="200"
          height="200"
        >
          <rect
            width="200"
            height="200"
            fill="url(#mirrorGradient)"
            opacity="0.1"
          />
          <path
            d="M20,50 Q60,80 120,45 T180,70"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M10,120 Q80,100 140,130 T200,110"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M50,10 Q80,60 110,30 T150,80"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M80,150 Q120,120 160,165 T200,140"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M0,80 Q40,50 90,85 T160,60"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M30,30 L45,50"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M150,20 L170,40"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M60,180 L80,160"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.4"
            fill="none"
          />
          <path
            d="M180,180 L160,160"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>

        <linearGradient id="mirrorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#crackedMirror)" />
    </svg>
  );

  return (
    <div id={id} className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Cracked mirror overlay */}
      <CrackedMirrorPattern />

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Header */}
        <div className="text-center py-16 px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Our Easy-to-Use
            </span>
            &nbsp;
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"></div>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-12 font-light tracking-wide">
            Delivering a frictionless client journey, powered by{" "}
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI
            </span>
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
            {Object.keys(products).map((product) => {
              const isActive = activeTab === product;
              return (
                <button
                  key={product}
                  onClick={() => setActiveTab(product)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold text-base transition-all duration-500 transform hover:scale-105 ${
                    isActive
                      ? "bg-white/10 backdrop-blur-md text-white shadow-xl border border-white/20"
                      : "bg-slate-800/40 backdrop-blur-sm text-slate-300 hover:bg-slate-700/60 hover:text-white border border-slate-700/50"
                  }`}
                >
                  {isActive && (
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${products[product].gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {products[product].icon}
                    {product}
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

            {/* Main card (compact) */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-700/50 shadow-xl hover:scale-[1.01] transition-transform duration-300">
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${currentProduct.gradient} p-[1px] opacity-40`}
              >
                <div className="bg-slate-900/90 rounded-2xl w-full h-full"></div>
              </div>

              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${currentProduct.gradient} w-fit`}
                  >
                    {currentProduct.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {currentProduct.title}
                  </h2>
                </div>

                <p className="text-slate-300 mb-6 text-lg leading-snug font-light">
                  {currentProduct.subtitle}
                </p>

                {/* Features Grid */}
                <div className="grid gap-4 mb-6">
                  {currentProduct.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 hover:bg-slate-800/60 transition-all"
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${currentProduct.gradient} mt-2`}
                      ></div>
                      <span className="text-slate-200 text-base leading-snug flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Benefit */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/50">
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
