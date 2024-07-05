import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import "./index.css";

const AirportsTable = () => {
  const airports = [
    {
      name: "Indra Gandhi International Airport",
      country: "India",
      code: "DEL",
      terminals: 3,
    },
    {
      name: "Dubai International Airport",
      country: "UAE",
      code: "DXB",
      terminals: 5,
    },
    { name: "Heathrow Airport", country: "England", code: "LHR", terminals: 6 },
    { name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: 3 },
    {
      name: "Rajiv Gandhi International Airport",
      country: "Texas",
      code: "DFW",
      terminals: 14,
    },
  ];

  return (
    <div className="table-container">
      <h2>Airports</h2>
      <table className="airports-table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Airport Name</th>
            <th>Country</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport, index) => (
            <tr key={index}>
              <td>{airport.name}</td>
              <td>{airport.country}</td>
              <td>{airport.code}</td>
              <td>{airport.terminals}</td>
              <BiSolidPencil className="action-icon" />
              <ImBin className="action-icon" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AirportsTable;
