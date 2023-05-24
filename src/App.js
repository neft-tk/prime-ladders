import React from "react";
import "./style.css";
import primeLaddersLogo from "./assets/primeladders.png";
import ladder1 from "./assets/ladder-1.jpg";
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
          <a href="blank" target="blank" className="navBarLink">
            Home
          </a>
          <a href="blank" target="blank" className="navBarLink">
            Shop
          </a>
          <a href="blank" target="blank" className="navBarLink">
            Contact
          </a>
          <a href="blank" target="blank" className="navBarLink">
            About Us
          </a>
          <div className="info">
            <h1>123 Main St.</h1>
            <h1>(123) 456-7890</h1>
          </div>
        </div>
      </div>
      <div className="body flex flex-col">
        <div className="flex flex-row items-center justify-center bg-blue-200">
          <img src={ladder1} alt="person climbing a ladder" className="image" />
          <div className="flex flex-col justify-center">
            <h1 className="bg-blue-50 p-2 rounded-md">
              Thinking about reaching new heights? At Prime Ladders, our
              priority is helping you to reach your PRIME!
            </h1>
            <button className="button">Order Your Ladder Now!</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center bg-orange-200">
          <h1 className="bg-orange-50 rounded-md p-2">
            We work with industry professionals in order to bring you the
            highest quality ladders available, customized to suit to your needs!
          </h1>
          <img
            src={companyImg}
            alt="a group of corporate workers collaborating"
            className="image rounded-sm"
          />
        </div>
        <div className="flex justify-center">
          <h1>Copyright 2023 Prime Ladders LLC</h1>
        </div>
      </div>
    </>
  );
}

export default App;
