import * as React from "react";

import { graphql, useStaticQuery, Link } from "gatsby";

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
		<div>
			<Link	to="/">
				All Books
			</Link>
			{pages.allDirectory.nodes.map(node => (
				<Link to={`/${node.relativePath}`}>
				<div>{node.relativePath}</div>
				</Link>
			))}
		</div>
	);
};

export default Sidebar;
