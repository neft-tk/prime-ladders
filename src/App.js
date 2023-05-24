import React from "react";
import "./style.css";
import primeLaddersLogo from "./assets/primeladders.png";
import ladder1 from "./assets/ladder-1.jpg";
import ladder2 from "./assets/ladder-2.jpg";
import companyImg from "./assets/company.jpg";

function App() {
  return (
    <>
      <div className="App">
        <div className="flex flex-row my-3 border-b border-gray-300">
          <img
            src={primeLaddersLogo}
            alt="logo for Prime Ladders"
            className="icon"
          />
          <a href="blank" target="blank" className="navBarLink">Home</a>
          <a href="blank" target="blank" className="navBarLink">Shop</a>
          <a href="blank" target="blank" className="navBarLink">Contact</a>
          <a href="blank" target="blank" className="navBarLink">About Us</a>
          <div className="info">
            <h1>123 Main St.</h1>
            <h1>(123) 456-7890</h1>
          </div>
        </div>
      </div>
      <div className="body flex flex-col">
        <div className="border border-black flex flex-row">
          <img src={ladder1} alt="person climbing a ladder" className="image"/>
          <h1>section talking about ladders</h1>
          <img src={ladder2} alt="person climbing a ladder" className="image"/>
        </div>
        <div className="border border-black flex flex-row">
          <h1>section for the company</h1>
          <img src={companyImg} alt="a group of corporate workers collaborating" className="image"/>
        </div>
      </div>
    </>
  );
}

export default App;
