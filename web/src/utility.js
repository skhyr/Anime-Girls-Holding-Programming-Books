module.exports.tallyImages = images => {
  return images.allFile.edges.reduce((all, { node }) => {
    const current = node.relativeDirectory;
    const currentImages = all[current] || [];
    // Sharp does not work with gifs so we just use the relative path
    // there might be a better workaround for this later
    const path = node.childImageSharp || node.relativePath;
    return {
      ...all,
      [current]: [...currentImages, path],
    };
  }, {});
};

/**
 * Changes url-friendly links to human-friendly versions
 * @param link {String}
 * @return {String}
 */
module.exports.convertURLScheme = link => {
  return link
    .replace("CSharp", "C#")
    .replace("CPP", "C++")
    .replace(/_/g, " ")
};
