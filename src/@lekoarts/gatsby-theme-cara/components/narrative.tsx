/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import NARRATIVEMDX from "../sections/narrative";

const Narrative = () => (
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
        icon="triangle"
        width={8}
        stroke
        color="icon_darkest"
        left="25%"
        top="5%"
      />
      <Svg
        icon="upDown"
        hiddenMobile
        width={12}
        color="icon_orange"
        left="80%"
        top="80%"
      />
    </UpDown>
    <UpDownWide>
      <Svg
        icon="upDown"
        hiddenMobile
        width={8}
        color="icon_purple"
        left="45%"
        top="10%"
      />
    </UpDownWide>
    <Inner>
      <NARRATIVEMDX />
    </Inner>
  </div>
);

export default Narrative;
