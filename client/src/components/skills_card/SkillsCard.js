import React, { useEffect } from "react";

// CSS
import "./SkillsCard.css";

// Scroll Out
import ScrollOut from "scroll-out";

const SkillsCard = () => {
  // Mount
  useEffect(() => {
    ScrollOut({
      targets:
        ".skills-card-container h1, .skills-card-container h2, .skills-card-container p, .skills-card-container li, .about-me-image-container img",
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
          <h2>Hi there 👋</h2>
          <br />
        </div>
      </section>
    );
  };

  return (
    <React.Fragment>
      <div className="skills-card-container">
        {renderHeaderSection()}
        <div className="skill-slot-container">adsfsa</div>
      </div>
    </React.Fragment>
  );
};

export default SkillsCard;
