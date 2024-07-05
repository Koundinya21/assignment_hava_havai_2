import { Component } from "react";
import "./index.css";
import { FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import LeftContent from "../left-content";
import { BiUpload } from "react-icons/bi";

class AirportDetails extends Component {
  render() {
    return (
      <div className="content">
        <div className="left-part">
          <LeftContent />
        </div>
        <div className="airport-details">
          <h1 className="airport-name">
            <span className="head1">Airports</span>
            <FaChevronRight className="shape" />{" "}
            <span className="head2">Indira Gandhi International Airport</span>
          </h1>
          <h1>Indira Gandhi International Airport</h1>
          <div className="favours">
            <ul className="favours-items">
              <li className="compo-1">Terminal</li>
              <li className="compo-1">Transport</li>
              <li className="compo-1">Contact details</li>
            </ul>
          </div>
          <hr className="line" />
          <div className="imgs-align">
            <div className="img-container">
              <img
                src="https://res.cloudinary.com/dowxofd2k/image/upload/v1720178870/Image_mcwuid.png"
                alt="img"
              />
              <div className="terminal">
                <h1 className="terminal-head">
                  Terminal 1 <BsThreeDots />
                </h1>

                <p className="terminal-contnet">
                  Optional metadata should be two lines.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img
                src="https://res.cloudinary.com/dowxofd2k/image/upload/v1720178870/Image_mcwuid.png"
                alt="img"
              />
              <div className="terminal">
                <h1 className="terminal-head">
                  Terminal 1 <BsThreeDots />
                </h1>

                <p className="terminal-contnet">
                  Optional metadata should be two lines.
                </p>
              </div>
            </div>
          </div>

          <h1 className="Services">Services</h1>
          <div className="LostFound">
            <h1 className="lost-headgin">Lost & found</h1>
          </div>
          <div className="align-row">
            <div className="services-container">
              <div className="name">
                <label for="found" className="found">
                  Service Name
                </label>
                <p className="name-part" id="found">
                  Lost & found
                </p>
              </div>
            </div>
            <div className="services-container">
              <div className="name">
                <label for="found" className="found">
                  Category
                </label>
                <select className="name-part" id="found">
                  <option>Option 1</option>
                </select>
              </div>
            </div>
            <div className="services-container">
              <div className="name">
                <label for="found" className="found">
                  Sub Category
                </label>
                <select className="name-part" id="found">
                  <option>Option 1</option>
                </select>
              </div>
            </div>
            <div className="btn-container">
              <button className="bt">
                <BiUpload />
                upload image
              </button>
            </div>
            <div>
              <input type="radio" />
              <label>Show image</label>
            </div>
            <div className="text-container">
              <div className="name">
                <label for="found" className="found">
                  Description
                </label>
                <input type="text" placeholder="type here" />
              </div>
            </div>
          </div>
          <div className="louge">
            <p className="loug-one">Lounge</p>
          </div>
          <div className="louge">
            <p className="loug-one">Money Exchange</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AirportDetails;
