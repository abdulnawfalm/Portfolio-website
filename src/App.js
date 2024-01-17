import React from "react";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./App.css";
import "./Components/Portfolio/Portfolio";
import HomeContent from "./Components/Portfolio/HomeContent/HomeContent";
import SocialLinks from "./Components/Portfolio/HomeContent/SocialLinks/SocialLinks";
import Buttons from "./Components/Portfolio/HomeContent/SocialLinks/Buttons/Buttons";
import About from "./Components/Portfolio/HomeContent/SocialLinks/Buttons/About/About";
import Skills from "./Components/Portfolio/HomeContent/SocialLinks/Buttons/About/Skills/Skills";
import Contact from "./Components/Portfolio/HomeContent/SocialLinks/Buttons/About/Skills/Contact/Contact";
import Footer from "./Components/Portfolio/HomeContent/SocialLinks/Buttons/About/Skills/Contact/Footer/Footer";

const App = () => {
  return (
    <div>
      <Portfolio />
      <HomeContent />
      <SocialLinks />
      <Buttons />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
