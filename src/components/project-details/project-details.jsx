import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import "./styling.css";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const projectDetails = [
    {
      id: 1,
      platform: "mobile",
      image: require("../../assets/carpool-bg.png"),
      title: "TARUMT Carpooling Driver App",
      description:
        "Developed by using Kotlin for both frontend and backend, showcasing exceptional native mobile development skills. Integrated with Firebase APIs as the project database for authentication, real-time data synchronization and data storage. Integration with Google Maps API, Text Recognition API for project’s advanced features",
      technologies:
        "Kotlin, Firebase Authenticate, Realtime Database, Storage and Push Notification",
    },
    {
      id: 2,
      platform: "web",
      image: require("../../assets/confession-app.png"),
      title: "TARUMT Confession App",
      description:
        "Developed by using Flutter and Dart for hybrid mobile application. Provided a cross platform mobile application which is suitable for both android and iOS users which allow students to share their thoughts, emotions and secrets anonymously.",
      technologies:
        "Flutter with Dart, Firebase Authenticate, Realtime Database and Storage",
    },
    {
      id: 3,
      platform: "web",
      image: require("../../assets/solar-energy-website.png"),
      title: "Renewable Energy Web System",
      description:
        "Developed a solar energy website showcasing exceptional web design and development skills. Integrated with Firebase APIs as the project database for authentication, real-time data synchronization, data storage and web hosting. Performed some business functionalities such as content management, user management, appointment management for company side websites. Performed chatbot with NLP training model and sentiment analysis model in public side websites to get the data for analysis purpose for company to make business decisions.",
      technologies:
        "HTML, CSS, JavaScript and Bootstrap 5 (SCSS), Firebase Authenticate, Realtime Database, Storage, Flask, Python",
    },
  ];

  const { projectId } = useParams();

  const selectedProject = projectDetails.find(
    (project) => project.id === parseInt(projectId)
  );

  return (
    <>
      <Header />
      <main className="main">
        <section className="work section" id="portfolio">
          <h2 className="section__title">{selectedProject.title}</h2>
          <span className="section__subtitle">
            {selectedProject.description}
          </span>
          <img src={selectedProject.image} style={{ width: "100%" }} />
        </section>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ProjectDetails;
