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
    </UpDown>
    <Inner>
      <DalleMDX />
    </Inner>
  </div>
);

export default Dalle;
