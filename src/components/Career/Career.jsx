import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Events from './Events';
import { data } from './data';
import './Career.css'

// Idea: Make a flowchart with research and work subgroups and icons for each, that when clicked on expand and give information.

function Career() {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const initialFilters = queryParams.filter ? queryParams.filter.split(',') : [];

  const [activeFilters, setActiveFilters] = useState(initialFilters);

  const handleFilterChange = (filter, isChecked) => {
    if (isChecked) {
      setActiveFilters(prevFilters => [...prevFilters, filter]);
    } else {
      setActiveFilters(prevFilters => prevFilters.filter(f => f !== filter));
    }
  };

  // Filtering events based on the active filters
  let filteredEvents = data.filter(event =>
    activeFilters.length === 0 || activeFilters.every(filter => event.categories.includes(filter))
  );

  // Separating events into two columns based on whether they include 'Research'
  const researchEvents = filteredEvents.filter(event => event.categories.includes('Research'));
  const nonResearchEvents = filteredEvents.filter(event => !event.categories.includes('Research'));

  return (
    <div style={{ display: 'flex', margin: 20 }}>
      <div style={{ flex: 1, marginRight: 10 }}>
        <h2>Research</h2>
        <Events events={researchEvents} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Other Categories</h2>
        <Events events={nonResearchEvents} />
      </div>
    </div>
  );
}

export default Career;
