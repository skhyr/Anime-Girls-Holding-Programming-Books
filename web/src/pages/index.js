import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import ImageView from "../components/ImageView/ImageView";
import Modal from "../components/Modal/Modal";
import ScrollBar from "react-perfect-scrollbar";
import { tallyImages } from "../utility";
import { PageLayout } from "../components/Layout/Layout";

const IndexPage = ({ data }) => {
  const images = tallyImages(data);
  const allImages = Object.values(images).reduce((a, b) => a.concat(b), []);
  return (
    <ScrollBar>
      <PageLayout>
        <SEO title="Home" />
        <ImageView images={allImages} />
      </PageLayout>
    </ScrollBar>
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
            original {
              src
            }
            fixed(width: 250, height: 250, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
