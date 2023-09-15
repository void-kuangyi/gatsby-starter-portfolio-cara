import * as React from "react";
import { UpDown, UpDownWide } from "../styles/animations";
import Svg from "./svg";

const Animation = () => (
  <div>
    <UpDown>
      <Svg icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
      <Svg
        icon="upDown"
        hiddenMobile
        width={8}
        color="icon_teal"
        left="70%"
        top="10%"
      />
      <Svg
        icon="cross"
        hiddenMobile
        width={8}
        stroke
        color="icon_pink"
        left="25%"
        top="5%"
      />
      <Svg
        icon="circle"
        hiddenMobile
        width={24}
        color="icon_brightest"
        left="17%"
        top="60%"
      />
    </UpDown>
    <UpDownWide>
      <Svg
        icon="triangle"
        hiddenMobile
        width={12}
        stroke
        color="icon_brightest"
        left="90%"
        top="30%"
      />
      <Svg
        icon="circle"
        width={6}
        color="icon_brightest"
        left="75%"
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
  </div>
);

export default Animation;
