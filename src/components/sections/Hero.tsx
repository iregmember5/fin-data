import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
 
  Zap, 
  Shield, 
  BarChart3, 
  DollarSign, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  
} from "lucide-react";

interface HeroProps {
  isDark: boolean;
  id?: string;
}

const cardData = [
  {
    id: 1,
    icon: <Shield size={32} />,
    heading: "What You Can Do with myfindata",
    pointA: "Implement tax plans, assemble tax & financial artifacts, enter data for tax returns, deliver final client documents, and become a custodian of your clients' data wallets."
  },
  {
    id: 2,
    icon: <DollarSign size={32} />,
    heading: "Earn Monthly Recurring Revenue",
    pointA: "Convert yearly tax engagements into monthly recurring tax plan implementation and compliance services.",
    pointB: "Maintain the financial data wallets for continuous value delivery."
  },
  {
    id: 3,
    icon: <BarChart3 size={32} />,
    heading: "Smooth Out Every Step",
    pointA: "Throughout the year, offer tax plan implementation and compliance services.",
    pointB: "During tax season, use AI to gather and organize tax files, perform automated data entry, and ensure seamless delivery.",
    pointC: "Help your clients cut costs by maintaining data wallets on an ongoing basis."
  }
];

const Hero: React.FC<HeroProps> = ({ isDark, id }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-rotate cards
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
    setIsPlaying(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  return (
    <div
      id={id}
      className={`min-h-screen relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-gray-100 text-gray-900"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDark ? "bg-purple-500/10" : "bg-purple-300/30"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tax Pros: Earn Back Diminishing Trust by Going{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Beyond the Call of Duty
          </span>
        </motion.h2>
        
        <motion.div 
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl mb-6">
            By becoming our Affiliate partner reduce our platform fees to a zero.... Plus earn a lot more....
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium">
            <Zap size={18} className="mr-2" />
            <button>Ask us how?</button>
          </div>
        </motion.div>

        {/* Card Carousel */}
        <motion.div 
          className="mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative h-80 md:h-72">
            <AnimatePresence mode="wait">
              {cardData.map((data, index) => (
                index === currentCard && (
                  <motion.div
                    key={data.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 rounded-3xl p-6 shadow-lg flex flex-col ${
                      isDark 
                        ? "bg-gray-800/70 backdrop-blur-md border border-purple-500/30" 
                        : "bg-white/80 backdrop-blur-md border border-purple-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full ${
                        isDark ? "bg-purple-700/30" : "bg-purple-100"
                      }`}>
                        {data.icon}
                      </div>
                      <div className="flex space-x-2">
                        {cardData.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setCurrentCard(i);
                              setIsPlaying(false);
                            }}
                            className={`w-2 h-2 rounded-full ${
                              i === currentCard
                                ? "bg-purple-500"
                                : isDark
                                ? "bg-gray-500"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}>
                      {data.heading}
                    </h3>
                    
                    <div className="text-left space-y-3 flex-1">
                      {data.pointA && (
                        <p className="flex items-start">
                          <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                            isDark ? "bg-purple-500" : "bg-purple-400"
                          }`}></span>
                          {data.pointA}
                        </p>
                      )}
                      {data.pointB && (
                        <p className="flex items-start">
                          <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                            isDark ? "bg-purple-500" : "bg-purple-400"
                          }`}></span>
                          {data.pointB}
                        </p>
                      )}
                      {data.pointC && (
                        <p className="flex items-start">
                          <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                            isDark ? "bg-purple-500" : "bg-purple-400"
                          }`}></span>
                          {data.pointC}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevCard}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 p-2 rounded-full ${
                isDark 
                  ? "bg-purple-700 hover:bg-purple-600 text-white" 
                  : "bg-white hover:bg-purple-100 text-purple-700 shadow-md"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCard}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 p-2 rounded-full ${
                isDark 
                  ? "bg-purple-700 hover:bg-purple-600 text-white" 
                  : "bg-white hover:bg-purple-100 text-purple-700 shadow-md"
              }`}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Play/Pause button */}
            {/* <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`absolute bottom-4 right-4 p-2 rounded-full ${
                isDark 
                  ? "bg-purple-700/50 hover:bg-purple-600 text-white" 
                  : "bg-white/80 hover:bg-white text-purple-700 shadow-md"
              }`}
            >
              {isPlaying ? (
                <div className="flex items-center">
                  <div className="w-1 h-3 mx-0.5 bg-current rounded-full"></div>
                  <div className="w-1 h-3 mx-0.5 bg-current rounded-full"></div>
                </div>
              ) : (
                <Play size={16} className="ml-0.5" />
              )}
            </button> */}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
           <button className={`font-bold py-3 px-6 rounded-lg shadow-md backdrop-blur-md bg-purple-600/80 hover:bg-purple-700 text-white
          ` }>
            Apply For Early Access
          </button>
          <button className={` font-bold py-3 px-6 border border-purple-400/40 rounded-lg backdrop-blur-md  ${
            isDark ? "bg-black-500/20 hover:bg-purple-600/30 text-white" : "hover:bg-purple-700 text-purple-600/80 hover:text-white"} ` }>
            Talk to Us
          </button>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 opacity-50">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Calendar size={40} className={isDark ? "text-purple-400" : "text-purple-500"} />
        </motion.div>
      </div>
      
      <div className="absolute top-10 right-10 opacity-50">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <BarChart3 size={40} className={isDark ? "text-blue-400" : "text-blue-500"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;