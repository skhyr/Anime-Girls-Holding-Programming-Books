import * as React from "react";
import { convertURLScheme } from "../../utility";

import { graphql, useStaticQuery, Link } from "gatsby";
import "./style.css";

const Sidebar = () => {
  const pages = useStaticQuery(
    graphql`
      query SidebarQuery {
        allDirectory(filter: { relativePath: { ne: "" } }) {
          nodes {
            relativePath
          }
        }
      }
    `
  );

  return (
    <div className="sidebar">
      <Link to="/">All Books</Link>
      {pages.allDirectory.nodes.map(({ relativePath }) => (
        <Link to={`/${relativePath}`}>
          <div>{convertURLScheme(relativePath)}</div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
