import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [isButton, setIsButton] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsButton(true);

    emailjs
      .sendForm("service_0ol2zmr", "template_dga760m", form.current, {
        publicKey: "XTzIryEJ7sNcW50an",
      })
      .then(
        () => {
          toast.success("Message Sent Succesfully");
          form.current.reset();
          setIsButton(false);
        },
        (error) => {
          toast.error("FAILED to send", error.text);
          setIsButton(false);
        }
      );
  };
  return (
    <>
      <ToastContainer theme="dark" role="alert" position="top-center" />
      <div className="contactme" id="contactme">
        <div className="leftOne">
          <div>
            <img
              src="Assets/contact.png"
              alt="contact Me"
              style={{ width: "500px", height: "400px" }}
            />
          </div>
          <div className="left">
            <div className="title">Contact Me</div>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="from_name"
                id="name"
                className="form-control"
                placeholder=" Name"
                size="40"
              />
              <input
                type="email"
                name="from_email"
                id="email"
                className="form-control"
                placeholder="&#xf0e0; Email"
                style={{ fontFamily: "FontAwesome" }}
              />

              <textarea
                name="message"
                rows="5"
                cols="2"
                id="message"
                className="form-control"
                placeholder="&#xf007; Message"
                style={{
                  fontFamily: "FontAwesome",
                  borderRadius: "1rem",
                  resize: "none",
                  padding: "1rem",
                  marginBottom: "2rem",
                }}
              />
              <button
                type="submit"
                disabled={isButton}
                style={{
                  opacity: isButton ? 0.6 : 1,
                  cursor: isButton ? "not-allowed" : "pointer",
                }}
              >
                {isButton ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="social-links">
            <Link target="_blank" to="https://www.facebook.com/khagendra.jora">
              <FontAwesomeIcon
                icon={faFacebook}
                className="links"
                style={{ color: "blue" }}
              />
            </Link>
            {/* <Link to="">
              <FontAwesomeIcon
                icon={faInstagram}
                className="links"
                style={{ color: "red" }}
              />
            </Link> */}
          </div>
          <br />
          <br />
          <div className="social-links">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/er-khagendra-singh-jora-7a8808182/"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="links"
                style={{ color: "blue" }}
              />
            </Link>
            <Link target="_blank" to="https://github.com/khagendrajora">
              <FontAwesomeIcon
                icon={faGithub}
                className="links"
                style={{ color: "black" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
