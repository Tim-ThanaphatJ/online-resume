// React
import React from "react";

// CSS
import "../../../../../App.css";
import "./Introduction.css";

// Components
import { AbstractWhiteVideo } from "../../../../background/abstract_white_video/AbstractWhiteVideo";
import { IntroductionCard } from "../../../../introduction/IntroductionCard";

const Introduction = () => {
  return (
    <React.Fragment>
      <div id="introduction-page-container" className="introduction-page-container">
        <AbstractWhiteVideo></AbstractWhiteVideo>
        <IntroductionCard></IntroductionCard>
      </div>
    </React.Fragment>
  );
};

export default Introduction;
