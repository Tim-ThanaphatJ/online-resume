// React
import React, { useState } from "react";
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

export const Navbar = () => {
  // State
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const [button, setButton] = useState(true);
  // const showButton = () => {
  //   window.innerWidth <= 960 ? setButton(false) : setButton(true);
  // };
  // window.addEventListener("resize", showButton);

  // Mount
  // useEffect(() => {
  //   showButton();
  // }, []);

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
                    {item.name === "Home" && (
                      <AiIcon.AiFillHome></AiIcon.AiFillHome>
                    )}
                    {"\u00A0"}
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li className="animation-button home-nav-button"></li>
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
