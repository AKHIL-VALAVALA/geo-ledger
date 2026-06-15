import React from 'react';
import CityList from './CityList';
import './StateList.css';

function StateList({
  countryId,
  states,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity,
}) {
  if (states.length === 0) {
    return (
      <p className="empty-sub-msg">No states — add a state under this country.</p>
    );
  }

  return (
    <div className="state-list">
      {states.map(state => (
        <div key={state.id} className="state-card">
          <div className="state-row">
            <span className="state-name">{state.name}</span>
            <div className="action-group">
              <button
                className="btn btn-edit"
                onClick={() => onEditState(countryId, state.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() => onDeleteState(countryId, state.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-add-sub"
                onClick={() => onAddCity(countryId, state.id)}
              >
                + City
              </button>
            </div>
          </div>

          <CityList
            countryId={countryId}
            stateId={state.id}
            cities={state.cities}
            onDeleteCity={onDeleteCity}
          />
        </div>
      ))}
    </div>
  );
}

export default StateList;
