import React from 'react';
import './CurrentlyReading.css';

const books = [
  {
    title: "How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease",
    author: "Michael Greger",
    authorLink: "https://www.goodreads.com/author/show/352513.Michael_Greger",
    bookLink: "https://www.goodreads.com/review/show/6222290329?utm_medium=api&utm_source=custom_widget",
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    authorLink: "https://www.goodreads.com/author/show/585.John_Steinbeck",
    bookLink: "https://www.goodreads.com/review/show/6279654767?utm_medium=api&utm_source=custom_widget",
  },
  {
    title: "The Russian Soul: Selections from A Writer's Diary by Fyodor Dostoevsky",
    author: "Fyodor Dostoevsky",
    authorLink: "https://www.goodreads.com/author/show/3137322.Fyodor_Dostoevsky",
    bookLink: "https://www.goodreads.com/review/show/6299690718?utm_medium=api&utm_source=custom_widget",
  },
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
