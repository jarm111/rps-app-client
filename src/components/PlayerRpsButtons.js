import React from 'react';
import { Button } from 'reactstrap';

const PlayerRpsButtons = props => (
  <div className="row">
    <div className="col">
      <Button color="primary">ROCK</Button>
      <Button color="primary">PAPER</Button>
      <Button color="primary">SCISSORS</Button>
    </div>
  </div>
);

export default PlayerRpsButtons;
