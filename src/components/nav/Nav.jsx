import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (path) => {
    setIsOpen(false);
    window.location.href = path; 
  };

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container navcont gt-0">
        <div className="logo" onClick={() => handleNavLinkClick('/')}>
          Pacific<br /><span>TRAVEL AGENCY</span>
        </div>

        <div className={`divforlis ${isOpen ? 'show' : ''}`}>
          <ul className="nav-links">
            {['/', '/about', '/destination', '/hotels', '/blog', '/contact'].map((path) => (
              <li key={path}>
                <button
                  onClick={() => handleNavLinkClick(path)}
                  className={location.pathname === path ? 'active' : ''}
                >
                  {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
