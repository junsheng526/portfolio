import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import timelineData from "./timeline-data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect } from "react";

const Timeline = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#F9C74F" };

  return (
    <section className="timeline section" id="timeline">
      <h2 className="section__title">Timeline</h2>
      <span className="section__subtitle">My personel journey</span>
      <div>
        <VerticalTimeline>
          {timelineData.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <MdWork /> : <FaUserGraduate />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
