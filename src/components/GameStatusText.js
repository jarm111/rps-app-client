import React from 'react';
import { Alert } from 'reactstrap';

const GameStatusText = props => (
  <div className="row">
    <div className="col">
      <Alert color="success">WIN</Alert>
    </div>
  </div>
);

export default GameStatusText;
