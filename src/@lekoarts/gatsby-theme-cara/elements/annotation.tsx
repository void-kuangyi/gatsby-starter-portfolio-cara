/** @jsx jsx */
import { jsx } from "theme-ui";

type AnnotationProps = {
  children: string;
};

const Annotation = ({ children }: AnnotationProps) => (
  <div
    sx={{
      marginBottom: `20px`,
    }}
  >
    <i>{children}</i>
  </div>
);

export default Annotation;
