// React
import React, { useState, useEffect } from "react";

// CSS
import "./IntroductionCard.css";

// Type Animation
import Typist from "react-typist";
import Typed from "react-typed";

// Components
import { Button } from "../../components/button/Button";

// React Icon
import * as FaIcons from "react-icons/fa";

// Descpition Data
import { IntroductionData } from "../../components/data/introduction/IntroductionData";

import PictToPix from "./pict_to_pix/PictToPix";

// Speed Interval Typist
const nameTypistSpeedInterval = 60;
const descriptionTypistSpeedInterval = 10;
const buttonTypistSpeedInterval = 80;

export const IntroductionCard = () => {
  const [typingDoneFirst, setTypingDoneFirst] = useState(false);
  const [typingDoneSecond, setTypingDoneSecond] = useState(false);

  useEffect(() => {});

  return (
    <React.Fragment>
      <div className="intro-glass-container">
        <div className="my-img-container">
          <PictToPix></PictToPix>
          {/* <canvas id="canvas"></canvas> */}
          {/* <img src="/assets/images/introduction/my-intro.png" alt="" /> */}
        </div>

        <div className="my-description-container">
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={nameTypistSpeedInterval}
            onTypingDone={() => setTypingDoneFirst(true)}
          >
            {IntroductionData.greeting}
            <br />
            {IntroductionData.name}
            <br />
          </Typist>

          {typingDoneFirst && (
            <Typist
              cursor={{ show: false }}
              avgTypingDelay={descriptionTypistSpeedInterval}
              onTypingDone={() => setTypingDoneSecond(true)}
            >
              <span id="description">
                {IntroductionData.descriptions.map((data, index) => {
                  if (data.cName)
                    return (
                      <span key={index} className={data.cName}>{data.description}</span>
                    );
                  else {
                    return <span key={index}>{data.description}</span>;
                  }
                })}
              </span>
            </Typist>
          )}
          <div
            className={
              typingDoneSecond ? "intro-underly active" : "intro-underly"
            }
          ></div>
          
          {typingDoneSecond ? (
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              <Typed
                strings={[" ABOUT-ME "]}
                typeSpeed={buttonTypistSpeedInterval}
                backSpeed={buttonTypistSpeedInterval}
                loop
                showCursor={false}
              />{" "}
              <FaIcons.FaRegPlayCircle></FaIcons.FaRegPlayCircle>
            </Button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
