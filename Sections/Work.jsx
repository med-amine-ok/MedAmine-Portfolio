import React, { useState, useEffect, useRef } from 'react';
import './Work.css';
import { faExternalLinkAlt, faCode, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const workRef = useRef();
  const projectRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(workRef.current);
        }
      },
      { threshold: 0.2 }
    );
    
    if (workRef.current) {
      observer.observe(workRef.current);
    }
    
    return () => {
      if (workRef.current) {
        observer.unobserve(workRef.current);
      }
    };
  }, []);
  
  // Track mouse position for 3D effect
  const handleMouseMove = (e, index) => {
    const card = projectRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    
    card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = (index) => {
    const card = projectRefs.current[index];
    if (!card) return;
    
    card.style.transition = 'transform 0.5s ease-out';
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    
    setActiveProject(null);
  };
  
  const handleMouseEnter = (projectId, index) => {
    const card = projectRefs.current[index];
    if (!card) return;
    
    card.style.transition = 'transform 0.2s ease-out';
    setActiveProject(projectId);
  };
  
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built with clean, semantic HTML and CSS with attention to accessibility and performance.",
      longDescription:
        "This portfolio website serves as a showcase of my development skills and projects. Built with a focus on modern web standards, the site features responsive design principles ensuring it looks great on all devices. I also have implemented subtle animations and transitions to enhance user experience without sacrificing performance.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://med-amine-ok.github.io/portfolio/",
      github: "https://github.com/med-amine-ok/portfolio",
      image: "portfolio",
      features: [
        "Responsive layout adapts to any screen size",
        "Optimized performance with 95+ Lighthouse score",
        "Interactive UI elements with smooth animations",
        "Accessibility-focused design",
      ],
      
    },
    {
      id: 2,
      title: "SPARK Club Website",
      description:
        "An interactive platform for a scientific club designed to showcase projects, host events, and provide educational resources for members.",
      longDescription:
        "Developed for the SPARK scientific club, this website serves as the central hub for club activities, events, and member resources. Using Next.js for optimal performance and SEO, coupled with Tailwind CSS for a consistent design system, the platform offers a seamless experience for both members and visitors.",
      tags: ["React", "Next.js", "Tailwind CSS", "UI/UX"],
      link: "#",
      github: "#",
      image: "spark-club",
      features: [
        "Event management system with registration",
        "Project showcase with filtering capabilities",
        "Member portal with personalized dashboards",
        "Optimized for fast loading and SEO",
      ],
      
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description:
        "A mobile Tic-Tac-Toe game with a clean UI and engaging random events that enhance the classic gameplay experience.",
      longDescription:
        "This Flutter-based mobile game reinvents the classic Tic-Tac-Toe with modern design and unique gameplay mechanics. Beyond the traditional gameplay, it includes special events and challenges that appear randomly during matches, keeping the game fresh and engaging for players of all ages.",
      tags: ["Flutter", "Dart", "Mobile Development", "Game Design"],
      link: "/X&OO_GAME.apk",
      github: "#",
      image: "tic-tac-toe",
      features: [
        "Single and multiplayer game modes",
        "Customizable themes and game pieces",
        "Random events system adds unpredictability",
        "Achievement system to track progress",
      ],
      
    },
  ];

  // Initialize refs array
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, [projects.length]);
  
  // Handle escape key for modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  return (
    <section id="work" className="work-section" ref={workRef}>
      <div className={`section-content ${isVisible ? "fade-in" : ""}`}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-header">
          
          <p className="section-subtitle">
            Explore a selection of my recent work showcasing my development skills and expertise
          </p>
        </div>
        
        {/* <div className="filter-tabs">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Web Development</button>
          <button className="filter-btn">Mobile Apps</button>
          <button className="filter-btn">UI/UX Design</button>
        </div> */}
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${activeProject === project.id ? "active" : ""}`}
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(project.id, index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="project-img-container">
                {/* <div className="project-status">{project.year}</div> */}
                <img
                  src={`/project-${project.id}.png`}
                  alt={`${project.title} screenshot`}
                  className="project-img"
                />
                <div className="project-img-overlay">
                  <button 
                    className="preview-btn"
                    onClick={() => openProjectDetails(project)}
                    aria-label="View project details"
                  >
                    <FontAwesomeIcon icon={faSearchPlus} />
                  </button>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn view-btn"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>Live Demo</span>
                  </a>
                  {/* <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn code-btn"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    <span>View Code</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <a href="#work" className="view-all-btn">View All Projects</a>
        </div>
      </div>
      
      {/* Project Details Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-content">
             
              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="features-list">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tags modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="modal-actions">
                  <a
                    href={selectedProject.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn primary-btn"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>Live Demo</span>
                  </a>
                  {/* <a
                    href={selectedProject.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn secondary-btn"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    <span>View Code</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
