import * as React from "react";
import { convertURLScheme } from "../../utility";

import { graphql, useStaticQuery, Link } from "gatsby";
import "./style.css";

const activeStyle = {
  background: "pink",
};

const Sidebar = ({ className }) => {
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
    <div className={["sidebar", className].join(" ")}>
      <div>
        <Link to="/" activeClassName="route-active" className="route-link">
          All Books
        </Link>
      </div>
      {pages.allDirectory.nodes.map(({ relativePath }) => (
        <div className="full-width">
          <Link to={`/${relativePath}`} className="route-link" activeClassName="route-active">
            {convertURLScheme(relativePath)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
