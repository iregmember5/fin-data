
import { CheckCircle } from "lucide-react";

const CheckmarkFlowAnimation = () => {
  return (
    <div className="relative mt-16">
      <svg width="100%" height="100" viewBox="0 0 800 100" className="mx-auto">
        <path
          d="M50,50 C200,30 300,70 450,50 S600,30 750,50"
          fill="none"
          stroke="url(#lightGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw"
        />
        {[100, 300, 500, 700].map((x, i) => (
          <CheckCircle
            key={i}
            x={x}
            y={45}
            width="24"
            height="24"
            fill="currentColor"
            className="text-purple-500 animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        <defs>
          <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CheckmarkFlowAnimation