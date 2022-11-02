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
      >
        <div>
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <div>
          <img
            width="30"
            height="30"
            src="https://img.lekoarts.de/gatsby/logo_v2_w30.png"
            alt="LekoArts Logo"
          />
          <Link
            aria-label="Link to the theme author's website"
            href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
          >
            Theme by LekoArts
          </Link>
        </div>
      </Flex>
    </Box>
  );
};

export default Footer;
