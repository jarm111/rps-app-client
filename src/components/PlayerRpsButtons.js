import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const PlayerRpsButtons = props => (
  <div className="row">
    <div className="col">
      <Button color="primary" onClick={() => props.onClick('rock')}>
        ROCK
      </Button>
      <Button color="primary" onClick={() => props.onClick('paper')}>
        PAPER
      </Button>
      <Button color="primary" onClick={() => props.onClick('scissors')}>
        SCISSORS
      </Button>
    </div>
  </div>
);

PlayerRpsButtons.propTypes = {
  onClick: PropTypes.func
};

export default PlayerRpsButtons;
