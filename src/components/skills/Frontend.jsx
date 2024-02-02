import React from "react";
import constData from "../../constants/constants";

const Frontend = () => {
  const frontendSkills = constData.frontend;

  const firstGroupSkills = frontendSkills.slice(
    0,
    Math.ceil(frontendSkills.length / 2)
  );
  const secondGroupSkills = frontendSkills.slice(
    Math.ceil(frontendSkills.length / 2)
  );

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {firstGroupSkills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills__group">
          {secondGroupSkills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
