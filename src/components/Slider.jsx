import React from "react";

const Slider = () => {
  return (
    <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0">
      <a
        href="#slide1"
        className="bg-transparent border-gray-500 border-2 h-3 w-3 rounded-xl"
      ></a>
      <a
        href="#slide2"
        className="border-gray-500 border-2 h-3 w-3 rounded-xl"
      ></a>
      <a
        href="#slide3"
        className="border-gray-500 border-2 h-3 w-3 rounded-xl"
      ></a>
      <a
        href="#slide4"
        className="border-gray-500 border-2 h-3 w-3 rounded-xl"
      ></a>
    </div>
  );
};

export default Slider;
