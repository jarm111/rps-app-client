import React from 'react';
import { Badge } from 'reactstrap';

const OpponentRpsIcons = props => (
  <div className="row">
    <div className="col">
      <Badge color="secondary">ROCK</Badge>
      <Badge color="info">PAPER</Badge>
      <Badge color="secondary">SCISSORS</Badge>
    </div>
  </div>
);

export default OpponentRpsIcons;
