import React, { useState } from "react";

import { ProjectContext } from "../contexts/ProjectContext";

import "../components-styles/Projects.scss";
import "../components-styles/ProjectDisplay.scss";

import ProjectCard from "../components/ProjectCard";
import ProjectDisplay from "../components/ProjectDisplay";

import projects from "../projects";

import githubIcon from "../resources/social-icons/github.svg";
import { Box, Flex, Text } from "@chakra-ui/layout";

function Projects(props) {
  const [value, setValue] = useState("one");

  return (
    <div className="container-center">
      <div className="section-title">
        <div data-aos="zoom-in-right" data-aos-duration="600">
          PROJECTS
        </div>
        <div
          className="section-title-underline"
          data-aos="zoom-in-right"
          data-aos-duration="600"
          data-aos-delay="200"
        ></div>
      </div>

      {/* Global project-display window */}
      <ProjectContext.Provider value={{ value, setValue }}>
        <div className="project-display-window">
          <ProjectDisplay />
        </div>

        <div className="projects-container">
          {Object.keys(projects).map((key, index) => {
            return <ProjectCard project={projects[key]} />;
          })}
        </div>
      </ProjectContext.Provider>

      <Flex direction="column" align="center" w="auto" className="centerX">
        <Text fontSize="20px" my="12">
          Find Project Code
        </Text>
        <Box w="150px">
          <a target="_blank" rel="noreferrer" href="https://github.com/e-Dylan">
            <div className="front-icon" style={{ borderRadius: "10px" }}>
              <img src={githubIcon} alt="Github" />
            </div>
          </a>
        </Box>
      </Flex>
    </div>
  );
}

export default Projects;
