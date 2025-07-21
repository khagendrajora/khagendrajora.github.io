import { Helmet } from "react-helmet-async";
import Project from "../Content/Project.json";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>My Projects | Full Stack & React Developer Portfolio</title>
        <meta
          name="description"
          content="real-world projects built using React, Node.js, Express, MongoDB, Laravel, Docker and more. Showcasing web development, UI/UX, and backend skills."
        />
        <meta
          name="keywords"
          content="React projects, Full stack developer, MERN stack, Node.js, MongoDB, Laravel, Portfolio, Web Development, Frontend, Backend"
        />
        <meta name="author" content="Khagendra Jora" />
        <meta property="og:title" content="Web Development Projects" />
        <meta
          property="og:description"
          content="Browse portfolio projects built by Khagendra Jora using modern web technologies like React, Express, and Docker."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.khagendrajora.com.np/" />
        <meta
          property="og:image"
          content="https://www.khagendrajora.com.np/Assets/kj.JPG"
        />
        <link
          rel="canonical"
          href="https://www.khagendrajora.com.np/Assets/kj.JPG"
        />
      </Helmet>
      <div className="projects" id="project">
        <div className="title">Projects</div>
        <br />
        <div className="works">
          {Project &&
            Project.map((project, index) => (
              <div className="app" key={index}>
                <div className="innerapp">
                  <div className="icon">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="projectTitle">{project.title}</div>
                </div>
                <p>{project.description}</p>
                <div className="button-container">
                  <button className="btn">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkLabel}
                    </a>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
