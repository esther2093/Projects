import RoseLogo from "../assets/RoseLogo.png";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepagetotal">
      <div className="homepagecontainer">
        <div className="homepageheaderbox">
          <h1 className="homepageHeader">
            <img className="roseLogoTitle" src={RoseLogo} />
            Be My Guest
            <img className="roseLogoTitle" src={RoseLogo} />
          </h1>
        </div>
        <div className="homepagebannerbox">
          <div className="homepagebannertextbox">
            <p className="homepagebannertext">
              "It is with deepest pride and greatest pleasure that we welcome
              you tonight. And now, we invite you to relax. Let us pull up a
              chair, as the dining room proudly presents your dinner."
            </p>
          </div>
        </div>
        <div className="homepageoptionsbox">
        <div className="foodImageBox">
          <Link to="/recipe">
            <div className="foodImageTextBox">
              <p className="foodImageText">Food</p>
            </div>
          </Link>
        </div>

        <div className="cocktailImageBox">
          <Link to="/cocktail">
            <div className="cocktailImageTextBox">
              <p className="cocktailImageText">Cocktails</p>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
