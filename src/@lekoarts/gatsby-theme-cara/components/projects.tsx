/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import ProjectsMDX from "../sections/projects";

const Projects = () => (
  <div>
    <Inner>
      <div
        sx={{
          display: `flex`,
          flexDirection: `column`,
          gap: `10px`,
          "@media only screen and (min-width: 640px)": {
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1` },
          },
        }}
      >
        <ProjectsMDX />
      </div>
    </Inner>
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
    {/* <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" /> */}
    {/* <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" /> */}
    {/* <Svg icon="box" width={12} color="icon_yellow" left="29%" top="50%" /> */}
    {/* <Svg icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" /> */}
  </div>
);

export default Projects;
