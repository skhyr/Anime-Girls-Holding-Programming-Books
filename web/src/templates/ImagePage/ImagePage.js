import * as React from "react";
import ImageView from "../../components/ImageView/ImageView";
import Layout from "../../components/Layout/Layout";
import { graphql } from "gatsby";
import { convertURLScheme } from "../../utility";
import SEO from "../../components/seo";

const ImagePage = ({ pageContext, data }) => {
  const { name } = pageContext;
  const {
    allFile: { edges },
  } = data;
  const humanReadable = convertURLScheme(name);
  const images = edges.map(edge => edge.node.childImageSharp);
  return (
    <>
      <SEO title={humanReadable} />
      <ImageView images={images} />
    </>
  );
};

export const imagesQuery = graphql`
  query PageQuery($name: String!) {
    allFile(filter: { relativeDirectory: { eq: $name } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 250, height: 250, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
          relativePath
          relativeDirectory
        }
      }
    }
  }
`;

export default ImagePage;
