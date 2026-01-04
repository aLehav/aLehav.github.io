import React from 'react';
import { Scatterplot } from '../components/BookPlot/Scatterplot';
import ReadingShelf from '../components/HarvardClassics/ReadingShelf';

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
          <Scatterplot />
        </div>
      </section>

      <section className='section'>
        <h2 className='section-title'>Harvard Classics</h2>
        <p>
          The Harvard Classics are a collection of 50 books, with a 20 book "shelf of fiction" extension, designed to give working people a liberal arts education at their own pace. I found the shelf of fiction original 1917 print for sale in New York City, and the original 1909 classics in Salt Lake City. My goal is to eventually read this whole collection. Darkened books are ones I've read.   
        </p>
        <ReadingShelf />        
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