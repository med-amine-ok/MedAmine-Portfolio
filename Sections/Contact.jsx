import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const contactRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(contactRef.current);
        }
      },
      { threshold: 0.2 }
    );
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate a sending delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSending(false);
      setFormSubmitted(true);
      
      // Reset the form
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className={`section-content ${isVisible ? 'fade-in' : ''}`}>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's discuss your project or opportunity</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="info-title">Let's connect</h3>
            <div className="contact-item">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} className="icon-svg" />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>ouldkhaoua.pro@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} className="icon-svg" />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+1 (213) 556 04 53 93</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-svg" />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Alger, Algeria</p>
              </div>
            </div>
            
            <div className="availability">
              <h4>Available for:</h4>
              <ul className="availability-list">
                <li>Freelance Projects</li>
                <li>Full-time Opportunities</li>
                <li>Collaborations</li>
              </ul>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/mohamed-amine-ouldkhaoua-b3116533b/" className="social-link linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://www.instagram.com/medamine_ok/" className="social-link instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/med-amine-ok" className="social-link github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:ouldkhaoua.pro@gmail.com" aria-label="Email" className="social-link email">
              <i className="fas fa-envelope"></i>
            </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3 className="form-title">Send me a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSending ? 'sending' : ''} ${formSubmitted ? 'submitted' : ''}`}
                disabled={isSending || formSubmitted}
              >
                {formSubmitted ? (
                  'Message Sent!'
                ) : isSending ? (
                  <span className="sending-text">Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;