import React from "react";
import "./What-we-do.css";
import icon1 from "./icons/icon1.png";
import icon2 from "./icons/icon2.png";
import icon3 from "./icons/icon3.png";
import icon4 from "./icons/icon4.png";
import icon5 from "./icons/icon5.png";

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="what-we-do-h">
        <h4>we specialize <br /> in:</h4>
      </div>

      <div className="what-we-do-icon">
        <img src={icon1} alt="icons" />
        <p>Interactive Design</p>
      </div>
      <div className="what-we-do-icon">
        <img src={icon2} alt="icons" />
        <p>Code</p>
      </div>
      <div className="what-we-do-icon">
        <img src={icon3} alt="icons" />
        <p>Illustration</p>
      </div>
      <div className="what-we-do-icon">
        <img src={icon4} alt="icons" />
        <p>Interactive Design</p>
      </div>
      <div className="what-we-do-icon">
        <img src={icon5} alt="icons" />
        <p>UX/UI</p>
      </div>
    </div>
  );
}

export default WhatWeDo;
