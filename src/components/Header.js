import React from 'react';
import { Link } from 'react-router-dom';
import '../TourStyle.css';

const Header = () => {
  return (
    <div id='Tour'>
        <div
            id='header'>
            <Link to="/" className="back-link">←</Link>
            <span>may 13 2022</span>
        </div>

    </div>

  );
};

export default Header;
