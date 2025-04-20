import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TbMathFunction } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(aboutRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className={`section-content ${isVisible ? "fade-in" : ""}`}>
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          
          
          <div className="about-text">
            <div className="about-image">
            <img
              className="profile-image"
              src="/IMG_my.JPG"
              alt="Profile"
            />
          </div>
            <h3 className="section-heading">Professional Summary</h3>
            <p>
              I'm an Engineering student with a passion for web development and
              a knack for project management. Whether it's coding robust
              applications, solving complex problems, or leading teams to
              deliver successful projects, I thrive at the intersection of
              technology and leadership. My goal is to build innovative digital
              solutions while optimizing efficiency—one line of code and one
              well-managed project at a time.
            </p>

            <div className="skills-container">
              <h3 className="section-heading">Technical Expertise</h3>
              <div className="skills-flex">
                {/* Using only Font Awesome icons */}
                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="skill-name">React.js</div>
                </div>

                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <div className="skill-name">JavaScript</div>
                </div>

                <div className="skill-container">
                  <div className="skill-icon">
                    <BiLogoTypescript></BiLogoTypescript>
                  </div>
                  <div className="skill-name">TypeScript</div>
                </div>

                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fab fa-node-js"></i> {/* Next.js replacement */}
                  </div>
                  <div className="skill-name">Next.js</div>
                </div>

                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fab fa-css3"></i> {/* Tailwind replacement */}
                  </div>
                  <div className="skill-name">Tailwind CSS</div>
                </div>

                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fab fa-html5"></i>
                  </div>
                  <div className="skill-name">HTML/CSS</div>
                </div>
                
                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fab fa-git-alt"></i>
                  </div>
                  <div className="skill-name">GIT</div>
                </div>
                
                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fab fa-android"></i> {/* Flutter replacement */}
                  </div>
                  <div className="skill-name">FLUTTER</div>
                </div>
                
                <div className="skill-container">
                  <div className="skill-icon">
                  <TbMathFunction />
                  {/* MATLAB replacement */}
                  </div>
                  <div className="skill-name">MATLAB</div>
                </div>
                
                <div className="skill-container">
                  <div className="skill-icon">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <div className="skill-name">UI/UX Design</div>
                </div>
              </div>
            </div>

            <h3 className="section-heading">Education</h3>
            <div className="education-box">
              <i className="fas fa-graduation-cap education-icon"></i>
              <div>
                <p className="education-title">
                  Preparatory Cycle in Engineering (2nd Year)
                </p>
                <p className="education-subtitle">
                  National Polytechnic School of Algiers (ENP)
                </p>
                <p>Intensive coursework in mathematics, physics & engineering fundamentals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
