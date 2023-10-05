import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { ProjectContext } from "../contexts/ProjectContext";

import "../components-styles/ProjectDisplay.scss";

import { hideProjectDisplay } from "./ProjectCard";

/**
 * Context value:
 * image=
 * title=
 * category=
 * tech=
 * description=
 * date=
 *
 * @param {} props
 */

function ProjectDisplay(props) {
  const { value, setValue } = useContext(ProjectContext);

  return (
    <div className="project-display-bg hidden">
      <div
        className="project-display-container hidden"
        tabIndex="1"
        onBlur={props.onBlur}
      >
        <div className="project-display">
          <div className="image-col">
            <img src={value.image} />
          </div>

          <div className="info-col">
            <div className="project-info">
              <div className="title text-section">
                <div className="project-title">{value.title}</div>
                <div className="project-category">{value.category}</div>
                <div className="project-date">{value.date}</div>
              </div>

              <div className="description text-section">
                {value.description}
              </div>

              <div className="tech">
                Built with:
                <div className="project-tech">{value.tech}</div>
              </div>

              <div className="project-buttons">
                {value.seeLive && <a className="project-button">See Live</a>}
                {value.github && (
                  <a className="project-button" href={value.github}>
                    Github
                  </a>
                )}
                <a className="project-button" onClick={hideProjectDisplay}>
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
