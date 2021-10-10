// React
import React, { useState } from "react";

// CSS
import "./IntroductionCard.css";

// Type Animation
import Typist from "react-typist";
import Typed from "react-typed";

// Components
import { Button } from "../../button/Button";

// React Icon
import * as FaIcons from "react-icons/fa";

// Speed Interval Typist
const nameTypistSpeedInterval = 60;
const descriptionTypistSpeedInterval = 30;
const buttonTypistSpeedInterval = 80;

export const IntroductionCard = () => {
  const [typingDoneFirst, setTypingDoneFirst] = useState(false);
  const [typingDoneSecond, setTypingDoneSecond] = useState(false);

  return (
    <React.Fragment>
      <div className="intro-glass-container">
        <div className="my-img-container">
          {/* <img src="/assets/images/introduction/14850541268639.jpg" alt="" /> */}
        </div>

        <div className="my-description-container">
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={nameTypistSpeedInterval}
            onTypingDone={() => setTypingDoneFirst(true)}
          >
            <h3 id="greeting">Hi, my name is</h3>
            <br />
            <h1 id="my-name">" Tim Thanaphat "</h1>
            <br />
          </Typist>

          {typingDoneFirst && (
            <Typist
              cursor={{ show: false }}
              avgTypingDelay={descriptionTypistSpeedInterval}
              onTypingDone={() => setTypingDoneSecond(true)}
            >
              <span id="description">
                <span className="description-capital">T</span>im is a passionate{" "}
                <span className="skill-color">P</span>roduct management,{" "}
                <span className="skill-color">E</span>ntrepreneur, and{" "}
                <span className="skill-color">V</span>isual story teller focused
                on human-centric design and building beautiful products
              </span>
            </Typist>
          )}
          <div
            className={
              typingDoneSecond ? "intro-underly active" : "intro-underly"
            }
          ></div>
          <br />
          {typingDoneSecond ? (
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              <Typed
                strings={["GET STARTED "]}
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
