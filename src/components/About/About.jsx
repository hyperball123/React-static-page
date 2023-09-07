import React from "react";
import "./About.css";
import Divider from "../Divider/Divider";
import image1 from "../../images/about1.jpg";
import image2 from "../../images/about2.jpg";
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons";
import WhatWeDo from "../what-we-do/WhatWeDo";

function About({ Title, desc }) {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="Title">{Title} </h2>
          <p className="desc">{desc}</p>
          <Divider
            className="customDivider"
            margin="5rem 0"
            padding="1px"
            height="1px"
          />

          <div className="about-employees">
            <div className="employee">
              <figure className="image">
                <img className="image1" src={image1} alt="#!" />
              </figure>
              <h3 className="employee-name">Jeniffer Martinez</h3>
              <p className="profile">Digital Development</p>
              <SocialMediaIcons />
            </div>

            <div className="employee">
              <figure className="image">
                <img className="image1" src={image2} alt="#!" />
              </figure>
              <h3 className="employee-name">Juan David Rendon</h3>
              <p className="profile">Digital Development</p>
              <SocialMediaIcons />
            </div>
          </div>
          <Divider
            className="customDivider"
            margin="5rem 0"
            padding="1px"
            height="1px"
          />
          <WhatWeDo />
          
        </div>
      </div>
    </div>
  );
}

export default About;
