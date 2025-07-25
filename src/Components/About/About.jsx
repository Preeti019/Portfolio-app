import React from 'react';
import './About.css';
import aboutImage from '/src/assets/images/img1.png';

import { FaMobileAlt, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Image Section */}
        <div className="about-image">
          <img src={aboutImage} alt="React Native Developer" />
        </div>

        {/* Right Content Section */}
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <h3>React Native Developer</h3>

          <p>
            Hi, I'm Preeti Yadav, a passionate and motivated React Native Developer with a strong foundation in mobile app development, 
            JavaScript (ES6+), React.js, and React Native. I enjoy creating cross-platform, user-friendly apps and continuously 
            enhancing my skills through real-world projects and problem-solving.
          </p>

          <p>
            I am currently focused on building mobile apps but I’m eager to expand my expertise into backend technologies, APIs, and deployment 
            to become a Full Stack Mobile Developer in the future.
          </p>

          {/* Skills Section */}
          <div className="skills-grid">
            <div className="skill-item">
              <FaMobileAlt className="skill-icon" />
              <h4>Mobile Development</h4>
              <p>React Native, Expo, Redux, Navigation, REST APIs</p>
            </div>

            <div className="skill-item">
              <FaLaptopCode className="skill-icon" />
              <h4>Frontend & Web</h4>
              <p>React.js, HTML5, CSS3, JavaScript, Responsive UI</p>
            </div>

            <div className="skill-item">
              <FaServer className="skill-icon" />
              <h4>Future Goals</h4>
              <p>Backend Development, Node.js, API Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
