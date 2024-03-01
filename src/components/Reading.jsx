import React from 'react';
import './Reading.css'; // Make sure the CSS file is correctly imported

function GoodReadsReadIframe() {
  const filePath = process.env.PUBLIC_URL + '/good_reads_read.html';
  
  return (
    <iframe 
      src={filePath}
      title="Good Reads Read"
      allowFullScreen
    ></iframe>
  );
}

function GoodReadsCurrentlyReadingIframe() {
  const filePath = process.env.PUBLIC_URL + '/good_reads_currently_reading.html';
  
  return (
    <iframe 
      src={filePath}
      title="Good Reads Currently Reading"
      allowFullScreen
    ></iframe>
  );
}

function Reading() {
  return (
    <div>
      <h1>Reading Page</h1>
      <div className="iframe-container">
        <GoodReadsReadIframe />
        <GoodReadsCurrentlyReadingIframe />
      </div>
    </div>
  );
}

export default Reading;
