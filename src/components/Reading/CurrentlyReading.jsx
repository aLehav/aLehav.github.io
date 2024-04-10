import React from 'react';
import './CurrentlyReading.css';

const books = [
    {
      "title": "How to Read Literature Like a Professor",
      "author": "Thomas C. Foster"
    },
    {
      "title": "The Captain's Daughter and Other Stories",
      "author": "Alexander Pushkin"
    },
    {
      "title": "Fathers and Sons",
      "author": "Ivan Turgenev"
    },
    {
      "title": "Talking to Strangers: What We Should Know About the People We Don't Know",
      "author": "Malcolm Gladwell"
    }
  ];  

const CurrentlyReading = () => {
  return (
    <div className="current_container">
      {books.map((book, index) => (
        <div className="current_each_container" key={index}>
          <div className="current_title">
            {book.title}
          </div>
          <div className="current_author">
            by {book.author}
          </div>
        </div>
      ))}
      <center>
        <a rel="nofollow" href="https://www.goodreads.com/user/show/170343228-adam-lehavi">
          <img alt="goodreads.com" style={{border:0}} src="https://s.gr-assets.com/images/widget/widget_logo.gif" />
        </a>
      </center>
    </div>
  );
};

export default CurrentlyReading;
