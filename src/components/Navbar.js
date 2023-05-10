import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">music</Link>
        </li>
        <li>
          <Link to="/">store →</Link>
          <ul className="dropdown">
            <li>
              <Link to="/">music store</Link>
            </li>
            <li>
              <Link to="/">eu/uk store</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/tour">tour</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
