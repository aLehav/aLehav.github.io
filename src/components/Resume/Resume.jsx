import React from 'react';
import './Resume.css';

// Idea: Make a flowchart with research and work subgroups and icons for each, that when clicked on expand and give information.

function Resume() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
      <iframe
        src="/resume.pdf"
        style={{ minWidth: '600px', height: '90vh', border: 'none' }}
        title="Resume"
      ></iframe>
    </div>
  );
}

export default Resume;