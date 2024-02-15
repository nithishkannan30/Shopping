import React from "react";
import { Link } from "react-router-dom";
const ImageComponent = ({ image, title, id }) => {
  return (
    <div id={id} className="image-container">
      <img src={image} alt="img" />
      <p  className="text-xl my-[3px]">{title && title.length > 15 ? title.slice(0, 15) + "... " : title}</p>
      <Link to={`/${id}`}>
        <button type="button" className="btn">
          Visit Item
        </button>
      </Link>
    </div>
  );
};

export default ImageComponent;
