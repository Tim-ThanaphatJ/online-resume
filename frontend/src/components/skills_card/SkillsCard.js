import React, { useEffect } from "react";

// CSS
import "./SkillsCard.css";

// Scroll Out
import ScrollOut from "scroll-out";

// Components
import { SkillsData } from "../data/skills/SkillsData";

const SkillsCard = () => {
  // Mount
  useEffect(() => {
    ScrollOut({
      threshold: 0.30,
      targets:
        ".skills-card-container h1, .skills-card-container h2, .skills-card-container p, .skills-card-container li, .about-me-image-container img, .skill-slot0, .skill-slot1, .skill-slot2, .skill-slot3",
    });
  }, []);

  // Header Section
  const renderHeaderSection = () => {
    return (
      <section>
        <div className="content">
          <h1>
            Skills
            <hr></hr>
          </h1>
          <br />
          <br />
          <h2>The more I practice, the better I get 💪</h2>
          <br />
        </div>
      </section>
    );
  };

  return (
    <React.Fragment>
      <div className="skills-card-container">
        {renderHeaderSection()}
        <div className="skill-slot-container">
          {SkillsData.map((data, index) => {
            return (
              <div className={`skill-slot skill-slot${index%4}`}>
                <h1>{data.header}</h1>
                <div className="ul-container">
                  <ul>
                    {data.skillsSet.map((skillData, indexSkillData) => {
                      return (
                        <li>{skillData}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillsCard;
