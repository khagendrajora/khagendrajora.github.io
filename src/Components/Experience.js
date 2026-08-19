import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Helmet } from "react-helmet-async";

const skills = [
  ["C Programming", "/Assets/letter-c.png"], ["C++ Programming", "/Assets/c-.png"],
  ["JavaScript", "/Assets/java-script.png"], ["TypeScript", "/Assets/ts.png"],
  ["HTML", "/Assets/html-5.png"], ["CSS", "/Assets/css-3.png"],
  ["Bootstrap 5", "/Assets/bootstrap.png"], ["Tailwind CSS", "/Assets/tailwind.png"],
  ["React", "/Assets/react.png"], ["Express.js", "/Assets/express-js.png"],
  ["Node.js", "/Assets/nodejs.png"], ["Next.js", "/Assets/nextjs.png"],
  ["MongoDB", "/Assets/mdb.png"], ["PostgreSQL", "/Assets/icons8-postgresql-96.png"],
  ["Git", "/Assets/github.png"], ["Docker", "/Assets/dockerpng.png"],
  ["AWS Solutions Architect", "/Assets/images.png"],
];

const certificates = [
  ["MERN Stack", "Assets/mern.png"],
  ["AWS Solution Architect", "https://cp.certmetrics.com/amazon/en/public/verify/credential/2d0066ca65fe4ae791fb275b4e18389d"],
  ["Docker", "Assets/docker.pdf"], ["HEx Genius Hackathon", "/Assets/HEx.jpg"],
  ["In-House Project Competition", "Assets/dursikshya.jpg"], ["IIT Techfest Bombay", "Assets/Khagendra.png"],
];

export const Experience = () => (
  <>
    <Helmet><title>Skills and Certificates</title></Helmet>
    <Tooltip id="my-tooltip" />
    <section className="Experiences" aria-label="Skills and certificates">
      <div className="skills panel">
        <div className="title">Skills</div>
        <p className="section-intro">The tools I use to turn ideas into dependable digital products.</p>
        <div className="skill-grid">
          {skills.map(([name, image]) => (
            <div className="skill-item" key={name} data-tooltip-id="my-tooltip" data-tooltip-content={name}>
              <img src={image} alt={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="certificates panel">
        <div className="title">Certificates</div>
        <p className="section-intro">Selected learning milestones and community participation.</p>
        <div className="workshops">
          {certificates.map(([title, file], index) => (
            <button className="certificate-one" key={title} onClick={() => window.open(file, "_blank")}>
              <span className="one">{String(index + 1).padStart(2, "0")}</span>
              <span className="file">{title}</span>
              <span className="certificate-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  </>
);
