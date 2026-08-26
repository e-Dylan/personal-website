"use client";

import "../components-styles/Projects.scss";

import projects from "../projects";

const githubIcon = "/resources/social-icons/github.svg";

function Projects() {
  const projectKeys = Object.keys(projects);

  return (
    <section id="projects" className="projects-section">
      <div className="container-center">
        <div className="section-title">
          <div data-aos="zoom-in-right" data-aos-duration="600">
            PROJECTS
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="600"
            data-aos-delay="150"
            className="section-title-underline"
          />
        </div>

        <div className="projects-container">
          {projectKeys.map((key, index) => {
            const project = projects[key];
            return (
              <div
                className="project-card"
                key={key}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={index * 100}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="project-image-fade" />
                </div>
                <div className="project-card-body">
                  <div className="project-card-heading">
                    <div className="project-card-title">{project.title}</div>
                    <div className="project-card-date">{project.date}</div>
                  </div>
                  <div className="project-card-category">
                    {project.category}
                  </div>
                  <div className="project-card-tech">{project.tech}</div>
                  <div className="project-card-description">
                    {project.description}
                  </div>
                  <div className="project-card-links">
                    {project.seeLive && (
                      <a
                        className="button-dark"
                        target="_blank"
                        rel="noreferrer"
                        href={project.seeLive}
                      >
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        className="button-dark button-outline"
                        target="_blank"
                        rel="noreferrer"
                        href={project.github}
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-buttons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/e-Dylan"
          >
            <div className="front-icon" style={{ borderRadius: "10px" }}>
              <img src={githubIcon} alt="Github" />
            </div>
          </a>
          <div className="projects-buttons-text">
            Find more of my projects on GitHub
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
