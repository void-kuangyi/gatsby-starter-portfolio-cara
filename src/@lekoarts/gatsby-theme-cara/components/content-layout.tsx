import * as React from "react";
import NavBar from "./navbar";
import Layout from "./layout";
import Inner from "../elements/inner";
import Animation from "./animation";
import { BrowserRouter as Router } from "react-router-dom";

type LayoutProps = { children: React.ReactNode };

const ContentLayout = ({ children }: LayoutProps) => (
  <div>
    <Router>
      <NavBar />
    </Router>
    <Layout>
      <Inner>{children}</Inner>
      <Animation />
    </Layout>
  </div>
);
export default ContentLayout;
