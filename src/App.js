import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <input placeholder="Event Name (required)" />
      <input placeholder="Date of Event (required)"/>
      <input placeholder="Time of Event (optional)"/>
      <button>Start Countdown</button>
    </div>
  );
}

export default App;
