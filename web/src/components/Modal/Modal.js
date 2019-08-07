import React from "react"
import ReactModal from "react-modal"
import Image from "gatsby-image"

import "./style.css"

const ImageModal = ({ image, onClose }) => {
  const [open, setOpen] = React.useState(true)

  const close = () => {
    setOpen(false)
    onClose()
  }

  return (
    <ReactModal isOpen={open} onRequestClose={close} ariaHideApp={false} className="image-modal-container" onClick={close} overlayClassName="image-modal-overlay">
      <a href={image.src} className="image-modal-source" target="_blank" rel="noopener nofollow" title="View source">
        <img src={image.src} />
      </a>
    </ReactModal >
  )
}

export default ImageModal