import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loading" id="loading">
      {/* <div></div> */}  
      {/* <h2>Mosaic Ripple<br>Loading Animation</h2> */}
      <div className="mosaic-loader">
        <div className="cell d-0"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>
        <div className="cell d-3"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>
        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
        <div className="cell d-2"></div>
        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
        <div className="cell d-5"></div>
        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
        <div className="cell d-5"></div>
        <div className="cell d-6"></div>
      </div>
    </div>
    // <div className="preloader">
    //   <div className="preloader__square"></div>
    //   <div className="preloader__square"></div>
    //   <div className="preloader__square"></div>
    //   <div className="preloader__square"></div>
    // </div>
  );
};

export default Loader;
