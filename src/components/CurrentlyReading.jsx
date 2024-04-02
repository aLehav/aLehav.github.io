import React from 'react';
import './CurrentlyReading.css';

const books = [
    {
      "title": "How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease",
      "author": "Michael Greger",
      "authorLink": "https://www.goodreads.com/author/show/352513.Michael_Greger",
      "bookLink": "https://www.goodreads.com/review/show/6222290329?utm_medium=api&utm_source=custom_widget"
    },
    {
      "title": "How to Read Literature Like a Professor",
      "author": "Thomas C. Foster",
      "authorLink": "https://www.goodreads.com/author/show/11550.Thomas_C_Foster",
      "bookLink": "https://www.goodreads.com/review/show/6318084399?utm_medium=api&utm_source=custom_widget"
    },
    {
      "title": "Lord Jim",
      "author": "Joseph Conrad",
      "authorLink": "https://www.goodreads.com/author/show/3345.Joseph_Conrad",
      "bookLink": "https://www.goodreads.com/review/show/6318087761?utm_medium=api&utm_source=custom_widget"
    },
    {
      "title": "The Captain's Daughter and Other Stories",
      "author": "Alexander Pushkin",
      "authorLink": "https://www.goodreads.com/author/show/16070.Alexander_Pushkin",
      "bookLink": "https://www.goodreads.com/review/show/6361467331?utm_medium=api&utm_source=custom_widget"
    }
  ];  

const CurrentlyReading = () => {
  return (
    <div className="gr_custom_container">
      {books.map((book, index) => (
        <div className="gr_custom_each_container" key={index}>
          <div className="gr_custom_title">
            <a rel="nofollow" href={book.bookLink}>{book.title}</a>
          </div>
          <div className="gr_custom_author">
            by <a rel="nofollow" href={book.authorLink}>{book.author}</a>
          </div>
        </div>
      ))}
      <center>
        <a rel="nofollow" href="https://www.goodreads.com/">
          <img alt="goodreads.com" style={{border:0}} src="https://s.gr-assets.com/images/widget/widget_logo.gif" />
        </a>
      </center>
    </div>
  );
};

export default CurrentlyReading;
