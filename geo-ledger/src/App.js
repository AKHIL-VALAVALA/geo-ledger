import React, { useState } from "react";
import CountryList from "./components/CountryList";

import "./App.css";

let nextId = 3;
const generateId = () => nextId++;

const initialCountries = [
  {
    id: 1,
    name: "India",
    states: [
      {
        id: 1,
        name: "Karnataka",
        cities: ["Bengaluru", "Mysuru"],
      },
    ],
  },
];

function App() {
  const [countries, setCountries] = useState(initialCountries);

  const handleAddCountry = () => {
    const name = prompt("Enter country name:");
    if (!name || !name.trim()) return;
    setCountries((prev) => [
      ...prev,
      { id: generateId(), name: name.trim(), states: [] },
    ]);
  };

  const handleEditCountry = (countryId) => {
    const country = countries.find((c) => c.id === countryId);
    const newName = prompt("Enter new country name:", country.name);
    if (!newName || !newName.trim()) return;
    if (!window.confirm(`Rename "${country.name}" to "${newName.trim()}"?`))
      return;
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId ? { ...c, name: newName.trim() } : c,
      ),
    );
  };

  const handleDeleteCountry = (countryId) => {
    const country = countries.find((c) => c.id === countryId);
    if (
      !window.confirm(
        `Delete "${country.name}"? This will also delete all its states and cities.`,
      )
    )
      return;
    setCountries((prev) => prev.filter((c) => c.id !== countryId));
  };
  const handleAddState = (countryId) => {
    const name = prompt("Enter state name:");
    if (!name || !name.trim()) return;
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: [
                ...c.states,
                { id: generateId(), name: name.trim(), cities: [] },
              ],
            }
          : c,
      ),
    );
  };

  const handleEditState = (countryId, stateId) => {
    const country = countries.find((c) => c.id === countryId);
    const state = country.states.find((s) => s.id === stateId);
    const newName = prompt("Enter new state name:", state.name);
    if (!newName || !newName.trim()) return;
    if (!window.confirm(`Rename "${state.name}" to "${newName.trim()}"?`))
      return;
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: c.states.map((s) =>
                s.id === stateId ? { ...s, name: newName.trim() } : s,
              ),
            }
          : c,
      ),
    );
  };

  const handleDeleteState = (countryId, stateId) => {
    const country = countries.find((c) => c.id === countryId);
    const state = country.states.find((s) => s.id === stateId);
    if (
      !window.confirm(
        `Delete "${state.name}"? This will also delete all its cities.`,
      )
    )
      return;
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? { ...c, states: c.states.filter((s) => s.id !== stateId) }
          : c,
      ),
    );
  };
  const handleAddCity = (countryId, stateId) => {
    const name = prompt("Enter city name:");
    if (!name || !name.trim()) return;
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: c.states.map((s) =>
                s.id === stateId
                  ? { ...s, cities: [...s.cities, name.trim()] }
                  : s,
              ),
            }
          : c,
      ),
    );
  };

  const handleDeleteCity = (countryId, stateId, cityName) => {
    if (!window.confirm(`Delete city "${cityName}"?`)) return;
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: c.states.map((s) =>
                s.id === stateId
                  ? {
                      ...s,
                      cities: s.cities.filter((city) => city !== cityName),
                    }
                  : s,
              ),
            }
          : c,
      ),
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Geo ledger</h1>
        <p className="app-subtitle">
          Country → State → City (CRUD, prompts &amp; confirms)
        </p>
      </header>

      <main className="app-main">
        <CountryList
          countries={countries}
          onAddCountry={handleAddCountry}
          onEditCountry={handleEditCountry}
          onDeleteCountry={handleDeleteCountry}
          onAddState={handleAddState}
          onEditState={handleEditState}
          onDeleteState={handleDeleteState}
          onAddCity={handleAddCity}
          onDeleteCity={handleDeleteCity}
        />
      </main>
    </div>
  );
}

export default App;
