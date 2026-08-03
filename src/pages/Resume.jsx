import React from 'react';

function Resume() {
  return (
    <>
      <h1 className="page-title">Curriculum Vitae</h1>
      
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="item">
          <div className="item-header">
            <div className="item-title">M.S. Computer Science, USC</div>
            <div className="item-date">Jan 2024 – May 2026</div>
          </div>
          <div className="item-subtitle">3.66 GPA | Progressive Degree Program</div>
          
        </div>

        <div className="item">
          <div className="item-header">
            <div className="item-title">B.S. Applied Math, USC</div>
            <div className="item-date">Aug 2021 – May 2025</div>
          </div>
          <div className="item-subtitle">3.86 GPA | Presidential Scholar | Computer Science Minor</div>
          <div className="item-description">
            <ul>
              <li>Won Scope Spring 2023 hackathon, club member for all 4 years.</li>
              <li>TAMID Director of Finance and Director of Financial Consulting.</li>
              <li>Authored "Ramsey Number Counterexample Checking and One Vertex Extension Linearly Related to s and t."</li>
              <li>Coauthored "RamseyRL: A Framework for Intelligent Ramsey Number Counterexample Searching."</li>
              <li>Made and sold lollipops.</li>
            </ul>
          </div>
        </div>
        
      </section>
      
      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="item">
          <div className="item-header">
            <div className="item-title">Software Engineer, AddressHate</div>
            <div className="item-date">May 2026 – Present</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Leading development of AddressHate's software products, empowering research related to detecting and understanding hate online.</li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="item-header">
            <div className="item-title">Software Contractor</div>
            <div className="item-date">Jun 2025 – Present</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Help automate the archiving on campus hate online with AMCHA Initiative.</li>
              <li>Build tools to measure and explore viewpoint diversity in higher ed. with professors at Claremont McKenna College. Article "Colleges Teach Gender and Race. They Ignore Class." built on tool.</li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="item-header">
            <div className="item-title">NLP Researcher, GippLab at University of Göttingen</div>
            <div className="item-date">Feb 2026 – May 2026</div>
          </div>
          <div className="item-description">
            <ul>
              <li>Generated fake news used to train detectors as part of a Korean Institute of Police Technology (KIPoT) grant.</li>
              <li>Focused on the text generation side using pretrained and abliterated open models.</li>
            </ul>
          </div>
        </div>

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
    </>
  );
}

export default Resume;