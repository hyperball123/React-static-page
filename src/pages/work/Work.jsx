import React from 'react';
import './work.css'
import Carousel from '../../components/carousel/Carouseldemo';
import SocialMediaIcons from '../../components/socialMediaIcons/SocialMediaIcons'
import Divider from '../../components/Divider/Divider';

function Work() {
  return (
    <div className="work-section">
      <div className="work-container">
        <div className="work-icon">
          <span>WORKs</span>
          <p className="work-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor.
            Integer quam velit.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="10rem"
            viewBox="0 0 512 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <Divider />
        <Carousel />
        <Divider />
        <div className="work-desc-container">
          <p className="work-desc">
            Do you want to see more? <span>Follow Us:</span>
          </p>

          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}

export default Work
