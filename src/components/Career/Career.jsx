import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Events from './Events';
import { data } from './data';
import './Career.css'

function Career() {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  // Initialize the filters array based on the query parameters
  const initialFilters = queryParams.filter ? queryParams.filter.split(',') : [];

  const [activeFilters, setActiveFilters] = useState(initialFilters);

  // Function to handle filter changes
  const handleFilterChange = (filter, isChecked) => {
    if (isChecked) {
      // Add the filter if checked
      setActiveFilters(prevFilters => [...prevFilters, filter]);
    } else {
      // Remove the filter if unchecked
      setActiveFilters(prevFilters => prevFilters.filter(f => f !== filter));
    }
  };

  // Filtered events based on active filters
  let filteredEvents = data.filter(event =>
    activeFilters.length === 0 || activeFilters.every(filter => event.categories.includes(filter))
  );

  return (
    <div style={{ margin: 20 }}>
      {/* Filter checkboxes */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={activeFilters.includes('Research')}
            onChange={(e) => handleFilterChange('Research', e.target.checked)}
          />
          Research
        </label>
        <label>
          <input
            type="checkbox"
            checked={activeFilters.includes('SoftwareEngineering')}
            onChange={(e) => handleFilterChange('SoftwareEngineering', e.target.checked)}
          />
          Software Engineering
        </label>
        <label>
          <input
            type="checkbox"
            checked={activeFilters.includes('DataScience')}
            onChange={(e) => handleFilterChange('DataScience', e.target.checked)}
          />
          Data Science
        </label>
      </div>
      {/* Events component */}
      <Events events={filteredEvents} />
    </div>
  );
}

export default Career;
