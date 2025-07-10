import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/profile.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroImage} alt="Preeti Yadav" className="hero-image" />
      <h1>I'm <span>Preeti Yadav</span>, Frontend Developer</h1>
      <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills and enhance learning in the field of software development. Capable of mastering new technologies</p>
      <div className="hero-actions">
        <button className="hero-connect">Connect With Me</button>
        <button className="hero-resume">My Resume</button>
      </div>
    </div>
  );
};

export default Hero;