import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {t.home.name}
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu ${mobileMenuOpen ? 'is-active' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMobileMenu}
                end
              >
                {t.nav.home}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMobileMenu}
              >
                {t.nav.skills}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMobileMenu}
              >
                {t.nav.projects}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMobileMenu}
              >
                {t.nav.resume}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMobileMenu}
              >
                {t.nav.contact}
              </NavLink>
            </li>
          </ul>

          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => {
                setLanguage('en');
                closeMobileMenu();
              }}
              title="Switch to English"
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
              onClick={() => {
                setLanguage('hi');
                closeMobileMenu();
              }}
              title="हिन्दी में बदलें"
            >
              हिन्दी
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
