import React from "react";

import "../../../App.css";
import "./AbstractWhiteVideo.css";
export const AbstractWhiteVideo = () => {
  return (
    <React.Fragment>
      <video src="/assets/videos/intro-background.mp4" autoPlay loop muted />
    </React.Fragment>
  );
};
