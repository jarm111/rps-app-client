import React from 'react';
import ConnectedGameView from '../containers/ConnectedGameView';
import { Switch, Route } from 'react-router-dom';
import paths from '../model/paths';
import NavigationBar from './NavigationBar';
import MenuView from './MenuView';
import LoginView from './LoginView';
import './App.css';

const App = props => (
  <div className="App">
    <NavigationBar />
    <header className="App-header">
      <h1 className="App-title">Welcome to RPM</h1>
    </header>
    <Switch>
      <Route exact path={paths.home} component={MenuView} />
      <Route path={paths.play} component={ConnectedGameView} />
      <Route path={paths.login} component={LoginView} />
    </Switch>
  </div>
);

export default App;
