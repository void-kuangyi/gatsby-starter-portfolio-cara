import * as React from "react";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import AboutMDX from "../sections/about";

const About = () => (
  <div>
    <UpDownWide>
      {/* <Svg
        icon="triangle"
        width={12}
        stroke
        color="icon_brightest"
        left="95%"
        top="50%"
      /> */}
    </UpDownWide>
    <Inner>
      <AboutMDX />
    </Inner>
  </div>
);

export default About;
