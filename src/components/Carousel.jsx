import React from "react";
import Slider from "./Slider";
import Popup from "./Popup";
import "../../node_modules/react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Carousel = () => {
  const properties = {
    prevArrow: <button className="btn btn-circle glass">❮</button>,
    nextArrow: <button className="btn btn-circle glass">❯</button>,
  };
  return (
    <Slide
      {...properties}
      indicators={false}
      autoPlay={true}
      duration={3000}
      className="w-full p-10"
    >
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="relative w-full h-screen flex items-center justify-center"
        >
          <div className="absolute flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <img
              src={`src/assets/slideImages/${index + 1}.jpg`}
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 w-full h-96 flex justify-center bg-gradient-to-t from-black via-black/70 to-transparent">
            <Popup />
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default Carousel;
