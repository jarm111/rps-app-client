import React, { Component } from 'react';
import GameView from './GameView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to RPM</h1>
        </header>
        <GameView />
      </div>
    );
  }
}

export default App;
