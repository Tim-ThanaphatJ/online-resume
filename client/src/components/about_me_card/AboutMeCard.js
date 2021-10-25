import React from "react";

// CSS
import "./AboutMeCard.css";

// Components
import { AboutMeData } from "../data/about_me/AboutMeData";

const AboutMeCard = () => {
  return (
    <React.Fragment>
      <div className="about-me-description-container">
        <section>
          <div className="content">
            <h1>
              About Me
              <hr></hr>
            </h1>
            <br />
            <br />
            <h2>Hi there 👋</h2>
            <br />

            {/* Description */}
            {AboutMeData.descriptions.map((data, index) => {
              return (
                <React.Fragment key={(index)}>
                  <p>{data.descriptions}</p>
                  <br/>
                </React.Fragment>
              );
            })}

            {/* Calendly */}
            <p>
              If you're interested, I love setting up coffee-chats with new
              people, you can schedule some time with me.
              <a href="https://calendly.com/tim-thanaphatj" target="_blank" rel="noopener noreferrer">
                [here]
              </a>
            </p>
            <br />

            {/* About Me Datail */}
            <ul>
              {AboutMeData.details.map((data, index) => {
                return <li key={index}>{data.detail}</li>;
              })}
            </ul>
          </div>
        </section>
      </div>
      <div className="about-me-image-container"></div>
    </React.Fragment>
  );
};

export default AboutMeCard;
