module.exports = {
  siteMetadata: {
    title: `Anime Girls Holding Programming Books`,
    description: `A large collection of anime girls with programming books`,
    author: `@_Xetera`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `..`,
        ignore: [
          "**/.*",
          "../**/node_modules/**",
          "**/web/**",
          "**/README.md",
          "**/CONTRIBUTING.md",
        ],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cache",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
