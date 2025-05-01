import React from 'react';

function About() {
  return (
    <>
      <h1 className="page-title">About Me</h1>
      
      <section className="section">
        <h2 className="section-title">Biography</h2>
        <p>
          I am a Master's student at USC studying Computer Science. My undergraduate degree is from USC in Applied Mathematics with a minor in Computer Science. My main area of expertise is machine learning, having done projects within cybersecurity, CRM, and video processing. 
        </p>
        <p>
          In my spare time, I research Ramsey Theory, a subset of combinatorics, and how hate proliferates on college campuses. I read as much as I can, conveniently using it as an excuse to explore coffee shops of whichever city I find myself in. Fitness is also important to me, and I cycle between climbing, running, and lifting, depending on minor injuries and friend availability at any given moment.
        </p>
        <p>
          In the near future, I will be road tripping all 50 states and hopefully all the national parks, contingent on weather in Alaska. I will be using the time to see more of the world, become more mindful of myself and my habits, and touch grass, which is quite hard to do while studying Computer Science. In lieu of Instagram, I'll be posting blogs and pictures on this website for family and friends to see.
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Work Inquiries</h2>
        <p>
          I will be available for full-time work starting December 2025 or later. My areas of interest include machine learning engineering, software engineering, full-stack development, and research positions. Impact is incredibly important to me. Please contact me via email with any inquiries.
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Site</h2>
        <p>
          This site is meant to be a half-personal, half-professional collection of things I have dedicated myself to. I would include a picture for those new to me, but my hair may be anywhere between 2 and 12 inches at a given time, so it saves time to either imagine an ashkenazi Jewish guy, or visit my LinkedIn and mentally add 4 years of life to that picture. The site itself is build with React on the frontend and Firebase managing the data and authentication.
        </p>
      </section>
    </>
  );
}

export default About;