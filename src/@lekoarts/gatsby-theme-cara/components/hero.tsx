/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import Intro from "../sections/intro";

const Hero = () => (
  <div>
    <UpDownWide>
      <Svg
        icon="cross"
        width={16}
        stroke
        color="icon_pink"
        left="28%"
        top="15%"
      />
      <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
      <Svg
        icon="upDown"
        hiddenMobile
        width={8}
        color="icon_darkest"
        left="45%"
        top="10%"
      />
    </UpDownWide>
    <Svg
      icon="triangle"
      width={8}
      stroke
      color="icon_darker"
      left="25%"
      top="5%"
    />
    <Inner>
      <Intro />
    </Inner>
  </div>
);

export default Hero;
