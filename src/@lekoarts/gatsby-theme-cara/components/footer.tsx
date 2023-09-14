/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui";

const Footer = () => {
  return (
    <Box>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          rowGap: `20px`,
          mt: 3,
          flexDirection: `column`,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      ></Flex>
    </Box>
  );
};

export default Footer;
