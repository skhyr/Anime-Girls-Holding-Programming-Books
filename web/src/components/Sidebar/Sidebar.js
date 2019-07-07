import * as React from "react";

import { graphql, useStaticQuery } from "gatsby"

const Sidebar = () => {
  const pages = useStaticQuery(graphql(`
    query SidebarQuery {
      allDirectory(filter: {
        relativePath: {
          ne: ""
        },
      }) {
        nodes {
          relativePath
        }
      }
    }
  `))

  return (
    <div>
      {pages.allDirectory.nodes.map(node => (
        <div>{node.relativePath}</div>
      ))}
    </div>
  )

}

export default Sidebar;
