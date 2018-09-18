import React, { Component } from 'react';
import ConnectedGameView from '../containers/ConnectedGameView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to RPM</h1>
        </header>
        <ConnectedGameView />
      </div>
    );
  }
}

export default App;
