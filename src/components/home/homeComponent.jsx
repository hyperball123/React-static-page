import React from "react";
import './home.css';

function HomeComponent({ p, h1, heroDescription, showButton}) {
  return (
    <div>
      <section className="hero-home">
        <div className="hero-home-container">
          <p className="hero-p">{p}</p>
          <h1 className="hero-h1">{h1}</h1>
          <hr className="underline" />
          <p className="hero-description">{heroDescription}</p>
          {showButton && <a href="#!" className="hero-home-btn">
            TALK WITH US
          </a>}
        </div>
      </section>
    </div>
  );
}

export default HomeComponent;
