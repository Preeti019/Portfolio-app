import React from 'react';
import './Work.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
  const projects = [
    {
      title: "React Native Recipe App",
      type: "Mobile App",
      tech: "React Native, Expo, REST APIs",
      deployment: "APK and Expo Go",
      features: "Recipe search, API data fetching, responsive UI",
      description: "A cross-platform recipe app built using Expo and React Native that fetches recipes from public APIs and provides a smooth user experience.",
      githubLink: "https://github.com/Preeti019/RecipeApp",
      liveLink: "https://recipeapp--reyfga3vgo.expo.app/"
    },
    {
      title: "E-Commerce App",
      type: "Full Stack",
      tech: "React.js, Node.js, Express, MongoDB",
      deployment: "Deployed on Render",
      features: "Authentication, Product Search, Cart, Payment Gateway",
      description: "A feature-rich e-commerce platform with real-time cart updates, user authentication."
    },
    {
      title: "Software Website",
      type: "Responsive Frontend",
      tech: "React.js, Tailwind CSS",
      deployment: "Deployed on Netlify",
      features: "Modern UI, Responsive Design, Interactive Sections",
      description: "A professional software landing website with responsive layouts and a sleek UI for showcasing products and services."
    }
  ];

  return (
    <section className="work-section" id="projects">
      <h2 className="section-title">PROJECTS</h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <div className="card-header">
                <h3 className="project-title">{project.title}</h3>
                <ul className="tech-list">
                  <li><strong>Type:</strong> {project.type}</li>
                  <li><strong>Tech:</strong> {project.tech}</li>
                  {project.deployment && <li><strong>Deployment:</strong> {project.deployment}</li>}
                  {project.features && <li><strong>Features:</strong> {project.features}</li>}
                </ul>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.githubLink && project.liveLink && (
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-button github-button"
                  >
                    <span>View Code</span>
                    <FaGithub className="link-icon" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
