"use client";

import React from "react";

import "../App.css";
import "../components-styles/Nav.scss";
import { Flex } from "@chakra-ui/react";

// var navOpen = false;

const navSlide = () => {
  // Toggle nav open/close.
  const navbar = document.querySelector(".nav-links");
  navbar.classList.toggle("nav-active");

  // Animate nav links fade-in
  const navLinks = document.querySelectorAll(".nav-links li");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      // if they've already been animated (open), close them.
      //   navOpen = false;
      link.style.animation = "";
    } else {
      // if they're closed, animate open again.
      //   link.style.animation = `navLinkFade 0.5s ease forwards ${
      //     index / 7 + 0.15
      //   }s`;
      //   navOpen = true;
    }
  });

  // Burger animation
  const burger = document.querySelector(".burger");
  burger.classList.toggle("toggle");
};

function setLinkActive(e) {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.classList.contains("active")) link.classList.remove("active");
  });

  e.currentTarget.classList.add("active");
  //   navSlide();
}

function scrollToSection(sectionClass) {
  const el = document.querySelector(`.${sectionClass}`);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <div
            className="nav-link"
            id="home-link"
            dest="home"
            onClick={() => scrollToSection("home-section")}
          >
            Home
          </div>
        </li>
        <li>
          <div
            className="nav-link"
            id="about-link"
            dest="about"
            onClick={() => scrollToSection("about-section")}
          >
            About
          </div>
        </li>
        <li>
          <div
            className="nav-link"
            id="projects-link"
            dest="projects"
            onClick={() => scrollToSection("projects-section")}
          >
            Projects
          </div>
        </li>
        <li>
          <div
            className="nav-link"
            id="contact-link"
            dest="contact"
            onClick={() => scrollToSection("contact-section")}
          >
            Stay Connected
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
