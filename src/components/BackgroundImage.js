import React from "react";
import background from "../assets/login.avif";
import "./BackgroundImage.css";

const BackgroundImage = () => {
  return (
    <div className="background__image__container">
      <img src={background} />
    </div>
  );
};

export default BackgroundImage;
