import React from "react";
import "./styles.css";

const Project = ({
  title,
  description,
  githubLink,
  deployedLink,
  videoSrc,
}) => {
  return (
    <div className="project">
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
      <div className="project__links">
        <a
          href={githubLink}
          className="project__link project__link--github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {deployedLink && (
          <a
            href={deployedLink}
            className="project__link project__link--deployed"
            target="_blank"
            rel="noopener noreferrer"
          >
            {deployedLink.endsWith(".apk") ? "Download APK" : "Try It Now"}
          </a>
        )}
      </div>
      {videoSrc && (
        <video
          className={
            deployedLink.endsWith(".apk")
              ? "project_mobile_video"
              : "project__video"
          }
          controls
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Project;
