import React from 'react';
import './Reading.css';
import { Scatterplot } from './BookPlot/Scatterplot';
import { data } from './BookPlot/data';

function Reading() {
  return (
    <div className="reading-page">
      <div className="text-and-diagram-container">
        
        <div className="reading-explanation" style={{"paddingTop":"0px"}}>
          <h1 style={{"marginTop":"0px"}}>Books Read</h1>
          <p>
            The chart below is a diagram representing all the books I've read recently. They are vaguely colored by type. The size of the circles represents the page count. Hover over a circle to learn which book it is and read my review if I left one.
          </p>
        </div>
        <Scatterplot data={data} />
        <div className="reading-explanation">
          <h1>Why Read?</h1>
          <p>
            Growing up, I would sometimes jokingly say "Oh sorry, I'm illiterate" when asked if I wanted to read. While it was a good joke, it did bother me when I got to college that I hadn't really ever read a book for pleasure. As such, I started reading. I initially picked up professional books, easy books to read, and ones that were digestible as audiobooks. However, over the course of the process, I've come to enjoy more classics and books in general. It's also helped me find lots of good coffee shops and parks along the way. If you have or want any recommendations, add me on goodreads or just shoot me a message!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reading;
