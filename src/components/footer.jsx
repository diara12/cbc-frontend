import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <div className="footer-logo">Crystal Beauty Clear</div>
          <div className="footer-contact">
            <div>cbcbeauty@gmail.com</div>
            <div>23/A, Colombo 10</div>
            <div>078-9856023</div>
          </div>
          <div className="footer-social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <h2 className="footer-subscribe-title">
            SUBSCRIBE TO GET OUR <br /> DAILY UPDATES
          </h2>
          <form className="subscribe-form">
            <input
              type="email"
              className="subscribe-input"
              placeholder="Write your email address here..."
              required
            />
            <button type="submit" className="subscribe-button" title="Send">
              <svg
                width="35"
                height="35"
                fill="none"
                stroke="#b1a076"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 Copyright. All rights reserved
        </div>
        <div className="footer-shipping-payment">
          <div className="footer-payment">
            Payment Option:
            <span className="placeholder-icon">VISA</span>
            <span className="placeholder-icon">PayPal</span>
            <span className="placeholder-icon">MasterCard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
