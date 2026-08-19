import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
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
      });
    }
  };

  const ContactMe = () => {
    const contacts = document.getElementById("contactme");
    if (contacts) {
      window.scrollTo({
        top: contacts.offsetTop,
      });
    }
  };
  const Projects = () => {
    const project = document.getElementById("project");
    if (project) {
      window.scrollTo({
        top: project.offsetTop,
      });
    }
  };
  return (
    <>
      <header>
        {windowSize.current > 576 && (
          <>
            <nav>
              <div>Er.Khagendra Singh Jora</div>
              <ul>
                {/* <li className="menu">Home</li> */}
                <li className="menu" onClick={PersonlDetails}>
                  About Me
                </li>
                <li className="menu" onClick={Projects}>
                  Works
                </li>
                <li className="menu" onClick={ContactMe}>
                  Contact
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
                {/* <li className="menu">Home</li> */}
                <li className="menu" onClick={PersonlDetails}>
                  About Me
                </li>
                <li className="menu" onClick={Projects}>
                  Works
                </li>
                <li className="menu" onClick={ContactMe}>
                  Contact
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

        <section className="hero">
          <div className="hero-copy">
            <p className="hero-kicker">Computer engineer · Nepal</p>
            <h1>Building useful software for real-world ideas.</h1>
            <p className="hero-description">
              I’m <strong>Khagendra Singh Jora</strong>, a Full Stack Developer
              focused on thoughtful web experiences and reliable systems.
            </p>
            <div className="hero-actions">
              <button className="hero-primary" onClick={Projects}>
                Explore my work <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="hero-secondary" onClick={ContactMe}>Let’s talk</button>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/er-khagendra-singh-jora-7a8808182/"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="links"
                  aria-label="LinkedIn"
                />
              </Link>
              <Link target="_blank" to="https://github.com/khagendrajora">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="links"
                  aria-label="GitHub"
                />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img src="/Assets/kj.JPG" alt="Khagendra Singh Jora" />
            </div>
            <div className="hero-note"><span>Currently</span><strong>Full Stack<br />Software Engineer</strong></div>
          </div>
        </section>
      </header>
    </>
  );
};
