import React from "react";

// Components
import Introduction from "./page_topic/introduction/Introduction";
import AboutMe from "./page_topic/about_me/AboutMe";

// CSS
import "./Main.css";

const Main = () => {
  return (
    <React.Fragment>
      <Introduction></Introduction> 
      <AboutMe></AboutMe>
    </React.Fragment>
  );
};

export default Main;
