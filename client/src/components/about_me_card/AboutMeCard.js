import React, { useEffect } from "react";

// CSS
import "./AboutMeCard.css";

// Components
import { AboutMeData } from "../data/about_me/AboutMeData";

// Scroll Out
import ScrollOut from "scroll-out";

const AboutMeCard = () => {
  // Mount
  useEffect(() => {
    ScrollOut({
      targets:
        ".about-me-description-container h1, .about-me-description-container h2, .about-me-description-container p, .about-me-description-container li, .about-me-image-container img",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="about-me-image-container">
        <img src="/assets/images/about/me-tdpk1.jpg" alt="" />
      </div>
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
                <React.Fragment key={index}>
                  <p>{data.descriptions}</p>
                  <br />
                </React.Fragment>
              );
            })}

            {/* Calendly */}
            <p>
              If you're interested, I love setting up coffee-chats with new
              people, you can schedule some time with me.
              <a
                href="https://calendly.com/tim-thanaphatj"
                target="_blank"
                rel="noopener noreferrer"
              >
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
    </React.Fragment>
  );
};

export default AboutMeCard;
