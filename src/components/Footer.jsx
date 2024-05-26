import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
  return (
    <div className="footer grid grid-cols-2 gap-4">
      <div className="footerLinks col-span-1  pl-2 pr-28">
        <ul className="list-none items-center flex justify-evenly">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Contact</a></li>  
        </ul>      
      </div>
      <div className="footerSocials col-span-1  pl-28 pr-2">
        <ul className="list-none items-center flex justify-evenly">
          <li><a href=""><i className="bi bi-facebook"></i> Facebook</a></li>
          <li><a href=""><i className="bi bi-twitter-x"></i> Twitter / X</a></li>
          <li><a href=""><i className="bi bi-instagram"></i> Instagram</a></li>
          <li><a href=""><i className="bi bi-youtube"></i> YouTube</a></li>  
        </ul>
      </div>
      <div className="copyrightText col-span-2">
        Cine Circle © 2024
      </div>
    </div>
  );
}
export default Footer;
