import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Contact us: support@yeedee.com | +380 XX XXX XX XX</p>
      <div className="footer-socials">
        <a href="#facebook" className="social-icon">Facebook</a>
        <a href="#instagram" className="social-icon">Instagram</a>
        <a href="#linkedin" className="social-icon">LinkedIn</a>
      </div>
      <p>&copy; 2024 YeeDee. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
