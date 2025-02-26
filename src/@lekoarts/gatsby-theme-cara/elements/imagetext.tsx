/** @jsx jsx */
import { jsx } from "theme-ui";

type ImageTextProps = {
  src: string;
  children: React.ReactNode;
};

const ImageText = ({ src, children }: ImageTextProps) => (
  <div
    sx={{
      display: `flex`,
      "@media only screen and (max-width: 900px)": {
        flexDirection: `column`,
      },
    }}
  >
    <div sx={{ flexBasis: `30%`, marginRight: `10px` }}>
      <img sx={{ width: `100%`, height: `auto` }} src={src} />
    </div>
    <div sx={{ flexBasis: `50%` }}>{children}</div>
  </div>
);

export default ImageText;
