import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import "./styling.css";
import { useParams } from "react-router-dom";

const carpoolImgArray = [
  {
    text: "Login Page",
    image: require("../../assets/carpool/carpool-login.png"),
  },
  {
    text: "Home Page",
    image: require("../../assets/carpool/carpool-home.png"),
  },
  {
    text: "Carpool Page",
    image: require("../../assets/carpool/carpool-trip.png"),
  },
  {
    text: "Profile Page",
    image: require("../../assets/carpool/carpool-profile.png"),
  },
  {
    text: "Create Trip Page",
    image: require("../../assets/carpool/carpool-create-trip.png"),
  },
  {
    text: "Setting Page",
    image: require("../../assets/carpool/carpool-setting.png"),
  },
  {
    text: "Verify Document Page",
    image: require("../../assets/carpool/carpool-verify-doc.png"),
  },
  {
    text: "Verify Car Page",
    image: require("../../assets/carpool/carpool-verify-car.png"),
  },
  {
    text: "Wallet Page",
    image: require("../../assets/carpool/carpool-wallet.png"),
  },
];

const ProjectDetails = () => {
  const projectDetails = [
    {
      id: 1,
      platform: "mobile",
      background: require("../../assets/carpool-bg.jpg"),
      image: require("../../assets/carpool-1.png"),
      title: "TARUMT Carpooling Driver App",
      subtitle: "Aimed to solve the traffic problem in TARUMT KL Campus Areas",
      description:
        "There are some objectives we are going to develop the car pooling system: First, the first objective is to save the fuel cost for those students who always bring their own private cars alone for daily going to and returning from campus. Besides, it is also providing an opportunity for students who own a car to earn extra income around the campus. Next, to provide a reliable platform operated by TAR UMT to manage the driver information such as identity card and driving licence in order to set up a safety environment for the system operating. Furthermore, to solve the heavy traffic congestion around the campus. On the other hand, to decrease the air pollution around the campus and provide fresh quality air for the students for their daily activities on campus. Other than that, to solve the problem which is the lack of car parking in the campus. ",
      technologies:
        "Kotlin, Firebase Authenticate, Realtime Database, Storage and Push Notification",
      imgArray: carpoolImgArray,
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
        <section className="section outter-container">
          <div className="inner-container">
            <div className="left-container">
              <h2 className="detail-title">{selectedProject.title}</h2>
              <span className="detail-subtitle">
                {selectedProject.subtitle}
              </span>
              <button className="button detail-button">APK Download</button>
            </div>
            <img src={selectedProject.image} className="detail-img-bg" />
          </div>
        </section>
        <section className="section about-section">
          <div className="about-title-container">
            <h2 className="about-title">About</h2>
            <span className="about-description">
              {selectedProject.description}
            </span>
          </div>
        </section>
        <section className="section features-section">
          <div className="about-title-container">
            <h2 className="about-title">Features</h2>
            <div>project features...</div>
          </div>
          <div className="img-array-container">
            {selectedProject.imgArray.map((item, index) => (
              <div key={index} className="img-item">
                <img src={item.image} alt={item.text} />
                <h3 className="img-text">{item.text}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ProjectDetails;
