/** @jsx jsx */
import { jsx } from "theme-ui";

type ImagesProps = {
  width?: string;
  children: React.ReactNode;
};

const ImagesHorizon = ({ width, children }: ImagesProps) => (
  <div
    sx={{
      display: `flex`,
      "@media only screen and (min-width: 640px)": {
        width: width || `60%`,
        flexDirection: `column`,
      },
    }}
  >
    {children}
  </div>
);

export default ImagesHorizon;
