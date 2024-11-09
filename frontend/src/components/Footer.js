// Footer.js
import React from 'react';
import './Footer.css';
import LogoImage from '../images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section app-downloads">
          <h3>Download Our App</h3>
          <div className="store-buttons">
            <a href="#" className="store-button google-play">
              <div className="store-content">
                <span className="store-text">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
            <a href="#" className="store-button app-store">
              <div className="store-content">
                <span className="store-text">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Press</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <div className="contact-info-content">
            <img src={LogoImage} alt="Logo" className="footer-logo" />
            <div className="contact-details">
              <div className="helpline">
                <strong>HELPLINE (24 Hours)</strong>
                <a href="tel:123-456-7890" className="phone-number">
                  <i className="fas fa-phone-alt"></i> 123-456-7890
                </a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 ROADSIDE AWARENESS PRIVATE LIMITED. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;