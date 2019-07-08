import * as React from "react";
import ImageView from "../../components/ImageView/ImageView";
import Layout from "../../components/Layout/Layout";
import { graphql } from "gatsby";

const ImagePage = ({ pageContext, data }) => {
  const { name } = pageContext;
  const {
    allFile: { edges },
  } = data;
  const images = edges.map(edge => edge.node.childImageSharp);
  return (
    <Layout page={name}>
      <ImageView images={images} />
    </Layout>
  );
};

export default ImagePage;
export const imagesQuery = graphql`
  query PageQuery($name: String!) {
    allFile(filter: { relativeDirectory: { eq: $name } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 250, height: 250, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
          relativePath
          relativeDirectory
        }
      }
    }
  }
`;
