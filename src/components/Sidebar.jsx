import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/research', label: 'Research' },
    { path: '/reading', label: 'Reading' },
    { path: '/roadtrip', label: 'Roadtrip' },
    { path: '/contact', label: 'Contact' },
  ];
  
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-name">Adam Lehavi</h1>
        <div className="sidebar-title">Applied Math & CS<br/>University of Southern California</div>
      </div>
      <nav>
        <ul className="nav-list">
          {navItems.map(({ path, label }) => (
            <li key={path} className="nav-item">
              <Link
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;