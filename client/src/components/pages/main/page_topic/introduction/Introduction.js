// React
import React from "react";

// CSS
import "../../../../../App.css";
import "./Introduction.css";

// Components
import { IntroBackground } from "../../../../introduction/backckgroud/IntroBackground";
import { IntroductionCard } from "../../../../introduction/introduction_card/IntroductionCard";

const Introduction = () => {
  return (
    <React.Fragment>
      <div id="aboutme-page-container" className="introduction-page-container">
        <IntroBackground></IntroBackground>
        <IntroductionCard></IntroductionCard>
      </div>
    </React.Fragment>
  );
};

export default Introduction;
