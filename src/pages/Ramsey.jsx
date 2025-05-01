import React from 'react';

function Ramsey() {
  return (
    <>
      <h1 className="page-title">Ramsey Theory Research</h1>
      <section className='section'>
        <h2 className='section-title'>Problem Description</h2>
        <p>
            Ramsey theory is a field of combinatorics dealing with the emergence of order in systems of chaos. 
            It explores this through the guaranteed existence of certain structures within all graphs of a minimum 
            size or greater. This topic was first introduced to me in a combinatorics course, and I very quickly 
            grew attached to it. I've mainly worked on attempting to find new counterexamples, which disproves 
            the guarantee of certain structures for an assumed minimum value.
        </p>
      </section>
      
      <section className="section">
        <h2 className="section-title">Reinforcement Learning</h2>
        <p>
            In my first approach to the problem, I was able to convince my brilliant friend Steve Vott to try 
            and tackle the problem with me. We read papers that generated counterexamples using simulated annealing 
            and other related approaches, as well as papers that failed to use reinforcement learning. We were both 
            very inexperienced in both combinatorics and reinforcement learning, but worked steadily on the project 
            during our free time. One summer later we had written a paper and Steve had generated a Python package 
            from our code. It was a phenomenal collaborative experience, but we failed to find a new counterexample.
        </p>
        <a 
            href="https://arxiv.org/abs/2308.11943" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button"
        >
            RamseyRL: A Framework for Intelligent Ramsey Number Counterexample Searching
        </a>
    </section>

    <section className='section'>
        <h2 className="section-title">Classical Algorithm</h2>
        <p>
            This past summer, I once again began to be interested in the problem. Initially, I was thinking of 
            efficient encoded representations of graphs to leverage transformer architectures. However, in the 
            process I thought of an idea for a classical algorithm. This algorithm would theoretically be a new 
            fast way to extend a set of counterexamples of size n to size n+1 much faster than existing approaches. 
        </p>
        <div className="theorem">
            <div className="theorem-title">Main Theorem</div>
            <p>
            For any simple, undirected graph G<sub>n+1</sub> of size n + 1, if G<sub>n+1</sub> has 
            max&#123;s, t&#125; + 1 induced subgraphs in R(s, t, n), then G<sub>n+1</sub> ∈ R(s, t, n + 1).
            </p>
        </div>
        <p>
            The theorem above is the main theorem underpinning the work, derrived as an application of the set cover problem.
            I developed from this an algorithm, along with a paper and python library to go along with it. The paper, which links
            the code, can be found below. It was my first time creating and publishing a python library, as well as my first
            paper in the field of computational mathematics.
        </p>
        <a 
            href="https://arxiv.org/abs/2411.04267" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
        >
            Ramsey Number Counterexample Checking and One Vertex Extension Linearly Related to s and t
        </a>
    </section>
    </>
  );
}

export default Ramsey;