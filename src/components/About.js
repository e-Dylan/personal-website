"use client";

import "../components-styles/About.scss";

import { languageSkills } from "../languageSkills";

const headshot = "/resources/about/headshot_med.png";

const skillIcons = [
  {
    icon: "/resources/about/about_icons/fullstackIcon.png",
    title: "Full Stack Development",
    subtitle: "React, Node.js, Express, Docker, MySQL",
  },
  {
    icon: "/resources/about/about_icons/mlIcon.png",
    title: "Machine / Deep Learning",
    subtitle: "Python, PyTorch, TensorFlow, Tensorboard",
  },
  {
    icon: "/resources/about/about_icons/embeddedIcon.png",
    title: "Embedded Systems",
    subtitle: "Python, Arduino, Linux, C++",
  },
  {
    icon: "/resources/about/about_icons/mobileIcon.png",
    title: "Mobile Development",
    subtitle: "Android/iOS, React Native, Java, Kotlin",
  },
];

const skillTags = [
  "Claude Code",
  "GitHub Copilot",
  "Boto3",
  "CI/CD",
  "DevOps",
  "Observability",
  "Javascript",
  "Typescript",
  "HTML/CSS",
  "React.js",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "Python",
  "RESTful API",
  "Git",
  "Github",
  "GitHub Actions",
  "Linux",
  "PyTorch",
  "Tensorflow",
  "Pandas",
  "Computer Vision",
  "Jenkins",
  "Jira",
  "Confluence",
  "Microservices",
  "Docker",
  "OOP",
  "AI Automation",
  "Agentic AI",
  "AWS Lambda",
  "Cloudformation",
  "CloudWatch",
  "S3",
  "ECS",
  "EC2",
  "IAM",
  "RDS",
  "CodePipeline",
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container-center">
        <div className="section-title">
          <div data-aos="zoom-in-right" data-aos-duration="600">
            ABOUT ME
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="600"
            data-aos-delay="150"
            className="section-title-underline"
          />
        </div>

        <div className="about-icons">
          {skillIcons.map((item, index) => (
            <div
              className="icon-wrapper"
              key={item.title}
              data-aos="flip-right"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <img src={item.icon} alt={item.title} />
              <div className="icon-title">{item.title}</div>
              <div className="icon-subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div>

        <div className="about-me-container">
          <div
            className="about-me-card"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="portrait-column">
              <img src={headshot} alt="Dylan Smith" />
              <div className="portrait-about-me-title">HI, I&apos;M DYLAN</div>
              <div className="portrait-about-me">
                I&apos;m a full-stack software engineer who thrives on turning
                ideas into working products and constantly picking up new tools
                along the way.
              </div>
            </div>
          </div>

          <div
            className="about-me-topics"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="technologies-languages">
              <div className="technologies-languages-title">
                Technologies &amp; Languages
              </div>
              <div className="language-bars">
                {Object.keys(languageSkills).map((key) => (
                  <div className="bar" key={key}>
                    <div
                      className="bar-filled"
                      style={{ width: languageSkills[key].percent }}
                    >
                      <span className="lang-tag">
                        {languageSkills[key].language}
                      </span>
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
                ))}
              </div>
            </div>

            <div className="skills-tags">
              <div className="skills-title">Skills</div>
              <div className="tag-list">
                {skillTags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
