import React from "react";
import "../../App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import Timeline from "../timeline/timeline";
import Projects from "../project/projects";

const Landing = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Timeline /> */}
        {/* <Qualification />
        <Work /> */}
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default Landing;
