import React from 'react'
import './Footer.css'
import SocialMediaIcons from '../socialMediaIcons/SocialMediaIcons'

function footer() {
  return (
    <div className="Footer-section">
      <div className="social-media-icons">
        <SocialMediaIcons />
      </div>
      <p>
        © IWTHEMES.|
        <a href="#!">Privacy Policy</a>
      </p>
    </div>
  );
}

export default footer
