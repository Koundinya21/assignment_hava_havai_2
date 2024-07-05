import React from "react";
import { TiHome } from "react-icons/ti";
import { BsGrid3X3GapFill } from "react-icons/bs";
import "./index.css";
import { Link } from "react-router-dom";

class LeftContent extends React.Component {
  render() {
    return (
      <div className="left-items">
        <div className="home-dashboard-item">
          <ul className="list-items">
            <div className="item">
              <TiHome className="icon" />
              <li className="description">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
            </div>
            <div className="item">
              <BsGrid3X3GapFill className="icon" />
              <li className="description">
                {/* <Link to="/dashboard" className="link">
                  Dashboard
                </Link> */}
                Dashboard
              </li>
            </div>
          </ul>
        </div>
        <div className="service-airport-videos">
          <ul className="list-items">
            <li className="services-item">Services</li>

            <li className="services-item">
              <Link to="/Airports" className="link">
                Airport
              </Link>
            </li>

            <li className="services-item">Videos</li>
          </ul>
        </div>
        <div className="list-container">
          <ul className="list-items">
            <li className="other-para">Others</li>
            <li className="list-1">List 1</li>
            <li className="list-1">List 2</li>
            <li className="list-1">List 3</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default LeftContent;
