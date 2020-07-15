/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import "tailwindcss/dist/base.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./tailwind.css";
import React from "react";
import Layout from "./src/components/Layout/Layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
