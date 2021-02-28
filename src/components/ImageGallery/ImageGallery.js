import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ props, showModal, largeImageUrl }) {
  // console.log(props);

  return (
    <ul className="ImageGallery">
      {props.map((item) => {
        // console.log(item);
        return (
          <ImageGalleryItem
            id={item.id}
            webformatURL={item.webformatURL}
            type={item.type}
            onClick={() => showModal(item.largeImageURL)}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;
