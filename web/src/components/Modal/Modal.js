import React from "react";
import ReactModal from "react-modal";
import Image from "gatsby-image";

import "./style.css";

const ImageModal = ({ image, onClose }) => {
  const [open, setOpen] = React.useState(true);

  const close = () => {
    setOpen(false);
    onClose();
  };

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={close}
      ariaHideApp={false}
      className="image-modal-container"
      style={{ width: "fit-content" }}
      onClick={close}
      overlayClassName="image-modal-overlay"
    >
      <a
        href={image.src}
        className="item-modal-source"
        target="_blank"
        rel="noopener nofollow"
        title="View source"
      >
        <img
          src={image.src}
          className="md:max-w-2xl item-modal-image max-h-screen"
        />
      </a>
    </ReactModal>
  );
};

export default ImageModal;
