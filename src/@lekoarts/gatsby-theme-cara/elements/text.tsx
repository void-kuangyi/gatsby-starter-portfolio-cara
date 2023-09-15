/** @jsx jsx */
import { jsx } from "theme-ui";

type TextProps = {
  title?: string;
  children: React.ReactNode;
};

const Text = ({ title, children }: TextProps) => (
  <div
    sx={{
      marginBottom: `50px`,
    }}
  >
    <div
      sx={{
        color: `black`,
        fontFamily: "scandia-line-web, sans-serif",
        fontStyle: "normal",
      }}
    >
      <h4>{title}</h4>
    </div>
    <div>{children}</div>
  </div>
);

export default Text;
