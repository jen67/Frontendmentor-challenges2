import React from "react";
import logo from "../images/logo.svg";
import icon from "../images/icon-arrow.svg";
import leftAngleIcon from "../images/icon-angle-left.svg";
import rightAngleIcon from "../images/icon-angle-right.svg";

function Nav() {
  return (
    <section>
        <header>
        <nav>
          <img src={logo} alt="Room logo" /> 
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="/#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="hero-sect">
        <h1>Discover innovative ways to decorate</h1>
        <p>We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function in bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.</p>
        <span>
          Shop now <img src={icon} alt="arrow" />
        </span>

        <div>
          <span><img src={leftAngleIcon} alt="left icon" /></span>
          <span><img src={rightAngleIcon} alt="right icon" /></span>
        </div>
      </div>
    </section>
  );
}

export default Nav;
