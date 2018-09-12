import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const PlayerRpsButtons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <div className="row">
      <div className="col">
        <Button
          color={props.selected === 'rock' ? selectedColor : defaultColor}
          onClick={() => props.onClick('rock')}
        >
          ROCK
        </Button>
        <Button
          color={props.selected === 'paper' ? selectedColor : defaultColor}
          onClick={() => props.onClick('paper')}
        >
          PAPER
        </Button>
        <Button
          color={props.selected === 'scissors' ? selectedColor : defaultColor}
          onClick={() => props.onClick('scissors')}
        >
          SCISSORS
        </Button>
      </div>
    </div>
  );
};

PlayerRpsButtons.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.string
};

export default PlayerRpsButtons;
