import React from "react";
import constData from "../../constants/constants";

const Mobile = () => {
  const backendSkills = constData.mobile;

  const firstGroupSkills = backendSkills.slice(
    0,
    Math.ceil(backendSkills.length / 2)
  );
  const secondGroupSkills = backendSkills.slice(
    Math.ceil(backendSkills.length / 2)
  );

  return (
    <div className="skills__content">
      <h3 className="skills__title">Mobile developer</h3>
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

export default Mobile;
