import React, { useEffect, useState, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import aboutAnimations from "./About";

import "../components-styles/Homepage.scss";
import "../components-styles/About.scss";
import "../components-styles/Projects.scss";

import ConstellationBackground from "./ConstellationBackground";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import linkedinIcon from "../resources/social-icons/linkedin.svg";
import githubIcon from "../resources/social-icons/github.svg";
// import instagramIcon from "../resources/social-icons/instagram.svg";
import resumeIcon from "../resources/social-icons/resume100x100.png";

import resumePdf from "../resume.pdf";

// import GLOBE from "vanta/dist/vanta.globe.min";
// import { DataTexture2DArray } from "three";

const pronounsArr = [
  "software engineer",
  "creator",
  "student",
  "programmer",
  "n innovator",
  "full-stack developer",
  "life-long learner",
  "machine learning developer",
];
const typingDelay = 250;
const erasingDelay = 200;
const newTextDelay = 2000; // delay to begin new text
var wordIdx = ~~(Math.random() * pronounsArr.length);
var charIdx = 0;

const type = () => {
  const typedTextSpan = document.querySelector(".typed-text");
  const caretSpan = document.querySelector(".caret");

  if (charIdx < pronounsArr[wordIdx].length) {
    if (!caretSpan.classList.contains("typing"))
      caretSpan.classList.add("typing");
    typedTextSpan.innerHTML += pronounsArr[wordIdx].charAt(charIdx);
    charIdx++;
    setTimeout(type, typingDelay);
  } else {
    caretSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
};

const erase = () => {
  const typedTextSpan = document.querySelector(".typed-text");
  const caretSpan = document.querySelector(".caret");

  if (charIdx > 0) {
    typedTextSpan.innerHTML =
      " " + pronounsArr[wordIdx].substring(0, charIdx - 1);
    charIdx--;
    setTimeout(erase, erasingDelay);
  } else {
    caretSpan.classList.remove("typing");
    wordIdx++;
    if (wordIdx >= pronounsArr.length) wordIdx = 0;
    setTimeout(type, typingDelay + 100);
  }
};

function Homepage() {
  const myRef = useRef(null);

  useEffect(() => {
    // initialize typing effect
    if (pronounsArr.length) setTimeout(type, newTextDelay + 250);

    AOS.init({
      offset: 400,
      duration: 700,
      once: true,
      disable: "mobile",
      easing: "ease-in-out-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="homepage">
      <ConstellationBackground>
        <section className="home-section">
          <div className="parallax-image" ref={myRef}>
            <div className="image-section-container center">
              <div className="hello-text">
                Hi, I'm
                <span className="hello-text highlight"> Dylan</span>.
              </div>

              <br />
              <div className="hello-text">
                I'm a<span className="typed-text highlight"> </span>
                <span className="caret">&nbsp;</span>.
              </div>
              <div className="main-links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/dylan-smith-5b2b971b8"
                >
                  <div className="front-icon">
                    <img src={linkedinIcon} alt="Linkedin" />
                  </div>
                </a>
                <a target="_blank" rel="noreferrer" href={resumePdf}>
                  <div className="front-icon">
                    <img
                      src={resumeIcon}
                      background-color="white"
                      alt="Resume"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/e-Dylan"
                >
                  <div className="front-icon">
                    <img src={githubIcon} alt="Github" />
                  </div>
                </a>
              </div>
            </div>
            {/* <ProjectDisplay /> testing */}
          </div>
        </section>
      </ConstellationBackground>

      <section className="navbar-section">
        <Nav />
      </section>

      <section className="about-section">
        <About />
      </section>

      <section className="projects-section">
        <Projects />
      </section>

      <section className="contact-section">
        <Contact />
      </section>

      <section className="footer">
        <div className="footer"></div>
      </section>
    </div>
  );
}

export default Homepage;
