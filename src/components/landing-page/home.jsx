import React from "react";
import "../../App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Qualification from "../qualification/Qualification";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import Work from "../work/Work";
import Timeline from "../timeline/timeline";

const Landing = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Timeline />
        {/* <Qualification />
        <Work /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default Landing;
