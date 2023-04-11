/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import VinylifyMDX from "../sections/vinylify";

const Vinylify = () => (
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
        icon="arrowUp"
        hiddenMobile
        width={16}
        color="icon_purple"
        left="5%"
        top="80%"
      />
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
      <VinylifyMDX />
    </Inner>
  </div>
);

export default Vinylify;
