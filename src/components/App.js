import React from 'react';
import { Switch, Route } from 'react-router-dom';
import paths from '../model/paths';
import NavigationBar from './NavigationBar';
import ConnectedGameView from '../containers/ConnectedGameView';
import ConnectedMenuView from '../containers/ConnectedMenuView';
import LoginView from './LoginView';
import './App.css';

const App = props => (
  <div className="App">
    <NavigationBar />
    <Switch>
      <Route exact path={paths.home} component={ConnectedMenuView} />
      <Route path={paths.play} component={ConnectedGameView} />
      <Route path={paths.login} component={LoginView} />
    </Switch>
  </div>
);

export default App;
