import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">OULDKHAOUA Mohamed Amine</h3>
          <p className="footer-copyright">&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        
        <div className="footer-section">
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;