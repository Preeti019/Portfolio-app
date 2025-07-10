import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "909e6de0-8858-4e58-8ef7-c8fefff2903a");

      // Convert FormData to JSON
      const jsonObject = {};
      formData.forEach((value, key) => {
        jsonObject[key] = value;
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(jsonObject)
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResult("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get in touch</h2>
          <h3>Let's talk</h3>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message 
            about anything that you want me to work on. You can contact me anytime.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:preetiy1019@gmail.com">preetiy1019@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+91-9044933446">+91-9044933446</a>
              </div>
            </div>

            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Varanasi, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Write your message here</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Enter your message" 
                required
              ></textarea>
            </div>

            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            
            {result && <p className={`result-message ${result.includes("successfully") ? "success" : "error"}`}>{result}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;