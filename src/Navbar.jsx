import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setSelection }) {
  const location = useLocation();
  
  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className={`navbar-item ${location.pathname === '/career' ? 'selected' : ''}`}>
            <Link
              to={location.pathname === '/career' ? '/' : '/career'}
              className="navbar-link"
            >
              Career
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/reading' ? 'selected' : ''}`}>
            <Link
              to={location.pathname === '/reading' ? '/' : '/reading'}
              className="navbar-link"
            >
              Reading
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/contact' ? 'selected' : ''}`}>
            <Link
              to={location.pathname === '/contact' ? '/' : '/contact'}
              className="navbar-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
