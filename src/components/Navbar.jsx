import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaHome } from 'react-icons/fa'; // Added FaHome
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">نور</Link>
      </div>

      {/* Right side: Home icon + Hamburger */}
      <div className="navbar-right">
        {/* Home icon */}
        <Link to="/" className="home-icon" title="Home">
          <FaHome size={20} />
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="dropdown-menu">
            <div className="menu-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input" />
            </div>

            <div className="navbar-links">
              <Link to="/about" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>Collections</Link>
              <Link to="/submit" onClick={() => setMenuOpen(false)}>Custom Orders</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Help</Link>
              <Link to="/settings" onClick={() => setMenuOpen(false)}>
                <FaUser className="icon-setting" title="Settings" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
