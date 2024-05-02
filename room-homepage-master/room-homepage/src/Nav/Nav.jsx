import React from "react";
import logo from "../images/logo.svg";
import handburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

function Nav() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="Room logo" />{" "}
        </div>
        <div className="menu-icons">
          <img src={handburger} alt="menu icon" />
          <img src={close} alt="close icon" />
        </div>

        <ul>
          <li>
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/">Shop</a>
          </li>
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
