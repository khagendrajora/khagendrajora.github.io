import React from "react";
import Project from "../Content/Project.json";

const Projects = () => {
  return (
    <>
      <div className="projects" id="project">
        <div className="title">Projects</div>
        <br />
        <div className="works">
          {Project &&
            Project.map((project, index) => (
              <div className="app">
                <div className="innerapp">
                  <div className="icon">
                    <img src={project.image} />
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
