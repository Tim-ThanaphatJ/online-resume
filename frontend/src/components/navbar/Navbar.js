// React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// React Icon
import * as FiIcon from "react-icons/fi";
import * as CgIcon from "react-icons/cg";
import * as AiIcon from "react-icons/ai";

// Logo effect
// import * as VFX from "react-vfx";

// CSS
import "./Navbar.css";

// Components
import { LiNavbarData } from "./data/LiNavbarData";

// Scroll Out
import ScrollOut from "scroll-out";

export const Navbar = () => {
  // State
  const [click, setClick] = useState(false);
  const [classCurrentPage, setClassCurrentPage] = useState("home-nav-button")

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Mount
  useEffect(() => {
    // Scroll out
    ScrollOut({
      threshold: 0.5,
      targets: ".introduction-page-container, .aboutme-page-container, .skills-page-container",

      /* Triggered when an element is changed */
      onShown: function (element, ctx, scrollingElement) {
        if(ctx.element.id === "introduction-page-container") setClassCurrentPage("about-nav-button")
        else if(ctx.element.id === "aboutme-page-container") setClassCurrentPage("about-nav-button")
        else if(ctx.element.id === "skills-page-container") setClassCurrentPage("skills-nav-button")
        
      },
    });
  }, []);

  // Render Navbar Logo
  const renderNavLogo = () => {
    // const imgSrc = "/assets/images/logo/logo.png";

    return (
      <React.Fragment>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* <VFX.VFXProvider>
            <VFX.VFXImg src={imgSrc} shader="glitch" />
          </VFX.VFXProvider> */}
          HI
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <span>
            {click ? (
              <CgIcon.CgClose></CgIcon.CgClose>
            ) : (
              <FiIcon.FiMenu></FiIcon.FiMenu>
            )}
          </span>
        </div>
      </React.Fragment>
    );
  };

  // Render Navbar Menu Items
  const renderNavMenu = () => {
    return (
      <React.Fragment>
        <div className="nav-topics-button-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {LiNavbarData.map((item, index) => {
              return (
                <li key={index} className={`nav-item`}>
                  <a
                    href={item.linkto}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {item.name === "About" && (
                      <AiIcon.AiFillHome></AiIcon.AiFillHome>
                    )}
                    {"\u00A0"}{"\u00A0"}
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li className={`animation-button ${classCurrentPage}`}></li>
          </ul>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          {renderNavLogo()}
          {renderNavMenu()}
        </div>
      </nav>
    </React.Fragment>
  );
};
