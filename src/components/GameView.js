import React from 'react';
import { Button, Alert, Badge } from 'reactstrap';

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
    <div className="row">
      <div className="col">
        <Button color="primary">ROCK</Button>
        <Button color="primary">PAPER</Button>
        <Button color="primary">SCISSORS</Button>
      </div>
    </div>
  </div>
);

export default GameView;
