import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ImageViewer from "../components/ImageViewer/ImageViewer"
import { tallyImages } from "../utility"

const IndexPage = ({ data }) => {
  console.log(data)
  const images = tallyImages(data)
  return (
    <Layout>
      <SEO title="Home" />
      <ImageViewer images={images.C} />
      {/*<h1>Hi people</h1>*/}
      {/*<p>Welcome to your new Gatsby site.</p>*/}
      {/*<p>Now go build something great.</p>*/}
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*  /!*<Image />*!/*/}
      {/*</div>*/}
      {/*<Link to="/page-2/">Go to page 2</Link>*/}
    </Layout>
  )
}

export default IndexPage

export const imagesQuery = graphql`
  {
    allFile {
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
