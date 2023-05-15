import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/research" className="navbar-link">Research</Link>
          </li>
          <li className="navbar-item">
            <Link to="/datascience" className="navbar-link">Data Science</Link>
          </li>
          <li className="navbar-item">
            <Link to="/softwareengineering" className="navbar-link">Software Engineering</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
