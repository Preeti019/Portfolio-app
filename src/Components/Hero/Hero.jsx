import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/profile.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroImage} alt="Preeti Yadav" className="hero-image" />
      <h1>
        I'm <span>Preeti Yadav</span>, React Native Developer
      </h1>
      <p>
        I'm looking for an entry-level position with a reputable company where I can put my skills to use and further my education in software development and mobile apps. able to contribute successfully to team success and pick up new technologies fast.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="hero-connect">Connect With Me</a>
        <a href="https://drive.google.com/file/d/1AOgKlOsoPwqMIlwoe5pvsgCIYn_S1GZ-/view?usp=drive_link" className="hero-resume" target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
