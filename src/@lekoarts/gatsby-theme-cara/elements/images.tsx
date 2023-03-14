/** @jsx jsx */
import { jsx } from "theme-ui";

type ImagesProps = {
  width?: string;
  children: React.ReactNode;
};

const Images = ({ width, children }: ImagesProps) => (
  <div
    sx={{
      display: `flex`,
      flexDirection: `column`,
      "@media only screen and (min-width: 640px)": {
        width: width || `60%`,
      },
    }}
  >
    {children}
  </div>
);

export default Images;
