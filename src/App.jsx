import React from 'react';
import Navbar from '../Sections/Navbar';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Work from '../Sections/Work';
import Contact from '../Sections/Contact';
import Footer from '../Sections/Footer';
import AnimatedBackground from './AnimatedBackground';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;