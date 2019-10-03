import React from 'react';
import './App.css';

import Posts from './Posts'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>PetsPosts</h1>

        <Posts />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show me more!
        </a>
      </header>
    </div>
  );
}

export default App;
