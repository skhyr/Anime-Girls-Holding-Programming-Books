import * as React from "react";
import ImageView from "../../components/ImageView/ImageView";
import { PageLayout } from "../../components/Layout/Layout";
import { graphql } from "gatsby";
import { convertURLScheme } from "../../utility";
import SEO from "../../components/seo";
import ScrollBar from "react-perfect-scrollbar";

const ImagePage = ({ pageContext, data }) => {
  const { name } = pageContext;
  const {
    allFile: { edges },
  } = data;
  const humanReadable = convertURLScheme(name);
  const images = edges.map((edge) => edge.node.childImageSharp);
  return (
    <ScrollBar>
      <PageLayout type={humanReadable}>
        <SEO title={humanReadable} />
        <ImageView images={images} />
      </PageLayout>
    </ScrollBar>
  );
};

export const imagesQuery = graphql`
  query PageQuery($name: String!) {
    allFile(filter: { relativeDirectory: { eq: $name } }) {
      edges {
        node {
          childImageSharp {
            original {
              src
            }
            fixed(width: 250, height: 250, quality: 90) {
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

export default ImagePage;
