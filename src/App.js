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
        <div className="flex flex-row mt-3  border-b border-gray-300">
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
          <div className="hidden md:flex md:flex-col md:absolute md:right-0">
            <h1>123 Main St.</h1>
            <h1>(123) 456-7890</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-blue-200 flex flex-col justify-around md:items-center"> 
          <img src={primeLaddersLogo} alt="large logo" className="iconLarge"/>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-28 bg-blue-200">
          <img src={ladder1} alt="person climbing a ladder" className="image" />
          <div className="flex flex-col justify-center">
            <h1 className="bg-blue-50 p-2 rounded-t-md">
              Thinking about reaching new heights?
            </h1>
            <h1 className="bg-blue-50 p-2 rounded-b-md">
              At Prime Ladders, our priority is helping you to reach your PRIME!
            </h1>
            <button className="button">Order Your Ladder Today!</button>
          </div>
        </div>

        </div>
        <div className="flex flex-col md:flex-row items-center justify-center bg-orange-200">
          <div>
          <div className="flex flex-col justify-center">
          <h1 className="bg-orange-50 rounded-t-md p-2">
            We work with industry professionals in order to bring you
          </h1>
          <h1 className="bg-orange-50 rounded-b-md p-2">
            the highest quality ladders available, customized to suit to your
            needs!
          </h1>
          <button className="button">Order Your Custom Ladder Here</button>
          </div>
          </div>
          <img
            src={companyImg}
            alt="a group of corporate workers collaborating"
            className="image rounded-sm"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center bg-green-200">
          <img
            src={ladder2}
            alt="man climbing ladder adjacent to house"
            className="image rounded-sm"
          />
          <div>
          <div className="flex flex-col justify-center">
          <h1 className="bg-green-50 rounded-t-md p-2">
            For any project we promise to work with you step by step
          </h1>
          <h1 className="bg-green-50 rounded-b-md p-2">
            to make sure you get exactly what you need to finish the job!
          </h1>
          <button className="button">Check Our Customer Reviews!</button>
          </div>
          </div>
        </div>
        <div className="flex justify-center">
          <h1>Copyright 2023 Prime Ladders LLC</h1>
        </div>
      </div>
    </>
  );
}

export default App;
