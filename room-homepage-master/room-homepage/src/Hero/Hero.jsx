import icon from "../images/icon-arrow.svg";
import leftAngleIcon from "../images/icon-angle-left.svg";
import rightAngleIcon from "../images/icon-angle-right.svg";
import Nav from "../Nav/Nav";

function Hero() { 
    return (
        <section>
            <Nav />
          <div className="hero">
            <h1>Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property owners
              across the country. Our experts combine form and function in bringing
              your vision to life. Create a room in your own style with our
              collection and make your property a reflection of you and what you
              love.
            </p>
            <button> 
              Shop now <img src={icon} alt="shop now arrow icon" />
            </button>
            <div>
              <button>
                <img src={leftAngleIcon} alt="left navigation icon" />
              </button>
              <button>
                <img src={rightAngleIcon} alt="right navigation icon" />
              </button>
            </div>
          </div>
      </section>
    );
}


export default Hero;