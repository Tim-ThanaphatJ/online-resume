import React from "react";

// Components
import Introduction from "./page_topic/introduction/Introduction";
import AboutMe from "./page_topic/about_me/AboutMe";
import Skills from "./page_topic/skills/Skills";

// CSS
import "./Main.css";

const Main = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    </React.Fragment>
  );
};

export default Main;
