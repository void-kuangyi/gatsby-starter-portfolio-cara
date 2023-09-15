import * as React from "react";
import { useEffect } from "react";
import "../styles/index.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        link.classList.add("active");
      }
    });
  }, [location]);
  return (
    <div className="header">
      <div className="logo">Kuangyi Xing</div>
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
