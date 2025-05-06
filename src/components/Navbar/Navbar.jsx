import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref1}>
      <nav className={inView1 ? 'animate' : ''}>
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            SkillSwap
          </Link>

          <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link nav-link-design" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/offer-skill" className="nav-link nav-link-design" onClick={() => setIsOpen(false)}>
                Offer Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hire-skill" className="nav-link nav-link-design" onClick={() => setIsOpen(false)}>
                Hire Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link nav-link-design" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link nav-link-button" onClick={() => setIsOpen(false)}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
