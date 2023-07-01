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
        fontWeight: 700,
        fontStyle: "normal",
      }}
    >
      <h2>{title}</h2>
    </div>
    <div>{children}</div>
  </div>
);

export default Text;
