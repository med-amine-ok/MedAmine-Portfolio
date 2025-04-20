import React, { useEffect, useState, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const backgroundRef = useRef(null);
  const requestRef = useRef();
  
  // Handle scroll events with requestAnimationFrame for performance
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Create stars dynamically
  useEffect(() => {
    const starLayer1 = backgroundRef.current.querySelector('.stars-layer-1');
    const starLayer2 = backgroundRef.current.querySelector('.stars-layer-2');
    const starLayer3 = backgroundRef.current.querySelector('.stars-layer-3');
    
    // Clear existing stars
    starLayer1.innerHTML = '';
    starLayer2.innerHTML = '';
    starLayer3.innerHTML = '';
    
    // Create small distant stars (layer 1)
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star small';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starLayer1.appendChild(star);
    }
    
    // Create medium stars (layer 2)
    for (let i = 0; i < 75; i++) {
      const star = document.createElement('div');
      star.className = 'star medium';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 8}s`;
      starLayer2.appendChild(star);
    }
    
    // Create larger foreground stars (layer 3)
    for (let i = 0; i < 40; i++) {
      const star = document.createElement('div');
      star.className = 'star large';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 12}s`;
      starLayer3.appendChild(star);
    }
    
    // Add nebula clouds
    for (let i = 0; i < 5; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      nebula.style.left = `${Math.random() * 100}%`;
      nebula.style.top = `${Math.random() * 100}%`;
      nebula.style.transform = `scale(${Math.random() * 0.8 + 0.6})`;
      nebula.style.opacity = Math.random() * 0.4 + 0.1;
      nebula.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      backgroundRef.current.appendChild(nebula);
    }

    // Create grid
    const grid = backgroundRef.current.querySelector('.grid');
    grid.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
      const gridLine = document.createElement('div');
      gridLine.className = 'grid-line horizontal';
      gridLine.style.top = `${i * 5}%`;
      grid.appendChild(gridLine);
    }
    
    for (let i = 0; i < 20; i++) {
      const gridLine = document.createElement('div');
      gridLine.className = 'grid-line vertical';
      gridLine.style.left = `${i * 5}%`;
      grid.appendChild(gridLine);
    }
  }, []);

  // Set up and clean up scroll listener with requestAnimationFrame
  useEffect(() => {
    const onScroll = () => {
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(() => {
          handleScroll();
          requestRef.current = null;
        });
      }
    };
    
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Apply parallax effects based on scroll position
  useEffect(() => {
    if (backgroundRef.current) {
      const starLayer1 = backgroundRef.current.querySelector('.stars-layer-1');
      const starLayer2 = backgroundRef.current.querySelector('.stars-layer-2');
      const starLayer3 = backgroundRef.current.querySelector('.stars-layer-3');
      const grid = backgroundRef.current.querySelector('.grid');
      const nebulae = backgroundRef.current.querySelectorAll('.nebula');
      
      // Parallax effect - different speeds for different layers
      starLayer1.style.transform = `translateY(${scrollY * 0.1}px)`;
      starLayer2.style.transform = `translateY(${scrollY * 0.2}px)`;
      starLayer3.style.transform = `translateY(${scrollY * 0.3}px)`;
      grid.style.transform = `translateY(${scrollY * 0.05}px) rotateX(60deg)`;
      
      // Rotate and scale nebulae for an organic feel
      nebulae.forEach((nebula, i) => {
        nebula.style.transform = `scale(${Math.random() * 0.2 + 0.9 + scrollY * 0.0005}) 
                                 rotate(${scrollY * (0.01 * (i % 3 + 1))}deg)`;
      });
    }
  }, [scrollY]);

  return (
    <div className="animated-background" ref={backgroundRef}>
      <div className="stars-container">
        <div className="stars-layer-1"></div>
        <div className="stars-layer-2"></div>
        <div className="stars-layer-3"></div>
      </div>
      <div className="grid"></div>
      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
    </div>
  );
};

export default AnimatedBackground;