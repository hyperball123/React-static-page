import React from "react";
import "./ContactUs.css";
import Divider from "../Divider/Divider";

function ContactUsComp() {
  return (
    <div className="Contact-section">
      <div className="Contact-container">
        <div className="Title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 512 512"
            className="title-icon"
          >
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
          <h2 className="Contact-title">CONTACT</h2>
        </div>
        <Divider margin="5rem 0" padding="1px" height="1px" />

        <div className="contact-description">
          <p className="contact-dec">
            We’re always looking for new projects to work on, if you have some
            please write us!
          </p>
          <span className="contact-mail">
            <a href="#!" role="button">
              support@iwthemes.com
            </a>
          </span>
        </div>

        <Divider margin="5rem 0" padding="1px" height="1px" />

        <div className="contact-details">
          <div className="message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="message-icon"
            >
              <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
            </svg>
            <p className="tel">(+57)-1234-444-00</p>
          </div>
          <div className="contact location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="message-icon"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p className="location-text">We're at Indonesia!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComp;
