/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import NebulaMDX from "../sections/nebula";

const Nebula = () => (
  <div>
    <UpDown>
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
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="85%"
        top="15%"
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
    <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
    <Inner>
      <NebulaMDX />
    </Inner>
  </div>
);

export default Nebula;
