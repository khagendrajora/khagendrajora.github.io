import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AnimationContext } from "../Context/useContext";

const PersonalDetails = () => {
  const { threshold } = useContext(AnimationContext);

  const Resume = () => {
    const file = "/Assets/Resume.pdf";
    window.open(file, "blank");
  };

  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });

  return (
    <>
      <div id="personalDetail">
        <Tooltip id="my-tooltip" />
        <div className="title">Personal Detail</div>
        <div className="container">
          <div
            className={`Left  hidden ${leftInView ? "animate" : ""}`}
            ref={leftRef}
          >
            <img
              src="Assets/kj.JPG"
              alt="khagendra"
              style={{ width: "20rem" }}
            />
          </div>
          <div
            className={`Right hidden ${rightInView ? "animate" : ""}`}
            ref={rightRef}
          >
            <p>
              I am a self-motivated and tech-enthusiastic professional, always
              ready to face challenges with a proactive mindset. With a strong
              foundation in computer engineering and hands-on experience as a
              developer, I grow in dynamic environments that demand continuous
              learning and innovation.
            </p>

            <h3>Education</h3>

            <div>
              Bachelor of Computer Engineering-{" "}
              <Link to="https://acem.edu.np/">
                Advanced College of Engineering and Management
              </Link>
            </div>
            <div>
              <b>Leadership Experience</b>- Former President and Vice-Secretary
              of PACE (Project Association of Computer and Electronics){" "}
            </div>
            <div>
              <b>Junoir Frontend / React</b>- Junior Frontend / React Developer
              at - DigiSoft Developers
            </div>
            <div>
              <b>Current Profession</b>- Junior Full Stack Developer at -{" "}
              <Link to="https://www.sinepal.com/">Smart Innovations</Link>
            </div>

            <button
              id="btn"
              className={`resume hidden ${buttonInView ? "animate" : ""}`}
              ref={buttonRef}
              onClick={Resume}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Click To View"
            >
              My Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
