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
    }}
  >
    {children}
  </div>
);

export default Title;
