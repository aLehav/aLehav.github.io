import React from 'react';
import Event from './Event'
import './Events.css';

function Events({ events }) {
  return (
    <div>
      <div className="event-list">
        {events.map((event) => (
            <Event event={event} key={event.name} />
        ))}
      </div>
    </div>
  );
}

export default Events;
