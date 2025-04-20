import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* <div className="animated-background"></div> */}
      <div className="hero-content">
        <h1 className="animate-text">
          <span>Hello, I'm</span>
          <span className="highlight-text">OULDKHAOUA Mohamed Amine</span>
        </h1>
        <h2 className="animate-text delay-1">Engineer Student & Web Developer</h2>
        <p className="animate-text delay-2">"Engineering Student & Web Developer | Building the Future with Code"</p>
        <button className="cta-button animate-text delay-3"><a href="#work">View My Work</a></button>
      </div>
    </section>
  );
};

export default Hero;