import React from "react";

function ImageGalleryItem({ webformatURL, id, type, onClick}) {
  return (
    <li key={id}>
      <img src={webformatURL} alt={type}  onClick={onClick}/>
    </li>
  );
}

export default ImageGalleryItem;