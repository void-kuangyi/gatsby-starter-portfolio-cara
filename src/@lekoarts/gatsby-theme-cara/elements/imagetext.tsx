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
      "@media only screen and (max-width: 640px)": {
        flexDirection: `column`,
      },
    }}
  >
    <div sx={{ marginRight: `40px`, flexBasis: `60%` }}>
      <img src={src} />
    </div>
    <div sx={{ flexBasis: `80%` }}>{children}</div>
  </div>
);

export default ImageText;
