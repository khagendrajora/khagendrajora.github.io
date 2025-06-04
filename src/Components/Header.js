import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  const [elementText, setElementText] = useState("");
  const windowSize = useRef(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const menuClickHandler = () => {
    setShowMenu(!showMenu);
  };
  const PersonlDetails = () => {
    const PersonlDetails = document.getElementById("personalDetail");
    if (PersonlDetails) {
      window.scrollTo({
        top: PersonlDetails.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const ContactMe = () => {
    const contacts = document.getElementById("contactme");
    if (contacts) {
      window.scrollTo({
        top: contacts.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const Projects = () => {
    const project = document.getElementById("project");
    if (project) {
      window.scrollTo({
        top: project.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const strings = ["Computer Engineer", "Full Stack Developer", "Programmer"];
    let index = 0;
    const len = strings.length;
    const repeat = setInterval(() => {
      if (index < len) {
        setElementText(strings[index]);
        index++;
      } else {
        index = 0;
      }
    }, 1000);
    return () => clearInterval(repeat);
  }, []);
  return (
    <>
      <header>
        {windowSize.current > 576 && (
          <>
            <nav style={{ position: "fixed" }}>
              <ul>Khagendra Singh Jora</ul>
              <ul>
                <li className="menu">Home</li>
                <li className="menu" onClick={PersonlDetails}>
                  About Me
                </li>
                <li className="menu" onClick={ContactMe}>
                  Contact
                </li>
                <li className="menu" onClick={Projects}>
                  Projects
                </li>
              </ul>
            </nav>
          </>
        )}
        {windowSize.current < 576 && (
          <>
            <div className="nav">
              <FontAwesomeIcon
                icon={faBars}
                className="menuIcon"
                onClick={menuClickHandler}
              />
              <ul className="name">Khagendra Singh Jora</ul>
            </div>

            <div
              className={
                showMenu
                  ? "nav-item mobile-menu visible"
                  : "mobile-menu nav-item"
              }
            >
              <ul className="nav-elements">
                <li className="menu">Home</li>
                <li className="menu" onClick={PersonlDetails}>
                  About Me
                </li>
                <li className="menu" onClick={ContactMe}>
                  Contact
                </li>
                <li className="menu" onClick={Projects}>
                  Projects
                </li>
              </ul>
              <FontAwesomeIcon
                icon={faXmark}
                className="close"
                style={{ color: "black" }}
                onClick={menuClickHandler}
              />
            </div>
          </>
        )}

        <div className="image">
          <img src="/Assets/lap.jpg" alt="logo" />
          <div className="info">
            <h1>Hi I am Er.Khagendra Singh Jora</h1>
            <p>
              I am a <span id="element">{elementText}</span>{" "}
            </p>
            <div style={{ marginTop: "17px" }}>
              <Link to="https://www.linkedin.com/in/er-khagendra-singh-jora-7a8808182/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="links"
                  style={{ color: "blue", marginRight: "20px" }}
                />
              </Link>
              <Link to="https://github.com/khagendrajora">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="links"
                  style={{ color: "black" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
