import React from "react";
import Layout from "../components/Layout/Layout";

const BaseLayout = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  )
};


export default BaseLayout
