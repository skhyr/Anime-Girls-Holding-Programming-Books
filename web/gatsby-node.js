const path = require("path");

exports.onCreatePage = ({ page, actions: { createPage } }) => {
  console.log(page.path)
  createPage(page)
}

exports.createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve("./src/templates/ImagePage/ImagePage.js");
  const { createPage } = actions;
  const query = graphql(`
    query PageQuery {
      allDirectory(filter: { relativePath: { ne: "" } }) {
        nodes {
          relativePath
        }
      }
    }
  `);
  const { data } = await query;
  const paths = data.allDirectory.nodes.filter(({ relativePath }) => {
    return relativePath !== "web";
  });
  paths.forEach(({ relativePath }) => {
    createPage({
      path: relativePath,
      component: pageTemplate,
      context: {
        name: relativePath,
      },
    });
  });
};
