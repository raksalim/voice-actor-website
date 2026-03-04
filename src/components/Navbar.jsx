import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Raksa Lim
        </NavLink>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="demos" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Demos</NavLink></li>
          <li><NavLink to="about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="contact" onClick={closeMenu} className="nav-cta">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
