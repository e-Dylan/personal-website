import React from "react";

// import scrollFunction from './Homepage';

import "../components-styles/About.scss";

import mlIcon from "../resources/about/about_icons/mlIcon.png";
import fullstackIcon from "../resources/about/about_icons/fullstackIcon.png";
import embeddedIcon from "../resources/about/about_icons/embeddedIcon.png";
import mobileIcon from "../resources/about/about_icons/mobileIcon.png";

import portraitPhoto from "../resources/about/headshot_2.png";
import { languageSkills } from "../languageSkills";
import { Box } from "@chakra-ui/react";

export const skillsItems = [
  "React",
  "NodeJS",
  "jQuery",
  "Fullstack Development",
  "MongoDB",
  "SQL",
  "API Architecture",
  "Machine Learning/AI",
  "Deep Learning",
  "PyTorch",
  "Machine Vision",
  "Linux",
  "Git/Github",
  "Algorithm Design",
  "Unity",
];

const About = () => {
  return (
    <div className="container-center">
      <div className="section-title">
        <div data-aos="zoom-in-right" data-aos-duration="600">
          ABOUT
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="600"
          data-aos-delay="200"
          className="section-title-underline"
        ></div>
      </div>
      <Box className="about-icons">
        <div
          className="icon-wrapper"
          data-aos="flip-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <img src={fullstackIcon} />
          <div className="icon-title">Full Stack Development</div>
          <div className="icon-subtitle">
            React, Node.js, Express, Docker, MySQL
          </div>
        </div>
        <div
          className="icon-wrapper"
          data-aos="flip-right"
          data-aos-duration="800"
          data-aos-delay="0"
        >
          <img src={mlIcon} />
          <div className="icon-title">Machine/Deep Learning</div>
          <div className="icon-subtitle">
            Python, PyTorch, Tensorflow, Tensorboard
          </div>
        </div>

        <div
          className="icon-wrapper"
          data-aos="flip-right"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <img src={embeddedIcon} />
          <div className="icon-title">Embedded Systems</div>
          <div className="icon-subtitle">Python, Arduino, Linux, C++</div>
        </div>
        <div
          className="icon-wrapper"
          data-aos="flip-right"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <img src={mobileIcon} />
          <div className="icon-title">Mobile Development</div>
          <div className="icon-subtitle">
            Android/iOS, React Native, Java, Kotlin
          </div>
        </div>
      </Box>

      <div className="about-me-container">
        <div
          className="about-me-card"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="portrait-column">
            <img src={portraitPhoto} />
            <div className="portrait-about-me-title">ABOUT ME</div>
            <div className="portrait-about-me" id="trigger-fade">
              I'm a full-stack software engineer who thrives from creating new
              ideas and constantly learning new things.
            </div>
          </div>
        </div>
        <div className="about-me-topics">
          <div className="technologies-languages">
            <div className="technologies-languages-title" key="techlangtitle">
              Technologies and Languages
            </div>
            <div className="language-bars">
              {Object.keys(languageSkills).map((key, index) => {
                return (
                  <div
                    className="bar"
                    data-aos="fade-left"
                    data-aos-delay="4000"
                    key={key}
                  >
                    <div
                      className="bar-filled"
                      style={{ width: languageSkills[key].percent }}
                    >
                      <div className="lang-tag">
                        {languageSkills[key].language}
                      </div>
                    </div>
                    <span
                      className={
                        languageSkills[key].percent !== "calc(100%)"
                          ? "level-tag"
                          : "level-tag-highlight"
                      }
                    >
                      {languageSkills[key].level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills">
            <div className="skills-title">Skills</div>
            <div className="skills-items">
              {skillsItems.map((item) => {
                return (
                  <div className="skill-item" key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-description">
        "I love to build things, and I love to learn about just about
        everything."
      </div> */}
    </div>
  );
};

export default About;
