/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import Intro from "../sections/intro";

const Hero = () => (
  <div>
    <UpDown>
      {/* <Svg
        icon="triangle"
        hiddenMobile
        width={48}
        stroke
        color="icon_orange"
        left="10%"
        top="20%"
      /> */}
      {/* <Svg
        icon="hexa"
        width={10}
        stroke
        color="icon_red"
        left="60%"
        top="70%"
      /> */}
      <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
      {/* <Svg
        icon="arrowUp"
        hiddenMobile
        width={16}
        color="icon_blue"
        left="80%"
        top="10%"
      /> */}
      <Svg
        icon="triangle"
        width={12}
        stroke
        color="icon_brightest"
        left="90%"
        top="50%"
      />
      {/* <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" /> */}
      {/* <Svg
        icon="triangle"
        width={16}
        stroke
        color="icon_darkest"
        left="30%"
        top="65%"
      /> */}
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
      icon="circle"
      hiddenMobile
      width={24}
      color="icon_darker"
      left="5%"
      top="70%"
    />
    <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
    <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
    <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
    <Svg
      icon="upDown"
      hiddenMobile
      width={24}
      color="icon_darker"
      left="40%"
      top="80%"
    />
    <Svg
      icon="triangle"
      width={8}
      stroke
      color="icon_darker"
      left="25%"
      top="5%"
    />
    {/* <Svg icon="circle" width={64} color="icon_green" left="80%" top="100%" /> */}
    {/* <Svg
      icon="box"
      hiddenMobile
      width={10}
      color="icon_purple"
      left="5%"
      top="90%"
    /> */}
    <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
    <Svg icon="box" width={12} color="icon_darkest" left="40%" top="40%" />
    <Svg
      icon="hexa"
      width={16}
      stroke
      color="icon_darker"
      left="10%"
      top="50%"
    />
    <Svg
      icon="hexa"
      width={8}
      stroke
      color="icon_darker"
      left="80%"
      top="70%"
    />
    <Inner>
      <Intro />
    </Inner>
  </div>
);

export default Hero;
