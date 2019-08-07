import * as React from "react";

import Image from "gatsby-image";
import "./style.css";
import ImageModal from "../Modal/Modal";

const ImageView = ({ images }) => {
  const [currentImage, setImage] = React.useState(null)
  // TODO: we're filtering out Gifs here because 
  // Sharp has the stupid and can't process gifs
  const validImages = images.filter(Boolean);
  return (
    <>
      <div className="image-view-grid">
        {validImages.map(image => {
          return (
            <div onClick={() => setImage(image.fluid)}>
              <Image fixed={image.fixed} key={image.src} className="image" />
            </div>
          )
        })}
      </div>
      {currentImage !== null &&
        <ImageModal image={currentImage} onClose={() => setImage(null)} />
      }
    </>
  );
};

export default ImageView;
