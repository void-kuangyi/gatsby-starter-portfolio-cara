/** @jsx jsx */
import { jsx } from "theme-ui";

type TextLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const TextLayout = ({ className = ``, children }: TextLayoutProps) => (
  <div
    sx={{
      width: [`full`, `full`, `full`, `4/5`, `4/5`, `4/5`],
      textAlign: `left`,
      position: `relative`,
      paddingBottom: `0px`,
      paddingTop: `100px`,
      paddingLeft: `10px`,
      paddingRight: `10px`,
      "@media only screen and (min-width: 900px)": {
        paddingLeft: `100px`,
        paddingRight: `100px`,
      },
    }}
    className={className}
  >
    {children}
  </div>
);

export default TextLayout;
