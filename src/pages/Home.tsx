import React from "react";
import Hero from "../components/sections/Hero";
import IntegratedProducts from "../components/sections/IntegratedProducts";
import Security from "../components/sections/Security";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import SecondSection from "../components/sections/SecondSection";
import ProcessSection from "../components/sections/Steps";
import FirstSection from "../components/sections/FirstSection";

interface HomeProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ isDark, toggleTheme }) => {

  return (
    <>
      <Navbar isDark={isDark}  toggleTheme={toggleTheme}/>
      <Hero isDark={isDark} id="hero" />
      <FirstSection isDark={isDark} id="first" />
      <SecondSection isDark={isDark} id="second" />
      <ProcessSection isDark={isDark} id="process" />
      <IntegratedProducts  id="products" />
      <Security  id="security" />
      <CTA  id="cta" />

      <Footer isDark={isDark} />
    </>
  );
};

export default Home;
