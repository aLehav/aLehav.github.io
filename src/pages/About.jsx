import React from 'react';

function About() {
  return (
    <>
      <h1 className="page-title">About Me</h1>
      
      <section className="section">
        <h2 className="section-title">Biography</h2>
        <p>
          I am a Software Engineer at AddressHate and Software Contractor with other clients. I have a M.S. in Computer Science and B.S. in Applied Mathematics from USC. My main area of expertise is machine learning, having done projects within NLP, cybersecurity, CRM, and video processing.
        </p>
        <p>
          I read as much as I can, conveniently using it as an excuse to explore coffee shops or bakeries of whichever city I find myself in. Fitness is also important to me, and I cycle between climbing, running, and lifting, depending on minor injuries and friend availability at any given moment.
        </p>
        <p>
           I have road tripped all 50 states and 45 national parks. In lieu of Instagram, I've posted blogs and pictures on this website for family and friends to see. In addition to this, my site contains information on the various books I've read and passion projects I've embarked on.
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Work Inquiries</h2>
        <p>
          I am currently available for software contracting work. My areas of interest include machine learning engineering, software engineering, full-stack development, and research positions. Impact is incredibly important to me. Please contact me via email with any inquiries.
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Site</h2>
        <p>
          This site is meant to be a half-personal, half-professional collection of things I have dedicated myself to. I would include a picture for those new to me, but my hair may be anywhere between 2 and 12 inches at a given time, so it saves time to either imagine an ashkenazi Jewish guy, or visit my LinkedIn and mentally add 5 years of life to that picture. The site itself is simple, with React on the frontend and Firebase managing the data and authentication.
        </p>
      </section>
    </>
  );
}

export default About;