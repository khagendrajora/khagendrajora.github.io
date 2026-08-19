import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const PersonalDetails = () => {
  const Resume = () => {
    const file = "/Assets/Resume.pdf";
    window.open(file, "blank");
  };

  return (
    <>
      <Helmet>
        <title>Khagendra's | Developer & Engineer</title>
        <meta
          name="description"
          content="Khagendra — a self-motivated Computer Engineer and Full Stack Developer at Smart Innovations. Learn about his education, experiences, and achievements."
        />
        <meta
          name="keywords"
          content="Khagendra, Developer, React, Full Stack, Smart Innovations, DigiSoft, ACEM, Portfolio, MERN"
        />
        <meta name="author" content="Khagendra Singh Jora" />
        <meta property="og:title" content="Khagendra's Portfolio" />
        <meta
          property="og:description"
          content="Personal and professional details of Khagendra, a tech-enthusiastic Full Stack Developer."
        />
        <meta
          property="og:image"
          content="https://www.khagendrajora.com.np/Assets/kj.JPG"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.khagendrajora.com.np/" />
      </Helmet>
      <div id="personalDetail">
        <Tooltip id="my-tooltip" />
        <div className="title">About me</div>
        <div className="container">
          <div className="Left profile-summary">
            <span className="profile-label">Professional profile</span>
            <h2>Software Engineer<br />with 2+ years of experience.</h2>
            <p>Building practical web applications and dependable software systems from idea to delivery.</p>
            <button
              id="btn"
              className={`resume `}
              onClick={Resume}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Click To View"
            >
              My Resume
            </button>
          </div>
          <div className="Right">
            <p>
              I am a self-motivated and tech-enthusiastic professional, always
              ready to face challenges with a proactive mindset. With a strong
              foundation in computer engineering and hands-on experience as a
              developer, I grow in dynamic environments that demand continuous
              learning and innovation.
            </p>

            <h1>Career journey</h1>
            <section className="timeline-group">
              <h2>Work experience</h2>
              <div className="timeline">
              <article className="timeline-item current">
                <span className="timeline-date">March 2026 — Present</span>
                <h3>Mid-Level Software Developer-Backend</h3>
                <p><Link target="_blank" to="https://bidhee.com/">Bidhee Pvt. Ltd.</Link></p>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">August 2024 — January 2026</span>
                <h3>Full Stack Developer</h3>
                <p><Link target="_blank" to="https://smartinnovation.com.np/">Smart Innovations</Link></p>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">December 2023 — February 2024</span>
                <h3>Student Fellow</h3>
                <p>Pahadi Research LLC</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">September 2023 — November 2023</span>
                <h3>Intern</h3>
                <p>GoldenDuck Enterprises</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">Leadership experience</span>
                <h3>Project Association of Computer and Electronics (PACE)</h3>
                <p>Former President and Vice-Secretary.</p>
              </article>
              </div>
            </section>
            <section className="timeline-group">
              <h2>Education</h2>
              <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-date">2019 — 2024</span>
                <h3>Bachelor in Computer Engineering</h3>
                <p><Link target="_blank" to="https://acem.edu.np/">Advanced College of Engineering and Management</Link></p>
              </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
