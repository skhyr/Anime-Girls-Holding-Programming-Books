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
    </Layout>
  );
};

export default IndexPage;

export const imagesQuery = graphql`
  {
    allFile {
      edges {
        node {
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
