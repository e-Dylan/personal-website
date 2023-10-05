import React, { createContext, useContext } from "react";

import { ProjectContext } from "../contexts/ProjectContext";

import $ from "jquery";

import ProjectDisplay from "../components/ProjectDisplay";

import "../components-styles/ProjectCard.scss";

/**
 * Props:
 * image=
 * title=
 * category=
 * description=
 * date=
 * displayCard=
 *
 * @param {} props
 */

var activeProject = {};

const showProjectDisplay = (project) => {
  const display = document.querySelector(".project-display-container");
  const bg = document.querySelector(".project-display-bg");
  bg.classList.remove("hidden");
  display.classList.remove("hidden");
};

export const hideProjectDisplay = () => {
  const display = document.querySelector(".project-display-container");
  const bg = document.querySelector(".project-display-bg");
  bg.classList.add("hidden");
  display.classList.add("hidden");
};

$(document).mouseup((e) => {
  var displayBg = $(".project-display-bg");
  // if target isnt in display window:
  if (displayBg.is(e.target)) hideProjectDisplay();
});

function ProjectCard({ project }) {
  const { value, setValue } = useContext(ProjectContext);

  return (
    <div className="project-card" onClick={() => {}}>
      <div className="project-image-container">
        <div className="overlay">
          <div className="project-titles">
            <div className="project-title">{project.title}</div>
            <div className="project-subtitle">{project.tech}</div>
          </div>

          <button
            className="image-button"
            onClick={() => {
              activeProject = project;
              setValue(project);
              showProjectDisplay(project);
            }}
          >
            View More
          </button>
        </div>
        <img src={project.image} alt="Project Image" />
      </div>
      <div className="project-card-info">
        <div className="project-card-title">{project.title}</div>
        <div className="project-card-category">{project.category}</div>
        {/* <div className="project-description">{ description }</div> */}
      </div>
    </div>
  );
}

export default ProjectCard;
