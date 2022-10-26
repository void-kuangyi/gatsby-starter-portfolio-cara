/** @jsx jsx */
import { jsx } from "theme-ui";

type TextProps = {
  title?: string;
  children: React.ReactNode;
};

const Text = ({ title, children }: TextProps) => (
  <div
    sx={{
      marginBottom: `100px`,
    }}
  >
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

export default Text;
