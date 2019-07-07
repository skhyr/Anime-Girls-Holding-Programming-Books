import * as React from "react"
import ImageViewer from "../../components/ImageViewer/ImageViewer"
import Layout from "../../components/Layout/layout"
import { graphql } from "gatsby"

const ImagePage = ({ pageContext, data }) => {
  const { name } = pageContext
  const {
    allFile: { edges },
  } = data
  const images = edges.map(edge => edge.node.childImageSharp)
  console.log(data)
  console.log(images)
  return (
    <Layout page={name}>
      <ImageViewer images={images} />
    </Layout>
  )
}

export default ImagePage
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
`
