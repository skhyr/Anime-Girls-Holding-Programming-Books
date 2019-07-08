import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import ImageView from "../components/ImageView/ImageView";
import { tallyImages } from "../utility";

const IndexPage = ({ data }) => {
  const images = tallyImages(data);
  const allImages = Object.values(images).reduce((a, b) => a.concat(b), []);
  return (
    <Layout>
      <SEO title="Home" />
      <ImageView images={allImages} />
      {/*<h1>Hi people</h1>*/}
      {/*<p>Welcome to your new Gatsby site.</p>*/}
      {/*<p>Now go build something great.</p>*/}
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*  /!*<Image />*!/*/}
      {/*</div>*/}
      {/*<Link to="/page-2/">Go to page 2</Link>*/}
    </Layout>
  );
};

export default IndexPage;

export const imagesQuery = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          relativeDirectory
          childImageSharp {
            fixed(width: 250, height: 250, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
