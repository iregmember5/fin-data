import React from "react";
// import { motion } from "framer-motion";
import StockLineBackground from "../ui/StockLineBackground";

interface HeroProps {
  isDark: boolean;
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ isDark, id }) => {
  return (
    <div
      id={id}
      className={`min-h-screen relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-black-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-300 to-white text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          AI-Powered Tax Workflow Made Simple
        </h2>
        <p
          className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Smooth out every step — from gathering and organizing files, doing automated data entry / preparation of tax to ensuring most easy delivery and seamless integration — so your firm can focus on real work, not lost in the forest.
        </p>
        <div className="flex justify-center gap-4">
          <button className={`font-bold py-3 px-6 rounded-lg shadow-md backdrop-blur-md bg-purple-600/80 hover:bg-purple-700 text-white
          ` }>
            Get Started
          </button>
          <button className={` font-bold py-3 px-6 border border-purple-400/40 rounded-lg backdrop-blur-md  ${
            isDark ? "bg-black-500/20 hover:bg-purple-600/30 text-white" : "hover:bg-purple-700 text-purple-600/80 hover:text-white"} ` }>
            Talk to Us
          </button>
        </div>
      </div>

      {/* Stock Line Background */}
      {isDark ? <StockLineBackground/> : ""}
    </div>
  );
};

export default Hero;
