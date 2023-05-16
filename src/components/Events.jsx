import React from 'react';
import './Events.css';

function Events({ events }) {
  return (
    <div>
      <div className="event-list">
        {events.map((event) => (
          <div className="event" key={event.name} 
            style={{ 
                animationDelay: `${0.1}s`,
                animationFillMode: 'forwards' }}>
            <h2 className="event-name">{event.name}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
