import React from "react";
import "./style.css";
import primeLaddersLogo from "./assets/primeladders.png";

function App() {
  return (
    <>
      <div className="App">
        <div className="bg-gray-300 flex flex-row">
          <img
            src={primeLaddersLogo}
            alt="logo for Prime Ladders"
            className="icon"
          />
          <h1 className="navBarLink">Home</h1>
          <h1 className="navBarLink">Shop</h1>
          <h1 className="navBarLink">Contact</h1>
          <h1 className="navBarLink">About Us</h1>
        </div>
      </div>
      <div className="body flex flex-row">
        <div className="border border-black">
          <h1>section talking about ladders</h1>
        </div>
        <div className="border border-black">
          <h1>section for the company</h1>
        </div>
      </div>
    </>
  );
}

export default App;
