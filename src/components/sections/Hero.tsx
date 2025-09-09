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
  CreditCard,
  Crown,
  Repeat,
  Users,
  
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
  },
  {
    id: 4,
    icon: <Users size={20} className="text-white" />,
    heading: "Tax Pros: Earn Back Diminishing Trust by Going Beyond the Call of Duty",
    pointA: "By becoming our Affiliate partner reduce our platform fees to zero",
    pointB: "Earn additional income through our affiliate program",
    pointC: "Enhance client trust by providing exceptional service beyond traditional tax preparation"
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
        <motion.div 
  className="max-w-4xl mx-auto mb-12 px-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  {/* Main Headline */}
  <motion.h1 
    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Tax Pros: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Reclaim Your Precious Time</span> & Win More Loyal Customers
  </motion.h1>

  <motion.p
    className="text-lg md:text-xl mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
Take a deep sigh of relief!  <br />

Days of laborious manual data entry, gathering and delivery of tax documents are numbered....<br />

"The painful back-and-forth with demanding clients is finally stopping."<br />

"No more clients endlessly hogging time."
  </motion.p>

  {/* Subheadline */}
  <motion.div 
    className="mb-8 space-y-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <div className="flex items-start">
      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mr-4 mt-1">
        <Users size={18} className="text-purple-600 dark:text-purple-400" />
      </div>
      <p>We help create stickiness and habit forming tactics to build customer loyalty.</p>
    </div>
    
    <div className="flex items-start">
      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4 mt-1">
        <Repeat size={18} className="text-blue-600 dark:text-blue-400" />
      </div>
      <p>We create reasons for your clients to come back over and over again throughout the year.</p>
    </div>
  </motion.div>

  {/* Key Value Point - Highlighted */}
  <motion.div 
    className={`p-6 rounded-2xl mb-8 ${isDark ? "bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30" : "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200"} shadow-lg`}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <div className="flex items-start">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full mr-4">
        <CreditCard size={20} className="text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Exclusive Credit System</h3>
        <p className="font-semibold text-lg mb-1">More ways to earn credits on our platform...</p>
        <p className="text-gray-700 dark:text-gray-300">Thereby enabling you to earn both: <span className="font-bold text-purple-600 dark:text-purple-400">discountable/price deductible credits</span> as well as <span className="font-bold text-blue-600 dark:text-blue-400">refundable credits</span>.</p>
      </div>
    </div>
  </motion.div>



  {/* CTA Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full shadow-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 ease-out">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 -ml-12 transition-all duration-500 ease-out transform -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-10 group-hover:-translate-x-56 group-hover:-translate-y-56"></span>
      <span className="relative flex items-center">
        <Zap size={20} className="mr-3" fill="currentColor" />
         Ask Us How 
      </span>
    </button>
  </motion.div>
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
 
          </div>
        </motion.div>

      </div>
      {/* Affiliate Partner Section */}


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