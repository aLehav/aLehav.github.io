import React from 'react';
import { Scatterplot } from './BookPlot/Scatterplot';
import { data } from './BookPlot/data';

function Reading() {
  return (
    <>
      <h1 className="page-title">Reading Journey</h1>
      
      <section className="section">
        <h2 className="section-title">Books Read</h2>
        <p>
          The chart below is a diagram representing all the books I've read recently. 
          They are vaguely colored by type. The size of the circles represents the page count. 
          Hover over a circle to learn which book it is and read my review if I left one.
        </p>
        
        <div style={{ 
          margin: '2rem 0', 
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          padding: '1rem',
          backgroundColor: 'white'
        }}>
          <Scatterplot data={data} />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why Read?</h2>
        <p>
          Growing up, I would sometimes jokingly say "Oh sorry, I'm illiterate" when asked if I wanted to read. 
          While it was a good joke, it did bother me when I got to college that I hadn't really ever read a book for pleasure.
        </p>
        <p>
          As such, I started reading. I initially picked up professional books, easy books to read, and ones that were 
          digestible as audiobooks. However, over the course of the process, I've come to enjoy more classics and 
          books in general. It's also helped me find lots of good coffee shops and parks along the way.
        </p>
        <div className="note-box">
          If you have or want any recommendations, add me on goodreads or just shoot me a message!
        </div>
      </section>
    </>
  );
}

export default Reading;