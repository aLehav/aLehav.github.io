import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setSelection }) {
  const location = useLocation();

  const navItems = [
    { path: '/resume', label: 'Resume' },
    { path: '/reading', label: 'Reading' },
    { path: '/ramsey-theory', label: 'Ramsey Theory' },
    { path: '/antisemitism', label: 'Antisemitism' },
    { path: '/contact', label: 'Contact' },
  ];
  
  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="navbar-list">
        {navItems.map(({ path, label }) => (
          <li
            key={path}
            className={`navbar-item ${location.pathname === path ? 'selected' : ''}`}
          >
            <Link
              to={location.pathname === path ? '/' : path}
              className="navbar-link"
            >
              {label}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
