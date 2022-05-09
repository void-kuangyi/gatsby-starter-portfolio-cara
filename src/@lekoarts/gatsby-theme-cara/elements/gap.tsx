/** @jsx jsx */
import { jsx } from "theme-ui";

type GapProps = {
  margin: number;
};

const Gap = ({ margin }: GapProps) => (
  <div
    sx={{
      marginBottom: `${margin}px`,
    }}
  ></div>
);

export default Gap;
