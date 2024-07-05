import { Component } from "react";
import LeftContent from "../left-content";
import AirportsList from "../AirportsList";
import "./index.css"; // Ensure you import the CSS file

class DisplayContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="dashboard">
          <LeftContent />
        </div>
        <div className="right-content">
          <div className="right-content-heading">
            <h1 className="airport">Airports</h1>
            <button className="button">+Add new</button>
          </div>
          <AirportsList />
        </div>
      </div>
    );
  }
}
export default DisplayContent;
