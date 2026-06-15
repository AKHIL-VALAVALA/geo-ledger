import React from 'react';
import StateList from './StateList';
import './CountryList.css';

function CountryList({
  countries,
  onAddCountry,
  onEditCountry,
  onDeleteCountry,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity,
}) {
  return (
    <div className="country-list">
      <button className="btn btn-primary" onClick={onAddCountry}>
        + Add country
      </button>

      {countries.length === 0 && (
        <p className="empty-msg">No countries yet — add one above.</p>
      )}

      {countries.map(country => (
        <div key={country.id} className="country-card">
          <div className="country-row">
            <span className="country-name">{country.name}</span>
            <div className="action-group">
              <button
                className="btn btn-edit"
                onClick={() => onEditCountry(country.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() => onDeleteCountry(country.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-add-sub"
                onClick={() => onAddState(country.id)}
              >
                + State
              </button>
            </div>
          </div>

          <StateList
            countryId={country.id}
            states={country.states}
            onEditState={onEditState}
            onDeleteState={onDeleteState}
            onAddCity={onAddCity}
            onDeleteCity={onDeleteCity}
          />
        </div>
      ))}
    </div>
  );
}

export default CountryList;
