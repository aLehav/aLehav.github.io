import React from 'react';

function Resume() {
  return (
    <>
      <h1 className="page-title">Curriculum Vitae</h1>
      
      <section className="section">
        <h2 className="section-title">Education</h2>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">B.S. Applied Math, USC</div>
            <div className="item-date">Aug 2021 – May 2025</div>
          </div>
          <div className="item-subtitle">3.86 GPA | Presidential Scholar | Computer Science Minor</div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">M.S. Computer Science, USC</div>
            <div className="item-date">Jan 2024 – May 2026</div>
          </div>
          <div className="item-subtitle">Progressive Degree Program</div>
        </div>

        <div className="item">
          <div className="item-header">
            <div className="item-title">Ph.D. Computer Science, University of Göttingen</div>
            <div className="item-date">Jan 2026 – Present</div>
          </div>
          <div className="item-subtitle">Focus on Fake News Detection and Generation</div>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section-title">Experience</h2>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">CyberFire Research Intern, Los Alamos National Labs</div>
            <div className="item-date">Jun 2024 – Aug 2024</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Performed research on the intersection of machine learning and cybersecurity</li>
              <li>Youngest student accepted to the 2024 research track by 6 years</li>
            </ul>
          </div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">Lead Software Engineer, Olami</div>
            <div className="item-date">Feb 2023 – Jun 2024</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Led Data Team of 8, scraping newspapers and social media to measure and prevent bias and hate speech</li>
              <li>Automatically scraped content of 3 million web pages from over 500 student newspapers</li>
              <li>Worked with Media Bias Group to calculate campus media bias and correlate to hate crimes on campuses</li>
              <li>Submitted "Unsupervised Bias Detection in College Student Newspapers" as lead author to AAAI 2024</li>
            </ul>
          </div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">Machine Learning Engineer, Leadspace</div>
            <div className="item-date">Jun 2023 – Aug 2023</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Worked on hyperparameter optimization using logistic regression to estimate grid search outputs more intelligently</li>
              <li>Improved model run speed by 40% and generated 7 state-of-the-art models currently in production use</li>
            </ul>
          </div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">Undergraduate Researcher, USC</div>
            <div className="item-date">Feb 2023 – Sep 2023</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Worked with USC Signal Analysis and Interpretation Lab (SAIL) and Data, Interpretability, Language, and Learning (DILL) labs</li>
              <li>Published "Does Video Summarization Require Videos? Quantifying the Effectiveness of Language in Video Summarization" as second author to IEEE ICASSP 2024</li>
            </ul>
          </div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">Machine Learning Researcher, NCA&T</div>
            <div className="item-date">May 2022 – Jan 2023</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Built intrusion detection systems using existing ML methods, and implementing swarm optimization through Python and R</li>
              <li>Published and coauthored "Feature Reduction Method Comparison Towards Explainability and Efficiency in Cybersecurity Intrusion Detection Systems," presented at IEEE ICMLA 2022</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section-title">Activities</h2>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">Scope Club Member, USC</div>
            <div className="item-date">Sep 2021 – May 2025</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Won Spring 2023 hackathon as full stack developer using React with Firebase and Spotify API integration</li>
            </ul>
          </div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">TAMID Director of Financial Consulting, USC</div>
            <div className="item-date">Sep 2021 – Dec 2024</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Provided financial valuation and modeling directly for Israeli startups, aiming for growth from a VC perspective</li>
            </ul>
          </div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">Independent Math Research, USC</div>
            <div className="item-date">May 2023 – Aug 2023</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Authored "Ramsey Number Counterexample Checking and One Vertex Extension Linearly Related to s and t", submitted to E-JC</li>
              <li>Coauthored "RamseyRL: A Framework for Intelligent Ramsey Number Counterexample Searching", submitted to AAAI 2024</li>
            </ul>
          </div>
        </div>
        
        <div className="item">
          <div className="item-header">
            <div className="item-title">Lollipop Hobbyist</div>
            <div className="item-date">Dec 2019 – Dec 2022</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Sold lollipops to students at 5 colleges, having made over $4000 in profit</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <div className="skill-category-title">Programs & Frameworks</div>
            <ul className="skill-list">
              <li className="skill-item">Python, SQL, JavaScript, C++, Java, R, LaTeX, HTML, CSS, Excel, Firebase, GCP, C</li>
              <li className="skill-item">PyTorch, TensorFlow, SciKit, Optuna, React, Node.js, Django, Bootstrap, Scrapy, BeautifulSoup</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-category-title">Languages</div>
            <ul className="skill-list">
              <li className="skill-item">English, Hebrew</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section-title">Download Resume</h2>
        <p>You can also view or download my complete resume as a PDF:</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">
          View Full PDF
        </a>
      </section>
    </>
  );
}

export default Resume;