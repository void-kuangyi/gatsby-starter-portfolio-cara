/** @jsx jsx */
import { jsx } from "theme-ui";

type TitleProps = {
  gap?: string;
  children: React.ReactNode;
};

const Title = ({ gap, children }: TitleProps) => (
  <div
    sx={{
      marginBottom: gap || `20px`,
      marginTop: `200px`,
    }}
  >
    <h4>{children}</h4>
  </div>
);

export default Title;
