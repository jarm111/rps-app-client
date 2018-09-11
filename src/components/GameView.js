import React from 'react';
import { Alert, Badge } from 'reactstrap';
import PlayerRpsButtons from './PlayerRpsButtons';

const GameView = props => (
  <div className="container">
    <div className="row">
      <div className="col">
        <Badge color="secondary">ROCK</Badge>
        <Badge color="info">PAPER</Badge>
        <Badge color="secondary">SCISSORS</Badge>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Alert color="success">WIN</Alert>
      </div>
    </div>
    <PlayerRpsButtons />
  </div>
);

export default GameView;
