import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGoodreads } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

function Contact() {
  return (
    <>
      <h1 className="page-title">Contact Information</h1>
      
      <div className="intro-text">
        <p>Feel free to reach out to me through any of the following platforms. I'm always open to discussing research opportunities, collaborations, or work opportunities.</p>
      </div>
      
      <div className="contact-list">
        <div className="contact-item">
          <div className="icon">
            <FaEnvelope size={32} />
          </div>
          <div className="info">
            <div className="label">Email</div>
            <div className="value"><a href="mailto:alehavi@usc.edu">alehavi@usc.edu</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <FaGithub size={32} />
          </div>
          <div className="info">
            <div className="label">GitHub</div>
            <div className="value"><a href="https://github.com/aLehav" target="_blank" rel="noopener noreferrer">github.com/aLehav</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <FaLinkedin size={32} />
          </div>
          <div className="info">
            <div className="label">LinkedIn</div>
            <div className="value"><a href="https://www.linkedin.com/in/adam-lehavi/" target="_blank" rel="noopener noreferrer">linkedin.com/in/adam-lehavi</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <SiGooglescholar size={32} />
          </div>
          <div className="info">
            <div className="label">Google Scholar</div>
            <div className="value"><a href="https://scholar.google.com/citations?user=nEJaToQAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">Google Scholar Profile</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <FaGoodreads size={32} />
          </div>
          <div className="info">
            <div className="label">Goodreads</div>
            <div className="value"><a href="https://www.goodreads.com/user/show/170343228-adam-lehavi" target="_blank" rel="noopener noreferrer">Goodreads Profile</a></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;