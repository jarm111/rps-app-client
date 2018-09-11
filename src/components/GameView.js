import React from 'react';
import { Alert } from 'reactstrap';
import OpponentRpsIcons from './OpponentRpsIcons';
import PlayerRpsButtons from './PlayerRpsButtons';

const GameView = props => (
  <div className="container">
    <OpponentRpsIcons />
    <div className="row">
      <div className="col">
        <Alert color="success">WIN</Alert>
      </div>
    </div>
    <PlayerRpsButtons />
  </div>
);

export default GameView;
