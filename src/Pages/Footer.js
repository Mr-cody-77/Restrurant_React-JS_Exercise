// Footer.js

import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="links">
          <ul className="footer-links">
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><a href="/Termsandconditions">Terms of Service</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-content">
          <p>&copy; Sonu-{new Date().getFullYear()} Coding Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
