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
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-content">
          <p>CopyRights &copy; {new Date().getFullYear()} Coding Restruant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
