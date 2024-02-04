import React from "react";
import "./styling.css";
import { useNavigate } from "react-router-dom";

const Project = ({ image, title, description, technologies, isLast, id }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log("onClick id >> " + id);
    navigate("/project-page/" + id);
  };

  return (
    <div className={isLast ? "card last-project" : "card"}>
      <img src={image} className="img" alt="Project Screenshot" />
      <div className="card-text-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="technologies">Technologies: {technologies}</p>
        <button className="button" onClick={() => handleClick(id)}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default Project;
