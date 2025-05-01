import React from 'react';

function About() {
  return (
    <>
      <h1 className="page-title">About Me</h1>
      
      <section className="section">
        <h2 className="section-title">Biography</h2>
        <p>
          I am a student at the University of Southern California, pursuing a B.S. in Applied Mathematics with a minor in Computer Science, alongside a Progressive Degree Program for an M.S. in Computer Science. My research focuses on the intersection of machine learning, cybersecurity, and mathematical optimization.
        </p>
        <p>
          As a Presidential Scholar at USC, I've had the opportunity to work with various research labs, including the Signal Analysis and Interpretation Lab (SAIL) and Data, Interpretability, Language, and Learning (DILL) labs. My research contributions have led to publications at IEEE ICASSP and IEEE ICMLA conferences.
        </p>
      </section>
      
      <section className="section">
        <h2 className="section-title">Research Interests</h2>
        <p>
          My work primarily explores the theoretical foundations and practical applications of machine learning in cybersecurity contexts. I'm particularly interested in developing efficient algorithms for problems traditionally considered intractable, and in applying mathematical optimization techniques to improve existing computational methods.
        </p>
        
        <div className="theorem">
          <div className="theorem-title">Current Research Focus</div>
          <p>
            I'm currently investigating how unsupervised learning techniques can be applied to detect bias in textual data, with applications in analyzing student newspapers and social media. This work has implications for understanding and preventing hate speech and bias on college campuses.
          </p>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section-title">Current Projects</h2>
        <div className="definition">
          <div className="definition-title">RamseyRL</div>
          <p>
            A framework for intelligent Ramsey number counterexample searching using reinforcement learning techniques. This project aims to find new bounds for Ramsey numbers, a notoriously difficult problem in combinatorial mathematics.
          </p>
        </div>
        <p>
          I'm also continuing my work with Los Alamos National Laboratory on the intersection of machine learning and cybersecurity, developing more efficient intrusion detection systems through novel feature reduction methods and swarm optimization techniques.
        </p>
      </section>
      
      <section className="section">
        <h2 className="section-title">Personal Interests</h2>
        <p>
          Beyond my academic pursuits, I have a unique entrepreneurial hobby selling lollipops across multiple college campuses. This small business venture has not only been financially rewarding but has also helped me develop marketing and business skills.
        </p>
        <p>
          I'm also passionate about hackathons and competitive programming, having won awards at events like the Odyssey Hackathon. These experiences have strengthened my ability to work collaboratively under pressure and implement practical solutions to real-world problems.
        </p>
      </section>
    </>
  );
}

export default About;