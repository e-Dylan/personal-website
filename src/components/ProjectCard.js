import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProjectContext } from '../contexts/ProjectContext';

import $ from 'jquery';


import ProjectDisplay from '../components/ProjectDisplay';

import '../components-styles/ProjectCard.scss';

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
}

export const hideProjectDisplay = () => {
	const display = document.querySelector(".project-display-container");
	const bg = document.querySelector(".project-display-bg");
	bg.classList.add("hidden");
	display.classList.add("hidden");
}

$(document).mouseup(e => {
	var displayBg = $(".project-display-bg");
	// if target isnt in display window:
	if (displayBg.is(e.target))
		hideProjectDisplay();
})

function ProjectCard(props) {
	const { value, setValue } = useContext(ProjectContext);

	return (
		<div className="project-card" onClick={() => {

		}}>

			<div className="project-image-container">
				<div className="overlay">
					<div className="project-titles">
						<div className="project-title">
							{ props.project.title }
						</div>
						<div className="project-subtitle">
							{ props.project.tech }
						</div>
					</div>
					
					<button className="image-button" onClick={() => {
						activeProject = props.project;
						setValue(props.project);
						showProjectDisplay(props.project);
					}}>
						View More
					</button>
				</div>
				<img src={ props.project.image } alt="Project Image" />
			</div>
			<div className="project-card-info">
				<div className="project-card-title">{ props.project.title }</div>
				<div className="project-card-category">{ props.project.category }</div>
				{/* <div className="project-description">{ props.description }</div> */}
			</div>
		</div>
			
		
	);

}

export default ProjectCard;