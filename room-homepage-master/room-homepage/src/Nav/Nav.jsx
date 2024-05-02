import React from "react";
import logo from "../images/logo.svg";

function Nav() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Room logo" /> 
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/">Shop</a></li>
          <li><a href="#/">About</a></li>
          <li><a href="#/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;