import React from 'react';
import './Ramsey.css'

function Ramsey() {
  return (
    <div className="ramsey-page">
      <h1>What is Ramsey Theory</h1>
      Ramsey theory is a field of combinatorics dealing with the emergence of order in systems of chaos. It explores this through the guaranteed existence of certain structures within all graphs of a minimum size or greater. This topic was first introduced to me in a combinatorics course, and I very quickly grew attached to it. I've mainly worked on attempting to find new counterexamples, which disproves the guarantee of certain structures for an assumed minimum value. 
      <h1>Approach 1: Reinforcement Learning</h1>
      <a target="_blank" rel="noopener noreferrer" href='https://arxiv.org/abs/2308.11943'>RamseyRL: A Framework for Intelligent Ramsey Number Counterexample Searching
      </a>
      In my first approach to the problem, I was able to convince my brilliant friend Steve Vott to try and tackle the problem with me. We read papers that generated counterexamples using simulated annealing and other related approaches, as well as papers that failed to use reinforcement learning. We were both very inexperienced in both combinatorics and reinforcement learning, but worked steadily on the project during our free time. One summer later we had written a paper and Steve had generated a Python package from our code. It was a phenomenal collaborative experience, but we failed to find a new counterexample. 

      <h1>Approach 2: Classical Algorithm</h1>
      <a target="_blank" rel="noopener noreferrer" href='https://arxiv.org/abs/2411.04267'>Ramsey Number Counterexample Checking and One Vertex Extension Linearly Related to s and t
      </a>
      This past summer, I once again began to be interested in the problem. Initially, I was thinking of efficient encoded representations of graphs to leverage transformer architectures. However, in the process I thought of an idea for a classical algorithm. This algorithm would theoretically be a new fast way to extend a set of counterexamples of size n to size n+1 much faster than existing approaches. Over the summer and school year I have been working on a paper and python library detailing my findings. Hopefully in the near future I'll submit the paper to a journal.
    </div>
  );
}

export default Ramsey;
