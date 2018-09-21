import React from 'react';
import ConnectedGameView from '../containers/ConnectedGameView';
import './App.css';

const App = props => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to RPM</h1>
    </header>
    <ConnectedGameView />
  </div>
);

export default App;
