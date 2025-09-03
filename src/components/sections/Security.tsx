import React from "react";
import { ShieldCheck } from "lucide-react";

const Security: React.FC<{isDark: boolean, id?: string }> = ({ isDark, id }) => {
  return (
    <div
      id={id}
      className={`flex justify-center items-center py-16 px-6 ${
        isDark ? "hex-background-dark" : "hex-background-light"
      }`}
    >
      <style>{`
        .hex-background-dark {
          background-color: #0f172a;
          background-image: linear-gradient(
              rgba(26, 58, 92, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(26, 58, 92, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        
        .hex-background-light {
          background-color: #f8fafc;
          background-image: linear-gradient(
              rgba(200, 200, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(200, 200, 255, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>

      <div className={`max-w-3xl w-full rounded-3xl p-8 backdrop-blur-sm border shadow-2xl relative overflow-hidden ${
        isDark 
          ? "bg-slate-900/60 border-slate-600/40" 
          : "bg-white/80 border-purple-200/40"
      }`}>
        {/* Glow Shadow */}
        <div className={`absolute -inset-1 rounded-3xl blur-2xl opacity-20 ${
          isDark 
            ? "bg-gradient-to-r from-purple-500 to-violet-600" 
            : "bg-gradient-to-r from-purple-300 to-violet-400"
        }`}></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className={`w-10 h-10 ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`} />
            <h2 className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}>
              Advanced Security
            </h2>
          </div>

          <p className={`mb-6 leading-relaxed ${
            isDark ? "text-slate-300" : "text-gray-600"
          }`}>
            Protect Client Data with{" "}
            <span className={`font-semibold ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`}>
              Bank-Grade Security
            </span>
            . Your clients trust you with their most sensitive financial data.
            We ensure it stays secure with multiple layers of authentication and
            compliance-ready safeguards.
          </p>

          {/* Features */}
          <ul className={`space-y-4 ${
            isDark ? "text-slate-200" : "text-gray-700"
          }`}>
            <li className="flex items-start gap-3">
              <span className={`w-2.5 h-2.5 rounded-full mt-2 ${
                isDark ? "bg-purple-400" : "bg-purple-500"
              }`}></span>
              <p>
                <span className="font-semibold">
                  Multi-Factor Authentication (MFA)
                </span>{" "}
                – Extra login protection for all users
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className={`w-2.5 h-2.5 rounded-full mt-2 ${
                isDark ? "bg-purple-400" : "bg-purple-500"
              }`}></span>
              <p>
                <span className="font-semibold">
                  Knowledge-Based Authentication (KBA)
                </span>{" "}
                – Options include MAGIC, manual verification, and OTP via
                email/SMS
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className={`w-2.5 h-2.5 rounded-full mt-2 ${
                isDark ? "bg-purple-400" : "bg-purple-500"
              }`}></span>
              <p>
                <span className="font-semibold">Identity Verification</span> –
                Validate with SSN, PIN, and Date of Birth checks
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className={`w-2.5 h-2.5 rounded-full mt-2 ${
                isDark ? "bg-purple-400" : "bg-purple-500"
              }`}></span>
              <p>
                <span className="font-semibold">
                  Encrypted Storage & Transfer
                </span>{" "}
                – End-to-end encryption for all files and workflows
              </p>
            </li>
          </ul>

          {/* Footer Line */}
          <p className={`mt-8 font-semibold text-lg ${
            isDark ? "text-purple-300" : "text-purple-600"
          }`}>
            ➡️ With TaxPilot, security isn't an add-on — it's built into every
            step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;