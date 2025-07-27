import React from 'react';
import './Work.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images for projects
import recipeImg from '/src/assets/images/recipe.jpg';
import ecommerceImg from '/src/assets/images/ecommerce.png';
import softwareImg from '/src/assets/images/software.png';

const Work = () => {
  const projects = [
    {
      title: "React Native Recipe App",
      type: "Mobile App",
      tech: "React Native, Expo, REST APIs",
      deployment: "APK and Expo Go",
      features: "Recipe search, API data fetching, responsive UI",
      description: "A cross-platform recipe app built using Expo and React Native that fetches recipes from public APIs and provides a smooth user experience.",
      image: recipeImg,
      githubLink: "https://github.com/Preeti019/RecipeApp",
      liveLink: "https://recipeapp--reyfga3vgo.expo.app/"
    },
    {
      title: "E-Commerce Storefront",
      type: "Full Stack",
      tech: "React.js, HTML5, CSS3, JavaScript (ES6), REST API",
      features: "Authentication, Product Search, Cart, Payment Gateway",
      description: "Built a responsive e-commerce web app with product listing, search filters, and cart management. Used React Router for navigation and integrated a mock REST API for product data.",
      image: ecommerceImg,
      githubLink: "https://github.com/Preeti019/ECommerceStore",
      liveLink: "#"
    },
    {
      title: "Software Website",
      type: "Responsive Frontend",
      tech: "React.js, Tailwind CSS",
      features: "Modern UI, Responsive Design, Interactive Sections",
      description: "A professional software landing website with responsive layouts and a sleek UI for showcasing products and services, optimized for fast performance and smooth user experience.",
      image: softwareImg,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section className="work-section" id="projects">
      <h2 className="section-title">PROJECTS</h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Project Image */}
            {project.image && (
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="project-image" 
                />
              </div>
            )}
            
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
              
              {(project.githubLink || project.liveLink) && (
                <div className="project-links">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="link-icon" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="link-button github-button"
                    >
                      <span>View Code</span>
                      <FaGithub className="link-icon" />
                    </a>
                  )}
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
