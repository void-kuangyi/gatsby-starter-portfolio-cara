/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import DalleMDX from "../sections/dalle";

const Dalle = () => (
  <div>
    <UpDown>
      <Svg
        icon="box"
        hiddenMobile
        width={6}
        color="icon_blue"
        left="50%"
        top="75%"
      />
      <Svg
        icon="upDown"
        hiddenMobile
        width={8}
        color="icon_darkest"
        left="70%"
        top="20%"
      />
      <Svg
        icon="triangle"
        width={8}
        stroke
        color="icon_darkest"
        left="25%"
        top="5%"
      />
    </UpDown>
    <UpDownWide>
      <Svg
        icon="triangle"
        width={12}
        stroke
        color="icon_brightest"
        left="95%"
        top="50%"
      />
      <Svg
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="85%"
        top="15%"
      />
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
      width={6}
      color="icon_brightest"
      left="4%"
      top="20%"
    />
    <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
    <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
    <Svg
      icon="hexa"
      width={8}
      stroke
      color="icon_darkest"
      left="80%"
      top="70%"
    />
    <Inner>
      <DalleMDX />
    </Inner>
  </div>
);

export default Dalle;
