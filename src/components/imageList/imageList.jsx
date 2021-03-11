import React from "react";
import "./imageList.css";
import ImageItem from "../imageItem/imageItem";
const ImageList = (props) => {
  const images = props.images.map((i) => {
    return <ImageItem key={i.id} image={i} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
