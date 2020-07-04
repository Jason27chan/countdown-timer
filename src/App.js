import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <form>
        <input required type="text" placeholder="Event Name (required)" />
        <input required type="date" placeholder="Date of Event (required)"/>
        <input type="time" placeholder="Time of Event (optional)"/>
        <input type="submit" value="Start Countdown"></input>   
      </form>
    </div>
  );
}

export default App;
