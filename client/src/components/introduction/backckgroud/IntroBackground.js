import React from "react";

import "../../../App.css";
import "./IntroBackground.css";
export const IntroBackground = () => {
  return (
    <React.Fragment>
      <video src="/assets/videos/intro-background.mp4" autoPlay loop muted />
    </React.Fragment>
  );
};
