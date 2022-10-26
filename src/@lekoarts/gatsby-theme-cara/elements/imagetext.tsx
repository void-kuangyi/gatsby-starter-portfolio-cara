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
    }}
  >
    <div sx={{ marginRight: `40px` }}>
      <img src={src} />
    </div>
    {children}
  </div>
);

export default ImageText;
