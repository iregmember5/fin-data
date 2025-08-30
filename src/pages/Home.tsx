import React from "react";
import Hero from "../components/sections/Hero";
import IntegratedProducts from "../components/sections/IntegratedProducts";
import Security from "../components/sections/Security";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import SecondSection from "../components/sections/SecondSection";
import ProcessSection from "../components/sections/Steps";

const Home: React.FC = () => {
  const isDark = true; // Replace with your theme toggle

  return (
    <>
      <Navbar isDark={isDark} />
      <Hero isDark={isDark} id="hero" />
      <SecondSection id="second" />
      <ProcessSection id="process" />
      <IntegratedProducts isDark={isDark} id="products" />
      <Security isDark={isDark} id="security" />
      <CTA isDark={isDark} id="cta" />

      <Footer isDark={isDark} />
    </>
  );
};

export default Home;
