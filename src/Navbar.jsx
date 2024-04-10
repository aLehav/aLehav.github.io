import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setSelection }) {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (filter) => {
    if (selectedItem === filter) {
      setSelectedItem('');
      setSelection('');
    } else {
      setSelectedItem(filter);
      if (filter === 'DataScience') {
        setSelection('data-science');
      } else if (filter === 'SoftwareEngineering') {
        setSelection('software-engineering');
      } else if (filter === 'Research') {
        setSelection('research');
      } else {
        setSelection('');
      }
    }
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link
              to={selectedItem === 'Research' ? '/' : `/?filter=${encodeURIComponent('Research')}`}
              className={`navbar-link ${selectedItem === 'Research' ? 'selected research' : ''}`}
              onClick={() => handleItemClick('Research')}
            >
              Research
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to={selectedItem === 'DataScience' ? '/' : `/?filter=${encodeURIComponent('DataScience')}`}
              className={`navbar-link ${selectedItem === 'DataScience' ? 'selected data-science' : ''}`}
              onClick={() => handleItemClick('DataScience')}
            >
              Data Science
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to={selectedItem === 'SoftwareEngineering' ? '/' : `/?filter=${encodeURIComponent('SoftwareEngineering')}`}
              className={`navbar-link ${selectedItem === 'SoftwareEngineering' ? 'selected software-engineering' : ''}`}
              onClick={() => handleItemClick('SoftwareEngineering')}
            >
              Software Engineering
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/reading' ? 'selected' : ''}`}>
            <Link
              to={location.pathname === '/reading' ? '/' : '/reading'}
              className="navbar-link"
              onClick={() => handleItemClick('')}
            >
              Reading
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
