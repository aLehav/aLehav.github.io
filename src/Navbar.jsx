import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (filter) => {
    if (selectedItem === filter) {
      setSelectedItem('');
    } else {
      setSelectedItem(filter);
    }
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className={`navbar-item ${selectedItem === 'Research' ? 'selected' : ''}`}>
            <Link
              to={selectedItem === 'Research' ? '/' : `/?filter=${encodeURIComponent('Research')}`}
              className="navbar-link"
              onClick={() => handleItemClick('Research')}
            >
              Research
            </Link>
          </li>
          <li className={`navbar-item ${selectedItem === 'DataScience' ? 'selected' : ''}`}>
            <Link
              to={selectedItem === 'DataScience' ? '/' : `/?filter=${encodeURIComponent('DataScience')}`}
              className="navbar-link"
              onClick={() => handleItemClick('DataScience')}
            >
              Data Science
            </Link>
          </li>
          <li className={`navbar-item ${selectedItem === 'SoftwareEngineering' ? 'selected' : ''}`}>
            <Link
              to={selectedItem === 'SoftwareEngineering' ? '/' : `/?filter=${encodeURIComponent('SoftwareEngineering')}`}
              className="navbar-link"
              onClick={() => handleItemClick('SoftwareEngineering')}
            >
              Software Engineering
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/contact' ? 'selected' : ''}`}>
            <Link
              to={location.pathname === '/contact' ? '/' : '/contact'}
              className="navbar-link"
              onClick={() => handleItemClick('')}
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
