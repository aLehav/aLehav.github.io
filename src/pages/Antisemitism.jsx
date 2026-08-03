import React from 'react';

function Antisemitism() {
  return (
    <>
      <h1 className="page-title">Digital Hate Research</h1>
      <section className="section">
        <p>
            Over the last 3 years, I've researched how hate in digitial media can be measured and how it affects actions in the real world. This began with the question of if anti-Zionist student newspaper reporting leads to antisemitic hate crimes on campuses. This project was an idea that I came 
            up with and worked at initially with Olami through the Social Media Climate Initiative. The project 
            began as an open question, grew into me leading a team of talented and fast-learning interns, and led to a preprint paper under Olami.
        </p>
        <a 
            href="https://arxiv.org/abs/2309.06557" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
        >
            Unsupervised Bias Detection in College Student Newspapers
        </a>
        <p>    
            After working with Olami, I continued to develop a platform for analytics, annotation, and machine learning model training and analysis. This site integrated hate data from the FBI as well as the AMCHA Initiative, and I was able to have many productive talks with talented people from the Media Bias Group, Decoding Antisemitism initiative, and Hillel on the project. I was able to produce a polot report for the 5C's state of antisemitism, and built a demo website to inform people via digestible and explainable analytics.
        </p>
        <a href="/report_4_2_25.pdf" target="_blank" rel="noopener noreferrer" className="button">
        Student Newspapers and Antisemitism on Campus: The Claremont College Pilot Report
        </a>
        <br></br>
        <a href="https://antisemitism-demo-site.web.app/" target="_blank" rel="noopener noreferrer" className="button">
        Website
        </a>
        <p> 
            This preliminary work has led me to the exciting work I do today. I work directly with the AMCHA Initiative to help automate the archiving of digital hate. I am reiterating and vastly improving the scope of my initial digital hate detection suite as a Software Engineer at AddressHate, including exploring Anti-Asian Racism, Anti-Black Racism, and Misogyny online.
        </p>
      </section>
    </>
  );
}

export default Antisemitism;