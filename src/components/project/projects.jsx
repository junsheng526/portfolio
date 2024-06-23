import React from "react";
import Project from "../project/project";
import "./styles.css";
import projectData from "./project-data";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>

      <div className="projects__container container grid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
            videoSrc={project.videoSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
