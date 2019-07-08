import * as React from "react";

import Image from "gatsby-image";
import "./style.css";

const isGif = image => image === null || typeof image !== "object";

const ImageView = ({ images }) => {
  return (
    <div className="image-view-grid">
      {images.map(image => {
        if (isGif(image)) {
          return <img src={image} key={image} />;
        }
        return <Image fixed={image.fixed} key={image.src} className="image" />;
      })}
    </div>
  );
};

export default ImageView;
