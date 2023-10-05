import React from "react";

import "../components-styles/Contact.scss";

import linkedinIcon from "../resources/social-icons/linkedin.svg";
import githubIcon from "../resources/social-icons/github.svg";
import resumeIcon from "../resources/social-icons/resume100x100.png";

import resumePdf from "../resume.pdf";
import { Box, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <div className="container-center">
        <div className="section-title" id="contact-section-title">
          <div data-aos="zoom-in-right" data-aos-duration="600">
            CONTACT ME
          </div>
          <div
            className="section-title-underline"
            data-aos="zoom-in-right"
            data-aos-duration="600"
            data-aos-delay="200"
          ></div>
        </div>

        <div className="contact-area">
          <div className="contact-form">
            <div
              className="form-header"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-anchor=".contact-area"
            >
              Have any questions or want to get in contact with me?
            </div>
            <div
              className="anim-div"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="50"
              data-aos-anchor=".contact-area"
            >
              <Box
                w="100%"
                textDecor="none"
                color="black"
                bg="white"
                p="16px"
                rounded="10px"
                ml="10px"
                as="a"
                target="_blank"
                rel="noreferrer"
                href="mailto:dylan@alignsoft.ca"
              >
                Send me an email!
              </Box>
              {/* <Button
                as="a"
                href="mailto:dylan@alignsoft.ca"
                bg="white"
                rounded="4px"
                textDecor="none"
                color="black"
                p="16px"
                w="100%"
              >
                Send me an email!
              </Button> */}
            </div>
            {/* <div
              className="anim-div"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-anchor=".contact-area"
            >
              <input
                type="email"
                className="contact-input"
                placeholder="Enter a valid email address"
              ></input>
            </div>
            <div
              className="anim-div"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-anchor=".contact-area"
            >
              <textarea
                type="text"
                className="contact-text-area"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div
              className="anim-div"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-anchor=".contact-area"
            >
              <button className="submit-button">Submit</button>
            </div> */}
          </div>
          <div
            className="my-info"
            data-aos="slide-up"
            data-aos-duration="900"
            data-aos-anchor=".contact-area"
          >
            <div className="text-container">
              <div className="info-title">dylan@alignsoft.com</div>
              <div className="info-title">github.com/e-Dylan</div>
            </div>
            <div className="connected-container">
              <div className="connected-title">STAY CONNECTED</div>
              <div className="links-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/dylan-smith-5b2b971b8"
                  className="connected-main-link"
                >
                  <div className="front-icon">
                    <img alt="Linkedin" src={linkedinIcon} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={resumePdf}
                  className="connected-main-link"
                >
                  <div className="front-icon">
                    <img alt="Resume" src={resumeIcon} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/e-Dylan"
                  className="connected-main-link"
                >
                  <div className="front-icon">
                    <img alt="Github" src={githubIcon} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
