import React from 'react';
import './Antisemitism.css'

function Antisemitism() {
  return (
    <div className="antisemitism-page">
        <h1>My Research</h1>
        <a target="_blank" rel="noopener noreferrer" href='https://arxiv.org/abs/2309.06557'>Unsupervised Bias Detection in College Student Newspapers
        </a>
        Over the last 2 years, I've done research into answering the core question of if anti-Zionist student newspaper reporting leads to antisemitic hate crimes on campuses. This project is an idea that I came up with and worked at initally with Olami through the Social Media Climate Initiative. The project began as an open question, grew into me leading a team of talented and fast-learning interns, and now still remains an open question. Over the course of the project, I've learned much about nonprofits, data scraping and analysis, and social science academia. I've had the pleasure of speaking with bright people at the Media Bias Group and Decoding Antisemitism initiative.
        <br />
        <br />
        I currently have a database containing over 8,000 antisemitic incidents on campuses and 2,000,000 links spanning 200 university newspapers. Over the near future, I intend scrape and filter links. Then, I wish to integrate qualitative data analysis to label the data. This data can be used to report on events happening on campuses to better inform administrators on how their policies and campus discourse may affect students. In addition, machine learning models can be trained to help label and predict based on this data. 
        <br />
        <br />
        While my current focus is on campus newspapers, I hope to branch out into mainstream media and social media in the future.
    </div>
  );
}

export default Antisemitism;
