import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const Cara = () => (
  <Layout>
    <div>
      <a href="/">Projects</a>
      <a href="/">About me</a>
      <a href="/">Contact</a>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  </Layout>
);

export default Cara;
