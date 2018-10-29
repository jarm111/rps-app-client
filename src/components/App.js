import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../utils/routes';
import ConnectedNavigationBar from '../containers/ConnectedNavigationBar';
import ConnectedGameView from '../containers/ConnectedGameView';
import ConnectedMenuView from '../containers/ConnectedMenuView';
import ConnectedLoginView from '../containers/ConnectedLoginView';
import ConnectedErrorAlert from '../containers/ConnectedErrorAlert';
import './App.css';

const App = props => (
  <div className="App">
    <ConnectedNavigationBar />
    <Switch>
      <Route exact path={routes.home} component={ConnectedMenuView} />
      <Route path={routes.play} component={ConnectedGameView} />
      <Route path={routes.login} component={ConnectedLoginView} />
    </Switch>
    <ConnectedErrorAlert />
  </div>
);

export default App;
