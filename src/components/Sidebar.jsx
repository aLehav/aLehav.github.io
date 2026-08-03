import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/reading', label: 'Reading' },
    { path: '/roadtrip', label: 'Roadtrip' },
    { path: '/ramsey', label: 'Ramsey Theory' },
    { path: '/hate-online', label: 'Hate Online' },
    { path: '/contact', label: 'Contact' },
  ];
  
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-name">Adam Lehavi</h1>
        <div className="sidebar-title">SWE & MLE<br/>M.S. CS USC</div>
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