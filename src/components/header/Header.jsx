import React, {useState} from 'react';
import '../header/Header.css';
import logo from '../../assets/images/image12.svg';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOPen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOPen);
  };

  return (
    <div className="header">
      <div className="Logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Hamburger Menu icon */}
      <div className={`hamburger $ {isMenuOPen ? "active" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menu Items */}

      <div className={`links ${isMenuOPen ? "active" : ""}`}>
        <div>
          <NavLink to="/">MAIN</NavLink>
        </div>
        <div>
          <NavLink to="/gallery">GALLERY</NavLink>
        </div>
        <div>
          <NavLink to="/projects">PROJECTS</NavLink>
        </div>
        <div>
          <NavLink to="/certifications">CERTIFICATIONS</NavLink>
        </div>
        <div>
          <NavLink to="/contacts">CONTACTS</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header