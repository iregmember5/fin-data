import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Upload,
  Link,
  Zap,
  Wallet,
  LockKeyholeOpen,
  DatabaseZap,
  Users,
  FileText,
  Clock,
  Mail,
  CreditCard,
  Eye,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface StepProps {
  isDark: boolean;
  number: string;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

interface DetailStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepProps> = ({
  isDark,
  number,
  title,
  icon,
  onClick,
  isSelected,
}) => (
  <div
    onClick={onClick}
    className={`group relative border rounded-xl p-4 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm cursor-pointer flex items-center ${
      isSelected
        ? isDark
          ? "bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-700/20 border-purple-400/60 transform scale-105"
          : "bg-gradient-to-br from-purple-100/80 to-purple-200/60 border-purple-400/80 shadow-2xl shadow-purple-200/50 transform scale-105"
        : isDark
        ? "bg-gradient-to-br from-purple-900/20 via-black/30 to-purple-800/10 border-purple-500/20 hover:border-purple-400/40"
        : "bg-white/90 border-purple-200/50 hover:border-purple-300/70 shadow-lg hover:shadow-purple-200/30"
    }`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br rounded-3xl transition-opacity duration-500 ${
        isSelected
          ? "opacity-100"
          : "opacity-0 group-hover:opacity-100"
      } ${
        isDark
          ? "from-purple-600/10 to-transparent"
          : "from-purple-100/50 to-transparent"
      }`}
    ></div>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
            isSelected
              ? isDark
                ? "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-2xl shadow-purple-500/40"
                : "bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-2xl shadow-purple-500/50"
              : isDark
              ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-600/25"
              : "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-400/30"
          }`}
        >
          {number}
        </div>
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            isSelected
              ? isDark
                ? "bg-gradient-to-br from-purple-400/30 to-purple-600/30 text-purple-300"
                : "bg-gradient-to-br from-purple-200 to-purple-300 text-purple-700"
              : isDark
              ? "bg-gradient-to-br from-purple-500/20 to-purple-700/20 text-purple-400 group-hover:text-purple-300"
              : "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 group-hover:text-purple-700"
          }`}
        >
          {icon}
        </div>
      </div>

      <h6
        className={`text-xl font-bold  transition-colors duration-300 min-w-48 min-h-16 ${
          isSelected
            ? isDark
              ? "text-purple-100"
              : "text-purple-800"
            : isDark
            ? "text-white group-hover:text-purple-200"
            : "text-gray-800 group-hover:text-purple-700"
        }`}
      >
        {title}
      </h6>
    </div>

    <div
      className={`absolute bottom-0 left-0 w-full h-1 rounded-b-3xl transition-transform duration-500 origin-left ${
        isSelected
          ? "scale-x-100"
          : "transform scale-x-0 group-hover:scale-x-100"
      } ${
        isDark
          ? "bg-gradient-to-r from-purple-600 to-purple-800"
          : "bg-gradient-to-r from-purple-400 to-purple-600"
      }`}
    ></div>

     <div className={`absolute top-4 right-4 transition-opacity duration-300 ${
      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    }`}>
      <ChevronDown 
        size={20} 
        className={isDark ? "text-purple-300" : "text-purple-600"} 
      />
    </div>
  </div>
);

const DetailSection: React.FC<{
  isDark: boolean;
  title: string;
  steps: DetailStep[];
  screenshots: string[];
}> = ({ isDark, title, steps, screenshots }) => {
  return (
    <div className="mt-16 animate-fade-in">
      <div className={`rounded-3xl border backdrop-blur-sm p-8 shadow-2xl ${
        isDark
          ? "bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-900/80 border-purple-500/30"
          : "bg-white/95 border-purple-200/60 shadow-purple-100/30"
      }`}>
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-r from-white via-purple-200 to-purple-400"
                : "bg-gradient-to-r from-gray-800 via-purple-600 to-purple-700"
            }`}
          >
            {title}
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDark
              ? "bg-gradient-to-r from-purple-600 to-purple-800"
              : "bg-gradient-to-r from-purple-400 to-purple-600"
          }`}></div>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                      isDark
                        ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-purple-600/25"
                        : "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-purple-400/30"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            : "bg-purple-100 text-purple-700 border border-purple-200"
                        }`}
                      >
                        Step {index + 1}
                      </span>
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              {screenshots[index] && (
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div
                    className={`rounded-2xl overflow-hidden border shadow-2xl transform hover:scale-105 transition-transform duration-500 ${
                      isDark 
                        ? "border-purple-500/30 shadow-purple-900/20" 
                        : "border-gray-200/50 shadow-gray-900/10"
                    }`}
                  >
                    <img
                      src={screenshots[index]}
                      alt={`${step.title} screenshot`}
                      className="w-full h-auto"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                      isDark
                        ? "from-purple-900/20 via-transparent to-transparent"
                        : "from-purple-100/20 via-transparent to-transparent"
                    }`}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InteractiveProcessSection: React.FC<{ isDark: boolean; id?: string }> = ({
  isDark,
  id,
}) => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const detailSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedStep && detailSectionRef.current) {
      // Add a small delay to ensure the content is rendered
      setTimeout(() => {
        detailSectionRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [selectedStep]);

  const steps = [
    {
      number: "01",
      title: "Implement Tax Plans",
      icon: <Zap size={24} />,
      key: "implement"
    },
    {
      number: "02",
      title: "Assemble",
      icon: <CheckCircle size={24} />,
      key: "assemble"
    },
    {
      number: "03",
      title: "Prep",
      icon: <Link size={24} />,
      key: "prep"
    },
    {
      number: "04",
      title: "Deliver",
      icon: <Upload size={24} />,
      key: "deliver"
    },
    {
      number: "05",
      title: "Data Wallets for Family Office",
      icon: <Wallet size={24} />,
      key: "wallets"
    },
    {
      number: "06",
      title: "Network & Collaborate",
      icon: <LockKeyholeOpen size={24} />,
      key: "network"
    },
    {
      number: "07",
      title: "Data Sharing",
      icon: <DatabaseZap size={24} />,
      key: "sharing"
    },
  ];

  const stepDetails = {
    implement: {
      title: "Tax Plan Implementation - Strategy to Execution",
      steps: [
        {
          title: "Map the Plan",
          description: "We translate strategy into practical steps, timelines, and responsibilities so execution is crystal clear.",
          icon: <FileText size={20} />
        },
        {
          title: "Organize in One Place",
          description: "All forms, documents, and action items live in a secure, centralized workspace for easy tracking.",
          icon: <DatabaseZap size={20} />
        },
        {
          title: "Execute with Support",
          description: "Our team provides guided assistance so every task is completed on time and in line with regulations.",
          icon: <Users size={20} />
        },
        {
          title: "Track & Assure Compliance",
          description: "We monitor progress, flag gaps, and validate results, giving you confidence that nothing is missed.",
          icon: <CheckCircle size={20} />
        }
      ],
      screenshots: [
        "/images/screenshots/taxplans/plan.png",
        "/images/screenshots/taxplans/organize.png", 
        "/images/screenshots/taxplans/support.png",
        "/images/screenshots/taxplans/track.png",
      ]
    },
    assemble: {
      title: "Assemble - Complete Document Collection Workflow",
      steps: [
        {
          title: "Connect Your Tax Software",
          description: "Import thousands of clients in minutes. Works with all major platforms (CCH, UltraTax, Lacerte, ProSeries, Drake, ProConnect).",
          icon: <Link size={20} />
        },
        {
          title: "Generate Questionnaires & Checklists",
          description: "Each client gets a personalized questionnaire with prior year data and a tailored checklist. AI suggests questions based on tax type, prior responses, and common deductions.",
          icon: <FileText size={20} />
        },
        {
          title: "Gather Client Data & Documents",
          description: "Supports 30+ document types (W-2, 1099s, K-1s, etc.) with easy uploads and guided responses.",
          icon: <Upload size={20} />
        },
        {
          title: "Automatic Client Reminders",
          description: "Email & SMS reminders keep clients on track, with smart tracking by tax type, year, and status. Customizable reminder schedules ensure no client falls through the cracks.",
          icon: <Mail size={20} />
        },
        {
          title: "Assemble Workpapers",
          description: "Generate organized, bookmarked workpapers with all documents and responses auto-categorized.",
          icon: <FileText size={20} />
        },
        {
          title: "Dashboard for Tracking",
          description: "Monitor client progress in real time, filter by return type or year, track reminders, and view document status across your team.",
          icon: <Eye size={20} />
        }
      ],
      screenshots: [
        "/images/screenshots/assemble/tax-software-selection.png",
        "/images/screenshots/assemble/questionnaire-interface.png", 
        "/images/screenshots/assemble/document-checklist.png",
        "/images/screenshots/assemble/reminder-system.png",
        "/images/screenshots/assemble/workpapers-view.png",
        "/images/screenshots/assemble/progress-dashboard.png"
      ]
    },
    prep: {
      title: "Prep - AI-Powered Data Entry for Tax Preparation",
      steps: [
        {
          title: "Capture",
          description: "Upload client files and let MyFinData.com securely extract, validate, and structure data into ready-to-use returns.",
          icon: <Upload size={20} />
        },
        {
          title: "Automate",
          description: "Apply your firm's rules, templates, and preferences at scale for faster, more consistent preparation.",
          icon: <Zap size={20} />
        },
        {
          title: "Review",
          description: "Built-in checks highlight anomalies and surface key insights so your team can focus on final review, not data entry.",
          icon: <Eye size={20} />
        },
        {
          title: "Connect",
          description: "Integrates seamlessly with your existing tax software — no switching tools, no workflow disruption.",
          icon: <Link size={20} />
        }
      ],
      screenshots: [
        "/images/screenshots/prep/prep-capture.png",
        "/images/screenshots/prep/prep-automate.png", 
        "/images/screenshots/prep/prep-review.png",
        "/images/screenshots/prep/prep-connect.png"
      ]
    },
    deliver: {
      title: "Deliver - Automated Tax Return Delivery System",
      steps: [
        {
          title: "Fast Return Assembly",
          description: "Tax returns are automatically compiled and delivered in 3–4 minutes, complete with all supporting documents. AI-powered assembly ensures accuracy and completeness before delivery.",
          icon: <Clock size={20} />
        },
      

         {
      title: "Magic Setup++",
      description: "Simple, guided onboarding that allows clients to get started in minutes, without technical headaches. Intuitive setup process removes barriers and ensures immediate productivity.",
      icon: <Zap size={20} />
    },


    {
      title: "Enhanced KBA Security",
      description: "Our system automatically generates Knowledge-Based Authentication (KBA) questions directly from the client's tax return data—ensuring they are accurate, relevant, and easy for clients to answer. Unlike costly credit-reporting services, our AI creates personalized, context-aware questions.",
      icon: <LockKeyholeOpen size={20} />
    },

      {
          title: "Invoices & Billing",
          description: "Generate client invoices for tax preparation fees instantly. Clients can review, eSign, and pay directly from the dashboard. Integrated payment processing with multiple payment options.",
          icon: <CreditCard size={20} />
        },

        {
          title: "Automated Reminders",
          description: "Clients receive email/SMS notifications for payments, signatures, and outstanding tasks. Smart reminder sequences adapt based on client response patterns and preferences.",
          icon: <Mail size={20} />
        },
        {
          title: "eSignatures",
          description: "Secure digital signing for returns, invoices, and required forms—no printing or scanning needed. Legal compliance with electronic signature standards and audit trails.",
          icon: <FileText size={20} />
        },
        {
          title: "AI-Powered Calculations & Summaries",
          description: "AI calculates tax liabilities, estimated payments, and generates a clean summary for both clients and tax professionals. Clear explanations of tax positions and planning opportunities.",
          icon: <Zap size={20} />
        },
        {
          title: "Complete Tracking Dashboard",
          description: "Both firms and clients get a real-time overview: Returns delivered & signed, Payments received & pending, Document status (view/download/forward), Clear summary of federal, state, and total taxes due.",
          icon: <Eye size={20} />
        },
            {
      title: "Cost-Effective & Supportive",
      description: "If clients encounter issues, they can instantly join a live conference call with transcription, translation, and AI-powered assistance, ensuring smooth communication and faster resolutions.",
      icon: <Users size={20} />
    }
      ],
      screenshots: [


        "/images/screenshots/deliver/return-deliver.png",

           "/images/screenshots/deliver/magic-setup.png",
    "/images/screenshots/deliver/kba-security.png",

        "/images/screenshots/deliver/invoice-billing.png", 
        "/images/screenshots/assemble/reminder-system.png",
        "/images/screenshots/deliver/esignatures.png",
        "/images/screenshots/deliver/ai-calculations.png",
        "/images/screenshots/deliver/tracking-dashboard.png",
        "/images/screenshots/deliver/live-support.png"
      ]
    },
wallets: {
  title: "Data Wallets for Family Office - Complete Financial Ecosystem",
  steps: [
    {
      title: "Collect & Upload",
      description: "Clients securely upload their financial artifacts — tax returns, K-1s, wills, insurance policies, mortgage papers, investment records, and more. AI auto-sorts and tags documents for easy organization.",
      icon: <Upload size={20} />
    },
    {
      title: "Organize & Protect",
      description: "The system creates a centralized, encrypted wallet where every document is categorized and safely stored. Role-based permissions ensure only authorized users can access sensitive financial data.",
      icon: <LockKeyholeOpen size={20} />
    },
    {
      title: "Share with Confidence",
      description: "Clients can grant pre-authorized access to attorneys, advisors, or family members with time-limited links, view-only or download options, and Full audit trail of who accessed what and when",
      icon: <Users size={20} />
    },
    {
      title: "Compare & Save",
      description: "Clients upload current bills (insurance, loans, utilities, etc.). The wallet's smart comparison engine highlights potential savings from alternate vendors and solutions.",
      icon: <Eye size={20} />
    },
    {
      title: "Access Anytime, Anywhere",
      description: "From a web dashboard or mobile app, clients and their trusted circle can view & download key documents, track renewals & deadlines, and receive reminders and notifications.",
      icon: <DatabaseZap size={20} />
    },
    {
      title: "Ongoing Trust & Support",
      description: "AI-powered search capabilities, live support with transcription & translation, and regular reports showing savings, updates, and security status.",
      icon: <Users size={20} /> // Added icon here
    }
  ],
  screenshots: [
    "/images/screenshots/datawallets/collect1.png",
    "/images/screenshots/taxplans/organize1.png",
    "/images/screenshots/datawallets/share1.png",
    "/images/screenshots/datawallets/optimize1.png",
    "/images/screenshots/datawallets/access1.png",
    "/images/screenshots/datawallets/support1.png"
  ]
},
    network: {
      title: "Advisor Collaboration - Professional Network Growth",
      steps: [
        {
          title: "Network",
          description: "Build a private advisor network of planners, brokers, attorneys, and other specialists.",
          icon: <Users size={20} />
        },
        {
          title: "Share",
          description: "with prior client's permission, grant controlled access to other servcice providers, advisors, and planners.",
          icon: <DatabaseZap size={20} />
        },
        {
          title: "Collaborate",
          description: "Work with advisors to deliver holistic client solutions and expert insights.",
          icon: <LockKeyholeOpen size={20} />
        },
        {
          title: "Grow",
          description: "Unlock new revenue streams and stronger client relationships through cross-industry collaboration.",
          icon: <Zap size={20} />
        }
      ],
      screenshots: [
        "/images/screenshots/network/connect.png",
        "/images/screenshots/network/share.png",
        "/images/screenshots/network/collaborate.png",
        "/images/screenshots/network/grow.png"

      ]
    },
    sharing: {
      title: "Data Sharing - Secure Professional Collaboration",
      steps: [
        {
          title: "Centralize",
          description: "All client data lives in one secure hub, ready to be shared.",
          icon: <DatabaseZap size={20} />
        },
        {
          title: "Share",
          description: "Grant controlled access to clients, colleagues, or service providers.",
          icon: <Users size={20} />
        },
        {
          title: "Collaborate",
          description: "Work together in real time on the same dataset for smoother workflows.",
          icon: <Link size={20} />
        },
        {
          title: "Protect",
          description: "Every exchange is encrypted and compliant, ensuring confidentiality at all times.",
          icon: <LockKeyholeOpen size={20} />
        }
      ],
      screenshots: [
        "/images/screenshots/sharing/centralize.png",
        "/images/screenshots/sharing/share.png",
        "/images/screenshots/sharing/collaborate.png",
        "/images/screenshots/sharing/protect.png"
      ]
    }
  };

    const handleStepClick = (stepKey: string) => {
    // If clicking the same step, close it
    if (selectedStep === stepKey) {
      setSelectedStep(null);
    } else {
      setSelectedStep(stepKey);
    }
  };

 return (
    <section id={id} className="min-h-screen relative py-20 px-4 sm:px-6" ref={sectionRef}>
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
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
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
            className={`text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text mb-6 tracking-tight ${
              isDark
                ? "text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400"
                : "text-transparent bg-gradient-to-r from-gray-800 via-purple-600 to-purple-700"
            }`}
          >
            Tax Pro Power Punches
          </h2>

          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-4 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Streamline your workflow with our intelligent platform
          </p>
  <div className="flex items-center justify-center gap-3 mb-8 ">
            <ChevronDown className={`w-8 h-8 animate-bounce ${
              isDark ? "text-cyan-400" : "text-purple-600"
            }`} />
            <p className={`text-lg font-medium   ${
              isDark 
                ? "text-cyan-300" 
                : "text-purple-600"
            }`}>
                Click any card to see detailed workflow breakdown
            </p>
               <ChevronDown className={`w-8 h-8 animate-bounce delay-0.5s ${
              isDark ? "text-cyan-400" : "text-purple-600"
            }`} />
            <p className={`text-lg font-medium ${
              isDark 
                ? "text-cyan-300" 
                : "text-purple-600"
            }`}></p>
          </div>
        </div>

        {/* Steps Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-4 pb-2">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-slide-up min-w-[280px] sm:min-w-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <StepCard 
                isDark={isDark} 
                {...step} 
                isSelected={selectedStep === step.key}
                onClick={() => handleStepClick(step.key)}
              />
            </div>
          ))}
        </div>
        {/* Mobile-responsive step indicator */}
{selectedStep && (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
    {/* Mobile: Top arrows, Desktop: Left arrow */}
    <div className="flex sm:hidden items-center gap-2 order-1">
      <ChevronUp className={`w-6 h-6 rotate-180 animate-bounce ${
        isDark ? "text-cyan-400" : "text-purple-600"
      }`} />
      <span className={`text-xs font-medium ${
        isDark ? "text-cyan-400" : "text-purple-600"
      }`}>
        Switch
      </span>
      <ChevronUp className={`w-6 h-6 animate-bounce ${
        isDark ? "text-cyan-400" : "text-purple-600"
      }`} />
    </div>

    {/* Desktop: Left arrow */}
    <div className="hidden sm:flex items-center gap-2">
      <ChevronUp className={`w-7 h-7 rotate-180 animate-bounce ${
        isDark ? "text-cyan-400" : "text-purple-600"
      }`} />
      <span className={`text-sm font-medium ${
        isDark ? "text-cyan-400" : "text-purple-600"
      }`}>
        Switch Step
      </span>
    </div>

    {/* Current step indicator - responsive */}
    <div className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-500 relative overflow-hidden max-w-xs sm:max-w-none ${
      isDark 
        ? "bg-slate-800/95 border border-slate-600/60 shadow-lg sm:shadow-xl" 
        : "bg-white/95 border border-purple-200/80 shadow-lg sm:shadow-xl"
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-15 sm:opacity-20"></div>
      
      <div className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
        {/* Mobile: Stacked layout */}
        <div className="flex sm:hidden items-center gap-2 w-full justify-center">
          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${
            isDark ? "bg-cyan-400" : "bg-purple-500"
          }`}></div>
          <span className={`font-semibold text-center ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
            Currently Showing
          </span>
        </div>
        
        {/* Step title - truncated on mobile */}
        <span className={`font-bold text-center sm:text-left truncate max-w-full ${
          isDark 
            ? "text-cyan-300" 
            : "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        }`}>
          {steps.find(step => step.key === selectedStep)?.title}
        </span>

        {/* Desktop: Inline layout */}
        <div className="hidden sm:flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            isDark ? "bg-cyan-400" : "bg-purple-500"
          }`}></div>
          <span className={`font-semibold ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
            Currently Showing:
          </span>
        </div>
      </div>
    </div>

    {/* Desktop: Right arrow */}
    <div className="hidden sm:flex items-center gap-2">
      <span className={`text-sm font-medium ${
        isDark ? "text-cyan-400" : "text-purple-600"
      }`}>
        Switch Step
      </span>
      <ChevronUp className={`w-7 h-7 animate-bounce ${
        isDark ? "text-cyan-400" : "text-purple-600"
      }`} />
    </div>
  </div>
)}
        {/* Detail Section with ref for scrolling */}
        <div ref={detailSectionRef}>
          {selectedStep && stepDetails[selectedStep as keyof typeof stepDetails] && (
            <>
              {/* Mobile back button */}
              <div className="md:hidden mb-6 flex justify-center">
                <button
                  onClick={() => setSelectedStep(null)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    isDark 
                      ? "bg-purple-800/50 text-purple-200" 
                      : "bg-purple-200 text-purple-700"
                  }`}
                >
                  <ChevronDown size={16} className="rotate-90" />
                  Back to all steps
                </button>
              </div>
              
              <DetailSection
                isDark={isDark}
                title={stepDetails[selectedStep as keyof typeof stepDetails].title}
                steps={stepDetails[selectedStep as keyof typeof stepDetails].steps}
                screenshots={stepDetails[selectedStep as keyof typeof stepDetails].screenshots}
              />
            </>
          )}
        </div>

        {/* CTA Section */}
        {!selectedStep && (
          <div className="text-center mt-12">
            <div
              className={`inline-flex items-center gap-4 p-1 rounded-2xl shadow-2xl ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 shadow-purple-600/25"
                  : "bg-gradient-to-r from-purple-500 to-purple-700 shadow-purple-400/30"
              }`}
            >
              <div
                className={`backdrop-blur-sm rounded-xl px-6 py-3 md:px-8 md:py-4 ${
                  isDark ? "bg-black/20" : "bg-white/20"
                }`}
              >
                <p
                  className={`text-lg md:text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-white"
                  }`}
                >
                  Multiple steps. One platform.
                </p>
                <p
                  className={`text-base md:text-lg ${
                    isDark ? "text-purple-200" : "text-purple-100"
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-white"
                    }`}
                  >
                    Zero
                  </span>{" "}
                  wasted time.
                </p>
              </div>
              <div className="pr-4 md:pr-6">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                    isDark ? "bg-white/10" : "bg-white/30"
                  }`}
                >
                  <span className="text-xl md:text-2xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveProcessSection;