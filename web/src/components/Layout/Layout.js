import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, page }) => {
  return (
    <div className="mx-auto container p-3 h-screen max-h-screen">
      <div className="flex flex-row h-full">
        <Sidebar className="hidden-on-mobile mr-5" />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export const PageLayout = ({ children, type = "Programming" }) => {
  return (
    <div>
      <header className="">
        <h1 className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 mb-7 text-black text-gray-800 text-center mx-auto w-full">
          Anime Girls Holding {type} Books
        </h1>
      </header>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
