import React from "react";

export const ImageCard = (props) => {
  const { description, urls } = props.image;
  return (
    <div>
      <img alt={description} src={urls.regular}></img>
    </div>
  );
};
