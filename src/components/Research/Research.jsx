import React from 'react';
import './Research.css'

function Research() {
  return (
    <div className="two-col">
      <div className="content-page">
        <h1>What is Ramsey Theory</h1>
        Ramsey theory is a field of combinatorics dealing with the emergence of order in systems of chaos. It explores this through the guaranteed existence of certain structures within all graphs of a minimum size or greater. This topic was first introduced to me in a combinatorics course, and I very quickly grew attached to it. I've mainly worked on attempting to find new counterexamples, which disproves the guarantee of certain structures for an assumed minimum value. 
        <h1>Reinforcement Learning</h1>
        <a target="_blank" rel="noopener noreferrer" href='https://arxiv.org/abs/2308.11943'>RamseyRL: A Framework for Intelligent Ramsey Number Counterexample Searching
        </a>
        In my first approach to the problem, I was able to convince my brilliant friend Steve Vott to try and tackle the problem with me. We read papers that generated counterexamples using simulated annealing and other related approaches, as well as papers that failed to use reinforcement learning. We were both very inexperienced in both combinatorics and reinforcement learning, but worked steadily on the project during our free time. One summer later we had written a paper and Steve had generated a Python package from our code. It was a phenomenal collaborative experience, but we failed to find a new counterexample. 

        <h1>Classical Algorithm</h1>
        <a target="_blank" rel="noopener noreferrer" href='https://arxiv.org/abs/2411.04267'>Ramsey Number Counterexample Checking and One Vertex Extension Linearly Related to s and t
        </a>
        This past summer, I once again began to be interested in the problem. Initially, I was thinking of efficient encoded representations of graphs to leverage transformer architectures. However, in the process I thought of an idea for a classical algorithm. This algorithm would theoretically be a new fast way to extend a set of counterexamples of size n to size n+1 much faster than existing approaches. Over the summer and school year I have been working on a paper and python library detailing my findings. Hopefully in the near future I'll submit the paper to a journal.
      </div>
      <div className="content-page">
        <h1>Anti-Zionist Student Newspapers and Antisemitic Incidents</h1>
        <a target="_blank" rel="noopener noreferrer" href='https://arxiv.org/abs/2309.06557'>Unsupervised Bias Detection in College Student Newspapers
        </a>
        Over the last 2 years, I've done research into answering the core question of if anti-Zionist student newspaper reporting leads to antisemitic hate crimes on campuses. This project is an idea that I came up with and worked at initally with Olami through the Social Media Climate Initiative. The project began as an open question, grew into me leading a team of talented and fast-learning interns, and now still remains an open question. Over the course of the project, I've learned much about nonprofits, data scraping and analysis, and social science academia. I've had the pleasure of speaking with bright people at the Media Bias Group and Decoding Antisemitism initiative.
        <br />
        <br />
        I currently have a database containing over 8,900 antisemitic incidents on campuses, with 121 of them being cases of physical assault. The database includes over 212GB of article data, including 5.6M links spanning 250 university newspapers. 3.8M of these links have content extracted, which can be queried by school, author, and date range. I wish to integrate qualitative data analysis in the near future to label the data. This data can be used to report on events happening on campuses to better inform administrators on how their policies and campus discourse may affect students. In addition, machine learning models can be trained to help label and predict based on this data. 
        <br />
        <br />
        While my current focus is on campus newspapers, I hope to branch out into mainstream media and social media in the future.
      </div>
    </div>
  );
}

export default Research;
