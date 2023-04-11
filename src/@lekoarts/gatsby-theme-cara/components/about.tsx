import * as React from "react";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import AboutMDX from "../sections/about";

const About = () => (
  <div>
    <Inner>
      <AboutMDX />
    </Inner>
  </div>
);

export default About;
