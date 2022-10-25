import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const Cara = () => (
  <Layout>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default Cara;
