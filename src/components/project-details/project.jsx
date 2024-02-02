import React from "react";
import Work1 from "../../assets/solar-energy-website.jpg";
import HomePage from "../../assets/home-page.png";
import "./styling.css";

const Project = ({ image, title, description, technologies, isLast }) => {
  return (
    <div className={isLast ? "card last-project" : "card"}>
      <img src={image} className="img" alt="Project Screenshot" />
      <div className="card-text-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="technologies">Technologies: {technologies}</p>
        <button className="button">More Details</button>
      </div>
    </div>
  );
};

export default Project;
