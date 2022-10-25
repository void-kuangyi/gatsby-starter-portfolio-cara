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
          margin: `100px 0 0 200px`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
          borderRadius: `20px`,
          maxWidth: `100%`,
          maxHeight: `100%`,
          height: `auto`,
        },
        pre: {
          fontFamily: `monospace`,
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
