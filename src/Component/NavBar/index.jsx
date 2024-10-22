import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import './style.css';

const data = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Project',
    to: '/project',
  },
  {
    label: 'Skills',
    to: '/skills',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={'/'} className="logo">
            <h1>Ayana</h1>
          </Link>
          <div className="nav_icons" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        <ul className={`menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item) => (
            <li key={item.to} className="item">
              <Link className="links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
