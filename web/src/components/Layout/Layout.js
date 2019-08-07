import React from "react";
import PropTypes from "prop-types";
import Scrollbar from "react-perfect-scrollbar";
import Header from "../Header/Header";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, page }) => {
  return (
    <>
      <Header page={page || "Programming"} />
      <Scrollbar>
        <div className="page-wrapper">
          <div className="horizontal-layout">
            <Sidebar className="hidden-on-mobile" />
            <main>{children}</main>
          </div>
        </div>
      </Scrollbar>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
