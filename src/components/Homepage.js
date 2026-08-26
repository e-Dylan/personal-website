"use client";

import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import TypingText from "./TypingText";

import "../components-styles/Homepage.scss";

import ConstellationBackground from "./ConstellationBackground";
// import ConstellationBackground3d from "./ConstellationBackground3d";

const linkedinIcon = "/resources/social-icons/linkedin.svg";
const githubIcon = "/resources/social-icons/github.svg";
// const instagramIcon = "/resources/social-icons/instagram.svg";
const resumeIcon = "/resources/social-icons/resume100x100.png";

const resumePdf = "/resume.pdf";

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

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homepage">
      <ConstellationBackground>
        <section className="home-section">
          <div className="parallax-image" ref={myRef}>
            <div className="image-section-container center">
              <div className="hello-text">
                Hi, I&apos;m
                <span className="hello-text highlight"> Dylan</span>.
              </div>

              <br />
              <div className="hello-text">
                I&apos;m a<TypingText />
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
          </div>

          <button
            type="button"
            className="scroll-down-arrow"
            aria-label="Scroll down to About Me section"
            onClick={scrollToAbout}
          >
            <span className="scroll-down-arrow__ring" />
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 9L12 17L20 9"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </section>
      </ConstellationBackground>
    </div>
  );
}

export default Homepage;
