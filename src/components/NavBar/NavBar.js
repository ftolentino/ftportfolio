import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";

import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <nav className="navbar">
        <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              FT
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/contact" className="btn-link">
                    <Button buttonStyle="btn--outline">Contact</Button>
                  </Link>
                ) : (
                  <Link to="/contact" className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Contact
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
        </div>
      </nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
