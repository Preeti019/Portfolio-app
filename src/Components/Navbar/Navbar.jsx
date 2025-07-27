import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          {/* Replace with your logo or name */}
          <span className="logo-text">PreetiYadav</span>
        </a>
        
        {/* Mobile menu button */}
        <div 
          className="menu-icon" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#home" 
              className="nav-links" 
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className="nav-links" 
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className="nav-links" 
              onClick={closeMobileMenu}
            >
              Projects
            </a>
          </li>
          
          <li className="nav-item">
            <a 
              href="#contact" 
              className="nav-links" 
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;