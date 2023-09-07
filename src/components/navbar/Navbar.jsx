import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <div className="nav">
      
      <nav className="studio-nav">
        <img className="studio-nav-logo" src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#home">WORK</a>
          </li>
          <li>
            <a href="#home">ABOUT</a>
          </li>
          <li>
            <a href="#home">CONTACT</a>
          </li>
          <div className="phone">
            <a className="btn" href="tel:(+57)-1234-444-00)">
              <span> (+57)-1234-444-00 </span>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
