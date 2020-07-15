import * as React from "react";

import Image from "gatsby-image";
import ImageModal from "../Modal/Modal";
import "./style.css";

const ImageView = ({ images }) => {
  const [currentImage, setImage] = React.useState(null);
  // TODO: we're filtering out Gifs here because
  // Sharp has the stupid and can't process gifs
  const validImages = images.filter(Boolean);
  return (
    <>
      <div className="grid md:grid-cols-2 xxs:grid-cols-1 lg:grid-cols-3 gap-4 max-w-full h-full justify-center image-grid">
        {validImages.map((image) => {
          return (
            <div
              key={image.src}
              onClick={() => setImage(image.original)}
              style={{ height: "250px", width: "250px" }}
            >
              <Image
                fixed={image.fixed}
                key={image.src}
                className="rounded cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      {currentImage !== null && (
        <ImageModal image={currentImage} onClose={() => setImage(null)} />
      )}
    </>
  );
};

export default ImageView;
