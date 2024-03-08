import React from 'react';
import './Reading.css';
import { Scatterplot } from './BookPlot/Scatterplot';
import { data } from './BookPlot/data';

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
    <div className="reading-page">
        <div className="text-and-diagram-container">
          <div className="reading-explanation">
              <h1>Why Read?</h1>
              <p>Growing up, I would sometimes jokingly say "Oh sorry, I'm illiterate" when asked if I wanted to read. While it was a good joke, it did bother me when I got to college that I hadn't really ever read a book for pleasure. As such, I started reading. I initially picked up professional books, easy books to read, and ones that were digestible as audiobooks. However, over the course of the process, I've come to enjoy more classics and books in general. It's also helped me find lots of good coffee shops and parks along the way. If you have or want any recommendations, add me on goodreads or just shoot me a message!</p>
          </div>
          <div className='reading-title'>
            <h1>Read</h1>
          </div>
          <Scatterplot
            data={data}
          />
        </div>
        <div className="iframes-container">
          <div className='reading-title'>
            <h1>Currently Reading</h1>
          </div>
            <GoodReadsCurrentlyReadingIframe />
        </div>
    </div>
  );
}

export default Reading;
