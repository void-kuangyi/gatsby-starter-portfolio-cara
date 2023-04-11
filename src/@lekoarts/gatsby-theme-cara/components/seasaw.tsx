/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import SeaSawMDX from "../sections/seasaw";

const SeaSaw = () => (
  <div>
    <UpDown>
      <Svg
        icon="upDown"
        hiddenMobile
        width={8}
        color="icon_darkest"
        left="70%"
        top="20%"
      />
      <Svg
        icon="upDown"
        hiddenMobile
        width={24}
        color="icon_brightest"
        left="80%"
        top="90%"
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
    <Inner>
      <SeaSawMDX />
    </Inner>
  </div>
);

export default SeaSaw;
