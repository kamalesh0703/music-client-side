import React from "react";
import "./AlbumImages.css";

function AlbumImage({ url }) {
  return (
    <div className="albumImage">
      <img src={url} className="albumImage-art" alt="songimage" />
      <div className="albumImage-shadow">
      </div>
      <img src={url} alt="shodaw" className="albumImage-shadow" />
    </div>
  );
}

export default AlbumImage;
