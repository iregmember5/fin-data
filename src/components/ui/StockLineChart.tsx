import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const StockLineChart = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      // Set initial hidden state
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;

      // Trigger animation
      requestAnimationFrame(() => {
        pathRef.current!.style.transition = "stroke-dashoffset 2.5s ease-out";
        pathRef.current!.style.strokeDashoffset = "0";
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg
        width="600"
        height="300"
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Line Path */}
        <path
          ref={pathRef}
          d="M 0 250 Q 150 200 300 150 Q 450 100 600 50"
          stroke="#00ff88"
          strokeWidth="3"
          fill="none"
        />

        {/* Optional glow effect */}
        <path
          d="M 0 250 Q 150 200 300 150 Q 450 100 600 50"
          stroke="rgba(0,255,136,0.4)"
          strokeWidth="8"
          fill="none"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
};

export default StockLineChart;
