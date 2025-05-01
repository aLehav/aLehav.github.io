import React from 'react';

function Contact() {
  return (
    <>
      <h1 className="page-title">Contact Information</h1>
      
      <div className="intro-text">
        <p>Feel free to reach out to me through any of the following platforms. I'm always open to discussing research opportunities, collaborations, or just chatting about interesting topics in mathematics and computer science.</p>
      </div>
      
      <div className="contact-list">
        <div className="contact-item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="info">
            <div className="label">Email</div>
            <div className="value"><a href="mailto:alehavi@usc.edu">alehavi@usc.edu</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div className="info">
            <div className="label">GitHub</div>
            <div className="value"><a href="https://github.com/aLehav" target="_blank" rel="noopener noreferrer">github.com/aLehav</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <div className="info">
            <div className="label">LinkedIn</div>
            <div className="value"><a href="https://linkedin.com/in/adam-lehavi" target="_blank" rel="noopener noreferrer">linkedin.com/in/adam-lehavi</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          <div className="info">
            <div className="label">Google Scholar</div>
            <div className="value"><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar Profile</a></div>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div className="info">
            <div className="label">Goodreads</div>
            <div className="value"><a href="https://www.goodreads.com/" target="_blank" rel="noopener noreferrer">Goodreads Profile</a></div>
          </div>
        </div>
      </div>
      
      <div className="note-box">
        <p>I check my email regularly and typically respond within 24-48 hours.</p>
        <p>Feel free to reach out for research collaborations, academic discussions, or professional opportunities.</p>
      </div>
      
      <section className="section">
        <h2 className="section-title">Office Location</h2>
        <p className="mono-text">
          Department of Computer Science<br />
          University of Southern California<br />
          Los Angeles, CA 90089
        </p>
      </section>
    </>
  );
}

export default Contact;