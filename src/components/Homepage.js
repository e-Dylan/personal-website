import React, { useEffect, useState, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import aboutAnimations from "./About";

import "../components-styles/Homepage.scss";
import "../components-styles/About.scss";
import "../components-styles/Projects.scss";

import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import linkedinIcon from "../resources/social-icons/linkedin.svg";
import githubIcon from "../resources/social-icons/github.svg";
// import instagramIcon from "../resources/social-icons/instagram.svg";
import resumeIcon from "../resources/social-icons/resume100x100.png";

// Homepage animation
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
import FOG from "vanta/dist/vanta.fog.min";

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

function Homepage(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
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

    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
        // BIRDS({
        //   el: myRef.current,
        //   THREE: THREE,
        //   point: 2,
        //   spacing: 17,
        //   mouseControls: true,
        //   colorMode: "lerp",
        //   color1: 0xffffff,
        //   color2: 0xff3f81,
        //   backgroundColor: 0x30303c,
        //   scaleMobile: 0.8,
        //   quantity: 4,
        //   speedLimit: 5,
        //   separation: 60,
        //   alignment: 10,
        //   cohesion: 24,
        // })
        // GLOBE({
        //   el: myRef.current,
        //   THREE: THREE,
        //   point: 2,
        //   spacing: 17,
        //   mouseControls: true,
        //   color: 0xdcdcdc,
        //   color2: 0xff3f81,
        //   color3: 0xeeeeee,
        //   backgroundColor: 0x30303c,
        //   scaleMobile: 0.8,
        // })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="homepage">
      <section className="home-section">
        <div className="parallax-image" ref={myRef}>
          <div className="image-section-container center">
            <div className="hello-text">
              Hello, I'm
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/dylansmi.th"
              >
                <div className="front-icon">
                  <img src={resumeIcon} background-color="white" alt="Resume" />
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
