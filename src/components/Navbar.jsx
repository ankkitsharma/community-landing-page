import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar sm:px-44 md:px-64 bg-base-content shadow-lg shadow-zinc-200">
        <div className="navbar-start">
          {/* <img
            src="https://www.travelandholidays.in/assets/file/af64dd5e613eb06c0c22b57d90665f7d.png"
            className="min-w-32 max-w-52"
          /> */}
          <div className="text-3xl text-white font-thin">
            Travel and Holidays
          </div>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="text-white">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
