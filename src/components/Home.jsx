// Home.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Events from './Events';
import data from '../data.json';

function Home() {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const filter = queryParams.filter || '';

  let filteredEvents = data.events;

  if (filter) {
    filteredEvents = data.events.filter((event) =>
      event.categories.includes(filter)
    );
  }

  return (
      <div style={{margin: 20}}>
        <Events events={filteredEvents} />
      </div>
  );
}

export default Home;
