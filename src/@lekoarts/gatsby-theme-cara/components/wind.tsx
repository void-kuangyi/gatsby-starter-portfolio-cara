/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
// @ts-ignore
import WindMDX from "../sections/wind";

const Wind = () => (
  <div>
    <Inner>
      <WindMDX />
    </Inner>
  </div>
);

export default Wind;
