import React from 'react';
import './CityList.css';

function CityList({ countryId, stateId, cities, onDeleteCity }) {
  if (cities.length === 0) {
    return <p className="empty-city-msg">No cities in this state.</p>;
  }

  return (
    <div className="city-list">
      {cities.map((city, index) => (
        <div key={index} className="city-row">
          <span className="city-name">{city}</span>
          <button
            className="btn btn-delete"
            onClick={() => onDeleteCity(countryId, stateId, city)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CityList;
