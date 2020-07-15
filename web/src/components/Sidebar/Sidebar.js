import * as React from "react";
import { convertURLScheme } from "../../utility";

import { graphql, useStaticQuery, Link } from "gatsby";
import "./style.css";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
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

  const linkClass =
    "route-link no-underline text-blue-800 p-2 max-w-full hover:bg-blue-400 hover:text-blue-100 rounded";

  return (
    <aside className={`h-full grid gap-2 overflow-auto ${className}`}>
      <Link to="/" activeClassName="route-active" className={linkClass}>
        All Books
      </Link>
      <p className="my-2 text-gray-700 font-semibold text-sm">Languages</p>
      <ScrollBar>
        <div className="h-full grid gap-2 flex-auto">
          {pages.allDirectory.nodes.map(({ relativePath }) => (
            <Link
              key={relativePath}
              to={`/${relativePath}`}
              className={linkClass}
              activeClassName="route-active"
            >
              {convertURLScheme(relativePath)}
            </Link>
          ))}
          <p className="p-2 text-gray-700 text-sm mt-2">
            Made by{" "}
            <a
              className="text-blue-400 m-0"
              rel="external noopener noreferrer"
              target="_blank"
              href="https://github.com/xetera"
            >
              Xetera
            </a>
          </p>
        </div>
      </ScrollBar>
    </aside>
  );
};

export default Sidebar;
