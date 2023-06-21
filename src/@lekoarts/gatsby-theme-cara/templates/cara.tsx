import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Inner from "../elements/inner";

const Cara = () => (
  <Layout>
    <Inner>
      <Hero />
      <About />
    </Inner>
    <Projects />
    <Contact />
  </Layout>
);

export default Cara;
