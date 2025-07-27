import React from 'react';
import './About.css';
import aboutImage from '/src/assets/images/background.jpeg';
import { FaMobileAlt, FaLaptopCode, FaServer, FaReact } from 'react-icons/fa';
import { SiJavascript, SiRedux } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="about-container">
        {/* Left Image Section */}
        <div className="about-image-container">
          <div className="image-wrapper">
            <img 
              src={aboutImage} 
              alt="Preeti Yadav - React Native Developer" 
              className="profile-image"
            />
            
          </div>
        </div>

        {/* Right Content Section */}
        <div className="about-content">
          <h3 className="about-subtitle">
            Passionate <span>React Native Developer</span> Building Mobile Experiences
          </h3>

          <div className="about-text">
            <p>
              Hi, I'm <strong>Preeti Yadav</strong>, a dedicated React Native Developer with expertise in 
              building cross-platform mobile applications. I specialize in JavaScript (ES6+), React.js, 
              and React Native, creating performant and user-friendly apps that deliver seamless experiences.
            </p>

            <p>
              I focus on writing clean, maintainable code with modern architecture patterns. 
              I’m continuously learning and improving my skills to stay updated with the latest 
              technologies in mobile and web development.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section - Now below the content */}
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-header">
            <FaMobileAlt className="skill-icon" />
            <h4>Mobile Development</h4>
          </div>
          <ul className="skill-list">
            <li>React Native & Expo</li>
            <li>State Management (Redux)</li>
            <li>Navigation Solutions</li>
            <li>REST API Integration</li>
          </ul>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            <FaLaptopCode className="skill-icon" />
            <h4>Frontend & Web</h4>
          </div>
          <ul className="skill-list">
            <li>React.js</li>
            <li>Modern JavaScript (ES6+)</li>
            <li>Responsive UI/UX</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            <FaServer className="skill-icon" />
            <h4>Future Goals</h4>
          </div>
          <ul className="skill-list">
            <li>Backend Development</li>
            <li>Node.js & Express</li>
            <li>Database Integration</li>
            <li>Full Stack Mobile Apps</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
