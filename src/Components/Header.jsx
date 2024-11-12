import React from 'react';
import '../Styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>YeeDee</h1>
        <p className="header-slogan">їжа з вигодою для всіх</p>
      </div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#business">Business</a>
      </nav>
      <div className="header-controls">
        <button className="download-button">Download</button>
        <div className="language-switch">
          <span>UA</span> | <span>EN</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
