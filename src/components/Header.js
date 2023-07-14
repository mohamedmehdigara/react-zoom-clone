import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Zoom Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

