import React, { useState } from 'react';
import './Event.css';

function Event({ event }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`event ${expanded ? 'expanded' : ''}`}
      onClick={toggleExpand}
      style={{
        animationDelay: `${0.1}s`,
        animationFillMode: 'forwards'
      }}
    >
      <h2 className="event-name">{event.name}</h2>
      <p className="event-date">{event.date}</p>
      {expanded && <React.Fragment>
        <p className="event-description">{event.description}</p>
        {event.link && event.preview_image && (
        <a href={event.link} target='_blank' rel="noreferrer">
            <img 
            src={process.env.PUBLIC_URL + '/preview_images/' + event.preview_image} 
            alt="Preview"
            className='event-image'/>
        </a>
      )}
        </React.Fragment>}
      
    </div>
  );
}

export default Event;
