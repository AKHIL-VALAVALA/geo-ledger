# Geo Ledger 🌍

A Country → State → City management application built with **ReactJS** and plain JavaScript (no external libraries).

## Features

- ✅ Add / Edit / Delete countries
- ✅ Add / Edit / Delete states (linked to a country)
- ✅ Add / Delete cities (linked to a state)
- ✅ Cascade deletion (delete country → removes all its states & cities)
- ✅ Confirmation dialogs before every edit / delete
- ✅ Immediate UI update after every action
- ✅ Dark-themed UI matching the Geo Ledger design spec

## Tech Stack

- ReactJS (functional components only)
- React Hooks (`useState`)
- Plain JavaScript (ES6)
- Plain CSS (no UI libraries)

## Project Structure

```
geo-ledger/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CountryList.js   # Renders list of countries
│   │   ├── CountryList.css
│   │   ├── StateList.js     # Renders states under a country
│   │   ├── StateList.css
│   │   ├── CityList.js      # Renders cities under a state
│   │   └── CityList.css
│   ├── App.js               # Root component + all state/handlers
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Setup & Run

### Prerequisites
- Node.js (v14 or above) — download from https://nodejs.org
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/geo-ledger.git

# 2. Move into the project folder
cd geo-ledger

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open automatically at **http://localhost:3000**

### Build for production

```bash
npm run build
```

## Known Limitations

- Cities are stored as plain strings; duplicate city names within the same state are possible.
- `prompt()` and `confirm()` are browser-native dialogs — they may be blocked in some iframe environments (e.g. CodeSandbox preview).
- No data persistence; state resets on page refresh.
