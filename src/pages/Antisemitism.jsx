import React from 'react';

function Antisemitism() {
  return (
    <>
      <h1 className="page-title">Campus Hate Research</h1>
      <section className="section">
        <div className="note-box">
            If you are interested in annotating articles or producing a report for your school, please contact me.
        </div>
        <p>
            Over the last 2 years, I've done research into answering the core question of if anti-Zionist student 
            newspaper reporting leads to antisemitic hate crimes on campuses. This project is an idea that I came 
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
            Since working with Olami, I've contributed hundreds of hours solo on advancing this project further. I've learned much about nonprofits, 
            data scraping and analysis, and social science academia. I've also had the pleasure of speaking with bright people at the Media Bias Group, Decoding Antisemitism initiative, and Hillel. In its current form, the project is a complete end-to-end pipeline for extracting student media, querying by topic, annotating online, and performing analysis. The database itself contains 266GB of student newspaper articles, spanning 500+ universities in the U.S. Analysis is performed on 10,000 antisemitic incidents reported from the AMCHA initiative and FBI.  This data can be used to report on events happening on campuses to better inform administrators on how their policies and campus discourse may affect students. In addition, machine learning models can be trained to help label and predict based on this data.
        </p>

        <p> 
            A pilot report and mockup site can be found below. The ultimate goal is to have the site integrated with current data, providing and interactive qualitative and quantitative dashboard to inform students, faculty, and administration. The main need for this project to advance is that of annotators, to help find and label antisemitic content.
        </p>

        <a href="/report_4_2_25.pdf" target="_blank" rel="noopener noreferrer" className="button">
        Student Newspapers and Antisemitism on Campus: The Claremont College Pilot Report
        </a>
        <br></br>
        <a href="https://antisemitism-demo-site.web.app/" target="_blank" rel="noopener noreferrer" className="button">
        Website Mockup
        </a>

        
      </section>
    </>
  );
}

export default Antisemitism;