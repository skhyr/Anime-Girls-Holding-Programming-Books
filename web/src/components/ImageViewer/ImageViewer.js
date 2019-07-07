import * as React from "react";

import Image from "gatsby-image"

const isGif = image => image === null || typeof image !== "object";

const ImageViewer = ({ images }) => {
  return (
    images.map(image => {
      if (isGif(image)) {
        return (
          <img src={image} key={image}/>
        )
      }
      return (
          <Image fixed={image.fixed} key={image.src}/>
        )
      })
  )
}

export default ImageViewer;
