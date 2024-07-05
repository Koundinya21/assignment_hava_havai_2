import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import DisplayContent from "./components/displayContent";
import AirportDetails from "./components/AirportDetails";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<DisplayContent />} />
      <Route exact path="/Airports" element={<AirportDetails />} />
      {/* Add more routes as needed */}
    </Routes>
  </BrowserRouter>
);

export default App;
