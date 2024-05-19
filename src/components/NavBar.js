import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      {isHomePage ? (
        <>
          <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <ScrollLink to="projects" smooth={true} duration={500} className="dropbtn">Projects</ScrollLink>
            {showDropdown && (
              <div className="dropdown-content">
                <RouterLink to="/windows-domain">Windows Domain Environment</RouterLink>
                <RouterLink to="/active-directory">Active Directory Management</RouterLink>
                <RouterLink to="/help-desk">DoD Cyber Challenge</RouterLink>
              </div>
            )}
          </div>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        </>
      ) : (
        <>
          <RouterLink to="/">About</RouterLink>
          <RouterLink to="/">Skills</RouterLink>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <RouterLink to="/" className="dropbtn">Projects</RouterLink>
            {showDropdown && (
              <div className="dropdown-content">
                <RouterLink to="/windows-domain">Windows Domain Environment</RouterLink>
                <RouterLink to="/active-directory">Active Directory Management</RouterLink>
                <RouterLink to="/help-desk">Dod Cyber Challenge</RouterLink>
              </div>
            )}
          </div>
          <RouterLink to="/">Contact</RouterLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
