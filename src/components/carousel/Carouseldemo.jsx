import React from "react";
// import Slider from "react-slick";
import "./carousel.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

// import image4 from "./images/image4.jpg";
// import image5 from "./images/image5.jpg";

function Carousel() {
  // const settings = {
  //   infinite: true, // Loop through the slides infinitely
  //   speed: 500, // Transition speed in milliseconds
  //   slidesToShow: 3, // Number of slides to show at a time
  //   slidesToScroll: 1, // Number of slides to scroll when navigating
  //   autoplay: true, // Autoplay the carousel
  //   autoplaySpeed: 2000,
  // };
  return (
    <div>
      <div className="carousel-container">
        {/* <Slider {...settings}> */}
        <div className="direction">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2.2em"
            viewBox="0 0 320 512"
            className="dir-icon-left"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </div>
        <div className="images">
          <img className="image" src={image1} alt="#!" />
        </div>
        <div className="images">
          <img className="image" src={image2} alt="#!" />
        </div>
        <div className="images">
          <img className="image" src={image3} alt="#!" />
        </div>
        <div className="direction">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2.2em"
            viewBox="0 0 320 512"
            className="dir-icon-right"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        {/* <div className="images">
            <img className="image" src={image4} alt="#!" />
          </div>
          <div className="images">
            <img className="image" src={image5} alt="#!" />
          </div> */}
        {/* </Slider> */}
      </div>
    </div>
  );
}

export default Carousel;
