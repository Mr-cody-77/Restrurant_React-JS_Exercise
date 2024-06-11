// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1>Coding Restruaunt</h1>
        <div className={isOpen ? 'nav-links active' : 'nav-links'}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={isOpen ? 'line line1 active' : 'line line1'}></div>
          <div className={isOpen ? 'line line2 active' : 'line line2'}></div>
          <div className={isOpen ? 'line line3 active' : 'line line3'}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
