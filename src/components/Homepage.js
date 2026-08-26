import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import TypingText from "./TypingText";

import "../components-styles/Homepage.scss";
import "../components-styles/About.scss";
import "../components-styles/Projects.scss";

import ConstellationBackground from "./ConstellationBackground";
// import ConstellationBackground3d from "./ConstellationBackground3d";

import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import linkedinIcon from "../resources/social-icons/linkedin.svg";
import githubIcon from "../resources/social-icons/github.svg";
// import instagramIcon from "../resources/social-icons/instagram.svg";
import resumeIcon from "../resources/social-icons/resume100x100.png";

import resumePdf from "../resume.pdf";

function Homepage() {
  const myRef = useRef(null);

  useEffect(() => {
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
                I'm a<TypingText />
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
      {/* 
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
      </section> */}
    </div>
  );
}

export default Homepage;
