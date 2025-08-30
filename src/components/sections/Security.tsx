import React from "react";
import { ShieldCheck } from "lucide-react";

const Security: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      className="flex justify-center items-center py-16 px-6 hex-background"
    >
      <style jsx>{`
        .hex-background {
          background-color: #0f172a;
          background-image: linear-gradient(
              rgba(26, 58, 92, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(26, 58, 92, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>

      <div className="max-w-3xl w-full bg-black-800/60 rounded-3xl p-8 backdrop-blur-sm border border-slate-600/40 shadow-2xl relative overflow-hidden">
        {/* Purple Glow Shadow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl blur-2xl opacity-20"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-10 h-10 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Advanced Security</h2>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed">
            Protect Client Data with{" "}
            <span className="font-semibold text-purple-400">
              Bank-Grade Security
            </span>
            . Your clients trust you with their most sensitive financial data.
            We ensure it stays secure with multiple layers of authentication and
            compliance-ready safeguards.
          </p>

          {/* Features */}
          <ul className="space-y-4 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2"></span>
              <p>
                <span className="font-semibold">
                  Multi-Factor Authentication (MFA)
                </span>{" "}
                – Extra login protection for all users
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2"></span>
              <p>
                <span className="font-semibold">
                  Knowledge-Based Authentication (KBA)
                </span>{" "}
                – Options include MAGIC, manual verification, and OTP via
                email/SMS
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2"></span>
              <p>
                <span className="font-semibold">Identity Verification</span> –
                Validate with SSN, PIN, and Date of Birth checks
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2"></span>
              <p>
                <span className="font-semibold">
                  Encrypted Storage & Transfer
                </span>{" "}
                – End-to-end encryption for all files and workflows
              </p>
            </li>
          </ul>

          {/* Footer Line */}
          <p className="mt-8 text-purple-300 font-semibold text-lg">
            ➡️ With TaxPilot, security isn’t an add-on — it’s built into every
            step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
