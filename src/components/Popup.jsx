import React from "react";

const Popup = () => {
  return (
    <div className="text-white flex flex-col items-center gap-5">
      <div className="text-2xl sm:text-3xl">
        Get up to <span className="text-green-500 font-bold">50% OFF</span> on
      </div>
      <div className="text-3xl sm:text-5xl font-bold">
        <span className="text-green-500">DUBAI</span> Tour Packages!
      </div>
      <hr className="w-1/2"></hr>
      <div className="text-xl">
        Starting at <span className="font-bold">INR 34,999</span>{" "}
        <strike>INR 69,998</strike>
      </div>
      <button className="btn btn-primary">
        <a href="https://chat.whatsapp.com/FTeRhzWFP0dCyolaCoZtWG">
          <div className="flex gap-2 items-center">
            Join our{" "}
            <span>
              <img src="src/assets/whatsapp.png" className="w-6"></img>
            </span>{" "}
            Community
          </div>
        </a>
      </button>
    </div>
  );
};

export default Popup;
