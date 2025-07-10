import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-top-left">
            <h3>Let's Build Something Amazing Together</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            <div className="footer-socials">
              <a href="https://github.com/Preeti019" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/preeti-yadav10/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="footer-newsletter">
              <h4>Subscribe to my Newsletter</h4>
              <div className="footer-email-input">
                <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                <input type="email" placeholder='Enter your email address' />
                <button className='footer-subscribe'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© {new Date().getFullYear()} Preeti Yadav. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <a href="/terms"><FontAwesomeIcon icon={faFileAlt} /> Terms of Service</a>
            <a href="/privacy"><FontAwesomeIcon icon={faFileAlt} /> Privacy Policy</a>
            <a href="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer