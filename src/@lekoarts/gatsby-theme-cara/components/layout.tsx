import * as React from "react";
import { get } from "theme-ui";
import { Global } from "@emotion/react";
import SEO from "./seo";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        main: {
          margin: `0 0 0 0`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
          fontSize: `18px`,
          fontWeight: 400,
          fontFamily: `scandia-line-web, sans-serif`,
          color: "#000",
        },
        img: {
          borderStyle: `none`,
          borderRadius: `12px`,
          maxWidth: `100%`,
          height: `auto`,
        },
        pre: {
          fontFamily: `scandia-line-web, sans-serif`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <SEO />
    <main>{children}</main>
  </React.Fragment>
);

export default Layout;
