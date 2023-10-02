import React, { useEffect } from "react";

// import scrollFunction from './Homepage';

import "../components-styles/About.scss";

import mlIcon from "../resources/about/about_icons/mlIcon.png";
import fullstackIcon from "../resources/about/about_icons/fullstackIcon.png";
import embeddedIcon from "../resources/about/about_icons/embeddedIcon.png";
import mobileIcon from "../resources/about/about_icons/mobileIcon.png";

// import portraitPhoto from '../resources/about/portrait_headshot_nyc.jpg';
import portraitPhoto from "../resources/about/headshot.jpg";
import { languageSkills } from "../languageSkills";

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

const aboutAnimations = () => {
  var skillItems = document.querySelectorAll(".skill-item");
  window.removeEventListener("scroll", scrollFunction);
  skillItems.forEach((item, index) => {
    console.log("changing");
    if (item.style.animation) item.style.animation = "";
    else
      item.style.animation = `aboutFadeFromTop 0.5s ease ${index / 21 + 0.1}s`;
    setTimeout(() => {
      item.style.display = "flex";
      item.style.opacity = 1;
      item.style.transform = `translateY(${0}%)`;
    }, index / 25 + 0.07);
  });
};

const scrollFunction = () => {
  var pos = window.pageYOffset;
  var topAbout = document.querySelector(".about-section").offsetTop - 300;
  if (pos > topAbout) {
    aboutAnimations();
  }
};

function About(props) {
  useEffect(() => {
    // scroll event listener
    window.addEventListener("scroll", scrollFunction);
  }, []);

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
      <div className="about-icons">
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
      </div>

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
              I'm a software engineer who thrives from creating new ideas and
              constantly learning new things. I'm currently exploring machine
              learning, full-stack development, and embedded systems.
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
                    <span className="level-tag">
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

      <div className="about-description">
        "I love to build things, and I love to learn about just about
        everything."
      </div>
    </div>
  );
}

export default About;
