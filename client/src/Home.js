import React from "react";
import Navbar from "./navigation/HomeNavbar";
import "./Home.css"
function Home () {
    return (
        <>
          <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <div className="container1">
    <div className="wrapper">
      <div className="wrapper-holder">
        <div id="slider-img-1" />
        <div id="slider-img-2" />
        <div id="slider-img-3" />
        <div id="slider-img-4" />
        <div id="slider-img-5" />
      </div>
    </div>
    <div className="button-holder">
      <a href="slider-img-1" className="button" />
      <a href="slider-img-2" className="button" />
      <a href="slider-img-3" className="button" />
      <a href="slider-img-4" className="button" />
      <a href="slider-img-5" className="button" />
    </div>
  </div>


        </>)}

export default Home;