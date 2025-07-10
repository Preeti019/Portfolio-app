import React from 'react';
import './About.css';
import aboutImage from '/src/assets/images/img1.png'; 

import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';  
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-image">
          <img src={aboutImage} alt="Web Developer" />
        </div>
        
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <h3>Frontend Web Developer</h3>
          
          <p>
            Hi, I'm Preeti Yadav, a passionate and motivated Frontend Web Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. 
            I enjoy building responsive, user-friendly websites and continuously improving my skills through practice and projects.
          </p>
          
          <p>
            I am currently focused on frontend development but I’m eager to learn backend technologies like Node.js, Express, and databases to become a Full Stack Developer in the future.
          </p>
          
          <div className="skills-grid">
            <div className="skill-item">
              <FaCode className="skill-icon" />
              <h4>Frontend</h4>
              <p>HTML5, CSS3, JavaScript, React.js, Responsive Design</p>
            </div>
            
            <div className="skill-item">
              <FaLaptopCode className="skill-icon" />
              <h4>Learning</h4>
              <p>Backend Development, Node.js, Express.js, APIs</p>
            </div>
            
            <div className="skill-item">
              <FaServer className="skill-icon" />
              <h4>Future Goals</h4>
              <p>Full Stack Development, Database Management, Deployment</p>
            </div>
          </div>
          
          <button className="about-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
