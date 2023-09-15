import * as React from "react";
import { useEffect } from "react";
import "../styles/index.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    var link;
    if (location.pathname === "/about") {
      link = document.getElementById("about");
    } else if (location.pathname === "/contact") {
      link = document.getElementById("contact");
    } else {
      link = document.getElementById("projects");
    }
    link.classList.add("active");
  }, [location]);
  return (
    <div className="header">
      <a href="/">
        <div className="logo">Kuangyi Xing</div>
      </a>
      <div className="menu">
        <a href="/" className="link" id="projects">
          <div className="title">Projects</div>
        </a>
        <a href="/about" className="link" id="about">
          <div className="title">About me</div>
        </a>
        <a href="/contact" className="link" id="contact">
          <div className="/contact">Contact</div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
