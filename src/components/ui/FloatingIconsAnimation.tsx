import React from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, ShieldCheck, CheckCircle } from "lucide-react";

const TaxScoreAnimation: React.FC = () => {
  const metrics = [
    {
      label: "",
      value: 85,
      color: "bg-green-500",
      icon: <DollarSign className="w-5 h-5 text-green-600" />,
    },
    {
      label: "",
      value: 92,
      color: "bg-blue-500",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "",
      value: 99,
      color: "bg-purple-500",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    },
    {
      label: "",
      value: 97,
      color: "bg-amber-500",
      icon: <CheckCircle className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <div className="relative mt-10 max-w-4xl mx-auto px-6">
      <div className="flex justify-center gap-10 items-end h-72">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center gap-3 w-24">
            {/* Vertical Bar */}
            <div className="relative w-8 h-56 bg-gray-200 rounded-full overflow-hidden flex items-end">
              <motion.div
                className={`w-full ${metric.color} rounded-full shadow-md`}
                initial={{ height: 0 }}
                animate={{ height: `${metric.value}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Icon */}
            <div className="flex flex-col items-center gap-1">
              {metric.icon}
              <span className="text-sm font-semibold text-gray-800 text-center">
                {metric.value}%
              </span>
            </div>

            {/* Label */}
            <span className="text-xs text-gray-600 text-center font-medium w-20">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative Glowing Circles */}
      <div className="absolute -top-6 -left-6 w-28 h-28 bg-green-200 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-200 rounded-full blur-2xl opacity-40"></div>
    </div>
  );
};

export default TaxScoreAnimation;
