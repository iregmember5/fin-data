import React from "react";
import { ShieldCheck } from "lucide-react";

const Security: React.FC<{isDark: boolean, id?: string }> = ({ isDark, id }) => {
  return (
    <div
      id={id}
      className={`relative min-h-screen flex justify-center items-center py-20 px-6 ${
        isDark ? "hex-background-dark" : "hex-background-light"
      }`}
    >
      <style>{`
        .hex-background-dark {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          background-attachment: fixed;
          position: relative;
        }
        
        .hex-background-dark::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 80px 80px, 80px 80px;
          animation: float 20s ease-in-out infinite;
        }
        
        .hex-background-light {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
          background-attachment: fixed;
          position: relative;
        }
        
        .hex-background-light::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
            linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 80px 80px, 80px 80px;
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
        }
        
        .glow-animation {
          animation: glow 4s ease-in-out infinite;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
        }
        
        .feature-item {
          transition: all 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateX(8px);
        }
        
        .security-badge {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
          border: 1px solid rgba(139, 92, 246, 0.2);
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full opacity-10 ${
          isDark ? "bg-purple-500" : "bg-purple-300"
        }`} style={{filter: 'blur(100px)'}}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-10 ${
          isDark ? "bg-violet-500" : "bg-violet-300"
        }`} style={{filter: 'blur(120px)'}}></div>
      </div>

      <div className={`relative max-w-5xl w-full rounded-3xl p-12 backdrop-blur-xl border shadow-2xl card-hover overflow-hidden ${
        isDark 
          ? "bg-slate-900/70 border-slate-700/50" 
          : "bg-white/90 border-purple-200/60"
      }`}>
        
        {/* Enhanced glow effect */}
        <div className={`absolute -inset-2 rounded-3xl blur-3xl glow-animation ${
          isDark 
            ? "bg-gradient-to-br from-purple-500/30 via-violet-600/20 to-indigo-500/30" 
            : "bg-gradient-to-br from-purple-300/40 via-violet-400/30 to-indigo-300/40"
        }`}></div>

        {/* Content container */}
        <div className="relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 security-badge ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`}>
              <ShieldCheck className="w-10 h-10" />
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? "from-purple-400 via-violet-400 to-indigo-400" 
                : "from-purple-600 via-violet-600 to-indigo-600"
            }`}>
              Advanced Security
            </h2>
            
            <div className={`w-24 h-1 mx-auto mb-8 rounded-full ${
              isDark 
                ? "bg-gradient-to-r from-purple-500 to-violet-500" 
                : "bg-gradient-to-r from-purple-600 to-violet-600"
            }`}></div>
          </div>

          {/* Main Description */}
          <div className={`text-center mb-12 max-w-4xl mx-auto ${
            isDark ? "text-slate-300" : "text-gray-600"
          }`}>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We plan to Protect Client Data with{" "}
              <span className={`font-bold text-xl ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}>
                Bank-Grade Security
              </span>
              . Your clients trust you with their most sensitive financial data. We will ensure it stays secure with multiple layers of authentication and compliance-ready safeguards.
            </p>
            
            <div className={`inline-block px-6 py-3 rounded-2xl font-semibold text-sm tracking-wide uppercase security-badge ${
              isDark ? "text-purple-300" : "text-purple-700"
            }`}>
              <b>We will also be seeking SOC 2 certification upon launch.</b>
            </div>
          </div>

          {/* Security Features Header */}
          <div className="text-center mb-10">
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
              <span className="text-3xl mr-3">🔑</span>
              What Security Is in the Works
            </h3>
          </div>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Multi-Factor Authentication (MFA)",
                description: "Extra login protection for all users"
              },
              {
                title: "Knowledge-Based Authentication (KBA)",
                description: "Options include automatic AI-powered KBA (proprietary mechanism, code name MAGIC KBA), manual creation of KBA, and OTP via email/SMS"
              },
              {
                title: "Identity Verification",
                description: "Validate with SSN, PIN, and Date of Birth checks"
              },
              {
                title: "Encrypted Storage & Transfer",
                description: "End-to-end encryption for all files and workflows"
              }
            ].map((feature, index) => (
              <div key={index} className={`feature-item p-6 rounded-2xl backdrop-blur-sm border ${
                isDark 
                  ? "bg-slate-800/50 border-slate-600/30" 
                  : "bg-white/60 border-purple-200/40"
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-2.5 ${
                    isDark ? "bg-purple-400" : "bg-purple-500"
                  }`} style={{boxShadow: `0 0 10px ${isDark ? '#a78bfa' : '#8b5cf6'}`}}></div>
                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${
                      isDark ? "text-purple-300" : "text-purple-700"
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`leading-relaxed ${
                      isDark ? "text-slate-300" : "text-gray-600"
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Footer */}
          <div className="text-center">
            <div className={`inline-block px-8 py-4 rounded-2xl text-xl font-bold backdrop-blur-sm border ${
              isDark 
                ? "bg-gradient-to-r from-purple-900/60 to-violet-900/60 border-purple-500/30 text-purple-300" 
                : "bg-gradient-to-r from-purple-50 to-violet-50 border-purple-300/40 text-purple-700"
            }`}>
              ➡️ With MyFinData, security isn't an add-on — it will be built into every step.
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
 
  );
};

export default Security;