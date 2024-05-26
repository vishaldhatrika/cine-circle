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
      
        <ul className="navbarLinks list-none items-center flex font-sans">
          <li className="px-4"><a href="">Cinema</a></li>
          <li className="px-4"><a href="">TV Shows</a></li>
          <li className="px-4"><a href="">New Releases</a></li>
          <li className="px-4"><a href="">Login</a></li>
          <li className="px-4"><a href="">Register</a></li>
        </ul>
      
    </div>
  );
}
export default Navbar;
