import React from "react";
import ReactDOM from "react-dom";

function Navbar() {
  return (
    <div className="navbar flex justify-between">
      <div className=" flex logoWrapper self-center items-center">
        <img src="logo320.png" alt="" className="h-16 w-16 inline mr-2"/>
        <span className="ml-2 text-nowrap font-playfair font-bold text-xl">
          Cine Circle
        </span>
      </div>

      <div className="centerContent flex items-center">
        <h1 className="">Navbar</h1>
      </div>
      
        <ul className="navbarLinks items-center flex font-sans">
          <li className="px-4">About</li>
          <li className="px-4">Contact</li>
          <li className="px-4">Login</li>
          <li className="px-4"><a>Register</a></li>
        </ul>
      
    </div>
  );
}
export default Navbar;
