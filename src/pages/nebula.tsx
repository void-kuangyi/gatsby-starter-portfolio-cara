import * as React from "react";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import NebulaContent from "../@lekoarts/gatsby-theme-cara/components/nebula";

const Nebula = () => (
  <Layout>
    <Parallax pages={6}>
      <NebulaContent offset={0.8} factor={6} />
    </Parallax>
  </Layout>
);

export default Nebula;
