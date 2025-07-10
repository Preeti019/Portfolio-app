import React from 'react'
import './Work.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Work = () => {
  const projects = [
    {
      title: "Tomato (Online food delivery)",
      type: "Full Stack",
      tech: "MongoDB, Express, React, Node.js",
      deployment: "Deployed on Render",
      features: "Authentication",
      description: "A convenient platform for food lovers to discover ingredients and recipes with seamless online ordering.",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Chess",
      type: "Full Stack",
      tech: "Express, Socket.IO, Node.js",
      deployment: "Deployed on Render",
      features: "Cloud data storage, Authentication",
      description: "Real-time multiplayer chess with private chat and community discussions.",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Netflix-Clone",
      type: "Responsive Frontend",
      tech: "React.js",
      deployment: "Deployed on Firebase and Render",
      features: "TMDB API integration",
      description: "Personalized streaming platform for movies and TV shows with immersive experience.",
      githubLink: "#",
      liveLink: "#"
    }
  ]

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
                  <li><strong>Deployment:</strong> {project.deployment}</li>
                  {project.features && <li><strong>Features:</strong> {project.features}</li>}
                </ul>
              </div>
              
              <p className="project-description">{project.description}</p>
              
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work